'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Hogyan foglalhatom le az utat?',
    a: 'A Kapcsolat oldalon található érdeklődő-lapon keresztül. Csapatunk 24 órán belül felveszi Önnel a kapcsolatot, és részletesen tájékoztatja az elérhető lehetőségekről.',
  },
  {
    q: 'Mennyi főre szólnak a csoportos utazások?',
    a: 'Kiscsoportos utazásokat szervezünk, általában 6–10 főre. Ez biztosítja a személyre szabott élményt és azt, hogy a vezető mindenkit figyelemmel tudjon kísérni.',
  },
  {
    q: 'Milyen fizikai állapot szükséges?',
    a: 'Minden túránál jelöljük a nehézségi szintet. Vannak könnyebb, 30–50 km-es kerékpártúráink és komolyabb ultratrail programjaink is. Kérdés esetén írjon nekünk – segítünk a legmegfelelőbb túra kiválasztásában.',
  },
  {
    q: 'Mi a lemondási politikájuk?',
    a: 'A lemondási feltételekről részletes tájékoztatást nyújtunk a foglaláskor. Általában az indulás előtt 30 nappal van lehetőség díjmentes lemondásra.',
  },
  {
    q: 'Hogyan kezelik az adataimat?',
    a: 'Adatait kizárólag az utazás megszervezéséhez és Önnel való kapcsolattartáshoz használjuk, harmadik félnek nem adjuk át. Részletek az Adatvédelmi Tájékoztatóban.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
              Gyakori Kérdések
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-balance">
              Mindenre <em className="italic text-primary">Válasz</em>
            </h2>
          </div>

          <div className="divide-y divide-border">
            {faqs.map((faq, index) => (
              <div key={index} className="py-5">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between w-full text-left gap-4"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-display text-lg font-semibold text-foreground">
                    {faq.q}
                  </span>
                  {openIndex === index ? (
                    <Minus size={18} className="flex-shrink-0 text-primary" />
                  ) : (
                    <Plus size={18} className="flex-shrink-0 text-muted-foreground" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
