import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Rólunk – Hungary Sport Trips',
  description:
    'Ismerje meg a Hungary Sport Trips csapatát. Prémium sportturisztikai élmények Magyarországon.',
}

const values = [
  {
    title: 'Autentikusság',
    desc: 'Szerzői útvonalak, vezetők, akik személyesen ismerik a terepen minden zárkányt. Nincsenek kész sablonok, csak élmények.',
  },
  {
    title: 'Kiscsoportos',
    desc: 'Maximum 8 fő – ez biztosítja, hogy mindenki teljes figyelmet kap és a kanyarok, az útvonal személyre szabott.',
  },
  {
    title: 'Természetközpontú',
    desc: 'Magyarország legjobb tájait járjuk be: hegyek, völgyek, folyók, erdők. A természet a fő szereplő.',
  },
  {
    title: 'Megfizethető Prémium',
    desc: 'Magas minőség, prémium szállás és étkek, de nem a vasutas árakkal. Valódi érték minden forintért.',
  },
]

export default function RolunkPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        {/* Page Header */}
        <div className="bg-foreground text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">A Csapatunk</p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-balance">
              Kik Vagyunk <em className="italic text-accent">Mi?</em>
            </h1>
          </div>
        </div>

        {/* Story */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
                  Történetünk
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
                  Szerzői kalandtúrák –{' '}
                  <em className="italic text-primary">Magyarország felfedezése nyeregből</em>
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-sm">
                  <p>
                    A Hungary Sport Trips egy független szerzői túraszervezet, amely kizárólag Magyarország legszebb
                    természeti tájait járja be aktív sporttúrák segítségével. Nincsenek márkák, nincsenek stadionok,
                    nincsenek jegykiadók – csak az autentikus kaland.
                  </p>
                  <p>
                    Mivel saját vezetőink személyesen tervezik az útvonalakat minden évben, hogy elkerüljük az ismétlődést
                    és az elcsépelt turisztikai útvonalakat. Kerékpártúrák, mototúrák, trail maratonok, hegyi túrák,
                    kajakos vízitúrák, ultratrail futások – minden averzionális.
                  </p>
                  <p>
                    Legyen szó a Duna-parti kerékpártúráról, a Zemplén moto-kalandjáról vagy az éjszakás Bükki ultratrailről –
                    nálunk minden egy valódi szerzői élmény.
                  </p>
                </div>
              </div>
              <div className="relative h-72 md:h-[420px] overflow-hidden border border-border">
                <Image
                  src="/images/about-team.jpg"
                  alt="Hungary Sport Trips csapat"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="mb-14 text-center">
              <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">Értékeink</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-balance">
                Amire <em className="italic text-primary">Büszkék</em> Vagyunk
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={v.title} className="border border-border bg-card p-6 hover:border-primary transition-colors">
                  <span className="font-display text-4xl font-light text-primary/30 block mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company info */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Cégadatok</p>
                <h2 className="font-display text-3xl font-light mb-6">K.C. NTOMATA LIMITED</h2>
                <div className="font-body text-sm text-primary-foreground/80 leading-relaxed space-y-1">
                  <p>Stylianou Lena, 24</p>
                  <p>Christiana Court, Flat/Office 202</p>
                  <p>Strovolos, 2019 Nicosia</p>
                  <p>Cyprus</p>
                </div>
              </div>
              <div>
                <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Weboldal</p>
                <p className="font-body text-primary-foreground/80 text-sm">hungarysporttrips.com</p>
                <p className="font-body text-primary-foreground/60 text-xs mt-8 leading-relaxed max-w-xs">
                  Cégünk az Európai Unió adatvédelmi szabályozásával összhangban kezeli minden vendégünk
                  személyes adatait.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
