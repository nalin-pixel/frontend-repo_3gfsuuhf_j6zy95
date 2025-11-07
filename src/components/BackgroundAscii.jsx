import React from 'react';

const dragonAscii = `
                                            /\\                     
                                           /  \\                    
                                          / /\\ \\                   
                                         / /  \\ \\                  
                                        /_/____\\_\\                 
                                         /  _  \\                   
                __        _             /  / \\\\\\n               /  \\__  _/ \\_         /__/   \\\\   __
              / /\\  \\_/  / /        /  /     \\\\_/  \\
             / /  \\     / /        _/__/       \\\\    \\
            /_/____\\___/ /__      /   /         \\\\    \\
            \\     /_____/  /     /___/___________\\\\____\\
             \\           _/      \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
              \\__   __ _/         \\\\  /  /  /  /  /  /  /
                 \\_/  /            \\\\_/__/__/__/__/__/__/
                 /    /              \\\\
                /____/                \\\\
               / /\\ \\                \\\\
              /_/  \\_\\                \\\\
             /_/    \\_\\                \\\\
            (__)    (___)                (___)
`;

// Background with animated scroll to simulate a monochrome ASCII video
export default function BackgroundAscii() {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden pointer-events-none select-none">
      <style>{`
        @keyframes asciiPan {
          0% { transform: translateY(0); opacity: 0.85; }
          50% { opacity: 1; }
          100% { transform: translateY(-50%); opacity: 0.85; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0.08; }
          100% { transform: translateY(100%); opacity: 0.08; }
        }
      `}</style>
      <div
        aria-hidden
        className="absolute inset-0 text-white/80"
        style={{
          fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          lineHeight: 1.1,
          letterSpacing: '0.5px',
          whiteSpace: 'pre',
          opacity: 0.9,
        }}
      >
        {/* Tiled content to create a long strip that pans upward */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]"
          style={{
            width: '120ch',
            animation: 'asciiPan 24s linear infinite',
          }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <pre key={i} className="m-0 leading-tight">
{dragonAscii}
            </pre>
          ))}
        </div>
      </div>
      {/* subtle gradient vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
      {/* moving scanline overlay for CRT feel */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-white"
        style={{
          mixBlendMode: 'overlay',
          filter: 'blur(8px)',
          animation: 'scanline 3.5s linear infinite',
          opacity: 0.06,
        }}
      />
    </div>
  );
}
