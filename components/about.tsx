const highlights = [
  {
    title: "Création visuelle",
    text: "Identité de marque, affiches et supports print pensés avec un vrai sens du détail.",
  },
  {
    title: "Montage & motion",
    text: "Montage vidéo et animations dynamiques pour donner vie à vos contenus.",
  },
  {
    title: "Web design",
    text: "Sites web modernes et sur-mesure, notamment sous WordPress.",
  },
  {
    title: "Annotation d'images",
    text: "Expérience d'opérateur en ligne en annotation et segmentation d'images.",
  },
]

export function About() {
  return (
    <section id="apropos" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              À propos
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
              Un profil polyvalent au service de vos idées
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              <p>
                Je m&apos;appelle{" "}
                <span className="font-semibold text-foreground">
                  Tsiory Adrien
                </span>{" "}
                et je suis un professionnel polyvalent dans le domaine du
                digital et de la création visuelle.
              </p>
              <p>
                J&apos;ai travaillé comme opérateur en ligne, spécialisé dans
                l&apos;annotation et la segmentation d&apos;images. En
                parallèle, je suis graphiste avec une expertise en Photoshop,
                Illustrator et InDesign, ainsi qu&apos;en montage vidéo et en
                création de sites web sous WordPress.
              </p>
              <p>
                Passionné par le design et les nouvelles technologies,
                j&apos;aime créer des visuels impactants, modernes et adaptés
                aux besoins des clients. Je me distingue par mon sens du détail,
                ma créativité et ma curiosité, ainsi que par ma capacité à
                travailler de manière autonome comme collaborative.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
              >
                <span className="font-display text-3xl font-bold text-primary/30">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
