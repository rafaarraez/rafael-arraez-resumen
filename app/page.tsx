import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Skills } from "@/components/skills"
import { Timeline } from "@/components/timeline"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Skills />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
