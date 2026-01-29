---
name: skill-template
title: Skill Template
description: Base template for creating new skills to quickly start skill development
source: anthropic
author: Anthropic
githubUrl: https://github.com/anthropics/skills/tree/main/skills/template
category: meta
tags:
  - template
  - starter
  - boilerplate
roles:
  - developer
featured: false
popular: false
isOfficial: true
installCommand: |
  git clone https://github.com/anthropics/skills
  cp -r skills/template ~/.qoder/skills/my-new-skill
date: 2026-01-15
---

## Use Cases

- Quickly create new Skills
- Learn Skill structure
- Ensure correct format
- Team skill standardization

## Core Capabilities

- **Standard Structure**: Complete directory structure
- **Metadata Template**: YAML frontmatter
- **Instruction Placeholders**: Customizable instruction areas
- **Resource Directories**: scripts/, references/, assets/

## Basic Structure

```
my-skill/
|-- SKILL.md          # Required: Main file
|-- scripts/          # Optional: Executable code
|-- references/       # Optional: Reference documents
|-- assets/           # Optional: Resource files
```

## SKILL.md Template

```markdown
---
name: my-skill
description: Describe skill function and trigger scenarios
---

# Skill Name

[Core instructions]

## When to Use
- Scenario 1
- Scenario 2

## Instructions
1. Step 1
2. Step 2
```

## Notes

- Use lowercase and hyphens for name
- Description should be clear and specific
- Keep SKILL.md concise
- Put large files in references/
