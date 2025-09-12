import { useEffect, useState } from 'react';

/** 
 * Returerar en Date som uppdateras med jämna mellanrum
 * Används för att driva klockorna live utan ett API
*/
export function useTicker(intervalMs: number = 1000): Date {
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}