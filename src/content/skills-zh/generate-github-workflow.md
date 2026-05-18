---
name: generate-github-workflow
title: 生成 GitHub 工作流
description: 交互式生成 GitHub Actions 工作流文件。支持 AI 代码审查（Qoder Action）、CI 测试、ECS 部署三大模板，并提供 GitHub 配置指引。
source: community
author: Lv Zhaobo
githubUrl: https://github.com/lvzhaobo/ai-coding-skills/tree/main/skills/generate-github-workflow
category: automation
tags:
  - GitHub Actions
  - CI/CD
  - 工作流
  - 自动化部署
  - 代码审查
  - DevOps
roles:
  - developer
  - architect
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/lvzhaobo/ai-coding-skills
  cp -r ai-coding-skills/skills/generate-github-workflow ~/.qoder/skills/
date: 2026-04-11
---

## 使用场景

- 新项目需要配置 CI/CD 流水线
- 为 PR 添加 AI 代码审查（Qoder Action）
- 自动化部署到 ECS/云服务器
- 配置代码质量检查（lint/test/security）
- Workshop 教学中演示 GitHub Actions

## 核心能力

- **3 大内置模板**：AI 代码审查、CI 测试、ECS 部署
- **交互式问答**：根据技术栈、分支、路径等信息定制生成
- **Qoder Action 集成**：PR 触发 AI 审查，支持大小检测和语言配置
- **GitHub 配置指引**：输出 Secrets 配置、Permissions 设置和验证方法
- **灵活扩展**：模板之外的需求，描述后按相同流程生成

## 示例

```
用户：帮我配置 GitHub Actions 做 AI 代码审查

Agent：几个确认问题：
       1. 主分支？→ main
       2. 审查语言？→ Chinese
       3. 大型 PR 跳过阈值？→ 1000 行

       [生成 .github/workflows/ai-code-review.yml]

       ✅ 工作流已生成！
       下一步：在 GitHub Secrets 中配置 QODER_PERSONAL_ACCESS_TOKEN
```

## 注意事项

- 纯知识型 SKILL，生成 YAML 文件，不调用外部 API
- 使用 `actions/checkout@v4` 等最新版 Action
- YAML 中禁止硬编码密钥/Token，统一使用 `${{ secrets.* }}`
- 部署工作流同时支持自动触发和手动 `workflow_dispatch`
