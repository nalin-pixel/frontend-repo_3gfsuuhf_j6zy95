import React from 'react';

const skills = [
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'TypeScript', 'Framer Motion'] },
  { group: 'Backend', items: ['FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'CI/CD', 'Terraform'] },
];

export default function Skills() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 pb-12">
      <h2 className="text-white text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/90 backdrop-blur-sm">
            <div className="text-sm font-semibold mb-2 text-white/90">{s.group}</div>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span key={i} className="rounded-md bg-white/10 px-2 py-1 text-xs">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
