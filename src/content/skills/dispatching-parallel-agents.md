---
name: dispatching-parallel-agents
title: Dispatching Parallel Agents
description: Coordinate multiple simultaneous agents for parallel task processing and workflow orchestration
source: community
author: obra
githubUrl: https://github.com/obra/superpowers/tree/main/skills/dispatching-parallel-agents
category: automation
tags:
  - agents
  - parallel
  - orchestration
  - workflow
roles:
  - developer
  - pm
  - devops
featured: true
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/obra/superpowers
  cp -r superpowers/skills/dispatching-parallel-agents ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Process multiple independent tasks in parallel
- Coordinate multi-agent collaboration
- Accelerate large-scale data processing
- Implement complex workflows
- Decompose and merge task results

## Core Capabilities

- **Task Decomposition**: Split large tasks into subtasks
- **Parallel Execution**: Run multiple agents simultaneously
- **Result Aggregation**: Merge outputs from each agent
- **Error Handling**: Handle individual agent failures

## Example

```
I need to analyze 10 competitor websites, please help me:
1. Assign tasks to parallel agents
2. Each agent analyzes one website
3. Collect results and generate comparison report

Analysis dimensions: Pricing, features, UI/UX, tech stack
```

## Notes

- Ensure tasks are parallelizable
- Consider resource limits
- Design good result merging strategies
- Handle partial failures
