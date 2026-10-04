"use client"

import { useEffect, useState } from "react"

const links = [
  { id: "accueil", label: "Accueil" },
  { id: "apropos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "exemples", label: "Exemples" },
]

export function FloatingNav() {
  const [active, setActive] = useState("accueil")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -45% 0px" },
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      aria-label="Navigation principale"
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/40 bg-white/70 p-1.5 shadow-lg shadow-primary/10 backdrop-blur-xl">
        <span className="hidden select-none pl-3 pr-2 font-display text-sm font-bold tracking-tight text-foreground sm:block">
          Tsiory<span className="text-primary">.</span>
        </span>
        {links.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
              active === id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}
