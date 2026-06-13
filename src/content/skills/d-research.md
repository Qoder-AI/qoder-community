---
name: d-research
title: D Research - Auditable Deep Research and Public-Data Toolkit
description: Production-grade, browser-first research skill for source-backed investigations, lawful public-data collection, literature reviews, due diligence, policy and standards analysis, and long-horizon research. Includes evidence ledgers, contradiction checks, source scoring, PRISMA workflows, citation tools, extraction helpers, archives, reproducibility gates, and offline evaluations.
source: community
author: d-init-d
githubUrl: https://github.com/d-init-d/d-research-skill
docsUrl: https://github.com/d-init-d/d-research-skill#readme
category: data
tags:
  - deep-research
  - web-research
  - public-data
  - evidence-ledger
  - literature-review
  - citations
  - playwright
  - reproducibility
roles:
  - developer
  - data-analyst
  - legal
  - finance
featured: false
popular: false
isOfficial: false
installCommand: |
  # Recommended: install with the Skills CLI
  npx -y skills@latest add d-init-d/d-research-skill --skill d-research -a qoder

  # Manual alternative
  git clone --depth 1 https://github.com/d-init-d/d-research-skill.git ~/.qoder/skills/d-research
date: 2026-06-13
---

## Use Cases

- Run broad, source-backed web research with explicit source mapping, query expansion, evidence collection, contradiction checks, and confidence reporting.
- Collect lawful public data from websites, APIs, PDFs, spreadsheets, archives, academic databases, and user-provided read-only databases.
- Conduct literature reviews and PRISMA 2020 systematic reviews with screening logs, citation resolution, citation-graph expansion, and bibliography exports.
- Perform technical, market, policy, standards, due-diligence, and public-risk research while separating verified facts, inferences, red flags, and unresolved gaps.
- Manage long-running investigations with reviewable research plans, execution gates, context budgets, checkpoints, and reproducible workspace artifacts.
- Produce auditable evidence ledgers, source-quality scores, blocker reports, coverage maps, signed outputs, and Markdown, HTML, PDF, or DOCX reports.

## Example

After installation, invoke the skill directly or describe a matching research task:

```text
/d-research Compare the leading open-source browser automation frameworks.
Use primary sources, verify current versions, record contradictory claims,
and produce an evidence ledger with a concise recommendation.
```

For a systematic review:

```text
/d-research Run a PRISMA-style review of recent research on retrieval-augmented
generation evaluation. Include search strings, screening criteria, a citation
graph, evidence table, limitations, and reproducibility notes.
```

## Core Capabilities

- Browser-first probing and bounded crawling with Playwright guidance and helper scripts
- Public API, GraphQL, SPARQL, Wikidata, academic database, archive, and file workflows
- Evidence ledgers with claim-level provenance, contradiction status, confidence, and optional HMAC signing
- DOI, PMID, arXiv, and ISBN resolution plus BibTeX, RIS, and multi-style citation rendering
- HTML table, PDF, OCR, DOCX, EPUB, XLSX, mbox, JSON-LD, microdata, RDFa, sitemap, and feed extraction
- Data cleaning, near-duplicate detection, semantic retrieval, citation graphs, source scoring, and report generation
- Research-plan protocol for investigations that exceed one model context window
- Offline regression and frontier evaluation suites covering the skill's research capabilities

## Notes

- The skill is read-only by default and explicitly forbids bypassing logins, paywalls, captchas, rate limits, robots restrictions, or other access controls.
- The repository contains `SKILL.md` plus supporting references, adapters, templates, examples, scripts, configuration, and offline evaluations. Qoder supports Skills with auxiliary files and scripts.
- Core Python helpers target Python 3.10+ and are largely standard-library based. Browser automation uses Node.js and Playwright; some advanced extraction, translation, OCR, and embedding features have optional dependencies.
- Current release: `v3.1.1`.
- License: Creative Commons Attribution-NonCommercial 4.0 International (`CC BY-NC 4.0`).
