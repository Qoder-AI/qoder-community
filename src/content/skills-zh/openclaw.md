---
name: openclaw-qoder-cli-setup
title: OpenClaw + 钉钉机器人 + Qoder CLI 部署指南
description: 在阿里云服务器上安装 OpenClaw、配置钉钉机器人集成，并对接 Qoder CLI 的完整部署指南。支持一键计算巢部署和手动 ECS 配置，实现通过钉钉 IM 与 AI 助手对话，以及代码开发能力。
source: community
author: joyce
githubUrl: https://github.com/joyce/openclaw-qoder-cli-setup
docsUrl: https://github.com/joyce/openclaw-qoder-cli-setup/blob/main/README.md
category: automation
tags:
  - openclaw
  - 钉钉
  - 阿里云
  - AI助手
  - 机器人
  - 部署指南
  - qoder
roles:
  - developer
  - devops
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/joyce/openclaw-qoder-cli-setup.git
  cp -r openclaw-qoder-cli-setup ~/.qoder/skills/
date: 2026-03-05
---

## 使用场景

- 在阿里云服务器上快速部署 OpenClaw AI 助手服务
- 配置钉钉企业内部机器人，实现团队内通过钉钉与 AI 对话
- 对接 Qoder CLI，让 AI 助手具备代码开发和项目管理能力
- 搭建企业内部的 AI 智能助手基础设施

## 示例

```bash
# 加载技能后，按照指南逐步部署
/openclaw-qoder-cli-setup

# 部署完成后，在钉钉群中@机器人
@OpenClaw 助手 帮我写一段 Python 爬虫代码

# 使用 Qoder 进行代码开发
@OpenClaw 助手 用 qoder 创建一个 React 项目
```

## 注意事项

- 需要阿里云账号和钉钉开发者账号（企业管理员权限）
- 服务器需开放 18789 端口（OpenClaw Gateway）
- 钉钉应用需要申请相关权限并等待审批通过
- 建议使用 Stream 模式，无需配置公网回调 URL
