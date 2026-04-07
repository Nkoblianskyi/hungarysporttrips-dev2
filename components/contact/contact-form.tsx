'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, X, Send } from 'lucide-react'

interface FormData {
  nev: string
  email: string
  tura: string
  uzenet: string
  hozzajarulas: boolean
}

const TOUR_OPTIONS = [
  { value: '', label: 'Válasszon túrát (opcionális)' },
  { value: 'Dunai Szerzői Kerékpártúra', label: 'Dunai Szerzői Kerékpártúra' },
  { value: 'Zempléni Hegyek Mototúra', label: 'Zempléni Hegyek Mototúra' },
  { value: 'Balatonfelvidéki Trail Maraton', label: 'Balatonfelvidéki Trail Maraton' },
  { value: 'Mátrai Gerinc Szerzői Túra', label: 'Mátrai Gerinc Szerzői Túra' },
  { value: 'Hernád-szoros Kajakos Vízitúra', label: 'Hernád-szoros Kajakos Vízitúra' },
  { value: 'Bükki Ultratrail – 70 km', label: 'Bükki Ultratrail – 70 km' },
  { value: 'Egyéni megkeresés', label: 'Egyéni megkeresés' },
]

export function ContactForm() {
  const searchParams = useSearchParams()
  const [form, setForm] = useState<FormData>({
    nev: '',
    email: '',
    tura: '',
    uzenet: '',
    hozzajarulas: false,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [showSuccess, setShowSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const tura = searchParams.get('tura')
    if (tura) {
      setForm((prev) => ({ ...prev, tura }))
    }
  }, [searchParams])

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    if (!form.nev.trim()) newErrors.nev = 'A név megadása kötelező.'
    if (!form.email.trim()) {
      newErrors.email = 'Az e-mail cím megadása kötelező.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Érvényes e-mail címet adjon meg.'
    }
    if (!form.uzenet.trim()) newErrors.uzenet = 'Az üzenet megadása kötelező.'
    if (!form.hozzajarulas) {
      newErrors.hozzajarulas = 'Az adatkezelési hozzájárulás szükséges.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setShowSuccess(true)
    setForm({ nev: '', email: '', tura: '', uzenet: '', hozzajarulas: false })
    setErrors({})
  }

  const inputClass = (field: keyof FormData) =>
    `w-full bg-background border-b ${
      errors[field] ? 'border-destructive' : 'border-border'
    } px-0 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="nev" className="block font-body text-xs text-muted-foreground tracking-widest uppercase mb-3">
            Teljes Név <span className="text-destructive">*</span>
          </label>
          <input
            id="nev"
            type="text"
            autoComplete="name"
            placeholder="Pl. Kovács Anna"
            className={inputClass('nev')}
            value={form.nev}
            onChange={(e) => setForm({ ...form, nev: e.target.value })}
          />
          {errors.nev && <p className="font-body text-xs text-destructive mt-2">{errors.nev}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-body text-xs text-muted-foreground tracking-widest uppercase mb-3">
            E-mail cím <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="pelda@email.com"
            className={inputClass('email')}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="font-body text-xs text-destructive mt-2">{errors.email}</p>}
        </div>

        {/* Tour select */}
        <div>
          <label htmlFor="tura" className="block font-body text-xs text-muted-foreground tracking-widest uppercase mb-3">
            Érdeklődés Tárgya
          </label>
          <select
            id="tura"
            className={`${inputClass('tura')} appearance-none cursor-pointer bg-no-repeat bg-right`}
            value={form.tura}
            onChange={(e) => setForm({ ...form, tura: e.target.value })}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M1 4l5 5 5-5'/%3E%3C/svg%3E")`,
              paddingRight: '24px',
            }}
          >
            {TOUR_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="uzenet" className="block font-body text-xs text-muted-foreground tracking-widest uppercase mb-3">
            Üzenet <span className="text-destructive">*</span>
          </label>
          <textarea
            id="uzenet"
            rows={4}
            placeholder="Írja le kérdését vagy kérését..."
            className={`${inputClass('uzenet')} resize-none`}
            value={form.uzenet}
            onChange={(e) => setForm({ ...form, uzenet: e.target.value })}
          />
          {errors.uzenet && <p className="font-body text-xs text-destructive mt-2">{errors.uzenet}</p>}
        </div>

        {/* Consent */}
        <div className="space-y-3 pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5 flex-shrink-0">
              <input
                type="checkbox"
                className="sr-only"
                checked={form.hozzajarulas}
                onChange={(e) => setForm({ ...form, hozzajarulas: e.target.checked })}
              />
              <div
                className={`w-5 h-5 border-2 flex items-center justify-center transition-all ${
                  form.hozzajarulas ? 'bg-primary border-primary' : 'bg-background border-border group-hover:border-primary'
                } ${errors.hozzajarulas ? 'border-destructive' : ''}`}
              >
                {form.hozzajarulas && (
                  <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 10 10">
                    <path d="M1.5 5l2.5 2.5L8.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
            <span className="font-body text-xs text-muted-foreground leading-relaxed pt-0.5">
              Hozzájárulok, hogy a K.C. NTOMATA LIMITED a megadott adataimat az üzenet megválaszolása
              céljából kezelje. <span className="text-destructive">*</span>
            </span>
          </label>
          <p className="font-body text-xs text-muted-foreground">
            Az{' '}
            <a href="/adatvedelem" className="text-primary hover:underline">
              adatvédelmi tájékoztatót
            </a>{' '}
            elolvastam.
          </p>
          {errors.hozzajarulas && (
            <p className="font-body text-xs text-destructive">{errors.hozzajarulas}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full mt-8 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase py-4 hover:bg-primary/90 transition-all disabled:opacity-60 flex items-center justify-center gap-2 group"
        >
          <span>{submitting ? 'Küldés...' : 'Üzenet Küldése'}</span>
          {!submitting && <Send size={16} className="group-hover:translate-x-1 transition-transform" />}
        </button>
      </form>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm animate-in">
          <div className="bg-card border border-border max-w-sm w-full p-8 relative shadow-xl">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Bezárás"
            >
              <X size={20} />
            </button>
            <div className="flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center animate-in zoom-in">
                <CheckCircle2 size={32} className="text-primary" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-light mb-2">Köszönjük üzenetét!</h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Csapatunk 24 órán belül válaszol az alábbi e-mail címen:
                  <br />
                  <strong>{form.email || 'info@hungarysporttrips.com'}</strong>
                </p>
              </div>
              <div className="flex gap-3 mt-4 w-full">
                <button
                  onClick={() => setShowSuccess(false)}
                  className="flex-1 border border-border py-3 text-sm font-body hover:border-primary transition-colors"
                >
                  Bezárás
                </button>
                <a
                  href="/turak"
                  className="flex-1 bg-primary text-primary-foreground py-3 text-sm font-body text-center hover:bg-primary/90 transition-colors"
                >
                  Túrák megtekintése
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
