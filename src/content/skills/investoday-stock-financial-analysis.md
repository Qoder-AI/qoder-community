---
name: investoday-stock-financial-analysis
title: Stock Financial Analysis
description: Review financial quality for A-share stocks through profitability, earnings quality, growth durability, cash flow, and balance-sheet safety.
source: community
author: Investoday Data
githubUrl: https://github.com/investoday-data/investoday-stock-financial-analysis
docsUrl: https://github.com/investoday-data/investoday-stock-financial-analysis#readme
category: data
tags:
  - stock
  - financials
  - a-share
  - fundamentals
roles:
  - finance
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/investoday-data/investoday-stock-financial-analysis
  cp -r investoday-stock-financial-analysis ~/.qoder/skills/
date: 2026-05-21
lastUpdated: 2026-05-21
---

## Use Cases

- Analyze profitability and earnings quality
- Check cash flow, solvency, and balance-sheet safety
- Judge whether growth and financial structure are sustainable

## Example

```text
帮我看下美的集团的财务质量怎么样。
```

## Notes

- Install `investoday-finance-data` first because this skill depends on it for financial data access.
- The public repository contains a single skill root with `SKILL.md`, so the repository directory can be copied directly into `~/.qoder/skills/`.
- These skills are designed for Chinese-market analysis workflows and are best used with current market data.
