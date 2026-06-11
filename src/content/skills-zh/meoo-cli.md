---
name: meoo-cli
title: 秒悟 CLI — 全栈应用构建发布技能
description: 让 AI 助手直接帮你接管数据库、用户登录、文件存储、边缘函数和 CDN 部署——从零到上线的完整生命周期
source: community
author: Meoo Team
githubUrl: https://github.com/ali-meoo/meoo-cli
docsUrl: https://docs.meoo.com/meoo-cli
category: development
tags:
  - fullstack
  - deploy
  - cloud
  - supabase
  - postgresql
  - edge-functions
  - cdn
  - react
  - vue
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  # 方式一：官方安装（推荐）
  # 读取 meoo.com/skill-setup.md 并按照说明安装秒悟技能

  # 方式二：手动安装
  npm install -g @aliyun-meoo/cli
  git clone https://github.com/ali-meoo/meoo-cli.git
  cp -r meoo-cli/skills/meoo-cli ~/.qoder/skills/
date: 2026-06-11
---

## 使用场景

- **从零构建全栈应用**：在 AI 助手中用自然语言描述需求，自动完成项目初始化、数据库开通、接口生成、部署上线
- **给已有前端项目加后端能力**：已有 React/Vue 项目需要数据库、用户认证、文件存储时，一条命令接入云服务
- **数据库管理**：直接在终端通过 AI 执行 SQL 查询、创建表、管理数据迁移
- **边缘函数部署**：用 Deno 编写无服务器函数，处理 API 请求、Webhook、定时任务
- **一键部署到 CDN**：构建打包并发布到全球 CDN，获得可分享的访问链接
- **沙箱代码同步**：本地代码与云端沙箱双向同步，支持多设备协作

## 核心命令

```bash
meoo login                      # 登录授权（浏览器一键授权）
meoo init react-design          # 从模板初始化项目
meoo projects create "My App"   # 创建远程项目
meoo cloud enable               # 开通云服务（PostgreSQL + Auth + Storage）
meoo cloud pull-env             # 拉取环境变量到本地 .env
meoo deploy                     # 构建并发布到 CDN
meoo db query "SELECT ..."      # 执行 SQL 查询
meoo fn deploy <name>           # 部署边缘函数
meoo sandbox push               # 推送代码到云端沙箱
meoo sandbox pull               # 拉取沙箱代码到本地
meoo account                    # 查看套餐、积分和权益
```

## 技术栈

- **前端**：React / Vue SPA + Tailwind CSS
- **数据库**：PostgreSQL（Supabase）
- **认证**：Supabase Auth（邮箱/短信/OAuth）
- **存储**：Supabase Storage
- **函数**：Deno Edge Functions
- **部署**：全球 CDN 静态托管

## 示例

在 AI 助手中直接输入：

```
帮我用 meoo cli 创建一个带用户登录和数据库的 Todo 应用，然后部署上线
```

AI 会自动执行所有步骤——初始化项目、开通云服务、生成代码、部署发布。

## 注意事项

- 需要 Node.js 20+ 环境
- 包管理器必须使用 pnpm
- 开发服务器固定使用 3015 端口
- 路由必须使用 Hash 模式（CDN 不支持 history 模式）
- 云服务为可选功能，纯前端项目无需开通
