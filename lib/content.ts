import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { ContentFrontmatter, ContentItem, ContentKind, ContentLevel } from '@/types/content'

const CONTENT_DIR = path.join(process.cwd(), 'content')

// Recursively collect all .md files under /content
function collectMdFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files: string[] = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...collectMdFiles(full))
    } else if (entry.name.endsWith('.md')) {
      files.push(full)
    }
  }
  return files
}

function parseContentFile(filepath: string): ContentItem {
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    ...(data as ContentFrontmatter),
    body: content.trim(),
  }
}

// --- Public API ---

export function getAllContent(): ContentItem[] {
  return collectMdFiles(CONTENT_DIR).map(parseContentFile)
}

export function getContentByLevel(level: ContentLevel): ContentItem[] {
  return getAllContent().filter((item) => item.level === level)
}

export function getContentByKind(kind: ContentKind): ContentItem[] {
  return getAllContent().filter((item) => item.kind === kind)
}

export function getContentBySlug(slug: string): ContentItem | undefined {
  return getAllContent().find((item) => item.slug === slug)
}

// Corpus index — shape served at /api/corpus
export function getCorpusIndex() {
  return getAllContent().map(({ slug, title, level, kind, tags, published, updated, hc }) => ({
    slug,
    title,
    level,
    kind,
    tags,
    published,
    updated,
    hc: hc ?? null,
  }))
}
