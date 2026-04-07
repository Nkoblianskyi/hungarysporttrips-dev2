'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, MapPin, Clock, ArrowRight } from 'lucide-react'
import { tours, categoryLabels } from '@/lib/tours-data'
import type { Tour } from '@/lib/tours-data'

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function ToursCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = ['all', ...Object.keys(categoryLabels)]

  const filtered = activeCategory === 'all'
    ? tours
    : tours.filter((t) => t.category === activeCategory)

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 text-xs font-body font-medium tracking-wide border transition-colors ${
            activeCategory === 'all'
              ? 'bg-primary text-primary-foreground border-primary'
              : 'border-border hover:border-primary hover:text-primary'
          }`}
        >
          Összes sport
        </button>
        {Object.entries(categoryLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 text-xs font-body font-medium tracking-wide border transition-colors ${
              activeCategory === key
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border hover:border-primary hover:text-primary'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground font-body">
          Nem találtunk túrát ebben a kategóriában.
        </div>
      )}
    </div>
  )
}

function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group border border-border bg-card overflow-hidden hover:border-primary transition-colors">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-foreground/20" />
        <span className="absolute top-3 left-3 bg-card/90 text-foreground font-body text-xs px-3 py-1">
          {tour.sport}
        </span>
      </div>
      <div className="p-5">
        <h2 className="font-display text-xl font-semibold text-foreground mb-2">{tour.title}</h2>
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 line-clamp-2">
          {tour.shortDescription}
        </p>
        <div className="flex flex-col gap-2 mb-5 text-xs font-body text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarDays size={13} />
            {formatDate(tour.date)}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={13} />
            {tour.location}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={13} />
            {tour.duration}
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
  )
}
