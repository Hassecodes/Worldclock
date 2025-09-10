import React from 'react';
import type { City, DisplayMode } from '../types';
import { ClockCard } from '../components/ClockCard';

export interface FavoritesProps {
  cities: City[];
  favoriteIds: Set<string>;
  displayMode: DisplayMode;
  onRemove: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

export const Favorites: React.FC<FavoritesProps> = ({
  cities, favoriteIds, displayMode, onRemove, onToggleFavorite
}) => {
  const favs = cities.filter(c => favoriteIds.has(c.id));

  if (favs.length === 0) {
    return (
      <div className="card">
        <p>Du har inga favoriter ännu. Stjärnmarkera en stad så dyker den upp här ⭐</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {favs.map(c => (
        <ClockCard
          key={c.id}
          city={c}
          displayMode={displayMode}
          onRemove={onRemove}
          isFavorite={true}
          onToggleFavorite={onToggleFavorite}
          compact
        />
      ))}
    </div>
  );
};