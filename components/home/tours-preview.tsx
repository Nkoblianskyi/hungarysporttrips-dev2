import Image from 'next/image'
import Link from 'next/link'
import { tours } from '@/lib/tours-data'
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react'

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function ToursPreview() {
  const featured = tours.slice(0, 3)

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">Közelgő Túrák</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-balance">
              Válasszon <em className="italic text-primary">Élményt</em>
            </h2>
          </div>
          <Link
            href="/turak"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-primary hover:gap-3 transition-all"
          >
            Összes túra
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((tour) => (
            <article key={tour.id} className="group border border-border bg-card overflow-hidden hover:border-primary transition-colors">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
                <span className="absolute top-3 left-3 bg-card/90 text-foreground font-body text-xs px-3 py-1">
                  {tour.sport}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{tour.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 line-clamp-2">
                  {tour.shortDescription}
                </p>

                <div className="flex flex-col gap-2 mb-5">
                  <div className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                    <CalendarDays size={13} />
                    {formatDate(tour.date)}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                    <MapPin size={13} />
                    {tour.location} &middot; {tour.duration}
                  </div>
                </div>

                <Link
                  href={`/turak/${tour.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-body font-medium text-primary hover:gap-3 transition-all"
                >
                  Részletek
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
