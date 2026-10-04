import { ChevronDown, Phone, Facebook } from "lucide-react";
import { contact, heroImage } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        {/* Logo image */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse" style={{ animationDuration: "4s" }} />
          <img
            src={heroImage}
            alt="Tsiory Adrien"
            className="relative w-40 h-40 md:w-48 md:h-48 object-contain rounded-2xl"
          />
        </div>

        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <span className="text-sky-300 text-sm font-medium tracking-wide">
            PORTFOLIO
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Tsiory
          </span>{" "}
          Adrien
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
          Graphiste & Créateur Visuel — Annotation d'images, Montage vidéo,
          Design & WordPress
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-slate-200 hover:bg-white/10 transition-all duration-300 text-sm font-medium"
          >
            <Phone size={16} strokeWidth={2} />
            {contact.phone}
          </a>
          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-slate-200 hover:bg-white/10 transition-all duration-300 text-sm font-medium"
          >
            <Facebook size={16} strokeWidth={2} />
            Facebook
          </a>
        </div>

        <button
          onClick={() => {
            const el = document.getElementById("apropos");
            if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-sky-300 transition-colors duration-300 group"
        >
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <ChevronDown
            size={24}
            strokeWidth={1.5}
            className="animate-bounce group-hover:text-sky-300"
          />
        </button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
}
