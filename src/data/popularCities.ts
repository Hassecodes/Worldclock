import type { City } from '../types';
import { toSlug } from '../utils/time';

export const popularCitiesSeed: City[] = [
  { name: 'Stockholm',       timeZone: 'Europe/Stockholm',     imageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1600&auto=format&fit=crop', id: toSlug('Stockholm') },
  { name: 'London',          timeZone: 'Europe/London',         id: toSlug('London') },
  { name: 'Paris',           timeZone: 'Europe/Paris',         id: toSlug('Paris') },
  { name: 'Berlin',          timeZone: 'Europe/Berlin',         id: toSlug('Berlin') },
  { name: 'Madrid',          timeZone: 'Europe/Madrid',         id: toSlug('Madrid') },
  { name: 'Rome',            timeZone: 'Europe/Rome',           id: toSlug('Rome') },
  { name: 'Moscow',          timeZone: 'Europe/Moscow',         id: toSlug('Moscow') },
  { name: 'New York',        timeZone: 'America/New_York',      id: toSlug('New York') },
  { name: 'Los Angeles',     timeZone: 'America/Los_Angeles',   id: toSlug('Los Angeles') },
  { name: 'Chicago',         timeZone: 'America/Chicago',       id: toSlug('Chicago') },
  { name: 'Denver',          timeZone: 'America/Denver',        id: toSlug('Denver') },
  { name: 'Mexico City',     timeZone: 'America/Mexico_City',   id: toSlug('Mexico City') },
  { name: 'São Paulo',       timeZone: 'America/Sao_Paulo',     id: toSlug('Sao Paulo') },
  { name: 'Toronto',         timeZone: 'America/Toronto',       id: toSlug('Toronto') },
  { name: 'Tokyo',           timeZone: 'Asia/Tokyo',            id: toSlug('Tokyo') },
  { name: 'Seoul',           timeZone: 'Asia/Seoul',            id: toSlug('Seoul') },
  { name: 'Shanghai',        timeZone: 'Asia/Shanghai',         id: toSlug('Shanghai') },
  { name: 'Hong Kong',       timeZone: 'Asia/Hong_Kong',       id: toSlug('Hong Kong') },
  { name: 'Singapore',       timeZone: 'Asia/Singapore',        id: toSlug('Singapore') },
  { name: 'Bangkok',         timeZone: 'Asia/Bangkok',         id: toSlug('Bangkok') },
  { name: 'Dubai',           timeZone: 'Asia/Dubai',            id: toSlug('Dubai') },
  { name: 'Kolkata',         timeZone: 'Asia/Kolkata',          id: toSlug('Kolkata') },
  { name: 'Sydney',          timeZone: 'Australia/Sydney',     id: toSlug('Sydney') },
  { name: 'Johannesburg',    timeZone: 'Africa/Johannesburg',   id: toSlug('Johannesburg') },
  { name: 'Cairo',           timeZone: 'Africa/Cairo',          id: toSlug('Cairo') }
];