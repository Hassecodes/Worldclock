import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { City, DisplayMode } from '../types';
import { getTimePartsInZone } from '../utils/time';
import { useTicker } from '../hooks/useTicker';
import { AnalogClock } from './AnalogClock';
import { DigitalClock } from './DigitalClock';

export interface ClockCardProps {
  city: City;
  displayMode: DisplayMode;
  onRemove?: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
  isFavorite?: boolean;
  compact?: boolean;
}

const cityEmoji = (name: string): string => {
  const n = name.toLowerCase();
  if (n.includes('new york')) return '🗽';
  if (n.includes('paris')) return '🗼';
  if (n.includes('london')) return '🎡';
  if (n.includes('tokyo')) return '🗼';
  if (n.includes('sydney')) return '🌉';
  if (n.includes('dubai')) return '🏙️';
  return '🌍';
};

export const ClockCard: React.FC<ClockCardProps> = ({
  city,
  displayMode,
  onRemove,
  onToggleFavorite,
  isFavorite = false,
  compact = true,
}) => {
  const now = useTicker(1000);                   // tick varje sekund
  const time = useMemo(() => getTimePartsInZone(now, city.timeZone), [now, city.timeZone]);

  return (
    <div className="relative card">
      {onToggleFavorite && (
        <button
          aria-label={isFavorite ? 'Ta bort från favoriter' : 'Lägg till i favoriter'}
          className="absolute right-3 top-3"
          onClick={() => onToggleFavorite(city.id)}
          title={isFavorite ? 'Ta bort från favoriter' : 'Lägg till i favoriter'}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" className={isFavorite ? 'fill-yellow-400' : 'fill-slate-300 hover:fill-yellow-300 transition'}>
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.162L12 18.896l-7.335 3.863 1.401-8.162L.132 9.21l8.2-1.192L12 .587z"/>
          </svg>
        </button>
      )}

      <div className="flex items-center justify-between gap-3">
        <Link to={`/city/${city.id}`} className="flex items-center gap-3 hover:underline">
          <span className="text-2xl">{cityEmoji(city.name)}</span>
          <div className="font-semibold">{city.name}</div>
        </Link>

        <div className="text-right">
          {displayMode === 'analog' ? (
            <div className="flex items-center justify-end">
              <AnalogClock time={time} size={80} />
            </div>
          ) : (
            <DigitalClock time={time} zoneLabel={time.zoneNameShort} />
          )}
          <div className="text-[11px] text-slate-500">{city.timeZone} • {time.zoneNameShort}</div>
        </div>
      </div>

      {city.imageUrl && (
        <Link to={`/city/${city.id}`} className="block overflow-hidden rounded-xl mt-4">
          <img src={city.imageUrl} alt={city.name} className="w-full h-28 object-cover hover:scale-[1.02] transition" />
        </Link>
      )}

      {onRemove && (
        <div className="mt-4 flex justify-end">
          <button className="btn" onClick={() => onRemove(city.id)}>Remove</button>
        </div>
      )}
    </div>
  );
};