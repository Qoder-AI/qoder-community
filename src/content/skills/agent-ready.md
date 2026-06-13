---
name: agent-ready
title: Agent Ready - AI Agent-Readability Scanner & Spec Validator
description: Teach AI agents to scan any public URL for AI agent-readability against the Vercel Agent Readability Spec, the llmstxt.org standard, and the agent-protocol manifests (MCP server cards, A2A, agents.json, agent-permissions.json, UCP, x402, NLWeb) - returning a 0-100 score, a per-check breakdown, and a plain-English fix for every issue. Ships three interchangeable skills - a REST API, a Node CLI, and an MCP server - so it fits however your agent is wired.
source: community
author: Mark Lavercombe
githubUrl: https://github.com/mlava/agent-ready-skills
docsUrl: https://agent-ready.dev
category: development
tags:
  - agent-readability
  - llms-txt
  - structured-data
  - mcp
  - a2a
  - seo
  - web-scanning
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  # Install all three skills (host-agnostic; auto-detects ~/.qoder/skills, Cursor, Claude Code, etc.)
  npx -y skills@latest add mlava/agent-ready-skills

  # Or install just the REST skill (leanest dependency surface)
  npx -y skills@latest add mlava/agent-ready-skills/skills/agent-ready-api
date: 2026-06-13
---

## Use Cases

- Scan any public URL for AI agent-readability and get a 0-100 score with a per-check breakdown across Site, Page, llms.txt, and Protocol checks.
- Check a site against the Vercel Agent Readability Spec and the llmstxt.org standard, with a plain-English fix for every failing check.
- Validate agent-protocol manifests at their well-known paths - MCP server cards (SEP-1649), A2A agent cards, agents.json, agent-permissions.json, UCP, x402, and NLWeb.
- Poll a long-running scan by id, fetch the full result, or list a site's scan history.
- Ask a natural-language question over Agent Ready's own methodology, check registry, and the specs it validates (public NLWeb `/ask`, no key required).
- Gate a CI step or pre-deploy check on a site's agent-readability score.

## Example

```bash
# Start a scan via the REST API (free key from agent-ready.dev/dashboard/api-keys)
curl -X POST https://agent-ready.dev/api/v1/scans \
  -H "Authorization: Bearer $AGENT_READY_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'

# Public, no key: ask a question over Agent Ready's methodology, checks, and specs
curl -X POST https://agent-ready.dev/api/v1/ask \
  -H "Content-Type: application/json" \
  -d '{"query":"what does the llms.txt check require?"}'
```

## Notes

- Three interchangeable skills are bundled - `agent-ready-api` (REST, leanest surface), `agent-ready-cli` (Node >=20, the `agent-ready` command: scan / get / list / ask), and `agent-ready-mcp` (host has the MCP server connected: `scan_site` / `get_scan` / `ask`). All expose the same surface; pick the one that matches how your agent is wired.
- A free API key (agent-ready.dev/dashboard/api-keys) authorizes scans across all three surfaces; the natural-language `ask` endpoint is public and needs no key. Only public URLs are scanned - private, local, and reserved addresses are refused.
- Per-skill install needs the `/skills/<name>` path segment, e.g. `npx skills add mlava/agent-ready-skills/skills/agent-ready-mcp`; the bare-name form (`mlava/agent-ready-skills`) installs all three.
- Browse the rendered skills on skills.sh: https://www.skills.sh/mlava/agent-ready-skills
