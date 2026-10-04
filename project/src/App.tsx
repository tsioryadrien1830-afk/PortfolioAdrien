import FloatingNav from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Examples from "@/components/Examples";
import Contact from "@/components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <FloatingNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Examples />
      </main>
      <Contact />
    </div>
  );
}

export default App;
