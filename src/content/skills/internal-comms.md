---
name: internal-comms
title: Internal Communications
description: Write various internal communication documents including status reports, leadership updates, 3P updates, newsletters, FAQs, and incident reports
source: anthropic
author: Anthropic
githubUrl: https://github.com/anthropics/skills/tree/main/skills/internal-comms
category: document
tags:
  - communication
  - reports
  - newsletter
  - updates
roles:
  - pm
  - executive
  - hr
  - marketer
featured: false
popular: true
isOfficial: true
installCommand: |
  git clone https://github.com/anthropics/skills
  cp -r skills/internal-comms ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Weekly reports and project status updates
- 3P updates (Progress, Plans, Problems)
- Company-wide announcements
- Incident reports and postmortems
- Team newsletters and culture content

## Core Capabilities

- **Templated Writing**: Use company standard formats
- **Information Distillation**: Simplify complex info into clear points
- **Audience Adaptation**: Adjust tone and detail level for different readers
- **Consistency**: Maintain unified communication style

## Example

```
Please help me write this week's 3P update:

Progress:
- Completed user auth module refactoring
- Performance optimization improved 30%

Plans:
- Start payment system integration next week
- Prepare for tech review meeting

Problems:
- Third-party API response delays
- Need additional testing resources
```

## Notes

- Adjust tone based on company culture
- Keep it concise, highlight key points
- Handle sensitive information appropriately
