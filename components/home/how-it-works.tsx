'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Kiválasztja az útját',
    description:
      'Böngésszen túráink között, és válassza ki a sportot és az időpontot, amely a legjobban illeszkedik terveihez.',
  },
  {
    num: '02',
    title: 'Kapcsolatba lép velünk',
    description:
      'Töltse ki az egyszerű foglalási érdeklődő-lapot. Csapatunk 24 órán belül visszaigazol és minden részletet tisztáz.',
  },
  {
    num: '03',
    title: 'Megérkezett az élmény',
    description:
      'A teljes programot megszervezzük: szállás, belépők, transzfer. Önnek csak meg kell érkeznie és élveznie kell.',
  },
  {
    num: '04',
    title: 'Feledhetetlen emlék',
    description:
      'Az utazás végén egy gondosan összeállított emlékcsomaggal búcsúzunk el, hogy a pillanatok örökre megmaradjanak.',
  },
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <section id="hogyan-mukodik" className="py-20 md:py-28 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Folyamat</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-balance">
            Hogyan Működik
            <em className="italic text-accent ml-2">az Utazás?</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`relative p-8 border border-primary-foreground/10 cursor-pointer transition-all duration-300 ${
                activeStep === index ? 'bg-primary-foreground/10' : 'hover:bg-primary-foreground/5'
              }`}
              onClick={() => setActiveStep(index)}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Step number */}
              <p className={`font-display text-5xl font-light mb-4 transition-colors ${
                activeStep === index ? 'text-accent' : 'text-primary-foreground/30'
              }`}>
                {step.num}
              </p>

              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2
                  size={16}
                  className={`mt-0.5 flex-shrink-0 transition-colors ${
                    activeStep === index ? 'text-accent' : 'text-primary-foreground/40'
                  }`}
                />
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
              </div>

              <p
                className={`font-body text-sm leading-relaxed transition-all duration-300 ${
                  activeStep === index
                    ? 'text-primary-foreground/90 max-h-40'
                    : 'text-primary-foreground/50 max-h-0 md:max-h-40 overflow-hidden md:overflow-visible'
                }`}
              >
                {step.description}
              </p>

              {/* Connector line on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 h-px w-px">
                  <div className="absolute top-0 right-0 w-px h-16 bg-primary-foreground/10" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
