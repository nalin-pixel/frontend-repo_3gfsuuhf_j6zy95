import React from 'react';

export default function About() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-14">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-white text-2xl font-semibold mb-3">About</h2>
          <p className="text-white/80 leading-relaxed">
            I am a full‑stack engineer with 8+ years of experience building web apps, APIs, and cloud services. I love working with modern React stacks, TypeScript, and Python on the backend, with a focus on accessibility and performance.
          </p>
        </div>
        <ul className="space-y-2 text-white/80">
          <li className="flex justify-between border-b border-white/10 py-2"><span>Location</span><span>Remote / Worldwide</span></li>
          <li className="flex justify-between border-b border-white/10 py-2"><span>Role</span><span>Senior Software Engineer</span></li>
          <li className="flex justify-between border-b border-white/10 py-2"><span>Stack</span><span>React, TS, Node, Python</span></li>
        </ul>
      </div>
    </section>
  );
}
