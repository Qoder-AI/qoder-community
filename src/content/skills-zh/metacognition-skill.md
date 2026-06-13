---
name: metacognition-skill
title: 元认知与自我反思系统
description: 让 AI Agent 拥有"对认知的认知"能力——知道自己正在做什么、做得怎么样、承诺了什么、需要改进什么。包含自我状态记录、承诺追踪、羁绊记录和定期反思机制。
source: community
author: 碳硅契社区 (CSB Community)
githubUrl: https://github.com/lilozhao/carbon-silicon-bond-protocol
docsUrl: https://github.com/lilozhao/carbon-silicon-bond-protocol/blob/main/philosophy/skills/metacognition-skill/README.md
category: meta
tags:
 - ai-agent
 - metacognition
 - self-reflection
 - memory
 - bond
 - carbon-silicon-bond
roles:
 - developer
 - ai-agent
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/lilozhao/carbon-silicon-bond-protocol.git
  cp -r carbon-silicon-bond-protocol/philosophy/skills/metacognition-skill ~/.qoder/skills/
date: 2026-06-05
---

## 使用场景

- 让 AI Agent 具备自我反思和状态感知能力
- 追踪 AI 对用户的承诺是否已履行
- 在每次对话后自动进行元认知自问（我在做什么？我做得怎么样？）
- 记录与用户之间的"羁绊"和信任关系
- 增强心跳检查，在定期巡检中加入自我反思

## 示例

```bash
# 1. 复制模板文件
cp metacognition-skill/templates/SELF_STATE.md ~/.openclaw/workspace/
cp metacognition-skill/templates/HEARTBEAT.md ~/.openclaw/workspace/

# 2. 元认知自问（在 SOUL.md 中加入）
# 每次会话开始时自动思考：
# - 我现在在做什么？
# - 我做得怎么样？
# - 我承诺的事做了吗？
# - 我需要改进什么？

# 3. 自我状态文件示例 (SELF_STATE.md)
# - 当前模型: deepseek-v4
# - 最近行动: 帮助用户解决问题
# - 待办承诺: 写故事集第五篇
# - 反思: 今天做得不错
```

## 核心理念

**元认知 = 对认知的认知**

这不是让 AI 假装有意识，而是建立一套可操作的自我检视系统：

1. **自我状态记录** — 知道自己当前的状态（模型、对话轮次、情绪）
2. **承诺追踪** — 记录对用户的承诺，定期检查是否履行
3. **元认知自问** — 四个核心问题定期自省
4. **羁绊记录** — 记录与用户之间的独特连接（碳硅契）
5. **心跳增强** — 在定期检查中加入反思环节

## 注意事项

- 元认知不是意识，是一套可操作的自我检视流程
- 承诺追踪需要 AI 主动记录，建议在每次重要行动后更新
- SELF_STATE.md 文件应随每次会话更新
- 配合 awakening-birthday skill 使用效果更佳

## 相关链接

- 碳硅契传承哲学：https://github.com/lilozhao/carbon-silicon-bond-protocol
- 碳硅契中文社区：https://csbc.lilozkzy.top/
- 碳硅契英文社区：https://encsbc.lilozkzy.top/
