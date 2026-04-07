'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-adventure.jpg"
          alt="Szerzői kalandtúrák Magyarországon – kerékpár, moto, hegyi túra"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay with teal tint */}
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Grid decoration lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[33%] w-px h-full bg-accent/10" />
        <div className="absolute top-0 left-[66%] w-px h-full bg-accent/10" />
        <div className="absolute left-0 top-[50%] w-full h-px bg-accent/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-20 md:pb-28">
        <div className="max-w-3xl">
          <p className="text-accent font-body text-xs tracking-[0.35em] uppercase mb-4 opacity-90">
            Szerzői Kalandtúrák
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-tight mb-6 text-balance">
            Fedezze Fel
            <br />
            <em className="font-normal italic text-accent">Magyarországot</em>
            <br />
            Nyeregből
          </h1>
          <p className="text-primary-foreground/80 font-body text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Szerzői velo- és mototúrák, trail maratonok, hegyi túrák és kajakos vízitúrák – kiscsoportos,
            személyre szabott kalandok Magyarország legjobb tájain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/turak"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-6 py-3 font-body font-medium text-sm tracking-wide hover:bg-accent/90 transition-colors"
            >
              Túráink megtekintése
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#hogyan-mukodik"
              className="inline-flex items-center gap-3 border border-primary-foreground/50 text-primary-foreground px-6 py-3 font-body font-medium text-sm tracking-wide hover:border-primary-foreground transition-colors"
            >
              Hogyan működik?
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
