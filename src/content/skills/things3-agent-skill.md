---
name: things3-agent-skill
title: Things 3 Task Management
description: Things 3 task management integration for personal to-dos and project management
source: community
author: eugenepyvovarov
githubUrl: https://github.com/eugenepyvovarov/claude-skills/tree/main/things3-agent-skill
category: productivity
tags:
  - tasks
  - gtd
  - personal
  - macos
roles:
  - developer
  - pm
  - executive
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/eugenepyvovarov/claude-skills
  cp -r claude-skills/things3-agent-skill ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Personal task management
- GTD workflow
- Project planning
- Schedule management
- Review and retrospective

## Core Capabilities

- **Task Creation**: Quick to-do adding
- **Project Management**: Organize tasks into projects
- **Tag System**: Flexible categorization
- **Due Dates**: Time management

## Example

```
Please plan my work tasks for next week:

Project: Qoder Launch
Deadline: Friday

Task list:
1. Complete UI adjustments (Tuesday)
2. Test all features (Wednesday)
3. Prepare launch announcement (Thursday)
4. Go live (Friday)

Please create these tasks in Things 3.
```

## Notes

- macOS only
- Requires Things 3 installed
- Uses URL Scheme integration
- Keep task descriptions concise
