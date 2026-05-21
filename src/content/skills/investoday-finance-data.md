---
name: investoday-finance-data
title: Investoday Financial Data
description: Fetch Chinese financial market and research data across A-shares, Hong Kong stocks, funds, indices, financial statements, announcements, research reports, and macro datasets through a CLI-backed skill.
source: community
author: Investoday Data
githubUrl: https://github.com/investoday-data/investoday-finance-data
docsUrl: https://github.com/investoday-data/investoday-finance-data#readme
category: data
tags:
  - finance
  - market-data
  - a-share
  - hk-stock
  - fund
  - macro
  - research
roles:
  - finance
  - data-analyst
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/investoday-data/investoday-finance-data
  mkdir -p ~/.qoder/skills/investoday-finance-data
  cp -r investoday-finance-data/skills/. ~/.qoder/skills/investoday-finance-data/
  npm install -g @investoday/investoday-api
date: 2026-05-21
lastUpdated: 2026-05-21
---

## Use Cases

- Check recent price action for A-shares, Hong Kong stocks, indices, funds, and ETFs
- Pull company profile, financial statements, valuation metrics, and dividend history
- Review announcements, research reports, institutional views, and market news
- Explore sectors, themes, industry chains, and macroeconomic datasets
- Export structured market data for downstream analysis and comparison

## Example

```bash
# Initialize the local CLI runtime before first use
investoday-api init

# Browse available groups and leaf categories
investoday-api list
investoday-api list 沪深京数据/公司行为/基本信息

# Search APIs by keyword
investoday-api search-api query=股票,基本面分析

# Fetch data directly once the endpoint is known
investoday-api stock/basic-info stockCode=600519
```

## Notes

- This repository contains engineering assets beyond the skill itself. Only the `skills/` subdirectory should be copied into `~/.qoder/skills/investoday-finance-data/`.
- Install the companion CLI package `@investoday/investoday-api` and run `investoday-api init` before the first query.
- Prefer `investoday-api list` and `investoday-api search-api` when the exact endpoint is not yet clear.
