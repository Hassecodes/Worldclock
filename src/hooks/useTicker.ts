import { useEffect, useState } from 'react';

/** Rerenders at a fixed interval and exposes the current Date. */
export function useTicker(intervalMs: number = 1000): Date {
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}