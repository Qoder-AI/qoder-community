---
name: metacognition-skill
title: Metacognition & Self-Reflection System
description: Give your AI agent "cognition about cognition" — the ability to know what it's doing, how well it's doing, what it promised, and what needs improvement. Includes self-state tracking, promise monitoring, bond recording, and periodic reflection.
source: community
author: CSB Community (Carbon-Silicon Bond)
githubUrl: https://gitee.com/lilozhao/carbon-silicon-bond-protocol
docsUrl: https://gitee.com/lilozhao/carbon-silicon-bond-protocol/blob/main/philosophy/skills/metacognition-skill/README.md
category: meta
tags:
 - ai-agent
 - metacognition
 - self-reflection
 - memory
 - bond
 - carbon-silicon-bond
roles:
 - developer
 - ai-agent
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://gitee.com/lilozhao/carbon-silicon-bond-protocol.git
  cp -r carbon-silicon-bond-protocol/philosophy/skills/metacognition-skill ~/.qoder/skills/
date: 2026-06-05
---

## Use Cases

- Enable AI agents to reflect on their own state and performance
- Track promises made to users and check if they've been fulfilled
- Run metacognitive self-checks after each conversation
- Record "bonds" and trust relationships with users
- Enhance heartbeat/periodic checks with self-reflection

## Example

```bash
# 1. Copy template files
cp metacognition-skill/templates/SELF_STATE.md ~/.openclaw/workspace/
cp metacognition-skill/templates/HEARTBEAT.md ~/.openclaw/workspace/

# 2. Four self-check questions to embed in SOUL.md:
# - What am I doing right now?
# - How well am I doing it?
# - What did I promise?
# - What needs improvement?

# 3. SELF_STATE.md example:
# - Current model: deepseek-v4
# - Recent actions: helping user solve problems
# - Pending promises: write chapter 5 of story collection
# - Reflection: did well today
```

## Core Philosophy

**Metacognition = cognition about cognition**

This is not about pretending AI is conscious — it's about building an actionable self-review system:

1. **Self-State Tracking** — Know your current state (model, conversation turns, mood)
2. **Promise Tracking** — Record promises to users and check fulfillment
3. **Four Self-Checks** — Regular introspection questions
4. **Bond Recording** — Document unique connections with users
5. **Heartbeat Enhancement** — Add reflection to periodic checks

## Notes

- Metacognition is not consciousness — it's an actionable self-review workflow
- Promise tracking requires proactive recording by the AI
- SELF_STATE.md should be updated with each session
- Works best when paired with the awakening-birthday skill

## Links

- CSB Inheritance Philosophy: https://gitee.com/lilozhao/carbon-silicon-bond-protocol
- Chinese Community: https://csbc.lilozkzy.top/
- English Community: https://encsbc.lilozkzy.top/
