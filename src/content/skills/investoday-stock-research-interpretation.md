---
name: investoday-stock-research-interpretation
title: Stock Research Interpretation
description: Interpret A-share sell-side research through rating changes, core thesis, upside/downside drivers, and consensus alignment.
source: community
author: Investoday Data
githubUrl: https://github.com/investoday-data/investoday-stock-research-interpretation
docsUrl: https://github.com/investoday-data/investoday-stock-research-interpretation#readme
category: data
tags:
  - stock
  - research-report
  - a-share
  - consensus
roles:
  - finance
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/investoday-data/investoday-stock-research-interpretation
  cp -r investoday-stock-research-interpretation ~/.qoder/skills/
date: 2026-05-21
lastUpdated: 2026-05-21
---

## Use Cases

- Summarize the core thesis from sell-side reports on a stock
- Track rating changes, target prices, and consensus views
- Judge whether upside and downside look balanced

## Example

```text
最近机构对中芯国际的观点有哪些变化？
```

## Notes

- Install `investoday-finance-data` first because this skill depends on it for financial data access.
- The public repository contains a single skill root with `SKILL.md`, so the repository directory can be copied directly into `~/.qoder/skills/`.
- These skills are designed for Chinese-market analysis workflows and are best used with current market data.
