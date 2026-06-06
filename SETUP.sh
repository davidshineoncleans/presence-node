#!/usr/bin/env bash
# presence-node — one-shot setup: git init, GitHub repo, Vercel project, DNS guidance
# Run from inside the presence-node directory: bash SETUP.sh

set -e

REPO_NAME="presence-node"
DOMAIN="presence.davidcaldicott.online"
GH_USER=$(gh api user --jq .login 2>/dev/null || echo "")

echo ""
echo "=== Presence Node — Setup ==="
echo ""

# 1. Clean any stale .git from sandbox and re-init
if [ -d ".git" ]; then
  echo "→ Removing stale .git (created by sandbox)..."
  rm -rf .git
fi

echo "→ git init..."
git init -b main
git config user.email "davidcaldicottonline@gmail.com"
git config user.name "David Caldicott"
git add -A
git commit -m "feat: Phase 0 scaffold — Next.js 14 App Router + /content

- Next.js 14, App Router, TypeScript, Tailwind CSS
- types/content.ts: locked frontmatter schema (slug/title/level/kind/tags/published/updated/hc)
- lib/content.ts: gray-matter content loader
- app/api/corpus/route.ts: static JSON corpus index (force-static)
- /content: 6 approved public items (1xmission, 2xoffer, 3xintent)
- public/node.json: static identity handshake for agents
- public/llms.txt: agent orientation file
- Phase 0: no backend, static build from /content"

echo ""
echo "→ Creating GitHub repo (public)..."
gh repo create "$REPO_NAME" \
  --public \
  --source=. \
  --remote=origin \
  --push \
  --description "Presence — presence.davidcaldicott.online (Phase 0 static node)"

echo ""
echo "→ Deploying to Vercel..."
if ! command -v vercel &>/dev/null; then
  echo "  vercel CLI not found — installing..."
  npm install -g vercel
fi

vercel --yes --prod

echo ""
echo "→ Adding domain to Vercel project..."
vercel domains add "$DOMAIN"

echo ""
echo "=== DNS CNAME required ==="
echo ""
echo "Add this record at your DNS provider (wherever davidcaldicott.online is managed):"
echo ""
echo "  Type:  CNAME"
echo "  Name:  presence"
echo "  Value: cname.vercel-dns.com"
echo "  TTL:   auto (or 3600)"
echo ""
echo "Once DNS propagates (5–30 min), https://$DOMAIN will be live."
echo ""
echo "Vercel dashboard: https://vercel.com/dashboard"
echo "GitHub repo:      https://github.com/${GH_USER}/$REPO_NAME"
echo ""
echo "=== Done ==="
