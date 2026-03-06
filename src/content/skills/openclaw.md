---
name: openclaw-qoder-cli-setup
title: OpenClaw + DingTalk Bot + Qoder CLI Deployment Guide
description: A complete deployment guide for installing OpenClaw on Alibaba Cloud servers, configuring DingTalk bot integration, and connecting Qoder CLI. Supports both Compute Nest one-click deployment and manual ECS configuration, enabling AI assistant conversations via DingTalk IM and code development capabilities.
source: community
author: Nathan
githubUrl: https://github.com/Qoder-AI/qoder-community/blob/main/src/content/skills-zh/openclaw.md
docsUrl: https://github.com/Qoder-AI/qoder-community/blob/main/src/content/skills-zh/openclaw.md
category: automation
tags:
  - openclaw
  - dingtalk
  - alibaba-cloud
  - ai-assistant
  - bot
  - deployment
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

## Use Cases

- Quickly deploy OpenClaw AI assistant service on Alibaba Cloud servers
- Configure DingTalk enterprise internal bots for team AI conversations
- Integrate Qoder CLI to enable AI assistant with code development capabilities
- Build enterprise internal AI intelligent assistant infrastructure

## Examples

```bash
# Load the skill and follow the guide for step-by-step deployment
/openclaw-qoder-cli-setup

# After deployment, @mention the bot in DingTalk group
@OpenClaw Assistant help me write a Python web scraper

# Use Qoder for code development
@OpenClaw Assistant use qoder to create a React project
```

## Notes

- Requires Alibaba Cloud account and DingTalk developer account (enterprise admin privileges)
- Server must open port 18789 (OpenClaw Gateway)
- DingTalk app requires applying for relevant permissions and waiting for approval
- Stream mode is recommended, no public callback URL configuration needed
