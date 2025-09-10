import type { TimeParts, TimeZoneId } from '../types';

export const pad2 = (n: number): string => (n < 10 ? `0${n}` : String(n));

/**
 * Get numeric H/M/S for a given Date in a target IANA timeZone.
 * Uses Intl.DateTimeFormat.formatToParts — no parsing of strings.
 */
export function getTimePartsInZone(date: Date, timeZone: TimeZoneId): TimeParts {
  const dtf = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false,
    timeZone,
    timeZoneName: 'short'
  });
  const parts = dtf.formatToParts(date);
  let hour = 0, minute = 0, second = 0, zoneNameShort: string | undefined;
  for (const p of parts) {
    if (p.type === 'hour') hour = Number(p.value);
    else if (p.type === 'minute') minute = Number(p.value);
    else if (p.type === 'second') second = Number(p.value);
    else if (p.type === 'timeZoneName') zoneNameShort = p.value;
  }
  return { hour, minute, second, zoneNameShort };
}

export function formatDigital24(parts: TimeParts): string {
  return `${pad2(parts.hour)}:${pad2(parts.minute)}:${pad2(parts.second)}`;
}

export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}