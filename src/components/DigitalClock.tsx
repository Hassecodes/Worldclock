import React from 'react';
import type { TimeParts } from '../types';
import { formatDigital24 } from '../utils/time';

export interface DigitalClockProps {
  time: TimeParts;
  zoneLabel?: string;
}

export const DigitalClock: React.FC<DigitalClockProps> = ({ time, zoneLabel }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="font-mono text-3xl md:text-4xl lg:text-5xl tracking-widest">
        {formatDigital24(time)}
      </div>
      {zoneLabel && (
        <div className="text-xs md:text-sm text-slate-500 mt-1">{zoneLabel}</div>
      )}
    </div>
  );
};