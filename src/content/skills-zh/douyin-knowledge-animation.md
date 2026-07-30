---
name: douyin-knowledge-animation
title: 抖音知识动画（竖屏卡点纯动画）
description: 把任意知识主题制作成抖音竖屏纯动画科普视频：拆解为"悬念封面 + 一句金句一页动画 + 结尾定格"分镜，生成单文件 HTML Canvas 动画（720×1280），内置一键导出双比例封面图，录屏后配卡点 BGM 即可发布。
source: community
author: li872
githubUrl: https://github.com/li872/douyin-publish-skill
category: marketing
tags:
  - 抖音
  - 知识科普
  - Canvas动画
  - 竖屏视频
  - 卡点视频
roles:
  - content
  - marketer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/li872/douyin-publish-skill
  cp -r douyin-publish-skill/douyin-knowledge-animation ~/.qoder/skills/
date: 2026-07-30
---

## 使用场景

- 想把一个原理、公式或冷知识做成抖音爆款风格的竖屏纯动画视频（无解说、无真人出镜）
- 需要"一句歌词一个画面"式的卡点知识动画，录屏后在剪映配 DJ 热歌发布
- 需要自动生成视频封面图（4:3 横版 + 3:4 竖版一键导出）

## 示例

```text
/douyin-knowledge-animation 红绿灯是怎么配时的
# 或自然语言触发：
做一个"电梯为什么总是先上后下"的抖音知识动画
```

## 注意事项

- 产出为单文件 HTML 动画，按 F 全屏、Enter 播放、C 键导出两张封面 PNG；BGM 需自行在剪映/抖音中添加
- 技能内置抖音安全区、最小字号、纯白配色等硬性可读性规范，均为实际投稿踩坑后沉淀的经验
- 采用渐进式披露结构：SKILL.md 为主流程，技术骨架与发布策略在 references/ 目录按需加载
