---
name: generate-qoder-hooks
title: 生成 Qoder Hooks 命令拦截
description: 交互式生成 Qoder Hooks 命令拦截脚本。支持基础安全、金融合规、Workshop 教学等预设模板和自定义模式，内置审计日志记录。
source: community
author: Lv Zhaobo
githubUrl: https://github.com/lvzhaobo/ai-coding-skills/tree/main/skills/generate-qoder-hooks
category: security
tags:
  - 命令拦截
  - 安全策略
  - Hooks
  - 审计日志
  - Qoder配置
  - DevOps
roles:
  - developer
  - architect
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/lvzhaobo/ai-coding-skills
  cp -r ai-coding-skills/skills/generate-qoder-hooks ~/.qoder/skills/
date: 2026-04-11
---

## 使用场景

- 新项目初始化命令安全策略
- 定制命令黑名单（如禁止 `rm -rf`、`DROP TABLE`、`git push --force`）
- Workshop/培训场景演示 Hooks 拦截机制
- 添加金融合规命令过滤规则
- 生成跨平台脚本（Shell + PowerShell）

## 核心能力

- **4 种预设场景**：基础安全、金融合规、Workshop 教学、自定义
- **交互式问答**：收集拦截模式和脚本类型偏好
- **双脚本输出**：Shell (.sh) 和 PowerShell (.ps1) 模板
- **审计日志**：被拦截命令记录时间戳和规则名称
- **settings.json 集成**：自动更新 `hooks.before_run_command` 配置
- **安全设计**：脚本仅做模式匹配，绝不执行命令本身

## 示例

```
用户：帮我配置项目的命令拦截

Agent：选择安全场景？
       → 基础安全（rm -rf、git push --force、DROP TABLE 等）

       脚本类型？
       → 跨平台（Shell + PowerShell）

       [生成 .qoder/hooks/block-dangerous.sh + .ps1]
       [更新 .qoder/settings.json]

       ✅ Hooks 已生成！试试执行被拦截的命令来验证效果。
```

## 注意事项

- 纯知识型 SKILL，生成脚本和配置文件，不调用外部 API
- Hook 脚本使用 `exit 0`（通过）或 `exit 2`（阻断），不允许其他退出码
- 脚本通过 stdin 读取 Qoder JSON 输入，用 `jq` 提取命令
- 只读安全命令（`ls`、`cat`、`git status`）永远不会被拦截
- 已有 settings.json 配置会被保留，新 Hook 以追加方式添加
