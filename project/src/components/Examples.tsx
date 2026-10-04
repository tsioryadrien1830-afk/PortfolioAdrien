import { useState } from "react";
import { Play, X, Image as ImageIcon, Video, Sparkles, PenTool, type LucideIcon } from "lucide-react";
import { logos, images, videos, animations, showcaseVideo, nbImage } from "@/data/portfolio";

type Tab = "logos" | "images" | "video" | "animations";

const tabs: { id: Tab; label: string; icon: LucideIcon }[] = [
  { id: "logos", label: "Logos", icon: PenTool },
  { id: "images", label: "Images", icon: ImageIcon },
  { id: "video", label: "Vidéos", icon: Video },
  { id: "animations", label: "Animations", icon: Sparkles },
];

function Lightbox({ src, title, type, onClose }: { src: string; title: string; type: "image" | "video"; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Fermer"
      >
        <X size={20} strokeWidth={2} />
      </button>
      <div className="max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
        {type === "image" ? (
          <img src={src} alt={title} className="w-full h-full object-contain rounded-xl" />
        ) : (
          <video src={src} controls autoPlay className="w-full max-h-[85vh] rounded-xl" />
        )}
        <p className="text-center text-white text-sm mt-3 font-medium">{title}</p>
      </div>
    </div>
  );
}

function MediaCard({ src, title, type, onClick }: { src: string; title: string; type: "image" | "video"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 aspect-square"
    >
      {type === "image" ? (
        <img
          src={src}
          alt={title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <>
          <video
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={22} fill="currentColor" className="text-slate-800 ml-0.5" />
            </div>
          </div>
        </>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-white text-xs font-medium truncate">{title}</p>
      </div>
    </button>
  );
}

export default function Examples() {
  const [activeTab, setActiveTab] = useState<Tab>("logos");
  const [lightbox, setLightbox] = useState<{ src: string; title: string; type: "image" | "video" } | null>(null);

  const tabContent: Record<Tab, { items: { src: string; title: string }[]; type: "image" | "video" }> = {
    logos: { items: logos, type: "image" },
    images: { items: images, type: "image" },
    video: { items: videos, type: "video" },
    animations: { items: animations, type: "video" },
  };

  const current = tabContent[activeTab];

  return (
    <section id="exemples" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 md:ml-20">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold tracking-wider uppercase">
            Exemples
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Mes réalisations
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Une sélection de logos, images, vidéos et animations créés avec passion.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-sky-600"
                }`}
              >
                <Icon size={16} strokeWidth={2} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {current.items.map((item, i) => (
            <MediaCard
              key={`${activeTab}-${i}`}
              src={item.src}
              title={item.title}
              type={current.type}
              onClick={() => setLightbox({ src: item.src, title: item.title, type: current.type })}
            />
          ))}
        </div>

        {/* Showcase video + NB image */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="group relative rounded-3xl overflow-hidden shadow-xl bg-slate-900">
            <video
              src={showcaseVideo}
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
              Voir cette vidéo
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-200 flex items-center justify-center p-6">
            <img
              src={nbImage}
              alt="Réalisation"
              className="max-h-full max-w-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 text-xs font-medium border border-slate-200">
              On utilise le smartphone
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          title={lightbox.title}
          type={lightbox.type}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
