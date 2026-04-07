import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Adatvédelmi Tájékoztató – Hungary Sport Trips',
  description:
    'A K.C. NTOMATA LIMITED adatvédelmi és adatkezelési tájékoztatója a GDPR rendelkezéseivel összhangban.',
}

function Section({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-10 pb-10 border-b border-border last:border-0 last:mb-0">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-display text-3xl font-light text-primary/30 flex-shrink-0">{number}</span>
        <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      </div>
      <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-3 ml-11">
        {children}
      </div>
    </section>
  )
}

export default function AdatvedelemPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        {/* Page Header */}
        <div className="bg-foreground text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Jogi dokumentum</p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-balance">
              Adatvédelmi <em className="italic text-accent">Tájékoztató</em>
            </h1>
            <p className="font-body text-primary-foreground/60 text-xs mt-4">
              Utoljára frissítve: 2026.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              {/* Intro */}
              <div className="bg-secondary border border-border p-6 mb-12">
                <p className="font-body text-sm text-foreground leading-relaxed">
                  A <strong>K.C. NTOMATA LIMITED</strong> (a továbbiakban: Adatkezelő) elkötelezett
                  látogatói és ügyfeleinek személyes adatai védelme iránt. A jelen tájékoztató
                  az Európai Unió 2016/679 számú általános adatvédelmi rendeletével (GDPR) összhangban
                  ismerteti az adatkezelési gyakorlatunkat.
                </p>
              </div>

              <Section number="01" title="Az adatkezelő adatai">
                <p><strong>Cégnév:</strong> K.C. NTOMATA LIMITED</p>
                <p><strong>Cím:</strong> Stylianou Lena, 24, Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus</p>
                <p><strong>Weboldal:</strong> hungarysporttrips.com</p>
              </Section>

              <Section number="02" title="Kezelt személyes adatok köre">
                <p>
                  A weboldal kapcsolatfelvételi űrlapján keresztül az alábbi személyes adatokat kezeljük:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Teljes név</li>
                  <li>E-mail cím</li>
                  <li>Az üzenet szövege</li>
                  <li>Az érdeklődés tárgya (opcionális)</li>
                </ul>
                <p className="mt-3">
                  A weboldalon nem gyűjtünk különleges személyes adatokat (pl. egészségügyi adatok,
                  etnikai hovatartozás, politikai meggyőződés).
                </p>
              </Section>

              <Section number="03" title="Az adatkezelés célja és jogalapja">
                <p>
                  Az adatkezelés elsődleges célja az ügyfél által küldött megkeresés megválaszolása
                  és a kapcsolatfelvétel lehetővé tétele.
                </p>
                <p>
                  Az adatkezelés jogalapja: az érintett önkéntes hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont).
                  A hozzájárulás bármikor visszavonható, ez azonban nem érinti a visszavonás előtti
                  adatkezelés jogszerűségét.
                </p>
              </Section>

              <Section number="04" title="Az adatmegőrzés időtartama">
                <p>
                  A megkeresések során rögzített személyes adatokat az ügy lezárásától számított
                  <strong> 2 évig</strong> tároljuk, kivéve, ha jogszabály hosszabb megőrzési időt ír elő,
                  vagy az érintett korábban kéri az adatok törlését.
                </p>
              </Section>

              <Section number="05" title="Adattovábbítás, adatfeldolgozók">
                <p>
                  Az Adatkezelő személyes adatokat harmadik féllel csak az érintett kifejezett
                  hozzájárulásával, vagy törvényi kötelezettség teljesítése érdekében oszt meg.
                </p>
                <p>
                  A weboldalon technikai üzemeltetéshez harmadik fél szolgáltatók közreműködhetnek
                  (pl. tárhelyszolgáltató, e-mail rendszer). Ezen adatfeldolgozók szintén a GDPR
                  rendelkezéseinek megfelelően járnak el.
                </p>
              </Section>

              <Section number="06" title="Az érintett jogai">
                <p>A GDPR alapján Ön az alábbi jogokkal rendelkezik:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Hozzáférés joga – betekintés a kezelt adatokba</li>
                  <li>Helyesbítés joga – pontatlan adatok korrekciója</li>
                  <li>Törlés joga – „elfeledtetéshez való jog"</li>
                  <li>Adatkezelés korlátozásának joga</li>
                  <li>Adathordozhatóság joga</li>
                  <li>Tiltakozás joga az adatkezeléssel szemben</li>
                  <li>Hozzájárulás visszavonásának joga</li>
                </ul>
                <p className="mt-3">
                  Jogait a weboldalon közzétett elérhetőségeinken keresztül gyakorolhatja.
                  Panasz esetén fordulhat az illetékes felügyeleti hatósághoz (Ciprusi Adatvédelmi
                  Biztos: <strong>www.dataprotection.gov.cy</strong>).
                </p>
              </Section>

              <Section number="07" title="Sütik (cookie-k)">
                <p>
                  A weboldal sütiket (cookie-kat) alkalmaz a felhasználói élmény javítása és
                  statisztikai célok érdekében. A sütikről részletes tájékoztató a{' '}
                  <a href="/sutik" className="underline hover:text-primary transition-colors">
                    Süti szabályzat
                  </a>{' '}
                  oldalon olvasható.
                </p>
              </Section>

              <Section number="08" title="A tájékoztató módosítása">
                <p>
                  Az Adatkezelő fenntartja a jogot jelen tájékoztató módosítására. A változásokról
                  a weboldalon értesítjük látogatóinkat. A tájékoztató legutóbbi frissítésének dátuma:
                  <strong> 2026. április 6.</strong>
                </p>
              </Section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
