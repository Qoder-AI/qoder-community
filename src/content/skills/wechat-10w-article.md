---
name: gzh-10w-article-recommend
title: Top 10 WeChat Popular Article Recommendations
description: Calls a script based on user keywords to fetch popular WeChat article data, outputs a readable Top 10 text ranking, and generates an HTML card preview.
source: community
author: yuanyi-github
githubUrl: https://github.com/yuanyi-github/skills
category: marketing
tags:
  - WeChat Official Accounts
  - Popular Articles
  - Ranking Recommendations
  - HTML Preview
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

## Use Cases

- Users want to view popular WeChat articles by keyword and get a referenceable Top 10 ranking.
- Users need both text output and HTML card-based preview for quick browsing and sharing.
- Users need ranking by read count with engagement metrics such as likes, comments, and shares.

## Example

```bash
python scripts/fetch_explosive_articles.py \
  --origin_word "AI编程" \
  --spit_words '["AI","编程"]' \
  --expansion_words '[]'
```

## Notes

- Follow the complete workflow strictly: receive input, tokenize, call the script, output the text ranking, then generate and display HTML.
- The text ranking and HTML preview must both be provided; do not provide only one.
- The ranking is based on script-returned data, usually showing the top 10 by read count; if fewer are available, show the actual number.
- Engagement and read metrics may have ingestion delay and are not real-time values.
