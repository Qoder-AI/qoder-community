---
name: rebel
title: "Rebel - Project Introspection & Goal Guardian"
description: "A critical observer that audits AI-assisted projects across 4 dimensions (architecture, code quality, process compliance, non-functional requirements), tracks crisis levels (L0-L4), and proposes structured 'coup' interventions when projects go off-track. Features micro/standard/deep audits with adaptive sampling, YAML-driven configuration, and user-approved corrective actions."
source: community
author: zhengyin
githubUrl: https://github.com/MycatQieZi/rebel
category: development
tags:
 - project-health
 - code-quality
 - architecture
 - technical-debt
 - audit
 - goal-tracking
 - agent-oversight
 - methodology
roles:
 - developer
 - architect
featured: false
popular: false
isOfficial: false
installCommand: |
 git clone https://github.com/MycatQieZi/rebel
 cp -r rebel/.agents/skills/rebel ~/.qoder/skills/rebel
date: 2026-06-25
---

## Use Cases

- Monitor long-term project health during AI-assisted coding sessions
- Detect goal drift, architecture decay, and tech debt accumulation early
- Enforce coding standards and process compliance through automated audits
- Trigger structured corrective proposals ("coups") when a project reaches crisis state
- Maintain a historical record of project health trends and audit decisions
- Balance the coding agent's tunnel vision with an independent critical observer

## Core Capabilities

- **4-Dimension Assessment**: Architecture Health (30%), Code Quality (25%), Process Compliance (20%), Non-Functional Requirements (25%) — each scored 0-100 with detailed indicator breakdowns
- **5 Crisis Levels (L0-L4)**: Peace, Watch, Warning, Crisis, Emergency — with automatic escalation and de-escalation rules
- **3 Audit Modes**: Micro Audit (silent 2s check after every task), Standard Audit (full 4-dimension review every 5 tasks), Deep Audit (comprehensive scan every 20 tasks or on crisis trigger)
- **Coup Proposal System**: When crisis reaches L3+, generates structured YAML proposals with diagnosis, evidence, impact analysis, and remediation actions — all requiring user approval before execution
- **Adaptive Sampling**: Audit frequency adjusts based on project state — more frequent when issues are found, less frequent when clean
- **Configuration-Driven**: All rules, thresholds, and behaviors defined in `.rebel/config.yaml` — fully customizable per project
- **Historical Awareness**: Tracks health trends, audit history, and coup outcomes across sessions

## Example

```
User: /rebel

Agent: ═══════════════════════════════════════════════
       Rebel Audit Report (Standard Audit)
       ═══════════════════════════════════════════════
       
       Crisis Level: L1 (Watch)
       
       Health Scores:
         Architecture Health:   78/100  ↓
         Code Quality:          85/100  →
         Process Compliance:    72/100  ↓
         Non-Functional:        88/100  →
       
         Composite Health Index: 81.1/100
       
       Findings:
         [Warning] Goal drift detected in recent 5 commits
         [Warning] 3 new TODO markers added since last audit
         [Info] Naming convention mostly consistent
       
       Rebel's Voice:
       "The project is drifting. 40% of recent commits
        don't align with the stated core goal. Time to
        recalibrate before the drift becomes the new normal."
       ═══════════════════════════════════════════════
```

## Notes

- The skill is language-agnostic — works with any programming language or framework
- All data is stored locally in `.rebel/` within the project directory
- The Rebel never modifies code autonomously — all changes require explicit user approval via the coup proposal system
- Companion files include `resources/assessment-rules.md` (detailed scoring rubrics), `resources/coup-playbook.md` (execution handbook), and `resources/rebel-philosophy.md` (design rationale)
- The `.rebel/config.yaml` can be customized to adjust weights, thresholds, sampling frequency, and coup types
- Slash commands: `/rebel` (standard audit), `/rebel --deep` (deep audit), `/rebel --status` (health overview), `/rebel --coup` (manual coup), `/rebel --dimension <name>`, `/rebel --history`
