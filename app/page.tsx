import { FloatingNav } from "@/components/floating-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Examples } from "@/components/examples"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <FloatingNav />
      <Hero />
      <About />
      <Skills />
      <Examples />
      <SiteFooter />
    </main>
  )
}
