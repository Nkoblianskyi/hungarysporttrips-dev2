import { Metadata } from 'next'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact/contact-form'


export const metadata: Metadata = {
  title: 'Kapcsolat – Hungary Sport Trips',
  description:
    'Vegye fel velünk a kapcsolatot! Csapatunk 24 órán belül válaszol érdeklődésére.',
}

export default function KapcsolatPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        {/* Hero Section with Image */}
        <div className="relative h-96 md:h-[600px] w-full overflow-hidden">
          <Image
            src="/images/contact-hero.jpg"
            alt="Adventure awaits – connect with us"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background/80" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <p className="text-accent font-body text-xs tracking-[0.35em] uppercase mb-4 opacity-90">
                Beszélgessünk
              </p>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-tight text-balance mb-6">
                Az <em className="italic text-accent">Abentúra</em>
                <br />
                Közel Van
              </h1>
              <p className="font-body text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto">
                Tudjon meg többet szerzői túráinkról. Írjon, hívjon, vagy egyéni kalandot szervezzen velünk.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
              {/* Quick contact cards */}
              <div className="border border-border p-8 hover:border-primary transition-colors">

                <h3 className="font-display text-xl font-light mb-3">E-mail</h3>
                <p className="font-body text-muted-foreground text-sm mb-4">
                  Küldjon üzenetet, és 24 órán belül válaszolunk.
                </p>
                <a
                  href="mailto:info@hungarysporttrips.com"
                  className="font-body text-sm text-primary hover:text-primary/80 transition-colors tracking-wide"
                >
                  info@hungarysporttrips.com
                </a>
              </div>

              <div className="border border-border p-8 hover:border-primary transition-colors">

                <h3 className="font-display text-xl font-light mb-3">Gyors Válasz</h3>
                <p className="font-body text-muted-foreground text-sm mb-4">
                  Csapatunk azonnal értesítést kap üzenetéről.
                </p>
                <p className="font-body text-sm text-foreground font-semibold">
                  24 óra átlagos válaszidő
                </p>
              </div>

              <div className="border border-border p-8 hover:border-primary transition-colors">

                <h3 className="font-display text-xl font-light mb-3">Helyszín</h3>
                <p className="font-body text-muted-foreground text-sm mb-4">
                  Budapestről szervezünk, de az ország mindenütt jelen vagyunk.
                </p>
                <p className="font-body text-sm text-foreground">
                  K.C. NTOMATA LIMITED
                </p>
              </div>
            </div>

            {/* Main Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left side - Info & Story */}
              <div className="space-y-12">
                <div>
                  <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Miért Írjon Nekünk</p>
                  <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
                    Szerzői Kalandok,
                    <em className="italic text-primary ml-2">Személyre Szabva</em>
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    Minden túra egyedi. Nem sablonok, hanem élmények. Ha kérdése van, vagy másféle kalandot szeretne,
                    írjon nekünk. Csapatunk személyesen fog válaszolni, és közösen találunk megoldást.
                  </p>
                </div>

                {/* Info Blocks */}
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="font-display text-lg font-semibold mb-2">Egyéni Túrák</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      Nem szereti a standard programokat? Szervezzen egyéni kalandot csapatával.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-display text-lg font-semibold mb-2">Csoportos Megrendelés</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      10+ fő? Speciális árajánlatot adunk a csoportoknak.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h4 className="font-display text-lg font-semibold mb-2">Felmerült Kérdés?</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      Technikai, időponttal vagy felszereléssel kapcsolatos kérdésre? Szívesen segítünk.
                    </p>
                  </div>
                </div>

                {/* Company Info */}
                <div className="bg-secondary border border-border p-8">
                  <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">Cégadatok</p>
                  <div className="font-body space-y-2 text-sm">
                    <p className="font-semibold text-foreground">K.C. NTOMATA LIMITED</p>
                    <p className="text-muted-foreground">Stylianou Lena, 24</p>
                    <p className="text-muted-foreground">Christiana Court, Flat/Office 202</p>
                    <p className="text-muted-foreground">Strovolos, 2019 Nicosia, Cyprus</p>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="bg-card border border-border p-8 md:p-12 sticky top-24 h-fit">
                <h3 className="font-display text-2xl font-light mb-2">Küldön Üzenetet</h3>
                <p className="text-muted-foreground text-sm mb-8">Válaszunk legkésőbb 24 órán belül érkezik.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Az Abentúra Vár</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-balance">
              Készen Áll az <em className="italic">Élményre?</em>
            </h2>
            <p className="font-body text-primary-foreground/80 text-base max-w-xl mx-auto mb-8">
              Legyen szó kerékpártúráról, mototúráról, hegyi kalandról vagy bármi másról – szerzői kalandunk rá vár.
            </p>
            <a
              href="#form"
              className="inline-block bg-accent text-primary px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-accent/90 transition-colors"
            >
              Jelezzen Igényt
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
