---
name: spec-driven-workflow
title: Spec-Driven Workflow
description: Guides developers through a 6-stage document-first development process (Proposal → Spec → Design → Plan → Test → Trace) before writing any code. Supports 3 team maturity levels with adaptive document generation and change propagation tracking.
source: community
author: Lv Zhaobo
githubUrl: https://github.com/lvzhaobo/ai-coding-skills/tree/main/skills/spec-driven-workflow
category: development
tags:
  - spec-coding
  - document-first
  - requirements
  - workflow
  - methodology
  - traceability
roles:
  - developer
  - architect
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/lvzhaobo/ai-coding-skills
  cp -r ai-coding-skills/skills/spec-driven-workflow ~/.qoder/skills/
date: 2026-04-11
---

## Use Cases

- Starting a new feature/module and need to know which documents to write first
- Transitioning a team from "code-first" to "spec-first" development
- Building a complete requirements → design → test → traceability loop
- Managing document cascade updates when requirements change
- Onboarding teams to structured AI-assisted development

## Core Capabilities

- **6-Stage Model**: Meta → Proposal(+PRD) → Spec(UserStory/FSD/NFR) → Design(Arch/API/Data) → Plan → Test → Trace
- **13 Documents** with `S{n}{x}` naming — extensible without renumbering
- **3 Maturity Levels**: Starter (3 docs, 70% prefill) / Standard (13 docs, 40% prefill) / Advanced (self-design)
- **4-Round Writing Sequence**: Direction → Contract → Design → Verification
- **Change Propagation Chain**: `S2a → S3b/S3c → S5a → S6a` — automatic cascade reminders
- **Companion Skill Integration**: works with `write-user-story`, `scan-api-contract`, `scan-compliance`

## Example

```
User: I want to start a new requirement. How should I organize documents?

Agent: Here's the Spec-Driven Workflow overview — 6 stages, 13 documents:
       [Shows document overview table]

       Let me assess your team level. Three quick questions:
       1. Has your team used AI Coding tools?
       2. Do you practice "write docs before code"?
       3. Team size and project phase?

User: We've used Copilot but have no document methodology. 8 people, new project.

Agent: Recommended: Standard level (all 13 documents, ~40% AI prefill)
       Writing sequence:
       Round 1: S1a(Proposal) + S1b(PRD) — set direction
       Round 2: S2a(UserStory) + S3b(API) — lock behavior contract
       ...
       Let's start with Round 1. Generating S1a-Proposal.md...
```

## Notes

- This is a knowledge-only skill — no external API calls required
- Documents use `S{stage}{sub}` naming (e.g., S2a-UserStory.md) to allow insertion without renumbering
- Works best with companion skills: `write-user-story`, `scan-api-contract`, `scan-compliance`
- Includes a `reference.md` with minimum required sections for all 13 documents
