import { Phone, Facebook, Mail, ArrowUp } from "lucide-react";
import { contact } from "@/data/portfolio";

export default function Contact() {
  return (
    <footer id="contact" className="relative bg-slate-950 text-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 md:ml-20 py-20">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 text-sky-300 text-xs font-semibold tracking-wider uppercase">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Travaillons ensemble</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            N'hésitez pas à me contacter pour vos projets de design, de montage vidéo ou de création web.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          <a
            href={`tel:${contact.phone}`}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-sky-400/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone size={20} strokeWidth={2} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-0.5">Téléphone</p>
              <p className="text-sm font-semibold">{contact.phone}</p>
            </div>
          </a>

          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-sky-400/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Facebook size={20} strokeWidth={2} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-0.5">Facebook</p>
              <p className="text-sm font-semibold">Tsiory Adrien</p>
            </div>
          </a>

          <a
            href={`tel:${contact.phone}`}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-sky-400/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={20} strokeWidth={2} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-0.5">Disponibilité</p>
              <p className="text-sm font-semibold">Ouvert aux projets</p>
            </div>
          </a>
        </div>

        <div className="flex flex-col items-center gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-all text-sm font-medium"
          >
            <ArrowUp size={16} strokeWidth={2} />
            Retour en haut
          </button>

          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <p className="text-sm text-slate-500 text-center">
            © {new Date().getFullYear()} Tsiory Adrien — Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
