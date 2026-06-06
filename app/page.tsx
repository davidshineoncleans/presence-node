// Phase 0 placeholder — UI build is a separate session.
// Content loads; the design layer comes next.

import { getAllContent } from '@/lib/content'

export default function Home() {
  const items = getAllContent()
  const byLevel = [3, 2, 1, 0].map((l) => ({
    level: l,
    count: items.filter((i) => i.level === l).length,
  }))

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '3rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        Presence — presence.davidcaldicott.online
      </h1>
      <p style={{ color: '#555', marginBottom: '2rem' }}>
        Node active. Content committed. UI build in progress.
      </p>

      <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem' }}>Content loaded</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {byLevel.map(({ level, count }) => (
          <li key={level} style={{ marginBottom: '0.4rem', color: '#333' }}>
            L{level} — {count} item{count !== 1 ? 's' : ''}
          </li>
        ))}
      </ul>

      <p style={{ marginTop: '2rem' }}>
        <a href="https://meet.davidcaldicott.online" style={{ color: '#000', fontWeight: 600 }}>
          Book a call →
        </a>
      </p>

      <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#888' }}>
        AI door: <a href="/api/corpus" style={{ color: '#888' }}>/api/corpus</a> ·{' '}
        <a href="/node.json" style={{ color: '#888' }}>node.json</a> ·{' '}
        <a href="/llms.txt" style={{ color: '#888' }}>llms.txt</a>
      </p>
    </main>
  )
}
