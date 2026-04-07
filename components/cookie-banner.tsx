'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground leading-relaxed">
            {'Ez a weboldal sütiket használ a legjobb felhasználói élmény biztosítása érdekében. '}
            <Link href="/sutik" className="underline hover:text-primary transition-colors">
              További információk
            </Link>
            {'.'}
          </p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={declineCookies}>
              Elutasítás
            </Button>
            <Button size="sm" onClick={acceptCookies}>
              Elfogadás
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
