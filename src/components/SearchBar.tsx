import React from 'react';

export interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder = 'Sök stad...' }) => {
  return (
    <div className="card">
      <label className="label">Sök</label>
      <input
        className="input"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Sök stad"
      />
    </div>
  );
};