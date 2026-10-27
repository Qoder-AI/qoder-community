---
name: long-doc-translation
title: 外文长篇 -> 可核查的中文全稿
description: "把一部几百页的外文专著／古籍／档案（德／英／法／日，且你有权访问）做成可交付、可核查、术语统一的中文全稿：主稿 .md、自包含阅读版 .html、逐段译文备查、全书新术语总表。拿不准的术语进存疑清单交人工，不强译成通顺的假话。不适合：原文照搬发布受版权保护的内容、实务级法律产出；不评级、不给目标价。"
source: community
author: huhoo
githubUrl: https://github.com/huhoo/cue-awesome
docsUrl: https://github.com/huhoo/cue-awesome/tree/main/long-doc-translation
category: document
tags: [翻译, 长文档, 术语总表, 逐条挂源]
roles: [content, finance, legal]
featured: false
popular: false
isOfficial: false
installCommand: npx skills add huhoo/cue-awesome --skill long-doc-translation
date: 2026-10-24
---

## 它做什么
对一份你有权访问的外文长文走流水线，产出四类交付：主稿 .md、自包含阅读版 .html（左侧目录、可直接分发）、逐段译文备查、全书新术语总表（按拼音排序）。

## 它守的纪律
- 分段清单先行；脚注 id 唯一；页边码用宽口径正则覆盖 OCR 变体。
- 拿不准的术语进存疑清单交人工，不强译成通顺的假话。
- 边界：不照搬发布受版权保护的内容；不出实务级法律产出；不评级、不给目标价（判断位一律留人工）。

## 安装
npx skills add huhoo/cue-awesome --skill long-doc-translation
装完重列一次 skills 清单核对是否到位。本件走 Cue 通道（配一把 api key；域清单与工具面以 catalog 现值为准），离线时的行为与代价写在件内 README。
