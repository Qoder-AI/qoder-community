---
name: investoday-fund-comprehensive-diagnosis
title: Fund Comprehensive Diagnosis
description: Provide a full mutual-fund diagnosis covering return profile, risk-return fit, holdings structure, manager traits, fees, and dividend behavior.
source: community
author: Investoday Data
githubUrl: https://github.com/investoday-data/investoday-fund-comprehensive-diagnosis
docsUrl: https://github.com/investoday-data/investoday-fund-comprehensive-diagnosis#readme
category: data
tags:
  - fund
  - diagnosis
  - portfolio
  - mutual-fund
roles:
  - finance
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/investoday-data/investoday-fund-comprehensive-diagnosis
  cp -r investoday-fund-comprehensive-diagnosis ~/.qoder/skills/
date: 2026-05-21
lastUpdated: 2026-05-21
---

## Use Cases

- Run a full health check on a mutual fund
- Inspect holdings, manager traits, and fee profile
- Support hold-or-review decisions with a structured diagnosis

## Example

```text
帮我综合诊断一下易方达蓝筹精选。
```

## Notes

- Install `investoday-finance-data` first because this skill depends on it for financial data access.
- The public repository contains a single skill root with `SKILL.md`, so the repository directory can be copied directly into `~/.qoder/skills/`.
- These skills are designed for Chinese-market analysis workflows and are best used with current market data.
