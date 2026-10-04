import { useState, useEffect } from "react";
import { Home, User, BarChart3, FolderOpen, Phone, Menu, X, type LucideIcon } from "lucide-react";

const navItems: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "accueil", label: "Accueil", icon: Home },
  { id: "apropos", label: "À propos", icon: User },
  { id: "competences", label: "Compétences", icon: BarChart3 },
  { id: "exemples", label: "Exemples", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Phone },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setExpanded(false);
  };

  return (
    <>
      {/* Desktop floating menu - left side */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
        <div
          className={`rounded-2xl p-2 flex flex-col gap-1 transition-all duration-300 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-900/10 border border-slate-200/60"
              : "bg-white/40 backdrop-blur-md shadow-lg shadow-slate-900/5 border border-white/40"
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
                aria-label={item.label}
              >
                <Icon size={20} strokeWidth={2} />
                <span
                  className={`absolute left-full ml-3 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-slate-900 text-white opacity-100 translate-x-0"
                      : "bg-slate-800 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile floating menu - bottom bar */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div
          className={`rounded-2xl p-2 shadow-2xl shadow-slate-900/20 border border-slate-200/60 transition-all duration-300 ${
            expanded
              ? "bg-white/95 backdrop-blur-xl"
              : "bg-white/80 backdrop-blur-xl"
          }`}
        >
          {!expanded ? (
            <div className="flex items-center gap-1">
              {navItems.slice(0, 4).map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-sky-500 to-blue-600 text-white"
                        : "text-slate-600"
                    }`}
                    aria-label={item.label}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </button>
                );
              })}
              <button
                onClick={() => setExpanded(true)}
                className="flex items-center justify-center w-10 h-10 rounded-xl text-slate-600 hover:bg-slate-100"
                aria-label="Plus"
              >
                <Menu size={18} strokeWidth={2} />
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-1 w-48">
              <div className="flex items-center justify-between px-2 pb-1">
                <span className="text-sm font-semibold text-slate-700">Menu</span>
                <button
                  onClick={() => setExpanded(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-slate-500 hover:bg-slate-100"
                  aria-label="Fermer"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              </div>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <Icon size={18} strokeWidth={2} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
