---
name: finishing-a-development-branch
title: Finishing Development Branch
description: Standard process for completing Git development branches, ensuring code quality and merge readiness
source: community
author: obra
githubUrl: https://github.com/obra/superpowers/tree/main/skills/finishing-a-development-branch
category: development
tags:
  - git
  - workflow
  - merge
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/obra/superpowers
  cp -r superpowers/skills/finishing-a-development-branch ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Wrap-up work after feature development
- Pre-merge code preparation
- Ensure branch meets merge standards
- Clean up temporary code and debug info
- Update documentation and changelog

## Core Capabilities

- **Code Cleanup**: Remove debug code and temp comments
- **Test Verification**: Ensure all tests pass
- **Documentation Update**: Sync related docs
- **Change Records**: Update CHANGELOG

## Example

```
My feature/payment branch is complete, please help with pre-merge prep:
1. Check for leftover debug code
2. Confirm test coverage is complete
3. Generate change notes
4. Prepare PR description
```

## Notes

- Rebase to latest main branch before merge
- Resolve all conflicts
- Ensure CI checks pass
- Get necessary code reviews
