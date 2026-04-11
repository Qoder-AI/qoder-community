---
name: generate-qoder-hooks
title: Generate Qoder Hooks
description: Interactively generate Qoder Hooks command interception scripts. Supports preset security templates (basic, financial compliance, workshop) and custom patterns with audit logging.
source: community
author: Lv Zhaobo
githubUrl: https://github.com/lvzhaobo/ai-coding-skills/tree/main/skills/generate-qoder-hooks
category: security
tags:
  - hooks
  - command-filter
  - security
  - audit
  - qoder-config
  - devops
roles:
  - developer
  - architect
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/lvzhaobo/ai-coding-skills
  cp -r ai-coding-skills/skills/generate-qoder-hooks ~/.qoder/skills/
date: 2026-04-11
---

## Use Cases

- Set up command security policies for new projects
- Customize command blocklists (e.g., block `rm -rf`, `DROP TABLE`, `git push --force`)
- Demonstrate Hooks interception in workshops/training
- Add financial compliance command filtering rules
- Generate cross-platform scripts (Shell + PowerShell)

## Core Capabilities

- **4 Preset Scenarios**: Basic Security, Financial Compliance, Workshop, Custom
- **Interactive Q&A**: Collects interception patterns and script type preferences
- **Dual Script Output**: Shell (.sh) and PowerShell (.ps1) templates
- **Audit Logging**: Blocked commands logged with timestamp and rule name
- **settings.json Integration**: Auto-updates `hooks.before_run_command` config
- **Safe by Design**: Scripts only match patterns — never execute commands themselves

## Example

```
User: Help me set up command interception for our project

Agent: Which security scenario?
       → Basic Security (rm -rf, git push --force, DROP TABLE, etc.)

       Script type?
       → Cross-platform (Shell + PowerShell)

       [Generates .qoder/hooks/block-dangerous.sh + .ps1]
       [Updates .qoder/settings.json]

       ✅ Hooks generated! Try running a blocked command to verify.
```

## Notes

- Pure knowledge skill — generates scripts and config, no external API calls
- Hook scripts use `exit 0` (pass) or `exit 2` (block) — no other exit codes
- Scripts read Qoder JSON input from stdin via `jq`
- Read-only commands (`ls`, `cat`, `git status`) are never blocked
- Existing settings.json entries are preserved — new hooks are appended
