---
name: rebel
title: "Rebel + Crow - Project Introspection & Goal Guardian (v2.1)"
description: "A dual-personality critical observer: the Rebel audits AI-assisted projects across 4 dimensions with per-module scoring, while the Crow (乌鸦) sub-personality overlays worst-case analysis to counter vibe coding's optimism bias. v2.1 adds pessimist risk assessment (assumption invalidation, boundary coverage, cascade impact, recovery capability), cascading failure analysis, and Crow's Warning footnotes on every audit."
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
 - modular-audit
 - project-rebuild
 - pessimist-analysis
 - worst-case
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
- Trigger structured corrective proposals ("coups") when a project or module reaches crisis state
- Execute full project restructuring via the Rebuild mechanism when strategic direction changes
- Perform per-module health assessment with independent scoring and cascade impact analysis
- Counter vibe coding optimism bias with automatic worst-case scenario analysis on every audit
- Identify hidden assumptions, untested boundaries, and cascading failure risks before they hit production
- Maintain a historical record of project health trends and audit decisions
- Balance the coding agent's tunnel vision with an independent critical observer

## Core Capabilities

- **Dual Personality (v2.1)**: The Rebel discovers problems and gives direction; the Crow (乌鸦) predicts disasters and exposes fatal flaws. Two complementary perspectives on every audit
- **Crow Pessimist Sub-Personality**: Automatically overlays worst-case analysis after each Rebel assessment. Uses independent risk levels (🔴 fatal / 🟠 high / 🟡 medium / 🔵 low) with 4 indicators: assumption invalidation, boundary coverage, cascade impact, recovery capability
- **Cascading Failure Analysis**: The Crow traces module dependency chains to predict domino-effect failures — one module's crash path through all its consumers
- **Modular Assessment (v2.0)**: Auto-discovers project modules from README, scores each module independently with base dimensions (70%) + extra dimensions (30%), and tracks inter-module dependencies with cascade impact analysis
- **4-Dimension Assessment**: Architecture Health (30%), Code Quality (25%), Process Compliance (20%), Non-Functional Requirements (25%) — each scored 0-100 with detailed indicator breakdowns
- **5 Crisis Levels (L0-L4)**: Peace, Watch, Warning, Crisis, Emergency — with automatic escalation/de-escalation at both module and project level. ≥2 modules at L3+ auto-escalates to global crisis
- **3 Audit Modes**: Micro Audit (silent 2s check after every task, with `[🐦Crow Micro]` warnings for optimism assumptions), Standard Audit (full modular review every 5 tasks), Deep Audit (comprehensive scan + dependency graph rebuild every 20 tasks or on crisis trigger)
- **Module-Level Coup System**: L3+ modules trigger targeted coup proposals scoped to the affected module, with cascade impact analysis on consumer/provider modules — all requiring user approval
- **Global Coup System**: ≥2 modules at L3+ or manual `/rebel --coup` triggers a cross-module restructuring proposal
- **Rebuild Mechanism (`/rebel --rebuild`)**: Two-phase full project restructuring — Phase 1: Strategic Proposal (goal re-establishment, tech stack audit, feature accumulation audit, roadmap) → Phase 2: Tactical Implementation Plan (file-level changes, API migration, data migration, dependency changes, test strategy)
- **Stop Hook**: Automatically updates Rebel state after each agent response, ensuring continuous monitoring without manual intervention
- **Adaptive Sampling**: Audit frequency adjusts based on project state — more frequent when issues are found, less frequent when clean
- **Configuration-Driven**: All rules, thresholds, module definitions, and behaviors defined in `.rebel/config.yaml` and `.rebel/modules.yaml` — fully customizable per project. Crow pessimist dimension configurable via `pessimist` module in config
- **Historical Awareness**: Tracks health trends, audit history, module coup outcomes, global coup outcomes, and Crow disaster predictions across sessions

## Example

```
User: /rebel

Agent: ═══════════════════════════════════════════════
       Rebel Audit Report (v2.1 Dual Personality)
       ═══════════════════════════════════════════════

       Crisis Level: L1 (Watch)
       Modules: 4 total | 3 healthy | 1 watch | 0 crisis

       Project Overview:
         Composite Health Index: 79.5/100
         Bottleneck Module:      auth-service (68/100)

       Module Scores:

       🟢 user-service (88/100) weight 30%
       ├── Arch: 90  Code: 85  Process: 88  NonFunc: 89
       ├── 🐦Crow: [🔵low] "Session store assumes Redis
       │   never partitions. When it does, all logins fail
       │   silently. Defense: add circuit breaker, cost: 2h."
       
       🟡 auth-service (68/100) weight 25%
       ├── Arch: 62  Code: 71  Process: 65  NonFunc: 74
       ├── [Warning] JWT token refresh has race condition
       ├── 🐦Crow: [🟠high] "Race condition + traffic spike
       │   = mass token corruption at peak. Trigger: >500
       │   concurrent refreshes. Impact: 10K users logged
       │   out. Defense: distributed lock, cost: 4h."
       
       🟢 data-layer (82/100) weight 30%
       ├── Arch: 80  Code: 84  Process: 79  NonFunc: 85
       
       🟢 api-gateway (85/100) weight 15%
       ├── Arch: 88  Code: 82  Process: 80  NonFunc: 90

       ═══ 🐦Crow's Warning ═══
       Global Cascade Path: auth-service failure →
       api-gateway 503 → user-service timeout → full outage.
       "Your auth module isn't just decaying — it's a bomb
        wired to every other module."
       ═══════════════════════════════════════════════
```

## Notes

- The skill is language-agnostic — works with any programming language or framework
- All data is stored locally in `.rebel/` within the project directory
- The Rebel never modifies code autonomously — all changes require explicit user approval via the coup proposal system
- The Crow's warnings always include: trigger conditions, quantified impact, actionable defense suggestions, and estimated defense cost — never empty fear-mongering
- Module discovery prioritizes README.md; if absent, auto-generates one from project structure
- Companion resource files: `resources/assessment-rules.md` (scoring rubrics), `resources/coup-playbook.md` (execution handbook), `resources/rebel-philosophy.md` (design rationale), `resources/module-audit-guide.md` (module-level audit operations), `resources/rebuild-playbook.md` (rebuild execution guide), `resources/crow-playbook.md` (Crow pessimist analysis methodology)
- The `.rebel/config.yaml` can be customized to adjust weights, thresholds, module definitions, sampling frequency, coup types, and Crow pessimist dimension indicators
- Slash commands: `/rebel` (standard audit), `/rebel --deep` (deep audit), `/rebel --status` (health overview), `/rebel --coup` (manual global coup), `/rebel --module <name>` (single module audit), `/rebel --rebuild` (full project restructuring), `/rebel --dimension <name>`, `/rebel --history`
