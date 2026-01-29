---
name: skill-creator
title: Skill Creator
description: Guide for creating skills to extend Claude's capabilities, meta-skill for building new skills
source: anthropic
author: Anthropic
githubUrl: https://github.com/anthropics/skills/tree/main/skills/skill-creator
docsUrl: https://agentskills.io
category: meta
tags:
  - meta
  - creation
  - authoring
  - development
roles:
  - developer
featured: true
popular: true
isOfficial: true
installCommand: |
  git clone https://github.com/anthropics/skills
  cp -r skills/skill-creator ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Create custom Skills
- Package specialized knowledge
- Share reusable capabilities
- Extend AI agent functionality
- Team knowledge transfer

## Core Capabilities

- **Structure Guide**: SKILL.md file specifications
- **Best Practices**: Effective skill design
- **Progressive Disclosure**: Token-efficient architecture
- **Publishing Process**: Sharing and distribution

## Example

```
Please help me create a new Skill:

Name: react-testing
Description: React component testing best practices
Purpose: Guide writing high-quality React tests

Generate a complete SKILL.md file including:
- YAML frontmatter
- Use cases
- Core instructions
- Example usage
```

## Notes

- Keep SKILL.md concise (<5000 tokens)
- Clear description for easy triggering
- Test skill effectiveness
- Reference official examples
