---
name: investoday-stock-message-analysis
title: Stock Message Interpretation
description: Interpret recent stock news and event signals by combining sentiment, institutional validation, and market feedback for A-share names.
source: community
author: Investoday Data
githubUrl: https://github.com/investoday-data/investoday-stock-message-analysis
docsUrl: https://github.com/investoday-data/investoday-stock-message-analysis#readme
category: data
tags:
  - stock
  - news
  - event-driven
  - a-share
roles:
  - finance
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/investoday-data/investoday-stock-message-analysis
  cp -r investoday-stock-message-analysis ~/.qoder/skills/
date: 2026-05-21
lastUpdated: 2026-05-21
---

## Use Cases

- Interpret the impact of a news item or announcement on a stock
- Summarize recent sentiment and market validation
- Separate short-term catalysts from deeper thesis changes

## Example

```text
这条消息对寒武纪是利好还是利空？
```

## Notes

- Install `investoday-finance-data` first because this skill depends on it for financial data access.
- The public repository contains a single skill root with `SKILL.md`, so the repository directory can be copied directly into `~/.qoder/skills/`.
- These skills are designed for Chinese-market analysis workflows and are best used with current market data.
