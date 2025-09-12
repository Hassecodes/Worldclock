import React, { useMemo, useState } from 'react';
import type { City, TimeZoneId } from '../types';
import { toSlug } from '../utils/time';

export interface AddCityFormProps {
  onAdd: (city: City) => void;
}

const COMMON_ZONES: TimeZoneId[] = [
  'UTC',
  'Europe/Stockholm', 'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Madrid', 'Europe/Rome', 'Europe/Moscow',
  'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
  'Asia/Tokyo', 'Asia/Shanghai', 'Asia/Singapore', 'Asia/Hong_Kong', 'Asia/Dubai', 'Asia/Kolkata',
  'Australia/Sydney', 'Africa/Johannesburg', 'America/Mexico_City', 'America/Sao_Paulo'
];

export const AddCityForm: React.FC<AddCityFormProps> = ({ onAdd }) => {
  const [name, setName] = useState<string>('');
  const [timeZone, setTimeZone] = useState<TimeZoneId>('Europe/Stockholm');
  const [imageUrl, setImageUrl] = useState<string>('');

  const canSubmit = useMemo(() => name.trim().length > 0 && timeZone.trim().length > 0, [name, timeZone]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!canSubmit) return;
    const city: City = {
      id: toSlug(name),
      name: name.trim(),
      timeZone: timeZone.trim() as TimeZoneId,
    };
    onAdd(city);
    setName('');
    setImageUrl('');
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-3">
      <h3 className="text-lg font-semibold">Lägg till egen stad</h3>
      <label className="label">Stadens namn</label>
      <input
        className="input"
        placeholder="t.ex. Umeå"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />

      <label className="label">Tidszon (IANA)</label>
      <input
        list="zone-list"
        className="input"
        placeholder="t.ex. Europe/Stockholm"
        value={timeZone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTimeZone(e.target.value)}
      />
      <datalist id="zone-list">
        {COMMON_ZONES.map((z) => (
          <option key={z} value={z} />
        ))}
      </datalist>

      <label className="label">Bild-URL (valfri)</label>
      <input
        className="input"
        placeholder="https://..."
        value={imageUrl}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)}
      />

      <div className="flex gap-2 justify-end">
        <button type="submit" className="btn btn-primary" disabled={!canSubmit}>Lägg till</button>
      </div>
    </form>
  );
};