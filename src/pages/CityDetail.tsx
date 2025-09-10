import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import type { City, DisplayMode } from '../types';
import { useTicker } from '../hooks/useTicker';
import { getTimePartsInZone } from '../utils/time';
import { AnalogClock } from '../components/AnalogClock';
import { DigitalClock } from '../components/DigitalClock';

export interface CityDetailProps {
  cities: City[];
  displayMode: DisplayMode;
  onRemove: (id: string) => void;
}

export const CityDetail: React.FC<CityDetailProps> = ({ cities, displayMode, onRemove }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const city = cities.find((c) => c.id === id);
  const now = useTicker(1000);

  if (!city) {
    return (
      <div className="p-4 md:p-6">
        <div className="card">
          <p>Staden hittades inte.</p>
          <Link to="/" className="btn mt-3">Till dashboard</Link>
        </div>
      </div>
    );
  }

  const time = useMemo(() => getTimePartsInZone(now, city.timeZone), [now, city.timeZone]);

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="relative h-64 md:h-80 lg:h-96">
        {city.imageUrl ? (
          <img src={city.imageUrl} alt={city.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900" />
        )}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-end p-4 md:p-8">
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl font-bold">{city.name}</h1>
            <div className="opacity-90">{city.timeZone} • {time.zoneNameShort}</div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8 grid gap-6 md:grid-cols-2">
        <div className="card flex items-center justify-center min-h-[220px]">
          {displayMode === 'analog' ? (
            <AnalogClock time={time} size={260} />
          ) : (
            <DigitalClock time={time} zoneLabel={time.zoneNameShort} />
          )}
        </div>

        <div className="card flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Åtgärder</h2>
          <div className="flex gap-2">
            <Link to="/" className="btn">Till dashboard</Link>
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => { onRemove(city.id); navigate('/'); }}
              className="btn"
            >
              Ta bort stad
            </button>
          </div>
          <p className="text-sm text-slate-600">
            Tid visas med webbläsarens Intl för tidszonen, uppdateras varje sekund.
          </p>
        </div>
      </div>
    </div>
  );
};