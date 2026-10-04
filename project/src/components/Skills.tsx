import { useState, useEffect, useRef } from "react";
import { skills } from "@/data/portfolio";

function SkillBar({ skill, index }: { skill: typeof skills[number]; index: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setWidth(skill.level), index * 100 + 200);
      return () => clearTimeout(timer);
    }
  }, [visible, skill.level, index]);

  const ratingColor =
    skill.rating === "Expert"
      ? "text-emerald-600 bg-emerald-50"
      : skill.rating === "Très Bien"
      ? "text-sky-600 bg-sky-50"
      : skill.rating === "Bien"
      ? "text-blue-600 bg-blue-50"
      : "text-amber-600 bg-amber-50";

  return (
    <div
      ref={ref}
      className="group bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-lg hover:border-sky-200 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain p-1.5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm md:text-base">{skill.name}</h3>
            <span className={`inline-block mt-0.5 px-2 py-0.5 rounded-full text-[10px] font-semibold ${ratingColor}`}>
              {skill.rating}
            </span>
          </div>
        </div>
        <span className="text-2xl font-bold text-slate-800 tabular-nums">
          {skill.level}%
        </span>
      </div>
      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="competences" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-50 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 md:ml-20">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold tracking-wider uppercase">
            Compétences
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Mes domaines d'expertise
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Des compétences variées allant du design graphique à la création web et au montage vidéo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
