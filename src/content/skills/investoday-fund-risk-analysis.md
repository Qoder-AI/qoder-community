---
name: investoday-fund-risk-analysis
title: Fund Risk Analysis
description: Quantify mutual-fund risk through drawdown, volatility, downside risk, VaR, beta, Sharpe ratio, and risk-return matching.
source: community
author: Investoday Data
githubUrl: https://github.com/investoday-data/investoday-fund-risk-analysis
docsUrl: https://github.com/investoday-data/investoday-fund-risk-analysis#readme
category: data
tags:
  - fund
  - risk
  - drawdown
  - volatility
roles:
  - finance
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/investoday-data/investoday-fund-risk-analysis
  cp -r investoday-fund-risk-analysis ~/.qoder/skills/
date: 2026-05-21
lastUpdated: 2026-05-21
---

## Use Cases

- Analyze drawdown and volatility for a fund
- Evaluate downside risk, beta, and VaR
- Judge whether the risk-reward profile is acceptable

## Example

```text
这只基金的风险大不大，主要看哪些指标？
```

## Notes

- Install `investoday-finance-data` first because this skill depends on it for financial data access.
- The public repository contains a single skill root with `SKILL.md`, so the repository directory can be copied directly into `~/.qoder/skills/`.
- These skills are designed for Chinese-market analysis workflows and are best used with current market data.
