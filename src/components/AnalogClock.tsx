import React from 'react';
import type { TimeParts } from '../types';

export interface AnalogClockProps {
  time: TimeParts;
  size?: number; // px
}

export const AnalogClock: React.FC<AnalogClockProps> = ({ time, size = 180 }) => {
  const radius = size / 2;
  const cx = radius;
  const cy = radius;

  const hourAngle = ((time.hour % 12) + time.minute / 60 + time.second / 3600) * 30; // deg
  const minuteAngle = (time.minute + time.second / 60) * 6;
  const secondAngle = time.second * 6;

  const hand = (
    length: number,
    strokeWidth: number,
    angle: number,
    lineCap: 'round' | 'butt' = 'round'
  ) => (
    <line
      x1={cx}
      y1={cy}
      x2={cx}
      y2={cy - length}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap={lineCap}
      transform={`rotate(${angle} ${cx} ${cy})`}
    />
  );

  const tickMarks = Array.from({ length: 60 }, (_, i) => {
    const angle = i * 6;
    const isHour = i % 5 === 0;
    const len = isHour ? radius * 0.12 : radius * 0.06;
    const sw = isHour ? 2 : 1;
    return (
      <line
        key={i}
        x1={cx}
        y1={cy - (radius - 4)}
        x2={cx}
        y2={cy - (radius - 4 - len)}
        stroke="currentColor"
        strokeWidth={sw}
        transform={`rotate(${angle} ${cx} ${cy})`}
        opacity={isHour ? 1 : 0.6}
      />
    );
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="text-slate-800"
      role="img"
      aria-label="Analog clock"
    >
      <circle cx={cx} cy={cy} r={radius - 2} fill="white" stroke="currentColor" strokeWidth={2} />
      {tickMarks}
      {hand(radius * 0.5, 4, hourAngle)}
      {hand(radius * 0.72, 3, minuteAngle)}
      {hand(radius * 0.78, 1.5, secondAngle, 'butt')}
      <circle cx={cx} cy={cy} r={3} fill="currentColor" />
    </svg>
  );
};