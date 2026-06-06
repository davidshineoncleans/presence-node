// Presence content model — frontmatter schema (locked, Phase 0)
// Source: presence-plan_PLAN_2026-06-05.md § 4.2

export type ContentLevel = 0 | 1 | 2 | 3

export type ContentKind =
  | 'mission'
  | 'offer'
  | 'intent'
  | 'essay'
  | 'framework'
  | 'media'
  | 'now'

export interface ContentFrontmatter {
  slug: string
  title: string
  level: ContentLevel
  kind: ContentKind
  tags: string[]
  published: string  // ISO date YYYY-MM-DD
  updated: string    // ISO date YYYY-MM-DD
  hc?: string        // relative path to .hc companion in /content
}

export interface ContentItem extends ContentFrontmatter {
  body: string       // raw markdown body (after frontmatter)
}
