---
name: enable-chatlog-rule
title: Enable Chatlog Rule
description: Auto-inject a conversation logging rule into .qoder/rules or AGENTS.md. Enables AI conversation persistence for auditing, statistics, and team retrospectives through interactive configuration.
source: community
author: Lv Zhaobo
githubUrl: https://github.com/lvzhaobo/ai-coding-skills/tree/main/skills/enable-chatlog-rule
category: productivity
tags:
  - chatlog
  - conversation-log
  - audit
  - rules
  - traceability
  - team-management
roles:
  - developer
  - architect
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/lvzhaobo/ai-coding-skills
  cp -r ai-coding-skills/skills/enable-chatlog-rule ~/.qoder/skills/
date: 2026-04-11
---

## Use Cases

- Track AI conversation history for team retrospectives and statistics
- Collect student-AI interaction records in workshop/training scenarios
- Enable audit trails for all AI operations in a project
- Measure AI usage frequency, token consumption, and task completion rates

## Core Capabilities

- **Interactive Setup**: Step-by-step Q&A to configure logging preferences
- **Dual Injection Targets**: Write to `.qoder/rules/` (recommended) or `AGENTS.md`
- **Flexible Formats**: Markdown (human-readable) or JSONL (machine-parseable) or both
- **Smart Defaults**: Sensible defaults for location, format, and storage path
- **Security Guardrails**: Never log passwords, API keys, tokens, or secrets
- **Verification**: Creates a sample log entry to validate the setup works

## Example

```
User: Add chatlog rule to my project

Agent: I'll help you set up conversation logging. A few questions:

       1. Where to inject the rule?
          → .qoder/rules/chatlog-rule.md (recommended)

       2. Log format?
          → Markdown (human-readable)

       3. Storage path?
          → .chatlog/

       [Creates rule file and chatlog directory]

       ✅ Chatlog rule configured!
       - Rule: .qoder/rules/chatlog-rule.md
       - Logs: .chatlog/YYYY-MM-DD-HHmm.md
       - Git: Added .chatlog/ to .gitignore
```

## Notes

- Pure knowledge skill — no external API calls required
- Rule file must include `trigger: always_on` frontmatter for Qoder to auto-load
- Logs are append-only — existing log files are never modified or deleted
- Each log entry should be under 50 lines (summary, not full conversation)
- Works with both Qoder Rules (`.qoder/rules/`) and AGENTS.md conventions
