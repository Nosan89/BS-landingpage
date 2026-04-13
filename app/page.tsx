import Navbar from '@/components/Navbar'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import QuestionnaireModal from '@/components/QuestionnaireModal'
import Hero from '@/components/Hero'
import Credentials from '@/components/Credentials'
import Problem from '@/components/Problem'
import Comparison from '@/components/Comparison'
import Testimonials from '@/components/Testimonials'
import Story from '@/components/Story'
import Services from '@/components/Services'
import Platform from '@/components/Platform'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import InlineCTA from '@/components/InlineCTA'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <QuestionnaireModal />
      <Navbar />
      <AnnouncementBanner />
      <main>
        <Hero />
        <div className="section-divider" />
        <Credentials />
        <div className="section-divider" />
        <Problem />
        <div className="section-divider" />
        <Comparison />
        <ScrollReveal>
          <InlineCTA cs="Chci takový přístup →" en="I want this approach →" />
        </ScrollReveal>
        <div className="section-divider" />
        <Testimonials />
        <ScrollReveal>
          <InlineCTA cs="Funguje to. Chci to taky →" en="It works. I want it too →" />
        </ScrollReveal>
        <div className="section-divider" />
        <Story />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Platform />
        <ScrollReveal>
          <InlineCTA cs="Chci systém, ne dohady →" en="I want a system, not guesswork →" />
        </ScrollReveal>
        <div className="section-divider" />
        <Process />
        <ScrollReveal>
          <InlineCTA cs="Chci začít prvním krokem →" en="I want to start with the first step →" />
        </ScrollReveal>
        <div className="section-divider" />
        <FAQ />
        <div className="section-divider" />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
