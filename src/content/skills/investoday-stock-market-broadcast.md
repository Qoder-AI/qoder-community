---
name: investoday-stock-market-broadcast
title: Stock Market Broadcast
description: Generate structured A-share market broadcasts with index performance, breadth, hot themes, and stage-based intraday commentary.
source: community
author: Investoday Data
githubUrl: https://github.com/investoday-data/investoday-stock-market-broadcast
docsUrl: https://github.com/investoday-data/investoday-stock-market-broadcast#readme
category: data
tags:
  - market
  - broadcast
  - a-share
  - sentiment
roles:
  - finance
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/investoday-data/investoday-stock-market-broadcast
  cp -r investoday-stock-market-broadcast ~/.qoder/skills/
date: 2026-05-21
lastUpdated: 2026-05-21
---

## Use Cases

- Generate morning, midday, intraday, or closing market commentary
- Summarize index performance, breadth, and hot themes
- Produce a fast market-sentiment briefing

## Example

```text
给我来一段今天午盘的盘面行情播报。
```

## Notes

- Install `investoday-finance-data` first because this skill depends on it for financial data access.
- The public repository contains a single skill root with `SKILL.md`, so the repository directory can be copied directly into `~/.qoder/skills/`.
- These skills are designed for Chinese-market analysis workflows and are best used with current market data.
