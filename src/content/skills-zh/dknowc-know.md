---
name: dknowc-know
title: 深知晓
description: 面向工作与办事场景的可信咨询导办 Agent Skill，调用深知可信统一接口回答税务社保、法规政策、行业标准、证照补贴资质申办、公共服务和本地化政策问题，并输出可信溯源报告。
source: community
author: 深知可信
githubUrl: https://github.com/dylanzhangzx/dknowc-know-qoder
docsUrl: https://github.com/dylanzhangzx/dknowc-know-qoder#readme
category: productivity
tags:
  - 政务问答
  - 政策咨询
  - 公共服务
  - 可信溯源
  - 本地化知识
roles:
  - pm
  - content
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/dylanzhangzx/dknowc-know-qoder
  mkdir -p ~/.qoder/skills/dknowc-know
  cp -r dknowc-know-qoder/. ~/.qoder/skills/dknowc-know/
date: 2026-07-23
lastUpdated: 2026-07-23
---

## 使用场景

- 咨询税务社保、法规政策、行业标准、证照、补贴、资质申办、买房购车、养老育儿、上学就业等工作与公共服务问题。
- 需要结合用户问题智能识别或切换城市，获取本地化精准知识服务和办理口径。
- 需要分析调研、拟稿写文、政策材料梳理或权威知识网络索引时，调用可信统一接口生成可核验回答。
- 需要核验来源时，在回答结尾查看“可信溯源报告”链接，打开完整报告页核验依据。

## 示例

```bash
# 安装到 Qoder 用户级 Skill 目录
git clone https://github.com/dylanzhangzx/dknowc-know-qoder
mkdir -p ~/.qoder/skills/dknowc-know
cp -r dknowc-know-qoder/. ~/.qoder/skills/dknowc-know/

# 首次使用时，Agent 会引导手机号验证码注册并自动写入 config.ini
node ~/.qoder/skills/dknowc-know/scripts/register.mjs send --phone 13812345678
```

## 注意事项

- 当前 Qoder Public 版本为 `1.1.1`，功能逻辑与深知晓 full 版保持一致。
- 本 Skill 不内置深知可信统一接口 API Key。首次调用时由 Agent 引导用户提供手机号和短信验证码，通过 `scripts/register.mjs` 自动注册、获取 API Key 并写入本地 `config.ini`。
- Qoder Public 版使用专属渠道码注册链接：`https://platform.dknowc.cn/auth/#/register?channel=5DBF147C-A4D0-4C3E-AB1A-6C6F5EA39B18&type=11`。
- 默认参数为 `credibleChatScope=all`、`material=true`、`item=true`、`policy=true`、`traceurl=true`、`stream=true`，默认不主动传入 `area` 字段。
- Qoder Skill 源码仓库为 `https://github.com/dylanzhangzx/dknowc-know-qoder`。
