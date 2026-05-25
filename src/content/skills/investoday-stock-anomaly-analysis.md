---
name: investoday-stock-anomaly-analysis
title: Stock Anomaly Analysis
description: Analyze abnormal moves in A-share stocks with a focus on price drivers, market context, sector resonance, company events, and institutional confirmation.
source: community
author: Investoday Data
githubUrl: https://github.com/investoday-data/investoday-stock-anomaly-analysis
docsUrl: https://github.com/investoday-data/investoday-stock-anomaly-analysis#readme
category: data
tags:
  - stock
  - a-share
  - price-action
  - event-driven
roles:
  - finance
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/investoday-data/investoday-stock-anomaly-analysis
  cp -r investoday-stock-anomaly-analysis ~/.qoder/skills/
date: 2026-05-21
lastUpdated: 2026-05-21
---

## Use Cases

- Explain why a stock suddenly rose or fell
- Separate market-wide moves from sector resonance or company-specific catalysts
- Review abnormal trading with institutional and market confirmation

## Example

```text
分析一下东方财富今天为什么异动上涨。
```

## Notes

- Install `investoday-finance-data` first because this skill depends on it for financial data access.
- The public repository contains a single skill root with `SKILL.md`, so the repository directory can be copied directly into `~/.qoder/skills/`.
- These skills are designed for Chinese-market analysis workflows and are best used with current market data.
