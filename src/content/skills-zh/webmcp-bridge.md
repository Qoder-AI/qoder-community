---
name: webmcp-bridge
title: WebMCP Bridge - AI 代理发现并执行网页工具
description: 让 AI 代理通过浏览器 evaluate 能力直接调用网页上通过 navigator.modelContext 注册的 WebMCP 工具。支持工具发现、参数校验、结果解析，兼容任何具备浏览器执行能力的 AI 代理。
source: community
author: LIU
githubUrl: https://github.com/2019-02-18/agent-skills
docsUrl: https://github.com/2019-02-18/agent-skills
category: automation
tags:
  - webmcp
  - mcp
  - browser
  - ai-agent
  - web-automation
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/2019-02-18/agent-skills.git
  cp -r agent-skills/webmcp-bridge ~/.cursor/skills/
date: 2026-05-06
---

## 使用场景

- AI 代理发现当前网页注册的所有 WebMCP 工具（名称、描述、参数 Schema）
- AI 代理通过函数调用直接执行网页上的 WebMCP 工具
- 处理动态工具注册/注销（页面切换时自动重新发现）
- 让 AI 代理与 WebMCP 应用深度交互：读取数据、操控 UI、触发操作

## 示例

```javascript
// 1. 发现当前页面所有 WebMCP 工具
(async () => {
  const tools = await navigator.modelContextTesting.listTools()
  return tools.map(t => ({ name: t.name, description: t.description }))
})()

// 2. 执行一个工具（参数必须 JSON.stringify）
(async () => {
  const result = await navigator.modelContextTesting.executeTool(
    'code_read',
    JSON.stringify({ file: "html" })
  )
  return JSON.parse(result.content[0].text)
})()
```

## 注意事项

- 需要 Chrome 146+ 并启用 `chrome://flags/#enable-webmcp-testing`
- 所有代码通过浏览器 evaluate 执行，必须用 async IIFE 包裹（不支持顶层 await）
- `executeTool` 的第二个参数是 JSON **字符串**，不是对象
- 工具是页面级作用域，导航后需重新调用 `listTools()` 发现新工具
