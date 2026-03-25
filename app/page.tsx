import Navbar from '@/components/Navbar'
import QuestionnaireModal from '@/components/QuestionnaireModal'
import Hero from '@/components/Hero'
import Credentials from '@/components/Credentials'
import Story from '@/components/Story'
import Problem from '@/components/Problem'
import Comparison from '@/components/Comparison'
import Services from '@/components/Services'
import Platform from '@/components/Platform'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <QuestionnaireModal />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Credentials />
        <div className="section-divider" />
        <Story />
        <div className="section-divider" />
        <Problem />
        <div className="section-divider" />
        <Comparison />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Platform />
        <div className="section-divider" />
        <Process />
        <div className="section-divider" />
        <FAQ />
        <div className="section-divider" />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
