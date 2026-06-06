import { NextResponse } from 'next/server'
import { getCorpusIndex } from '@/lib/content'

// Pre-rendered at build time — no backend required (Phase 0).
// Returns the full public corpus index for agent consumption.
export const dynamic = 'force-static'

export function GET() {
  const items = getCorpusIndex()
  return NextResponse.json({
    version: '1',
    node: 'https://presence.davidcaldicott.online',
    updated: new Date().toISOString().split('T')[0],
    items,
  })
}
