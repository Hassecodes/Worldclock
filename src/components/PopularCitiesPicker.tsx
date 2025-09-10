import React from 'react';
import type { City } from '../types';
import { popularCitiesSeed } from '../data/popularCities';

export interface PopularCitiesPickerProps {
  onAdd: (city: City) => void;
}

export const PopularCitiesPicker: React.FC<PopularCitiesPickerProps> = ({ onAdd }) => {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-3">Vanliga storstäder</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {popularCitiesSeed.map((c) => (
          <button
            key={c.id}
            className="btn"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onAdd(c)}
            title={`${c.name} — ${c.timeZone}`}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
};