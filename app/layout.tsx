import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'David Caldicott — Presence',
  description: "Coach. Builder. Systems thinker. Everything I've chosen to make knowable.",
  metadataBase: new URL('https://presence.davidcaldicott.online'),
  openGraph: {
    title: 'David Caldicott — Presence',
    description: 'I help people and systems become whole.',
    url: 'https://presence.davidcaldicott.online',
    siteName: 'Presence',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
