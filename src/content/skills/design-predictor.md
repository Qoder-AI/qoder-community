---
name: design-predictor
title: Design Predictor
description: Predict visual attention heatmaps and module-level CTR for ecommerce web/app designs before launch. Supports single-design deep diagnosis and multi-design comparison (2-4 variants). Generates HTML visual reports with heatmaps, radar charts, and actionable optimization suggestions.
source: community
author: michelleipad
githubUrl: https://github.com/michelleipad/qoderwork-skills
docsUrl: https://github.com/michelleipad/qoderwork-skills/tree/main/design-predictor
category: design
tags:
  - ecommerce
  - design-review
  - heatmap
  - ctr-prediction
  - ux-analysis
  - conversion-optimization
  - visual-attention
roles:
  - designer
  - ux-researcher
  - ecommerce-manager
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/michelleipad/qoderwork-skills
  cp -r qoderwork-skills/design-predictor ~/.qoder/skills/
date: 2026-06-08
lastUpdated: 2026-06-08
---

## Use Cases

- Predict visual attention distribution and click-through rates for ecommerce page designs before launch
- Compare 2-4 design variants side-by-side with ranked scoring and fusion recommendations
- Generate publication-quality heatmap visualizations and radar charts for design reviews
- Benchmark design performance against industry CTR standards across multiple markets (CN, JP, KR, SEA, IN)
- Identify high-impact optimization opportunities with prioritized action items

## Example

```text
帮我分析这个电商首页设计稿的点击率表现，预测用户注意力热力图。
```

```text
这里有3个版本的落地页设计，帮我对比评估哪个方案最优。
```

## Dependencies

- **heatmap-advanced**: Used for generating professional heatmap visualizations. Install from the same repository.
- **ecommerce-ctr-evaluator**: Used for CTR benchmark comparison. Install from the same repository.

## Notes

- Supports 5 Asian market adaptations (CN, JP, KR, SEA, IN) with localized benchmarks and conversion factors
- Radar chart dimensions are orthogonal with explicitly calculated scores — no subjective padding
- All reports follow strict template formatting with priority badges, ranked tabs, and colorblind-safe color schemes
- Output is a single self-contained HTML file with embedded CSS and JavaScript
