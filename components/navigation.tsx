'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Főoldal', exact: true },
  { href: '/turak', label: 'Túrák', exact: false },
  { href: '/rolunk', label: 'Rólunk', exact: false },
  { href: '/kapcsolat', label: 'Kapcsolat', exact: false },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(href + '/')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image src="/favicon.ico" alt="Hungary Sport Trips" width={32} height={32} />
            <p className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">Hungary Sport Trips</p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors relative pb-0.5 ${
                  isActive(link.href, link.exact)
                    ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/kapcsolat"
              className="font-body text-xs tracking-widest uppercase bg-primary text-primary-foreground px-5 py-2.5 hover:bg-primary/90 transition-colors"
            >
              Érdeklődöm
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label={isOpen ? 'Menü bezárása' : 'Menü megnyitása'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-card py-4">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm font-medium px-2 py-3 border-b border-border/50 last:border-0 transition-colors ${
                    isActive(link.href, link.exact)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kapcsolat"
                className="mt-4 font-body text-xs tracking-widest uppercase bg-primary text-primary-foreground px-5 py-3 text-center hover:bg-primary/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Érdeklődöm
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
