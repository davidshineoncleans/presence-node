# presence-node

> David Caldicott's Presence site — [presence.davidcaldicott.online](https://presence.davidcaldicott.online)

A Next.js 14 (App Router) site that renders David's curated public corpus at four altitudes, with a dual human/AI door.

## Status

**Phase 0 — Node:** static build from `/content`. No backend. UI build in progress.

## Structure

```
/content        — curated public corpus (.md + frontmatter)
  /offers       — L2 offer files
  /intents      — L2 intent files
/app            — Next.js App Router
  /api/corpus   — static JSON index of all content (pre-rendered at build)
/public
  node.json     — identity/offers/intents handshake for agents
  llms.txt      — agent orientation file
/types          — TypeScript content schema
/lib            — content loader (gray-matter)
```

## Content schema

Every file in `/content` uses this frontmatter:

```yaml
slug:       string
title:      string
level:      0 | 1 | 2 | 3        # altitude (L3=mission, L2=work, L1=library, L0=ground)
kind:       mission | offer | intent | essay | framework | media | now
tags:       string[]
published:  YYYY-MM-DD
updated:    YYYY-MM-DD
hc:         path/to/companion.hc  # optional HumanCode companion
```

## Dev

```bash
npm install
npm run dev
```

## Phases

| Phase | What | Status |
|-------|------|--------|
| 0 — Node | Static site + content + AI door endpoints | **Active** |
| 1 — Host | Donna agent widget + Supabase logging | Planned |
| 1.5 — A2A | Agent-to-agent reception via Donna | Planned |
| 2 — Door | Call-now + availability + verification | Planned |
| 3 — Template | Installable open-source version | Future |

## Tech

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- `gray-matter` for frontmatter parsing
- Vercel for hosting
- Supabase `oxnmcfdkifrenxogzisq` (Phase 1+)
