import { Sparkles, Palette, Lightbulb, Compass, Users, type LucideIcon } from "lucide-react";
import { aboutText, profileImage, qualities } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Palette,
  Lightbulb,
  Compass,
  Users,
};

export default function About() {
  return (
    <section id="apropos" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 md:ml-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 md:order-1">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-200 to-blue-200 rounded-3xl rotate-3 opacity-50" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-100 to-transparent rounded-3xl -rotate-3 opacity-40" />
              <img
                src={profileImage}
                alt="Tsiory Adrien"
                className="relative rounded-3xl shadow-2xl shadow-slate-300/50 w-full object-contain bg-white"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white rounded-2xl shadow-xl px-5 py-3 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                    <Palette size={20} className="text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Professionnel</p>
                    <p className="text-sm font-bold text-slate-800">Polyvalent Digital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 md:order-2">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold tracking-wider uppercase">
              À propos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Qui suis-je ?
            </h2>

            <div className="space-y-4 mb-8">
              {aboutText.map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {para}
                </p>
              ))}
            </div>

            {/* Qualities chips */}
            <div className="flex flex-wrap gap-2.5">
              {qualities.map((q) => {
                const Icon = iconMap[q.icon];
                return (
                  <div
                    key={q.label}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-700 hover:border-sky-300 hover:shadow-md transition-all duration-200"
                  >
                    {Icon && <Icon size={15} strokeWidth={2} className="text-sky-500" />}
                    {q.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
