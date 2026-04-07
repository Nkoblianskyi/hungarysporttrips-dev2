import { Luggage, ShieldCheck, Thermometer, Map } from 'lucide-react'

const tips = [
  {
    icon: Luggage,
    title: 'Felszerelési tippek',
    description:
      'Rétegesen viselhető, gyorsan száradó ruhák ajánlottak. Kerékpáros vagy hegyi túrán elengedhetetlen a megfelelő lábbeli és esőkabát.',
  },
  {
    icon: ShieldCheck,
    title: 'Biztosítás',
    description:
      'Kalandtúrákhoz aktív sportokat is fedező utasbiztosítást javaslunk. A sérülési és poggyászkárokra kiterjedő fedezet különösen fontos.',
  },
  {
    icon: Thermometer,
    title: 'Időjárás',
    description:
      'Magyarországon nyáron meleg, tavasszal és ősszel változékony az időjárás. Hegyi túrákon a reggeli hőmérséklet jelentősen alacsonyabb lehet.',
  },
  {
    icon: Map,
    title: 'Navigáció',
    description:
      'Minden túrához nyomtatott és digitális GPX-térképet biztosítunk. Offline használatra ajánljuk a Mapy.cz vagy OsmAnd alkalmazásokat.',
  },
]

export function TravelTips() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-14">
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
            Hasznos Információk
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-balance">
            Utazási <em className="italic text-primary">Tippek</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="border border-border bg-card p-6 hover:border-primary transition-colors group"
            >
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 border border-border group-hover:border-primary group-hover:text-primary transition-colors">
                <tip.icon size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
