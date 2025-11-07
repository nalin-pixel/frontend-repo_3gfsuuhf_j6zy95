import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mx-auto max-w-5xl px-6 pb-12">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-white/60 text-sm">© {year} Alex Dragonheart. All rights reserved.</p>
        <p className="text-white/40 text-xs">Built with React and Tailwind. Background: ASCII dragon animation.</p>
      </div>
    </footer>
  );
}
