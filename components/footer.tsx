import Link from 'next/link'

export function Footer() {
  return (
    <footer>
      {/* CTA strip */}
      <div className="bg-accent py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-display text-3xl md:text-4xl font-light text-accent-foreground text-balance">
                Készen áll az <em className="italic">élményre?</em>
              </p>
              <p className="font-body text-sm text-accent-foreground/70 mt-2">
                Írjon nekünk – csapatunk 24 órán belül visszajelez.
              </p>
            </div>
            <Link
              href="/kapcsolat"
              className="flex-shrink-0 bg-foreground text-primary-foreground font-body text-xs tracking-widest uppercase px-8 py-4 hover:bg-foreground/90 transition-colors"
            >
              Kapcsolatfelvétel
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Company */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Hungary Sport Trips</h3>
              <p className="text-sm text-primary-foreground/70 font-body leading-relaxed">
                Prémium sportturisztikai élmények Magyarország szerte.
              </p>
              <p className="text-xs text-primary-foreground/50 font-body mt-3">
                hungarysporttrips.com
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-display text-base font-semibold mb-4">Navigáció</h4>
              <ul className="space-y-2 text-sm font-body">
                <li>
                  <Link href="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    Főoldal
                  </Link>
                </li>
                <li>
                  <Link href="/turak" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    Túrák
                  </Link>
                </li>
                <li>
                  <Link href="/rolunk" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    Rólunk
                  </Link>
                </li>
                <li>
                  <Link href="/kapcsolat" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    Kapcsolat
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-display text-base font-semibold mb-4">Jogi</h4>
              <ul className="space-y-2 text-sm font-body">
                <li>
                  <Link href="/adatvedelem" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    Adatvédelmi tájékoztató
                  </Link>
                </li>
                <li>
                  <Link href="/sutik" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    Süti szabályzat
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h4 className="font-display text-base font-semibold mb-4">Cégadatok</h4>
              <div className="text-sm text-primary-foreground/70 font-body leading-loose">
                <p className="font-semibold text-primary-foreground">K.C. NTOMATA LIMITED</p>
                <p>Stylianou Lena, 24</p>
                <p>Christiana Court, Flat/Office 202</p>
                <p>Strovolos, 2019 Nicosia</p>
                <p>Cyprus</p>
                <a
                  href="mailto:info@hungarysporttrips.com"
                  className="block mt-2 text-accent hover:text-accent/80 transition-colors"
                >
                  info@hungarysporttrips.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between gap-3 text-xs text-primary-foreground/50 font-body">
            <p>&copy; {new Date().getFullYear()} K.C. NTOMATA LIMITED. Minden jog fenntartva.</p>
            <div className="flex gap-4">
              <Link href="/adatvedelem" className="hover:text-primary-foreground/80 transition-colors">
                Adatvédelem
              </Link>
              <Link href="/sutik" className="hover:text-primary-foreground/80 transition-colors">
                Sütik
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
