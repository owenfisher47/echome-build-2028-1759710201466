import Hero from '@/components/Hero'
import PredictionsGrid from '@/components/PredictionsGrid'
import TechShowcase from '@/components/TechShowcase'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Hero />
      <PredictionsGrid />
      <TechShowcase />
      <Footer />
    </main>
  )
}