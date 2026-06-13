---
name: omem
title: OMem — Local Work Memory for AI Agents
description: Give your AI agent your real work context — a local wiki auto-built from your emails, calendar, documents, and notes — so it answers from your history, not guesses.
source: community
author: Xichang (Seacen) Zhao
githubUrl: https://github.com/seacen/omem
docsUrl: https://seacen.github.io/omem/
category: productivity
tags:
  - memory
  - context
  - local-first
  - office
  - search
  - rag
roles:
  - developer
  - pm
  - knowledge-worker
featured: false
popular: false
isOfficial: false
installCommand: |
  # 1. Install the OMem binary (macOS), then run `omem setup`:
  curl -fsSL https://github.com/seacen/omem/releases/latest/download/install.sh | sh
  # 2. Install the skill into Qoder:
  git clone https://github.com/seacen/omem
  cp -r omem/skills/omem ~/.qoder/skills/
date: 2026-06-07
---

## Use Cases

- Answer questions from your real work history — past meetings, colleagues, project codenames, vendor/contract details — instead of generic guesses.
- "What did we decide about the Q3 budget?" / "Find that doc Alice sent last week" / "What's on my calendar with the Acme team?"
- Ground any agent task in your own context: drafting a reply, prepping for a meeting, summarizing a thread, recalling an internal acronym.
- Local-first and agent-neutral: your memory stays on your machine and works across agents — nothing is uploaded to a third-party service.

## Core Capabilities

- **Unified local wiki**: OMem ingests mail, calendar, local files (OneDrive / Dropbox / iCloud Drive / any folder), and collaboration notes into one queryable, locally-indexed wiki — the single source of truth.
- **Auto-triggering**: the skill knows *when* to look something up, so you don't have to remind your agent that your work history exists.
- **Progressive disclosure (L0–L3)**: query → page → parsed source → raw source, so the agent reads only as deep as it needs.
- **Deterministic, high-quality parsing**: every format (docx / pdf / pptx / xlsx / email …) has a dedicated parser, so the agent reads accurately and content-addressed caching skips re-doing LLM work.
- **Chinese as a first-class citizen**: jieba tokenization, cross-language retrieval, verbatim recall.
- **Read-only by design**: the skill only ever *reads* your memory (query / page / raw); it never ingests, deletes, or reconfigures — those stay user actions.

## Example

```
You: What did we agree on for Project Atlas pricing?

Agent (uses the OMem skill):
  → omem query "Project Atlas pricing decision" --format json --limit 20
  → omem page get <page_id>
  Finds the relevant thread / doc in your local wiki, reads it,
  and answers with the actual decision — citing the source page —
  instead of guessing.
```

## Notes

- **Requires the OMem binary** (macOS, installed via the curl command above) plus a one-time `omem setup` to connect your sources. The skill is a thin read-only wrapper over that local CLI.
- The skill exposes 6 read-only operations: `query`, `page_get`, `raw_get_path`, `raw_get_parsed_path`, `wiki_ls`, `doctor`. It never runs `setup` / `ingest` / `lint` / `index rebuild` — those are user actions.
- **Other agents** (Claude Code, Cursor, Codex, Cline, …): install the same skill cross-platform with `npx skills add seacen/omem --global`, or use the MCP path (`omem mcp`) for agents without a skill mechanism.
- Docs: https://seacen.github.io/omem/ · 中文文档: https://seacen.github.io/omem/zh-cn/
