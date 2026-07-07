---
name: thought-codec
title: ThoughtCodec
description: Bilingual AI skill library for decompressing intent into executable workflows and compressing practice back into reusable skills
source: community
author: Cottzz
githubUrl: https://github.com/Cottzz/thought-codec
docsUrl: https://github.com/Cottzz/thought-codec/blob/main/README.md
category: meta
tags:
  - skills
  - workflow
  - methodology
  - architecture
  - prompts
roles:
  - developer
  - pm
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/Cottzz/thought-codec
  mkdir -p ~/.qoder/skills
  cp -r thought-codec/skills/* ~/.qoder/skills/
date: 2026-07-07
---

## Use Cases

- Turn product or business intent into architecture, data models, API contracts, and implementation scaffolds
- Convert broad goals into auditable SOPs with milestones, deliverables, and checks
- Extract durable prompt rules from repeated feedback, corrections, and conversation traces
- Turn repeated or messy code into reusable components, clean interfaces, and engineering rules
- Build a personal AI methodology loop that connects planning, execution, review, and rule updates

## Core Capabilities

- **Architecture Scaffolding**: Decompress business logic into engineering-ready architecture and implementation structure
- **SOP Instantiation**: Convert high-level objectives into concrete operating procedures
- **Rule And Prompt Optimization**: Compress repeated feedback into reusable prompt rules or skill updates
- **Code Abstraction And Encapsulation**: Identify reusable code patterns and define safer abstraction boundaries
- **Personal Methodology Engine**: Combine decompression and compression into a sustainable personal AI workflow

## Included Skills

```
architecture-scaffolding
sop-instantiation
rule-prompt-optimizer
code-abstraction-encapsulation
personal-methodology-engine
```

## Example

```
Use the ThoughtCodec skill library.

Goal: Turn a rough product idea into an engineering-ready plan.
Context: The product needs user roles, core workflows, data state, APIs, and staged implementation.
Output: Choose the best ThoughtCodec sub-skill and produce the architecture, data model, API contract, validation checklist, and open questions.
```

## Notes

- ThoughtCodec is a bilingual skill library, with English and Simplified Chinese versions for each included skill
- Install command copies all included skill folders into `~/.qoder/skills/`
- Use the specific sub-skill that matches the task instead of treating every request as a generic prompt
- Avoid storing private, sensitive, or proprietary examples when compressing feedback into reusable rules
