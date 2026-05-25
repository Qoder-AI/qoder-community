---
name: investoday-sector-research-interpretation
title: Sector Research Interpretation
description: Interpret sector, industry, and theme research by summarizing sell-side consensus, key logic, representative directions, and disagreement points.
source: community
author: Investoday Data
githubUrl: https://github.com/investoday-data/investoday-sector-research-interpretation
docsUrl: https://github.com/investoday-data/investoday-sector-research-interpretation#readme
category: data
tags:
  - sector
  - research-report
  - industry
  - theme
roles:
  - finance
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/investoday-data/investoday-sector-research-interpretation
  cp -r investoday-sector-research-interpretation ~/.qoder/skills/
date: 2026-05-21
lastUpdated: 2026-05-21
---

## Use Cases

- Summarize sell-side consensus for a sector or theme
- Extract the core logic and representative directions
- Identify the main disagreement points and risks

## Example

```text
最近算力板块的卖方共识和分歧点是什么？
```

## Notes

- Install `investoday-finance-data` first because this skill depends on it for financial data access.
- The public repository contains a single skill root with `SKILL.md`, so the repository directory can be copied directly into `~/.qoder/skills/`.
- These skills are designed for Chinese-market analysis workflows and are best used with current market data.
