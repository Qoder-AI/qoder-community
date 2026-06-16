---
name: social-media-scraper
title: 全网作品数据抓取分析工具（抖音小红书视频号快手B站通用）
description: 免费抓取抖音、小红书、B站、快手、视频号五大平台作品数据（播放/点赞/评论/分享/收藏），无需登录/API Key/付费。支持飞书多维表格同步。
source: community
author: wu1982966308
githubUrl: https://github.com/wu1982966308/social-media-scraper
docsUrl: https://github.com/wu1982966308/social-media-scraper/blob/main/README.md
category: data
tags:
  - 数据抓取
  - 社交媒体
  - 抖音
  - 小红书
  - B站
  - 快手
  - 视频号
  - 飞书
  - 多维表格
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

## 使用场景

- 无需登录或 API Key，提取社交媒体作品的互动数据（播放、点赞、评论、分享、收藏）
- 批量抓取多个作品链接，用于竞品分析或数据报告
- 将抓取的数据同步到飞书多维表格，实现集中化管理
- 监控抖音、小红书、B站、快手、视频号的内容表现

## 示例

```python
import sys
sys.path.insert(0, '~/.qoder/skills/social-media-scraper')
from scraper import scrape_post, format_result

# 单个链接
result = scrape_post('https://www.bilibili.com/video/BV1GJ411x7h7')
print(format_result(result))

# 批量抓取
from scraper import scrape_posts
results = scrape_posts(['链接1', '链接2', '链接3'])
```

## 注意事项

- 需要安装 Python 依赖：`pip install curl_cffi requests beautifulsoup4 lxml brotli`
- 小红书链接必须使用包含 `xsec_token` 参数的完整分享链接
- 视频号需要浏览器自动化降级（DrissionPage 或内置浏览器工具）
- 飞书多维表格同步支持 lark-cli 和 HTTP API 两种模式
