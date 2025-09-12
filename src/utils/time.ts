import type { TimeParts, TimeZoneId } from '../types';

//Hjälpfunktion för att 2 siffror.
export const pad2 = (n: number): string => (n < 10 ? `0${n}` : String(n));

/**
 * Plockar ut H/M/S och kort för data i en given tidzon.
 * Använder Intl.DateTimeFormat.formatToParts för att slippa parsa text.
 */
export function getTimePartsInZone(date: Date, timeZone: TimeZoneId): TimeParts {
  const dtf = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false, // 24h läge
    timeZone,
    timeZoneName: 'short' // exempel: GMT 2
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

// Till för digital visning
export function formatDigital24(parts: TimeParts): string {
  return `${pad2(parts.hour)}:${pad2(parts.minute)}:${pad2(parts.second)}`;
}

// En slugifier för idn och för lokala bilder
export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFKD') // sepererar diaktriska tecken
    .replace(/\p{Diacritic}/gu, '') // Tar bort diakritik
    .replace(/[^a-z0-9]+/g, '-') //erstter mellanslag/icke alfanumeriskt
    .replace(/(^-|-$)/g, ''); //Trimmar ner bindestreck i kanter
}