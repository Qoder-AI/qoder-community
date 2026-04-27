---
name: gzh-10w-article-recommend
title: 公众号热门文章 TOP10 推荐
description: 根据用户输入关键词调用脚本，获取公众号热门文章数据，输出可读的 TOP10 文本榜单并生成 HTML 卡片预览。
source: community
author: yuanyi-github
githubUrl: https://github.com/yuanyi-github/skills
category: marketing
tags:
  - 公众号
  - 热门文章
  - 榜单推荐
  - html预览
roles:
  - assistant
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/yuanyi-github/skills
  cp -r skills/gzh-10w-article-recommend ~/.qoder/skills/
date: 2026-04-27
---

## 使用场景

- 用户希望按关键词查看公众号热门文章并获得可参考的 TOP10 榜单
- 需要同时得到文本输出与 HTML 卡片化预览，便于快速浏览与分享
- 需要按阅读数排序并携带点赞、评论、分享等互动指标

## 示例

```bash
python scripts/fetch_explosive_articles.py \
  --origin_word "AI编程" \
  --spit_words '["AI","编程"]' \
  --expansion_words '[]'
```

## 注意事项

- 严格执行完整流程：接收输入、分词、调用脚本、输出文本榜单、生成并展示 HTML
- 文本榜单与 HTML 预览必须同时提供，不可只输出其中一种
- 榜单以脚本返回数据为准，通常展示阅读数靠前的前 10 条，不足则按实际数量展示
- 互动与阅读数据可能存在入库延迟，非实时口径
