---
name: webapp-testing
title: Web App Testing with Playwright
description: Use Playwright for web application frontend test automation, supporting functionality verification, UI debugging, and screenshot capture
source: anthropic
author: Anthropic
githubUrl: https://github.com/anthropics/skills/tree/main/skills/webapp-testing
category: development
tags:
  - testing
  - playwright
  - automation
  - e2e
roles:
  - developer
  - devops
  - designer
featured: false
popular: true
isOfficial: true
installCommand: |
  git clone https://github.com/anthropics/skills
  cp -r skills/webapp-testing ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- End-to-end functional testing
- UI regression testing
- Cross-browser compatibility testing
- Visual testing and screenshot comparison
- User flow automation verification

## Core Capabilities

- **Browser Automation**: Simulate user actions
- **Screenshot Capture**: Save page state
- **Log Viewing**: Get browser console logs
- **Multi-browser Support**: Chrome, Firefox, Safari

## Example

```
Please help write Playwright tests for the login flow:
1. Navigate to login page
2. Enter username and password
3. Click login button
4. Verify successful redirect to homepage
5. Verify username displays correctly
```

## Notes

- Use stable selectors (data-testid)
- Add appropriate wait mechanisms
- Isolate test data
- Clean up test state
