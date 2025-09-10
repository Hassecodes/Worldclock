export type DisplayMode = 'digital' | 'analog';

// Common IANA zones as string literal types (extend as needed)
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

// Allow arbitrary valid IANA strings as well, while keeping strong typing for predefined ones
export type TimeZoneId = PredefinedTimeZone | (string & {});

export interface City {
  id: string;        // slug
  name: string;      // "Stockholm"
  timeZone: TimeZoneId;
  imageUrl?: string;
}

export interface ClockSettings {
  displayMode: DisplayMode;
}

export interface TimeParts {
  hour: number;      // 0..23
  minute: number;    // 0..59
  second: number;    // 0..59
  dayPeriod?: 'am' | 'pm';
  zoneNameShort?: string; // e.g. GMT+2 or CET
}