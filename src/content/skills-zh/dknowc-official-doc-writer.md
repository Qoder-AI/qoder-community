---
name: dknowc-official-doc-writer
title: 深知写作助手
description: 面向公文、正式文书、政务材料和企事业单位事务文书的 Agent Skill，支持素材检索、政策依据整理、正文生成、质量审查，以及普通 Word、红头文件和素材来源 HTML 交付。
source: community
author: 深知可信
githubUrl: https://github.com/dylanzhangzx/dknowc-official-doc-writer-qoder
docsUrl: https://github.com/dylanzhangzx/dknowc-official-doc-writer-qoder#readme
category: document
tags:
  - 公文写作
  - Word
  - 政务材料
  - 文档
roles:
  - writer
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/dylanzhangzx/dknowc-official-doc-writer-qoder
  cp -r dknowc-official-doc-writer-qoder ~/.qoder/skills/dknowc-official-doc-writer
date: 2026-07-20
---

## 使用场景

- 撰写、改写、润色或审查通知、请示、报告、函、复函、批复、会议纪要、通报、通告、公告、意见、方案、总结、管理办法、汇报材料、发言稿等正式文书。
- 需要政策依据、数据支撑、标准规范或案例参考时，通过深知可信搜索整理素材，并区分政策依据型、数据支撑型、参考案例型和表述参考型材料。
- 需要正式交付时，生成普通 `.docx`；用户明确要求红头文件时，生成红头版 Word。
- 正式 Word 支持标准 Markdown 表格、宽表横向 A4、表题兜底和基础对齐规则；执行过搜索时，另行生成素材来源 HTML 溯源页。

## 示例

```bash
# 安装依赖
pip3 install python-docx requests
node --version

# 安装到 Qoder 用户级 Skill 目录
git clone https://github.com/dylanzhangzx/dknowc-official-doc-writer-qoder
cp -r dknowc-official-doc-writer-qoder ~/.qoder/skills/dknowc-official-doc-writer
```

## 注意事项

- 当前 Qoder Public 版本为 `3.1.1`，功能逻辑与主干完整版保持一致。
- 本 Skill 不内置深知搜索 API Key。首次调用时由 Agent 引导用户提供手机号和短信验证码，通过 `scripts/register.mjs` 自动注册、获取 API Key 并写入本地 `config.ini`。
- Qoder Public 版使用专属渠道码注册链接：`https://platform.dknowc.cn/auth/#/register?channel=5DBF147C-A4D0-4C3E-AB1A-6C6F5EA39B18&type=6`。
- Qoder Skill 源码仓库为 `https://github.com/dylanzhangzx/dknowc-official-doc-writer-qoder`。
