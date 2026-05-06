---
name: webmcp-bridge
title: WebMCP Bridge - AI Agent Discovers and Executes Web Page Tools
description: Enable AI agents to discover and execute WebMCP tools registered on web pages via browser evaluate capability and navigator.modelContextTesting API. Supports tool discovery, parameter validation, and result parsing.
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

## Use Cases

- AI agent discovers all WebMCP tools registered on the current page (name, description, input schema)
- AI agent executes WebMCP tools directly through function calls
- Handle dynamic tool registration/unregistration (auto-rediscover on page navigation)
- Deep interaction between AI agents and WebMCP applications: read data, control UI, trigger actions

## Examples

```javascript
// 1. Discover all WebMCP tools on the current page
(async () => {
  const tools = await navigator.modelContextTesting.listTools()
  return tools.map(t => ({ name: t.name, description: t.description }))
})()

// 2. Execute a tool (arguments must be JSON.stringify'd)
(async () => {
  const result = await navigator.modelContextTesting.executeTool(
    'code_read',
    JSON.stringify({ file: "html" })
  )
  return JSON.parse(result.content[0].text)
})()
```

## Notes

- Requires Chrome 146+ with `chrome://flags/#enable-webmcp-testing` enabled
- All code runs via browser evaluate, must use async IIFE wrapper (top-level await not supported)
- The second argument of `executeTool` is a JSON **string**, not an object
- Tools are page-scoped; call `listTools()` again after navigation to discover new tools
