---
name: investoday-fund-performance-attribution-analysis
title: Fund Performance Attribution Analysis
description: Explain mutual fund excess returns through stock selection, timing, allocation support, and performance sustainability analysis.
source: community
author: Investoday Data
githubUrl: https://github.com/investoday-data/investoday-fund-performance-attribution-analysis
docsUrl: https://github.com/investoday-data/investoday-fund-performance-attribution-analysis#readme
category: data
tags:
  - fund
  - performance
  - attribution
  - mutual-fund
roles:
  - finance
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/investoday-data/investoday-fund-performance-attribution-analysis
  cp -r investoday-fund-performance-attribution-analysis ~/.qoder/skills/
date: 2026-05-21
lastUpdated: 2026-05-21
---

## Use Cases

- Explain where a fund’s excess return came from
- Judge the manager’s stock selection and timing ability
- Assess whether performance looks sustainable

## Example

```text
这只基金最近一年业绩主要是怎么来的？
```

## Notes

- Install `investoday-finance-data` first because this skill depends on it for financial data access.
- The public repository contains a single skill root with `SKILL.md`, so the repository directory can be copied directly into `~/.qoder/skills/`.
- These skills are designed for Chinese-market analysis workflows and are best used with current market data.
