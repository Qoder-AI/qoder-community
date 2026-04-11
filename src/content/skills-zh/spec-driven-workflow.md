---
name: spec-driven-workflow
title: 规格驱动工作流
description: 引导开发者在写代码之前，通过 6 阶段文档优先的开发流程（Proposal → Spec → Design → Plan → Test → Trace）完成规格定义。支持 3 种团队成熟度等级的自适应文档生成，并内置变更传播追踪。
source: community
author: Lv Zhaobo
githubUrl: https://github.com/lvzhaobo/ai-coding-skills/tree/main/skills/spec-driven-workflow
category: development
tags:
  - spec-coding
  - 文档驱动
  - 需求管理
  - 工作流
  - 方法论
  - 可追溯性
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

## 使用场景

- 启动新功能/新模块，不确定先写哪些文档
- 团队想从"直接写代码"转变为"先写规格再写代码"
- 需要建立 需求 → 设计 → 测试 → 追溯 的完整闭环
- 需求变更时，需要知道哪些文档要级联更新
- 帮助团队建立结构化的 AI 辅助开发规范

## 核心能力

- **6 阶段模型**：Meta → Proposal → Spec → Design → Plan → Test → Trace
- **13 份文档**，采用 `S{n}{x}` 命名 — 新增文档不影响已有编号
- **3 级成熟度适配**：入门版（3份核心，70%预填充）/ 标准版（全部13份，40%预填充）/ 进阶版（自主设计）
- **4 轮写作时序**：定方向 → 锁契约 → 填设计 → 闭环验证
- **变更传播链**：`S2b → S2e/S2f → S5a → S6a` — 自动级联提醒
- **协作 SKILL 集成**：可联动 `write-user-story`、`scan-api-contract`、`scan-compliance`

## 示例

```
用户：我要开始一个新需求，文档应该怎么组织？

Agent：这是 Spec-Driven Workflow 全景 — 6个阶段，13份文档：
       [输出文档全景汇总表]

       让我评估一下团队等级，3个快速问题：
       1. 团队是否用过 AI Coding 工具？
       2. 是否有"先写文档再写代码"的习惯？
       3. 团队规模和项目阶段？

用户：用过 Copilot 但没有文档方法论。8人团队，新项目。

Agent：推荐：标准版（全部13份文档，~40% AI预填充）
       写作路径：
       第一轮：S1a(Proposal) + S2a(PRD) — 定方向
       第二轮：S2b(UserStory) + S2e(API) — 锁行为契约
       ...
       开始第一轮，正在生成 S1a-Proposal.md...
```

## 注意事项

- 这是纯知识型 SKILL，不需要调用外部 API
- 文档采用 `S{阶段号}{子序号}` 命名（如 S2b-UserStory.md），新增只追加字母，不影响其他编号
- 搭配协作 SKILL 效果更佳：`write-user-story`、`scan-api-contract`、`scan-compliance`
- 包含 `reference.md` 文件，列出全部 13 份文档的最小必需章节
