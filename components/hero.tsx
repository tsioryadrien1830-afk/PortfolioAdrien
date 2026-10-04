"use client"

const stats = [
  { value: "5+", label: "Domaines maîtrisés" },
  { value: "100%", label: "Sur-mesure" },
  { value: "∞", label: "Créativité" },
]

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Fond dégradé décoratif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-chart-3/20 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Disponible pour vos projets
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            Bienvenue, je suis{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-chart-3 bg-clip-text text-transparent">
              Tsiory Adrien
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Graphiste et créatif digital polyvalent. Je transforme vos idées en
            visuels modernes et percutants — de l&apos;identité de marque au
            montage vidéo, en passant par le motion design et la création de
            sites web.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() =>
                document
                  .getElementById("exemples")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              Voir mes réalisations
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("apropos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-border bg-white/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white"
            >
              En savoir plus
            </button>
          </div>

          <dl className="mt-12 flex gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-foreground">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Carte "Qui suis-je ?" */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -rotate-6 rounded-[2rem] bg-gradient-to-br from-primary to-accent opacity-20 blur-xl" />
          <div className="relative rounded-[2rem] border border-white/50 bg-white/70 p-8 shadow-2xl shadow-primary/10 backdrop-blur-xl">
            <div className="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-accent to-chart-3">
              <span className="font-display text-6xl font-bold text-white">
                TA
              </span>
            </div>
            <p className="mt-6 font-display text-lg font-semibold text-foreground">
              Qui suis-je ?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Un professionnel du digital et de la création visuelle, animé par
              le design et les nouvelles technologies.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Photoshop", "Illustrator", "InDesign", "Motion", "WordPress"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
