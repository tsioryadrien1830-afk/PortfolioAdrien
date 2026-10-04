export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden px-6 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-primary/10 to-transparent"
      />
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/50 bg-gradient-to-br from-primary to-accent p-10 text-center shadow-2xl shadow-primary/20 sm:p-14">
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
          Un projet créatif en tête ?
        </h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-white/85 text-pretty">
          Discutons de votre identité visuelle, de votre vidéo ou de votre site
          web. Je suis prêt à donner vie à vos idées.
        </p>
        <a
          href="mailto:contact@portfoliotsiory.com"
          className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
        >
          Me contacter
        </a>
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Tsiory Adrien — Graphiste & Créatif
        Digital.
      </p>
    </footer>
  )
}
