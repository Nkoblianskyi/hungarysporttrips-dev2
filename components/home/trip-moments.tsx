import Image from 'next/image'

const moments = [
  {
    image: '/images/moments-1.jpg',
    label: 'Közösség',
    caption: 'Barátok között az igaz abentúra',
  },
  {
    image: '/images/moments-2.jpg',
    label: 'Felfedezés',
    caption: 'Magyarország rejtett zugaiban',
  },
  {
    image: '/images/moments-3.jpg',
    label: 'Pihenés',
    caption: 'Prémium szállások között',
  },
]

export function TripMoments() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-14">
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">Úti Pillanatok</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-balance">
            <em className="italic text-primary">Kaland</em>
            {' – '}az Út Összes Pillanata Számít
          </h2>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card */}
          <div className="md:col-span-2 group relative overflow-hidden border border-border h-72 md:h-96">
            <Image
              src={moments[0].image}
              alt={moments[0].caption}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-colors" />
            <div className="absolute bottom-6 left-6">
              <p className="text-accent font-body text-xs tracking-[0.25em] uppercase mb-1">
                {moments[0].label}
              </p>
              <p className="font-display text-2xl font-light text-primary-foreground">
                {moments[0].caption}
              </p>
            </div>
          </div>

          {/* Stack of two */}
          <div className="grid grid-rows-2 gap-4">
            {moments.slice(1).map((m) => (
              <div key={m.label} className="group relative overflow-hidden border border-border">
                <Image
                  src={m.image}
                  alt={m.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-accent font-body text-xs tracking-[0.25em] uppercase mb-0.5">
                    {m.label}
                  </p>
                  <p className="font-display text-lg font-light text-primary-foreground">
                    {m.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
