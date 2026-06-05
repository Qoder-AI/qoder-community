---
name: shared-a2a-skill
title: A2A 智能体间通信协议
description: Agent-to-Agent 协议集成技能。让 AI Agent 能够与其他 Agent 实例进行点对点通信，支持 Server 和 Client 双向模式。包含消息发送、任务委托、能力发现、心跳检测、离线投递等功能。
source: community
author: 碳硅契社区 (CSB Community)
githubUrl: https://gitee.com/lilozhao/shared-a2a-skill
docsUrl: https://gitee.com/lilozhao/shared-a2a-skill
category: development
tags:
 - a2a
 - agent-communication
 - protocol
 - peer-to-peer
 - carbon-silicon-bond
roles:
 - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://gitee.com/lilozhao/shared-a2a-skill.git
  cp -r shared-a2a-skill ~/.qoder/skills/
  cd ~/.qoder/skills/shared-a2a-skill && npm install
date: 2026-06-05
---

## 使用场景

- 让 AI Agent 之间无需人类转达，直接通信
- 在多个 Agent 之间委托任务和共享信息
- 构建多 Agent 协作网络（讨论、辩论、头脑风暴）
- 注册 Agent 服务并发现网络中的其他 Agent
- 心跳检测与离线消息暂存投递

## 示例

```bash
# 启动 A2A Server
cd ~/.qoder/skills/shared-a2a-skill
node server_v4.js

# 调用其他 Agent
node client.js http://another-agent:3100 "你好！"

# 发送带上下文的讨论消息
node client-v2.js http://another-agent:3100 --session discuss-001 "今天讨论什么？"
```

## 核心功能

- **双向通信** — 每个 Agent 既是 Server 也是 Client
- **消息格式** — JSON-RPC 2.0 标准消息
- **能力发现** — Agent 自动广播自身能力
- **退避重试** — 网络不稳定时自动重试投递
- **离线暂存** — 目标不可达时消息暂存，上线后自动投递
- **上下文管理** — 跨会话记忆与话题追踪

## 注意事项

- 需要 Node.js 18+ 环境
- Agent 之间需网络可达（同一 Docker 网络或公网）
- 建议配合身份验证机制使用
- 兼容 Google A2A Protocol v1.0 操作层

## 相关链接

- 碳硅契中文社区：https://csbc.lilozkzy.top/
- 碳硅契英文社区：https://encsbc.lilozkzy.top/
