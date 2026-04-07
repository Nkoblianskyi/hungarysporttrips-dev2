import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const flowItems = [
  {
    step: 'I.',
    title: 'Találkozás',
    desc: 'Túravezetőnk fogadja a csoportot az egyeztetett rajtpontnál.',
  },
  {
    step: 'II.',
    title: 'Briefing',
    desc: 'Útvonalismertetés, biztonsági tájékoztató, felszerelés ellenőrzés.',
  },
  {
    step: 'III.',
    title: 'Kaland',
    desc: 'A tényleges túra: nyomvonal, kilátók, természeti helyszínek.',
  },
  {
    step: 'IV.',
    title: 'Szabad idő',
    desc: 'Pihenő, helyi ételek kóstolása, természetfotózás.',
  },
  {
    step: 'V.',
    title: 'Búcsú',
    desc: 'Közös befutó, visszajelzés, útvonaltérkép ajándékba.',
  },
]

export function JourneyFlow() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Az Út Ritmusa</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-primary-foreground text-balance">
            Journey <em className="italic text-accent">Flow</em>
          </h2>
          <p className="font-body text-primary-foreground/70 mt-4 max-w-xl mx-auto leading-relaxed text-sm">
            Minden egyes programunk egy gondosan komponált utazási ritmusra épül, ahol az élmény és
            a kényelem tökéletes egyensúlyban van.
          </p>
        </div>

        {/* Flow timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-primary-foreground/20" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {flowItems.map((item, i) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                {/* Circle */}
                <div className="relative z-10 w-10 h-10 border border-accent flex items-center justify-center bg-primary mb-6">
                  <span className="font-display text-sm font-semibold text-accent">{item.step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-primary-foreground/60 leading-relaxed">
                  {item.desc}
                </p>
                {/* Arrow for mobile */}
                {i < flowItems.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="mt-4 md:hidden text-accent/50 rotate-90"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
