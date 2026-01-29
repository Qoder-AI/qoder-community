---
name: using-git-worktrees
title: Git Worktrees Management
description: Manage multiple Git worktrees to work on multiple branches simultaneously without switching
source: community
author: obra
githubUrl: https://github.com/obra/superpowers/tree/main/skills/using-git-worktrees
category: development
tags:
  - git
  - workflow
  - productivity
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/obra/superpowers
  cp -r superpowers/skills/using-git-worktrees ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Work on multiple feature branches simultaneously
- Handle urgent fixes without interrupting current work
- Compare code across different branches
- Run tests on multiple versions in parallel
- Keep local changes during code review

## Core Capabilities

- **Create Worktrees**: Create independent directories for branches
- **Manage Worktrees**: List, switch, delete worktrees
- **Best Practices**: Worktree organization and naming conventions

## Example

```
I'm developing on feature/auth branch, suddenly need to fix
an urgent bug on main branch.

Please help:
1. Create a new worktree for hotfix
2. Complete fix without affecting current work
3. Clean up worktree after completion
```

## Notes

- Worktrees share the same .git directory
- Don't checkout same branch in multiple worktrees
- Regularly clean up unneeded worktrees
