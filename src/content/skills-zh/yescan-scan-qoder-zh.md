---
name: yescan-scan-qoder
title: 夸克扫描王 · 图像增强
description: 当用户需要对图片进行画质优化、瑕疵去除或视觉增强时，AI Agent 自动调用夸克扫描王图像增强 API。支持 13 种场景：画质增强、去水印、去阴影、去手写、去屏纹、去底色、证件增强、考试增强、合同扫描、裁剪矫正、素描速写、线稿提取、通用扫描。输出优化后的高清图片文件。
source: community
author: yescan-vision
githubUrl: https://github.com/yescan-ai/yescan-scan-qoder
docsUrl: https://scan.quark.cn/business
category: productivity
tags:
  - 图像增强
  - 扫描
  - 去水印
  - 去阴影
  - 去手写
  - 夸克扫描王
roles:
  - developer
  - designer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/yescan-ai/yescan-scan-qoder.git
  cp -r yescan-scan-qoder ~/.qoder/skills/
date: 2026-06-16
---

## 使用场景

- 试卷、笔记、教材等学习资料拍照后画质增强
- 去除图片上的水印、阴影、手写笔迹、摩尔纹
- 证件票据（身份证、发票、护照）清晰度优化
- 合同/协议文档图片增强归档
- 彩色背景文档一键转为白底黑字
- 拍歪的文档透视矫正与边缘裁剪
- 照片转素描速写风格或提取线稿

## 支持场景

| # | 场景 | scene 标识 |
|---|------|-----------|
| 1 | 考试增强 | `exam-enhance` |
| 2 | 画质增强 | `image-hd-enhance` |
| 3 | 证件票据增强 | `certificate-enhance` |
| 4 | 图像去手写 | `remove-handwriting` |
| 5 | 图像去水印 | `remove-watermark` |
| 6 | 图像去阴影 | `remove-shadow` |
| 7 | 图像去屏纹 | `remove-screen-pattern` |
| 8 | 文档去底色 | `remove-background-color` |
| 9 | 图像裁剪矫正 | `image-crop-rectify` |
| 10 | 素描速写 | `sketch-drawing` |
| 11 | 提取线稿 | `extract-lineart` |
| 12 | 扫描合同 | `scan-contract` |
| 13 | 扫描文件（兜底） | `scan-document` |

## 示例

```
用户：这张试卷拍得不太清楚，帮我增强一下
Agent：[自动匹配 exam-enhance 场景，执行 scan.py，返回增强后的图片路径]

用户：帮我把图片右下角的水印去掉
Agent：[自动匹配 remove-watermark 场景，执行处理，返回去水印后的图片]

用户：这张合同照片字迹太淡了，帮忙增强
Agent：[自动匹配 scan-contract 场景，执行处理，返回清晰的合同图片]
```

## 注意事项

- 需要 Python 3.9+ 和 `requests` 库
- 需要配置夸克扫描王 API Key（`SCAN_WEBSERVICE_KEY`），可在 https://scan.quark.cn/business 获取
- 图片会通过 HTTPS 发送至夸克服务器处理，服务端不永久保存
- 本地文件大小限制 5MB，支持 jpg/png/gif/bmp/webp/tiff 等格式
- 每次仅支持处理单张图片
