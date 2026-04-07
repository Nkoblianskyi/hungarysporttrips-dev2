import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ToursCatalog } from '@/components/tours/tours-catalog'

export const metadata = {
  title: 'Túrák – Hungary Sport Trips',
  description: 'Böngésszen prémium sportturisztikai túráink között Magyarországon.',
}

export default function TurakPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        {/* Page Header */}
        <div className="bg-foreground text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Programjaink</p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-balance">
              Sportturisztikai <em className="italic text-accent">Túrák</em>
            </h1>
            <p className="font-body text-primary-foreground/70 mt-4 max-w-xl leading-relaxed">
              Válasszon az alábbi programok közül. Minden túrát gondosan megtervezett, kiscsoportos
              élményként szervezünk, prémium kiszolgálással.
            </p>
          </div>
        </div>

        {/* Catalog */}
        <div className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <ToursCatalog />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
