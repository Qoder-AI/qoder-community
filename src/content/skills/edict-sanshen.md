---
name: edict-sanshen
title: Edict Sanshen (Three Departments & Six Ministries) Workflow
description: Orchestrates complex multi-step tasks using a Three Departments and Six Ministries (Sanshen Liubu) workflow with planning, mandatory audit, parallel execution, and real-time kanban dashboard
source: community
author: MycatQieZi
githubUrl: https://github.com/MycatQieZi/qoderwork-skills/tree/main/edict-sanshen
docsUrl: https://github.com/MycatQieZi/qoderwork-skills/tree/main/edict-sanshen
category: meta
tags:
  - workflow
  - multi-agent
  - orchestration
  - planning
  - kanban
  - audit
  - task-management
roles:
  - developer
  - pm
  - executive
  - operations
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/MycatQieZi/qoderwork-skills.git
  cp -r qoderwork-skills/edict-sanshen ~/.qoder/skills/
date: 2026-04-24
---

## Use Cases

- Decomposing complex tasks into manageable subtasks with mandatory planning and audit
- Multi-agent collaboration with clear role separation (Planner, Auditor, Dispatcher, Executor)
- Quality assurance through mandatory review gates before execution
- Real-time task tracking with auto-generated kanban dashboard
- Audit trail generation for compliance and retrospectives
- Parallel execution of independent subtasks by specialized agents

## Core Capabilities

- **Task Planning (Zhongshu)**: Spawns a planning subagent to decompose tasks into JSON-structured subtask plans
- **Mandatory Audit (Menxia)**: Every plan goes through a quality audit subagent; scores below 80 or critical issues trigger rework
- **Parallel Execution (Liubu)**: Groups subtasks by dependencies and executes them in parallel via subagents
- **State Machine**: Enforces strict workflow transitions (draft -> sorted -> planned -> reviewing -> approved -> dispatching -> executing -> reviewing -> completed)
- **Kanban Dashboard**: Auto-generates a single-file HTML kanban board after every state change
- **Memorial Archive**: Auto-generates Markdown audit trails with full timeline for each completed task

## Example

```
User: "Help me analyze the quarterly sales data and generate a report"

The skill will automatically:
1. Create an edict (task record) with a unique ID
2. Spawn a Zhongshu (Planner) subagent to break the task into:
   - Extract data from CSV
   - Perform statistical analysis
   - Generate charts
   - Write the report
3. Spawn a Menxia (Auditor) subagent to review the plan
4. If approved, dispatch to Liubu (Executors) in parallel
5. Collect results, generate kanban dashboard and memorial archive
6. Present the final report to the user
```

## Workflow Architecture

```
User (Emperor) -> Taizi (Sort) -> Zhongshu (Plan) -> Menxia (Audit) -> Shangshu (Dispatch) -> Liubu (Execute) -> Memorial (Archive)
```

| Role | Responsibility |
|------|---------------|
| Emperor | User who submits tasks |
| Taizi | Lightweight filtering - chat vs edict |
| Zhongshu | Task decomposition and planning |
| Menxia | Quality audit with scoring (0-100) |
| Shangshu | Dependency analysis and dispatch |
| Liubu | Parallel execution of subtasks |

## Notes

- Requires Python 3.x for the CLI scripts
- All scripts are located in the `scripts/` directory
- Kanban dashboard is a zero-dependency single HTML file
- State machine enforces legal transitions automatically
- After task completion, the kanban dashboard is automatically presented to the user
- Supports user intervention at any stage (cancel, stop, resume, show dashboard)
