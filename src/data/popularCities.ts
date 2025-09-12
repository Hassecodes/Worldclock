import type { City } from '../types';
import { toSlug } from '../utils/time';

/**
 * Förifylld lista på storstäder. Används som startdata.
 * För att använda lokala bilder: peka imageUrl till "/cities/<slug>.jpg"
 */
export const popularCitiesSeed: City[] = [
  { name: 'Stockholm',       timeZone: 'Europe/Stockholm', imageUrl: '/cities/Stockholm.jpg',    id: toSlug('Stockholm') },
  { name: 'London',          timeZone: 'Europe/London', imageUrl: '/cities/London.jpg', id: toSlug('London') },
  { name: 'Paris',           timeZone: 'Europe/Paris', imageUrl: '/cities/Paris.jpg', id: toSlug('Paris') },
  { name: 'Berlin',          timeZone: 'Europe/Berlin', imageUrl: '/cities/Berlin.jpg', id: toSlug('Berlin') },
  { name: 'Madrid',          timeZone: 'Europe/Madrid', imageUrl: '/cities/Madrid.jpg', id: toSlug('Madrid') },
  { name: 'Rome',            timeZone: 'Europe/Rome', imageUrl: '/cities/Rome.jpg', id: toSlug('Rome') },
  { name: 'Moscow',          timeZone: 'Europe/Moscow', imageUrl: '/cities/Moscow.jpg', id: toSlug('Moscow') },
  { name: 'New York',        timeZone: 'America/New_York', imageUrl: '/cities/Nyc.jpg', id: toSlug('New York') },
  { name: 'Los Angeles',     timeZone: 'America/Los_Angeles', imageUrl: '/cities/LA.jpg', id: toSlug('Los Angeles') },
  { name: 'Chicago',         timeZone: 'America/Chicago', imageUrl: '/cities/Chicago.jpg', id: toSlug('Chicago') },
  { name: 'Denver',          timeZone: 'America/Denver', imageUrl: '/cities/Denver.jpg',  id: toSlug('Denver') },
  { name: 'Mexico City',     timeZone: 'America/Mexico_City', imageUrl: '/cities/Mexicocity.jpg', id: toSlug('Mexico City') },
  { name: 'São Paulo',       timeZone: 'America/Sao_Paulo', imageUrl: '/cities/Saopaulo.jpg', id: toSlug('Sao Paulo') },
  { name: 'Toronto',         timeZone: 'America/Toronto', imageUrl: '/cities/Toronto.jpg', id: toSlug('Toronto') },
  { name: 'Tokyo',           timeZone: 'Asia/Tokyo', imageUrl: '/cities/Tokyo.jpg', id: toSlug('Tokyo') },
  { name: 'Seoul',           timeZone: 'Asia/Seoul', imageUrl: '/cities/Seoul.jpg', id: toSlug('Seoul') },
  { name: 'Shanghai',        timeZone: 'Asia/Shanghai', imageUrl: '/cities/Shanghai.jpg', id: toSlug('Shanghai') },
  { name: 'Hong Kong',       timeZone: 'Asia/Hong_Kong', imageUrl: '/cities/Hongkong.jpg', id: toSlug('Hong Kong') },
  { name: 'Singapore',       timeZone: 'Asia/Singapore', imageUrl: '/cities/Singapore.jpg', id: toSlug('Singapore') },
  { name: 'Bangkok',         timeZone: 'Asia/Bangkok', imageUrl: '/cities/Bangkok.jpg', id: toSlug('Bangkok') },
  { name: 'Dubai',           timeZone: 'Asia/Dubai', imageUrl: '/cities/Dubai.jpg', id: toSlug('Dubai') },
  { name: 'Kolkata',         timeZone: 'Asia/Kolkata', imageUrl: '/cities/Kolkata.jpg', id: toSlug('Kolkata') },
  { name: 'Sydney',          timeZone: 'Australia/Sydney', imageUrl: '/cities/Sydney.jpg', id: toSlug('Sydney') },
  { name: 'Johannesburg',    timeZone: 'Africa/Johannesburg', imageUrl: '/cities/Johannesburg.jpg', id: toSlug('Johannesburg') },
  { name: 'Cairo',           timeZone: 'Africa/Cairo', imageUrl: '/cities/Cairo.jpg', id: toSlug('Cairo') }
];