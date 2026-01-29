---
name: n8n-workflow-patterns
title: n8n Workflow Patterns
description: n8n workflow patterns including webhook, HTTP, database, and AI task automation patterns
source: community
author: czlonkowski
githubUrl: https://github.com/czlonkowski/n8n-claude-skills/tree/main/n8n-workflow-patterns
category: automation
tags:
  - n8n
  - workflow
  - automation
  - integration
roles:
  - developer
  - devops
  - marketer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/czlonkowski/n8n-claude-skills
  cp -r n8n-claude-skills/n8n-workflow-patterns ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Build automation workflows
- Integrate multiple services and APIs
- Handle webhook-triggered tasks
- Data synchronization and transformation
- AI-driven automation

## Core Capabilities

- **Webhook Handling**: Receive and process external events
- **HTTP Integration**: Call various REST APIs
- **Database Operations**: Read/write databases
- **AI Tasks**: Integrate LLM capabilities

## Example

```
Please help design an n8n workflow:
1. Listen for GitHub webhook (new Issue created)
2. Use AI to analyze Issue content
3. Auto-add labels
4. Create Linear task if it's a bug
5. Send Slack notification
```

## Notes

- Handle error cases properly
- Set reasonable timeouts
- Be aware of API rate limits
- Test various edge cases
