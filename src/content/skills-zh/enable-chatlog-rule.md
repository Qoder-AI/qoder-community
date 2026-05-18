---
name: enable-chatlog-rule
title: 启用对话日志规则
description: 自动在 .qoder/rules 或 AGENTS.md 中注入对话日志保存规则。通过交互式配置，实现 AI 对话持久化，支持审计追溯、使用统计和团队复盘。
source: community
author: Lv Zhaobo
githubUrl: https://github.com/lvzhaobo/ai-coding-skills/tree/main/skills/enable-chatlog-rule
category: productivity
tags:
  - 对话日志
  - 审计追溯
  - 规则注入
  - 团队管理
  - 统计分析
  - chatlog
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

## 使用场景

- 项目需要追踪 AI 对话历史，用于复盘或统计
- Workshop/培训场景需要收集学员与 AI 的交互记录
- 团队要求所有 AI 操作可审计
- 统计 AI 使用频率、Token 用量、任务完成率等指标

## 核心能力

- **交互式配置**：逐步问答确认日志偏好设置
- **双写入目标**：支持 `.qoder/rules/`（推荐）或 `AGENTS.md`
- **灵活格式**：Markdown（人类可读）/ JSONL（程序可解析）/ 两者兼备
- **智能默认值**：位置、格式、存储路径均有合理默认
- **安全红线**：禁止记录密码、API Key、Token、密钥等敏感信息
- **写入验证**：创建示例日志验证配置可用

## 示例

```
用户：添加 chatlog 规则

Agent：我来帮你配置对话日志。几个确认问题：

       1. 规则写入位置？
          → .qoder/rules/chatlog-rule.md（推荐）

       2. 日志格式？
          → Markdown（人类可读）

       3. 存储路径？
          → .chatlog/

       [创建规则文件和日志目录]

       ✅ Chatlog 规则已配置！
       - 规则：.qoder/rules/chatlog-rule.md
       - 日志：.chatlog/YYYY-MM-DD-HHmm.md
       - Git：已将 .chatlog/ 加入 .gitignore
```

## 注意事项

- 纯知识型 SKILL，不需要调用外部 API
- 规则文件必须包含 `trigger: always_on` frontmatter，Qoder 才会自动加载
- 日志只追加不修改 — 已有日志文件不会被覆盖或删除
- 每条日志控制在 50 行以内（记摘要，不复制完整对话）
- 同时支持 Qoder Rules（`.qoder/rules/`）和 AGENTS.md 两种规范
