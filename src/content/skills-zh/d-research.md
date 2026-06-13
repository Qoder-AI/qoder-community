---
name: d-research
title: D Research - 可审计的深度研究与公共数据工具包
description: 面向 AI Agent 的生产级浏览器优先研究 Skill，适用于有来源支撑的调查、合法公共数据采集、文献综述、尽职调查、政策与标准分析以及长周期研究。内置证据台账、矛盾检查、来源评分、PRISMA 工作流、引文工具、数据提取、归档、可复现性门禁和离线评测。
source: community
author: d-init-d
githubUrl: https://github.com/d-init-d/d-research-skill
docsUrl: https://github.com/d-init-d/d-research-skill#readme
category: data
tags:
  - deep-research
  - web-research
  - public-data
  - evidence-ledger
  - literature-review
  - citations
  - playwright
  - reproducibility
roles:
  - developer
  - data-analyst
  - legal
  - finance
featured: false
popular: false
isOfficial: false
installCommand: |
  # 推荐：使用 Skills CLI 安装
  npx -y skills@latest add d-init-d/d-research-skill --skill d-research -a qoder

  # 手动安装
  git clone --depth 1 https://github.com/d-init-d/d-research-skill.git ~/.qoder/skills/d-research
date: 2026-06-13
---

## 使用场景

- 执行有来源支撑的深度网络研究，包括来源地图、查询扩展、证据采集、矛盾检查和置信度报告。
- 从网站、API、PDF、电子表格、公共档案、学术数据库和用户提供的只读数据库中合法采集公共数据。
- 按照 PRISMA 2020 开展文献综述和系统综述，生成筛选日志、引文解析、引文图谱和参考文献导出。
- 开展技术、市场、政策、标准、尽职调查和公共风险研究，并区分已验证事实、推断、风险信号与未解决缺口。
- 使用可审阅的研究计划、执行门禁、上下文预算、检查点和可复现工作区管理长周期调查。
- 生成可审计的证据台账、来源质量评分、受阻来源报告、覆盖地图、签名输出以及 Markdown、HTML、PDF 或 DOCX 报告。

## 示例

安装后可直接调用 Skill，或用自然语言描述匹配的研究任务：

```text
/d-research 比较主流开源浏览器自动化框架。
优先使用一手来源，核对当前版本，记录相互矛盾的说法，
并输出证据台账和简明建议。
```

系统综述示例：

```text
/d-research 对近期检索增强生成评测研究开展 PRISMA 风格综述。
包括检索式、筛选标准、引文图谱、证据表、局限性和可复现性说明。
```

## 核心能力

- 基于 Playwright 指南和辅助脚本的浏览器优先探测与有界爬取
- 公共 API、GraphQL、SPARQL、Wikidata、学术数据库、公共档案和文件处理工作流
- 具备声明级来源、矛盾状态、置信度和可选 HMAC 签名的证据台账
- DOI、PMID、arXiv 和 ISBN 解析，以及 BibTeX、RIS 与多种引文格式输出
- HTML 表格、PDF、OCR、DOCX、EPUB、XLSX、mbox、JSON-LD、microdata、RDFa、站点地图和订阅源提取
- 数据清洗、近重复检测、语义检索、引文图谱、来源评分和报告生成
- 面向超出单次模型上下文窗口调查的研究计划协议
- 覆盖核心研究能力的离线回归评测与前沿能力评测

## 注意事项

- Skill 默认只读，明确禁止绕过登录、付费墙、验证码、速率限制、robots 规则或其他访问控制。
- 仓库包含 `SKILL.md` 以及配套 references、adapters、templates、examples、scripts、配置和离线评测。Qoder 支持带辅助文件和脚本的 Skills。
- 核心 Python 工具面向 Python 3.10+，大部分仅使用标准库。浏览器自动化使用 Node.js 和 Playwright；部分高级提取、翻译、OCR 和嵌入功能需要可选依赖。
- 当前版本：`v3.1.1`。
- 许可证：Creative Commons Attribution-NonCommercial 4.0 International（`CC BY-NC 4.0`）。
