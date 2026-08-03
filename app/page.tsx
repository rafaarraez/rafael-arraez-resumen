import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Testimonials } from "@/components/testimonials"
import { Certifications } from "@/components/certifications"

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      {/* Skip Navigation Link for a11y */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-700 focus:text-white focus:rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        {/* <Testimonials />
        <Certifications /> */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
