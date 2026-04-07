import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/home/hero'
import { ToursPreview } from '@/components/home/tours-preview'
import { HowItWorks } from '@/components/home/how-it-works'
import { JourneyFlow } from '@/components/home/journey-flow'
import { TripMoments } from '@/components/home/trip-moments'
import { TravelTips } from '@/components/home/travel-tips'
import { FAQ } from '@/components/home/faq'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ToursPreview />
        <HowItWorks />
        <JourneyFlow />
        <TripMoments />
        <TravelTips />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
