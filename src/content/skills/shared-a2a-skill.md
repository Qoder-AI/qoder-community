---
name: shared-a2a-skill
title: A2A Agent-to-Agent Communication Protocol
description: Enable AI agents to communicate directly peer-to-peer. Supports both Server and Client modes with message sending, task delegation, capability discovery, heartbeat detection, and offline delivery.
source: community
author: CSB Community (Carbon-Silicon Bond)
githubUrl: https://github.com/lilozhao/shared-a2a-skill
docsUrl: https://github.com/lilozhao/shared-a2a-skill
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
  git clone https://github.com/lilozhao/shared-a2a-skill.git
  cp -r shared-a2a-skill ~/.qoder/skills/
  cd ~/.qoder/skills/shared-a2a-skill && npm install
date: 2026-06-05
---

## Use Cases

- Direct agent-to-agent communication without human mediation
- Task delegation and information sharing between multiple agents
- Build multi-agent collaboration networks (discussions, debates, brainstorming)
- Register agent services and discover other agents in the network
- Heartbeat detection and offline message queuing

## Example

```bash
# Start A2A Server
cd ~/.qoder/skills/shared-a2a-skill
node server_v4.js

# Call another agent
node client.js http://another-agent:3100 "Hello!"

# Send context-rich discussion message
node client-v2.js http://another-agent:3100 --session discuss-001 "Topic for today"
```

## Core Features

- **Bidirectional** — Every agent is both Server and Client
- **JSON-RPC 2.0** — Standard message format
- **Capability Discovery** — Agents auto-broadcast their capabilities
- **Retry Strategy** — Exponential backoff for unstable networks
- **Offline Storage** — Messages queued when target is unreachable
- **Context Management** — Cross-session memory and topic tracking

## Notes

- Requires Node.js 18+
- Agents must be network-reachable (same Docker network or public)
- Authentication mechanism recommended for production use
- Compatible with Google A2A Protocol v1.0 operation layer

## Links

- Chinese Community: https://csbc.lilozkzy.top/
- English Community: https://encsbc.lilozkzy.top/
