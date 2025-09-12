World Clock

A responsive world clock web app built with React, TypeScript, Vite, and **Tailwind CSS**.  
The app lets you keep track of the local time in 20+ major cities around the world, switch between digital and analog clocks, search for cities, and save your favorites. All preferences are stored in localStorage, so your setup persists across sessions.

 Features
 Track multiple cities: with predefined list of popular time zones.
 Search bar: to quickly find a city by name or timezone.
 Favorites page: mark a city with a star and access it later.
 Digital or analog display: toggle applies globally.
 City backgrounds: each city can show a custom image.
 Persistent settings: stored in `localStorage` (favorites, cities, display mode).
 Responsive design: works on mobile, tablet, and desktop.

Getting Started

Prerequisites
- Node.js 20.19+ or 22.12+ (Vite requirement)
- npm or yarn

Installation
Clone the repo and install dependencies:

git clone https://github.com/<your-username>/worldclock.git
cd worldclock
npm install

Run locally:
npm run dev

Build for production:
npm run build
npm run preview


Tech Stack:
React 18+ with hooks
TypeScript for type safety
Vite for fast development and build
Tailwind CSS for styling
React Router for navigation


Project structure:
src/
 ├─ components/      # Reusable UI components (ClockCard, AnalogClock, etc.)
 ├─ data/            # Predefined popular cities
 ├─ hooks/           # Custom hooks (useLocalStorage, useTicker)
 ├─ pages/           # Page-level components (CityDetail, Favorites)
 ├─ utils/           # Time/date utilities
 ├─ App.tsx          # Root app with routing
 └─ main.tsx         # Entry point
public/
 └─ cities/          # Local city images


Bilder på skiss i dator och mobil vy finns i public mappen och även userstorys