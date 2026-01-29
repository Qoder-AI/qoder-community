---
name: requesting-code-review
title: Requesting Code Review
description: Best practices for requesting code reviews, helping reviewers efficiently complete reviews
source: community
author: obra
githubUrl: https://github.com/obra/superpowers/tree/main/skills/requesting-code-review
category: development
tags:
  - code-review
  - collaboration
  - pr
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/obra/superpowers
  cp -r superpowers/skills/requesting-code-review ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Submit PR and request review
- Prepare context for reviewers
- Guide reviewers on focus areas
- Reduce cognitive load for reviewers
- Speed up review process

## Core Capabilities

- **PR Description**: Clear change explanation
- **Context Provision**: Background info and design decisions
- **Review Guidance**: Point out areas needing attention
- **Test Instructions**: How to verify changes

## Example

```
I'm submitting a PR for order system refactoring, please help:
1. Write clear PR description
2. List main change points
3. Explain reasons for design decisions
4. Provide test verification steps
5. Point out code needing focused review
```

## Notes

- Keep PR size manageable (suggest < 400 lines)
- Self-review first
- Provide enough context
- Clarify review urgency
