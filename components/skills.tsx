"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "Web Design", level: 90, note: "Expert" },
  { name: "Illustrator", level: 85, note: "Très bien" },
  { name: "Photoshop", level: 85, note: "Très bien" },
  { name: "WordPress", level: 75, note: "Bien" },
  { name: "After Effects", level: 75, note: "Bien" },
  { name: "InDesign", level: 70, note: "Bien" },
  { name: "Montage vidéo", level: 80, note: "Très bien" },
  { name: "Annotation d'images", level: 90, note: "Expert" },
]

function SkillBar({
  skill,
  visible,
  delay,
}: {
  skill: (typeof skills)[number]
  visible: boolean
  delay: number
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm font-medium text-primary">{skill.note}</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-[width] duration-1000 ease-out"
          style={{
            width: visible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="competences"
      className="relative overflow-hidden px-6 py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 to-transparent"
      />
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Compétences
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            Les outils que je maîtrise
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            De la conception graphique au motion design, un éventail de
            compétences pour couvrir tous vos besoins créatifs.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              visible={visible}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
