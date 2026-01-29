---
name: linear-claude-skill
title: Linear Project Management
description: Use MCP tools to manage Linear issues and projects for workflow automation
source: community
author: wrsmith108
githubUrl: https://github.com/wrsmith108/linear-claude-skill
category: productivity
tags:
  - linear
  - project
  - issues
  - workflow
roles:
  - developer
  - pm
  - devops
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/wrsmith108/linear-claude-skill
  cp -r linear-claude-skill ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Issue creation and management
- Project progress tracking
- Sprint planning
- Workflow automation
- Team collaboration

## Core Capabilities

- **Issue Operations**: Create, update, close
- **Project Management**: View project status
- **Label Classification**: Auto-labeling
- **Status Flow**: Automated status changes

## Example

```
Please create the following tasks in Linear:

Project: Qoder 2.0
Sprint: Current Sprint

Tasks:
1. Implement user auth module [High, Backend]
2. Design new landing page [Medium, Design]
3. Write API documentation [Low, Documentation]

Each task should include a brief description.
```

## Notes

- Requires Linear API key
- Ensure project permissions
- Follow team workflow conventions
- Keep issue descriptions clear
