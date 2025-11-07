import React from 'react';
import { User, Mail, Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative z-10 mx-auto max-w-5xl px-6 pt-10">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-sm">
          <User className="h-3.5 w-3.5" />
          <span>Biodata</span>
        </div>
        <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl text-white">
          Alex Dragonheart
        </h1>
        <p className="max-w-2xl text-white/70">
          Software engineer crafting resilient systems, delightful interfaces, and developer tools. Passionate about performance, DX, and elegant abstractions.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:alex@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 transition"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
          <a
            href="https://github.com/yourname"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 transition"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
