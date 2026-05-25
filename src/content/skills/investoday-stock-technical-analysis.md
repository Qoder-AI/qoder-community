---
name: investoday-stock-technical-analysis
title: Stock Technical Analysis
description: Analyze A-share technical structure with trend, moving averages, MACD, Bollinger Bands, volume confirmation, and support-resistance levels.
source: community
author: Investoday Data
githubUrl: https://github.com/investoday-data/investoday-stock-technical-analysis
docsUrl: https://github.com/investoday-data/investoday-stock-technical-analysis#readme
category: data
tags:
  - stock
  - technical-analysis
  - a-share
  - trend
roles:
  - finance
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/investoday-data/investoday-stock-technical-analysis
  cp -r investoday-stock-technical-analysis ~/.qoder/skills/
date: 2026-05-21
lastUpdated: 2026-05-21
---

## Use Cases

- Analyze trend, moving averages, and price-volume structure
- Identify support, resistance, and key technical signals
- Assess near-term and medium-term technical strength

## Example

```text
从技术面看一下中际旭创现在强不强。
```

## Notes

- Install `investoday-finance-data` first because this skill depends on it for financial data access.
- The public repository contains a single skill root with `SKILL.md`, so the repository directory can be copied directly into `~/.qoder/skills/`.
- These skills are designed for Chinese-market analysis workflows and are best used with current market data.
