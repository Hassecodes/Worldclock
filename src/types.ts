// Centrala typer för appen, TS hjälper här för att fånga fel.
export type DisplayMode = 'digital' | 'analog';

// tidzoner som används i projektet.
export type PredefinedTimeZone =
  | 'UTC'
  | 'Europe/Stockholm'
  | 'Europe/London'
  | 'Europe/Paris'
  | 'Europe/Berlin'
  | 'Europe/Madrid'
  | 'Europe/Rome'
  | 'Europe/Moscow'
  | 'America/New_York'
  | 'America/Los_Angeles'
  | 'America/Chicago'
  | 'America/Denver'
  | 'America/Sao_Paulo'
  | 'America/Mexico_City'
  | 'Asia/Tokyo'
  | 'Asia/Shanghai'
  | 'Asia/Hong_Kong'
  | 'Asia/Singapore'
  | 'Asia/Dubai'
  | 'Asia/Kolkata'
  | 'Australia/Sydney'
  | 'Africa/Johannesburg';

// Tillåter IANA zoner som string literal typer för bättre autocomplete.
export type TimeZoneId = PredefinedTimeZone | (string & {});

export interface City {
  id: string;        // slug, exempel: Stockholm.
  name: string;      // Visningsnamn, exempel: "Stockholm"
  timeZone: TimeZoneId; // Tidzoner
  imageUrl?: string; // bilder
}

export interface ClockSettings {
  displayMode: DisplayMode; // knapp/switch för att ändra från digital till analog och tillbaka.
}

export interface TimeParts {
  hour: number;      
  minute: number;   
  second: number;   
  dayPeriod?: 'am' | 'pm';
  zoneNameShort?: string; // exempel: GMT+2 or CET
}