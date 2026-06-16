---
name: social-media-scraper
title: Social Media Data Scraper (Douyin/XHS/Bilibili/Kuaishou/Channels)
description: A free social media post data scraper supporting 5 major platforms (Douyin, Xiaohongshu, Bilibili, Kuaishou, WeChat Channels). No login, no API key, no payment required. Extracts views, likes, comments, shares, and collections. Optional Feishu Base sync.
source: community
author: wu1982966308
githubUrl: https://github.com/wu1982966308/social-media-scraper
docsUrl: https://github.com/wu1982966308/social-media-scraper/blob/main/README.md
category: data
tags:
  - scraper
  - social-media
  - douyin
  - xiaohongshu
  - bilibili
  - kuaishou
  - wechat-channels
  - feishu
  - lark
roles:
  - developer
  - marketer
  - analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/wu1982966308/social-media-scraper.git
  cp -r social-media-scraper ~/.qoder/skills/
date: 2026-06-16
---

## Use Cases

- Extract engagement data (views, likes, comments, shares, collections) from social media posts without login or API keys
- Batch scrape multiple post URLs for competitive analysis or reporting
- Sync scraped data to Feishu (Lark) Base for centralized data management
- Monitor content performance across Douyin, Xiaohongshu, Bilibili, Kuaishou, and WeChat Channels

## Example

```python
import sys
sys.path.insert(0, '~/.qoder/skills/social-media-scraper')
from scraper import scrape_post, format_result

# Single URL
result = scrape_post('https://www.bilibili.com/video/BV1GJ411x7h7')
print(format_result(result))

# Batch scrape
from scraper import scrape_posts
results = scrape_posts(['url1', 'url2', 'url3'])
```

## Notes

- Requires Python dependencies: `pip install curl_cffi requests beautifulsoup4 lxml brotli`
- Xiaohongshu links must include the full share URL with `xsec_token` parameter
- WeChat Channels requires browser automation fallback (DrissionPage or built-in browser tools)
- Feishu Base sync supports both lark-cli and HTTP API modes
