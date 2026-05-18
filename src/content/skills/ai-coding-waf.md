---
name: ai-coding-waf
title: AI Coding WAF Maturity Assessment
description: Visual interactive AI Coding maturity assessment. Launches an embedded browser UI with step-by-step forms, radar charts, and one-click Markdown report export. Based on the WAF 6-pillar model with L1-L5 behavioral anchors.
source: community
author: Lv Zhaobo
githubUrl: https://github.com/lvzhaobo/ai-coding-skills/tree/main/skills/ai-coding-waf
category: development
tags:
  - assessment
  - maturity-model
  - ai-coding
  - visualization
  - radar-chart
  - team-evaluation
roles:
  - developer
  - architect
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/lvzhaobo/ai-coding-skills
  cp -r ai-coding-skills/skills/ai-coding-waf ~/.qoder/skills/
date: 2026-04-11
---

## Use Cases

- Assess your team's AI Coding maturity level (L1~L5)
- Visualize strengths and weaknesses across 6 pillars with radar charts
- Generate a structured Markdown assessment report for sharing
- Identify the weakest pillar and get a 90-day improvement roadmap
- Facilitate team workshops on AI-assisted development adoption

## Core Capabilities

- **6-Pillar WAF Model**: Comprehensive assessment across 6 dimensions
- **Interactive Browser UI**: Step-by-step form with progress bar
- **Behavioral Anchors**: L1~L5 descriptors for each pillar
- **Gate Questions**: Quick 4-question screening to estimate level
- **Radar Chart**: Canvas-rendered visualization of pillar scores
- **Barrel Principle**: Overall level determined by the weakest pillar
- **90-Day Roadmap**: Improvement timeline based on weakest area
- **Markdown Report**: One-click copy of complete assessment report

## Example

```
User: Assess our team's AI Coding level

Agent: [Opens interactive assessment page in preview browser]
       The assessment page is now open. Follow these 4 steps:
       1. Basic Info — Team name, size, tool usage duration
       2. Gate Questions — 4 quick questions to estimate level
       3. Six-Pillar Assessment — Select L1~L5 anchors per pillar
       4. Report — View radar chart and improvement path

       Click "📋 Copy to Clipboard" when done to get the Markdown report.
```

## Notes

- Requires Python 3 to start a local HTTP server (no external API calls)
- All assessment logic runs client-side in pure HTML/CSS/JS
- Assessment rules follow the WAF 6-pillar model with barrel principle scoring
- Works alongside the chat-based version (`ai-coding-maturity-assess`) with identical logic
