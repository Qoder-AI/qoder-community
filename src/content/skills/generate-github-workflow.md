---
name: generate-github-workflow
title: Generate GitHub Workflow
description: Interactively generate GitHub Actions workflow files. Supports AI code review (Qoder Action), CI testing, and ECS deployment templates with GitHub configuration guidance.
source: community
author: Lv Zhaobo
githubUrl: https://github.com/lvzhaobo/ai-coding-skills/tree/main/skills/generate-github-workflow
category: automation
tags:
  - github-actions
  - ci-cd
  - workflow
  - deployment
  - code-review
  - devops
roles:
  - developer
  - architect
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/lvzhaobo/ai-coding-skills
  cp -r ai-coding-skills/skills/generate-github-workflow ~/.qoder/skills/
date: 2026-04-11
---

## Use Cases

- Set up CI/CD pipelines for new projects
- Add AI code review (Qoder Action) to pull requests
- Automate deployment to ECS/cloud servers
- Configure code quality checks (lint/test/security)
- Demonstrate GitHub Actions in workshops

## Core Capabilities

- **3 Built-in Templates**: AI Code Review, CI Tests, Deploy to ECS
- **Interactive Q&A**: Collects project info (tech stack, branches, paths) before generation
- **Qoder Action Integration**: PR-based AI code review with size check and language config
- **GitHub Config Guide**: Outputs Secrets setup, Permissions config, and verification steps
- **Flexible Extension**: Describe any workflow need beyond templates for custom generation

## Example

```
User: Help me set up GitHub Actions for AI code review

Agent: A few questions:
       1. Main branch? → main
       2. Review language? → Chinese
       3. Skip threshold for large PRs? → 1000 lines

       [Generates .github/workflows/ai-code-review.yml]

       ✅ Workflow generated!
       Next: Configure QODER_PERSONAL_ACCESS_TOKEN in GitHub Secrets
```

## Notes

- Pure knowledge skill — generates YAML files, no external API calls
- Uses `actions/checkout@v4` and latest Action versions
- Never hardcodes secrets/tokens in YAML — always uses `${{ secrets.* }}`
- Deployment workflows include both auto-trigger and manual `workflow_dispatch`
