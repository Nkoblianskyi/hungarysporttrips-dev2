import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { tours } from '@/lib/tours-data'
import { CalendarDays, MapPin, Clock, CheckCircle2, ArrowLeft } from 'lucide-react'

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })
}

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) return {}
  return {
    title: `${tour.title} – Hungary Sport Trips`,
    description: tour.shortDescription,
  }
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) notFound()

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        {/* Hero image */}
        <div className="relative h-72 md:h-[480px] overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-10 md:pb-14">
              <Link
                href="/turak"
                className="inline-flex items-center gap-2 text-primary-foreground/80 font-body text-xs mb-4 hover:text-primary-foreground transition-colors"
              >
                <ArrowLeft size={14} />
                Vissza a túrákhoz
              </Link>
              <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-2">
                {tour.sport}
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-light text-primary-foreground text-balance">
                {tour.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main content */}
              <div className="lg:col-span-2">
                {/* Meta */}
                <div className="flex flex-wrap gap-5 mb-8 text-sm font-body text-muted-foreground border-b border-border pb-8">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={15} />
                    {formatDate(tour.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={15} />
                    {tour.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={15} />
                    {tour.duration}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-semibold mb-4">A túráról</h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {tour.fullDescription}
                  </p>
                </div>

                {/* Itinerary */}
                <div>
                  <h2 className="font-display text-2xl font-semibold mb-6">Napirend</h2>
                  <div className="space-y-4">
                    {tour.itinerary.map((item) => (
                      <div key={item.day} className="flex gap-5 border-b border-border pb-4">
                        <div className="flex-shrink-0 w-14 h-14 border border-primary flex items-center justify-center">
                          <span className="font-display text-xl font-semibold text-primary">
                            {item.day}.
                          </span>
                        </div>
                        <div className="pt-2">
                          <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-1">
                            {item.day}. nap
                          </p>
                          <p className="font-body text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                {/* What's included */}
                <div className="border border-border bg-card p-6 mb-6">
                  <h3 className="font-display text-lg font-semibold mb-4">A csomag tartalmaz</h3>
                  <ul className="space-y-3">
                    {tour.included.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm font-body">
                        <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="border border-border bg-secondary p-6 text-center">
                  <p className="font-display text-lg font-semibold mb-2">Érdekli ez a túra?</p>
                  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                    Küldjön érdeklődést, és csapatunk 24 órán belül visszaír!
                  </p>
                  <Link
                    href={`/kapcsolat?tura=${encodeURIComponent(tour.title)}`}
                    className="block w-full bg-primary text-primary-foreground text-sm font-body font-medium py-3 text-center hover:bg-primary/90 transition-colors"
                  >
                    Érdeklődöm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
