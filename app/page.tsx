import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
