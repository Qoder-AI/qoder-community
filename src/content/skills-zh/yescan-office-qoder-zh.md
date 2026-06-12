---
name: yescan-office-qoder
title: Yescan Office - 图片转 Office/PDF 文档
description: 将图片、截图或扫描件转换为可编辑的 Office 文档（Word/Excel）或 PDF。支持复杂表格、合同、图文混排内容的版式还原。由夸克扫描王转换 API 提供支持。
source: community
author: changri
githubUrl: https://github.com/yescan-ai/yescan-office-qoder
docsUrl: https://scan.quark.cn/business
category: document
tags:
  - ocr
  - 图片转Word
  - 图片转Excel
  - 图片转PDF
  - 格式转换
  - 表格还原
  - 夸克扫描王
roles:
  - developer
  - data-analyst
  - finance
  - legal
  - hr
  - executive
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/yescan-ai/yescan-office-qoder
  cp -r yescan-office-qoder ~/.qoder/skills/
date: 2026-06-10
---

## 使用场景

- 将包含表格的财务报表截图转换为可编辑的 Excel 文件
- 将手写库存记录照片转换为结构化的 Excel 表格
- 将会议记录拍照图片转换为 Word 文档
- 将产品说明书截图转换为 .docx 格式，保留原始版式
- 将手写课堂笔记图片转换为 PDF 文档存档
- 将合同照片处理为清晰的 PDF 文件，便于存档和分发
- 将白板草图转换为版式整洁的 PDF 文档

## 核心能力

- **图片转 Excel**：识别图片中的表格数据，转换为 .xlsx 文件，保留行列结构和数据关系
- **图片转 Word**：还原图片中的图文排版，生成可编辑的 .docx 文档，支持长文本和多段落内容
- **图片转 PDF**：将图片转换为版式规范的 PDF 文档，适合存档和打印
- **版式还原**：尽量还原原始图片中的排版、表格边框、字体大小等视觉元素
- **自动保存**：转换后的文件自动保存到本地临时目录，返回文件路径可直接使用

## 支持的场景（共 3 种）

| 序号 | 场景名称 | 场景标识 | 输出格式 |
|------|----------|----------|----------|
| 1 | 图片转 Excel | `image-to-excel` | .xlsx |
| 2 | 图片转 Word | `image-to-word` | .docx |
| 3 | 图片转 PDF | `image-to-pdf` | .pdf |

## 示例

```
帮我把这张财务报表截图转换成 Excel 文件。
（附带一张含表格的截图）
```

```
把这张会议记录的拍照图片转成 Word 文档。
```

```
请将这张设备铭牌照片转换为 PDF 格式存档。
```

## 配置说明

本技能需要夸克扫描王 API Key。

1. 访问[夸克扫描王开发者后台](https://scan.quark.cn/business)注册并获取 API Key（选择 AI Agent 接入类型）。
2. 将密钥写入 `~/.yescan_env`：
```bash
echo 'SCAN_WEBSERVICE_KEY=<你的API密钥>' > ~/.yescan_env
```
3. 安装技能后每次运行会自动读取配置，无需重启。

## 注意事项

- 支持的图片格式：jpg、jpeg、png、gif、bmp、webp、tiff、wbmp
- 图片大小限制：单张不超过 5MB
- 每次调用仅处理单张图片，批量处理需循环调用
- 运行环境需要 Python 3.9+
- 转换后的文件保存至系统临时目录（如 `/tmp`），需自行管理清理
- 图片会发送至夸克扫描王服务器进行转换，数据不会被永久保存
- 不支持视频处理或实时摄像头流
