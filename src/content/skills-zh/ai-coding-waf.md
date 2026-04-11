---
name: ai-coding-waf
title: AI Coding WAF 成熟度评估
description: AI Coding 成熟度可视化交互评估。在编辑器内嵌浏览器中打开交互式评估页面，支持分步表单填写、六支柱雷达图展示、Markdown 报告一键复制。基于 WAF 六支柱模型，L1~L5 行为锚点评估。
source: community
author: Lv Zhaobo
githubUrl: https://github.com/lvzhaobo/ai-coding-skills/tree/main/skills/ai-coding-waf
category: development
tags:
  - 成熟度评估
  - AI编程
  - 可视化
  - 雷达图
  - 团队评估
  - WAF模型
roles:
  - developer
  - architect
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/lvzhaobo/ai-coding-skills
  cp -r ai-coding-skills/skills/ai-coding-waf ~/.qoder/skills/
date: 2026-04-11
---

## 使用场景

- 评估团队 AI Coding 成熟度等级（L1~L5）
- 通过雷达图可视化六支柱的强弱分布
- 生成结构化 Markdown 评估报告，便于分享
- 识别最薄弱支柱，获取 90 天改进路径
- 作为团队 AI 辅助开发研讨会的评估工具

## 核心能力

- **WAF 六支柱模型**：6 个维度全面评估
- **浏览器交互界面**：4 步进度条引导，逐步填写
- **行为锚点**：每支柱 L1~L5 完整行为描述供选择
- **快速门控**：4 个门控问题实时计算定位级别
- **雷达图**：Canvas 绘制六支柱雷达图
- **木桶原理**：最薄弱支柱决定整体等级
- **90天路径**：基于最薄弱支柱的改进时间线
- **Markdown 报告**：完整报告一键复制到剪贴板

## 示例

```
用户：评估一下我们团队 AI Coding 水平

Agent：[在预览浏览器中打开交互式评估页面]
       评估页面已在右侧预览窗口打开。请按照 4 个步骤完成评估：
       1. 基本信息 — 填写团队名称、规模、工具使用时长
       2. 快速门控 — 4 个门控问题定位大致级别
       3. 六支柱评估 — 每支柱选择 L1~L5 行为锚点
       4. 评估报告 — 查看雷达图和改进路径

       完成后点击「📋 复制到剪贴板」获取 Markdown 报告。
```

## 注意事项

- 需要 Python 3 启动本地 HTTP 服务器（不依赖外部 API）
- 所有评估逻辑在客户端 JavaScript 中完成，纯 HTML/CSS/JS
- 评估规则遵循 WAF 六支柱模型，采用木桶原理定级
- 与聊天版（`ai-coding-maturity-assess`）评估逻辑完全一致，交互方式不同
