import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Süti Szabályzat – Hungary Sport Trips',
  description:
    'Tájékoztató a hungarysporttrips.com weboldalon alkalmazott sütik (cookie-k) használatáról.',
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

const cookieTable = [
  {
    nev: 'cookie-consent',
    tipus: 'Funkcionális',
    cel: 'Tárolja, hogy a látogató elfogadta-e a sütik használatát.',
    lejarat: '1 év',
    harmadikfel: 'Nem',
  },
  {
    nev: '_ga',
    tipus: 'Analitikai',
    cel: 'Látogatói statisztikák gyűjtése a weboldal teljesítményének javítása érdekében.',
    lejarat: '2 év',
    harmadikfel: 'Google Analytics',
  },
  {
    nev: '_ga_*',
    tipus: 'Analitikai',
    cel: 'Egyedi munkamenet-azonosítás a Google Analytics számára.',
    lejarat: '2 év',
    harmadikfel: 'Google Analytics',
  },
  {
    nev: '__utmz',
    tipus: 'Analitikai',
    cel: 'A látogató forrásának (pl. keresőmotor, hirdetés) nyomon követése.',
    lejarat: '6 hónap',
    harmadikfel: 'Google Analytics',
  },
]

export default function SutikPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        {/* Page Header */}
        <div className="bg-foreground text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Jogi dokumentum</p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-balance">
              Süti <em className="italic text-accent">Szabályzat</em>
            </h1>
            <p className="font-body text-primary-foreground/60 text-xs mt-4">
              Utoljára frissítve: 2026. április 6.
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
                  A <strong>hungarysporttrips.com</strong> weboldal sütiket (cookie-kat) használ.
                  Ez a dokumentum tájékoztatja Önt arról, hogy milyen sütiket alkalmazunk, miért
                  és hogyan kezelheti azokat.
                </p>
              </div>

              <Section number="01" title="Mi az a süti?">
                <p>
                  A süti (cookie) egy kis szöveges fájl, amelyet a weboldal az Ön böngészőjén
                  keresztül a számítógépére vagy mobileszközére ment el. A sütik segítségével
                  a weboldal emlékezhet beállításaira, és statisztikai adatokat gyűjthet a látogatói
                  szokásokról.
                </p>
              </Section>

              <Section number="02" title="Milyen sütiket használunk?">
                <p>Weboldalunkon az alábbi süti-kategóriákat alkalmazzuk:</p>

                <div className="mt-4 space-y-3">
                  {[
                    {
                      tipus: 'Szigorúan szükséges sütik',
                      szin: 'border-l-primary',
                      leiras:
                        'Ezek a sütik elengedhetetlenek a weboldal megfelelő működéséhez. Nem tilthatók le, de nem tárolnak személyazonosításra alkalmas adatokat.',
                    },
                    {
                      tipus: 'Analitikai / statisztikai sütik',
                      szin: 'border-l-accent',
                      leiras:
                        'Névtelen statisztikák gyűjtésére szolgálnak (pl. megtekintett oldalak, látogatások száma) a weboldal teljesítményének javítása érdekében. Csak az Ön hozzájárulásával aktiválódnak.',
                    },
                    {
                      tipus: 'Funkcionális sütik',
                      szin: 'border-l-muted-foreground',
                      leiras:
                        'Megjegyzik az Ön döntéseit és beállításait (pl. sütihozzájárulás státusza), hogy ne kelljen minden látogatáskor újra elvégezni ezeket a lépéseket.',
                    },
                  ].map((k) => (
                    <div key={k.tipus} className={`border-l-2 ${k.szin} pl-4 py-1`}>
                      <p className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">
                        {k.tipus}
                      </p>
                      <p>{k.leiras}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section number="03" title="Sütik listája">
                <p>Az alábbi táblázat tartalmazza az oldalunkon alkalmazott sütiket:</p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-xs border border-border">
                    <thead>
                      <tr className="bg-secondary">
                        <th className="text-left px-4 py-3 border-b border-border font-semibold text-foreground">
                          Süti neve
                        </th>
                        <th className="text-left px-4 py-3 border-b border-border font-semibold text-foreground">
                          Típus
                        </th>
                        <th className="text-left px-4 py-3 border-b border-border font-semibold text-foreground">
                          Cél
                        </th>
                        <th className="text-left px-4 py-3 border-b border-border font-semibold text-foreground">
                          Lejárat
                        </th>
                        <th className="text-left px-4 py-3 border-b border-border font-semibold text-foreground">
                          Harmadik fél
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookieTable.map((row, i) => (
                        <tr key={row.nev} className={i % 2 === 0 ? 'bg-background' : 'bg-secondary/50'}>
                          <td className="px-4 py-3 font-mono text-foreground border-b border-border">
                            {row.nev}
                          </td>
                          <td className="px-4 py-3 border-b border-border">{row.tipus}</td>
                          <td className="px-4 py-3 border-b border-border leading-relaxed">
                            {row.cel}
                          </td>
                          <td className="px-4 py-3 border-b border-border">{row.lejarat}</td>
                          <td className="px-4 py-3 border-b border-border">{row.harmadikfel}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section number="04" title="Hozzájárulás és kezelés">
                <p>
                  Weboldalunk első meglátogatásakor egy sütikezelési sáv jelenik meg, amelyen
                  elfogadhatja vagy elutasíthatja a nem elengedhetetlen sütiket. Döntése bármikor
                  módosítható a böngésző beállításain keresztül.
                </p>
                <p>
                  A legtöbb böngésző lehetőséget kínál a sütik kezelésére. A sütik letiltásával
                  azonban egyes weboldal-funkciók korlátozottan működhetnek.
                </p>
                <p>
                  Részletes útmutató a sütik kezeléséhez a legismertebb böngészőkben:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                  <li>Google Chrome: Beállítások → Adatvédelem és biztonság → Sütik</li>
                  <li>Mozilla Firefox: Beállítások → Adatvédelem és biztonság</li>
                  <li>Safari: Beállítások → Adatvédelem</li>
                  <li>Microsoft Edge: Beállítások → Cookie-k és helyi adatok</li>
                </ul>
              </Section>

              <Section number="05" title="Harmadik fél sütik">
                <p>
                  Weboldalunk igénybe veszi a Google Analytics szolgáltatást látogatói statisztikák
                  elemzéséhez. A Google adatvédelmi szabályzata a következő oldalon olvasható:
                  <strong> policies.google.com/privacy</strong>.
                </p>
                <p>
                  A Google Analytics adatgyűjtéséből való kimaradáshoz telepítheti a Google Analytics
                  letiltó bővítményt (tools.google.com/dlpage/gaoptout).
                </p>
              </Section>

              <Section number="06" title="Kapcsolat">
                <p>
                  Amennyiben kérdése van a sütik használatával kapcsolatban, kérjük, vegye fel
                  velünk a kapcsolatot a{' '}
                  <a href="/kapcsolat" className="underline hover:text-primary transition-colors">
                    kapcsolatfelvételi oldalunkon
                  </a>
                  {' '}keresztül.
                </p>
                <p className="mt-2">
                  <strong>K.C. NTOMATA LIMITED</strong> — Stylianou Lena, 24, Christiana Court,
                  Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus
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
