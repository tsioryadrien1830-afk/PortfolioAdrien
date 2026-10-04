import Image from "next/image"

const works = [
  {
    title: "Logos & identités",
    desc: "Marques mémorables, du concept au wordmark final.",
    image: "/work-logos.png",
    span: "lg:col-span-2",
  },
  {
    title: "Affiches & réseaux",
    desc: "Visuels print et social media à fort impact.",
    image: "/work-posters.png",
    span: "",
  },
  {
    title: "Montage vidéo",
    desc: "Rythme, transitions et étalonnage soignés.",
    image: "/work-video.png",
    span: "",
  },
  {
    title: "Motion & animations",
    desc: "Animations 3D et motion design dynamiques.",
    image: "/work-animation.png",
    span: "lg:col-span-2",
  },
]

export function Examples() {
  return (
    <section id="exemples" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Exemples
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
              Un aperçu de mes réalisations
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Logos, images, vidéos et animations — chaque projet est pensé pour
            servir un message clair et une esthétique moderne.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {works.map((w) => (
            <article
              key={w.title}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${w.span}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={w.image || "/placeholder.svg"}
                  alt={w.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {w.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          NB : certaines vidéos et animations sont optimisées pour une lecture
          sur smartphone.
        </p>
      </div>
    </section>
  )
}
