import type { ReactElement } from 'react';
import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import type { City, ClockSettings, DisplayMode } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { popularCitiesSeed } from './data/popularCities';
import { ClockCard } from './components/ClockCard';
import { PopularCitiesPicker } from './components/PopularCitiesPicker';
import { AddCityForm } from './components/AddCityForm';
import { CityDetail } from './pages/CityDetail';
import { Favorites } from './pages/Favorites';
import { SearchBar } from './components/SearchBar';

export default function App(): ReactElement {
  const [cities, setCities] = useLocalStorage<City[]>('wc:cities', () => popularCitiesSeed.slice(0, 8));
  const [settings, setSettings] = useLocalStorage<ClockSettings>('wc:settings', { displayMode: 'digital' });
  const [favoriteIdsArray, setFavoriteIdsArray] = useLocalStorage<string[]>('wc:favorites', []);
  const favoriteIds = useMemo(() => new Set(favoriteIdsArray), [favoriteIdsArray]);

  const [query, setQuery] = useState<string>('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cities;
    return cities.filter(c => c.name.toLowerCase().includes(q) || c.timeZone.toLowerCase().includes(q));
  }, [cities, query]);

  function addCity(city: City): void {
    setCities(prev => (prev.some(c => c.id === city.id) ? prev : [city, ...prev]));
  }

  function removeCity(id: string): void {
    setCities(prev => prev.filter(c => c.id !== id));
    setFavoriteIdsArray(prev => prev.filter(fid => fid !== id));
  }

  function setDisplayMode(mode: DisplayMode): void {
    setSettings(s => ({ ...s, displayMode: mode }));
  }

  function toggleFavorite(id: string): void {
    setFavoriteIdsArray(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [id, ...prev]));
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-6">
              <Link to="/" className="text-lg md:text-xl font-bold">World Clock</Link>
              <nav className="flex items-center gap-3 text-sm">
                <NavLink to="/" className={({isActive}) => isActive ? 'underline' : 'hover:underline'}>Hem</NavLink>
                <NavLink to="/favorites" className={({isActive}) => isActive ? 'underline' : 'hover:underline'}>Favoriter ⭐</NavLink>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm">Visning:</span>
              <button
                className={`btn ${settings.displayMode === 'digital' ? 'btn-primary' : ''}`}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => setDisplayMode('digital')}
              >
                Digital
              </button>
              <button
                className={`btn ${settings.displayMode === 'analog' ? 'btn-primary' : ''}`}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => setDisplayMode('analog')}
              >
                Analog
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 md:px-6 py-6">
          <Routes>
            {/* HEM */}
            <Route
              path="/"
              element={
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 flex flex-col gap-6">
                    <SearchBar value={query} onChange={setQuery} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {filtered.map(c => (
                        <ClockCard
                          key={c.id}
                          city={c}
                          displayMode={settings.displayMode}
                          onRemove={removeCity}
                          isFavorite={favoriteIds.has(c.id)}
                          onToggleFavorite={toggleFavorite}
                          compact
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <PopularCitiesPicker onAdd={addCity} />
                    <AddCityForm onAdd={addCity} />
                  </div>
                </div>
              }
            />

            {/* FAVORITER */}
            <Route
              path="/favorites"
              element={
                <Favorites
                  cities={cities}
                  favoriteIds={favoriteIds}
                  displayMode={settings.displayMode}
                  onRemove={removeCity}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />

            {/* DETALJ */}
            <Route
              path="/city/:id"
              element={
                <CityDetail
                  cities={cities}
                  displayMode={settings.displayMode}
                  onRemove={removeCity}
                />
              }
            />
          </Routes>
        </main>

        <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500"></footer>
      </div>
    </BrowserRouter>
  );
}