---
name: investoday-stock-valuation-analysis
title: Stock Valuation Analysis
description: Evaluate A-share stock valuations through PE, PB, PS, PEG, historical percentile, peer comparison, and valuation-fit analysis.
source: community
author: Investoday Data
githubUrl: https://github.com/investoday-data/investoday-stock-valuation-analysis
docsUrl: https://github.com/investoday-data/investoday-stock-valuation-analysis#readme
category: data
tags:
  - stock
  - valuation
  - a-share
  - fundamentals
roles:
  - finance
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/investoday-data/investoday-stock-valuation-analysis
  cp -r investoday-stock-valuation-analysis ~/.qoder/skills/
date: 2026-05-21
lastUpdated: 2026-05-21
---

## Use Cases

- Judge whether a stock looks expensive or cheap today
- Inspect historical valuation percentile and peer comparisons
- Assess whether growth supports the current multiple

## Example

```text
宁德时代现在估值贵不贵？
```

## Notes

- Install `investoday-finance-data` first because this skill depends on it for financial data access.
- The public repository contains a single skill root with `SKILL.md`, so the repository directory can be copied directly into `~/.qoder/skills/`.
- These skills are designed for Chinese-market analysis workflows and are best used with current market data.
