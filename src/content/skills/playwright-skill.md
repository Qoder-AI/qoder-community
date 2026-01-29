---
name: playwright-skill
title: Playwright Automation
description: Playwright browser automation skill for end-to-end testing and web application interaction
source: community
author: lackeyjb
githubUrl: https://github.com/lackeyjb/playwright-skill
category: development
tags:
  - playwright
  - testing
  - automation
  - browser
roles:
  - developer
  - devops
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/lackeyjb/playwright-skill
  cp -r playwright-skill ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- End-to-end automation testing
- Web crawling and data scraping
- Automated form filling
- Page screenshots and PDF generation
- Performance testing

## Core Capabilities

- **Multi-browser Support**: Chromium, Firefox, WebKit
- **Page Interaction**: Click, input, wait
- **Network Interception**: Mock API responses
- **Device Emulation**: Mobile device viewport simulation

## Example

```
Please write a Playwright script to:
1. Open e-commerce website
2. Search for specific product
3. Add to cart
4. Screenshot and save results
5. Export product information
```

## Notes

- Use explicit waits instead of fixed delays
- Handle popups and iframes
- Be aware of anti-scraping measures
- Set reasonable timeouts
