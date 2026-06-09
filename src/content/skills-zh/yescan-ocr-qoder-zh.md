---
name: yescan-ocr-qoder
title: 夸克扫描王 OCR - 通用文字识别
description: 从图片、截图、照片或扫描文档中提取、识别和结构化文本——支持手写体、表格、数学公式、身份证、发票、医疗报告、营业执照等 17 种场景。由夸克扫描王 OCR API 提供支持。
source: community
author: yescan-ai
githubUrl: https://github.com/yescan-ai/yescan-ocr-qoder
docsUrl: https://scan.quark.cn/business
category: document
tags:
  - ocr
  - 文字识别
  - 手写体
  - 表格
  - 发票
  - 身份证
  - 医疗报告
  - 公式
  - 夸克扫描王
roles:
  - developer
  - data-analyst
  - finance
  - legal
  - hr
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/yescan-ai/yescan-ocr-qoder
  cp -r yescan-ocr-qoder ~/.qoder/skills/
date: 2026-06-09
---

## 使用场景

- 从手写笔记、作文、信件照片中高精度提取文字
- 将图片中的表格数据识别并结构化为可机读格式
- 识别和解析身份证、社保卡、驾驶证、行驶证、港澳台通行证等证件
- 从增值税发票、火车票、英文商业发票中提取关键字段
- 识别数学公式和化学方程式，输出 LaTeX 格式结果
- 解析化验单、体检报告等医疗文档图片
- 提取商品标签、包装图片和营业执照中的文字
- 通用文字提取，作为兜底场景处理任意含文字的图片

## 核心能力

- **手写体 OCR**：识别潦草手写文字，准确率高
- **表格 OCR**：从图片中提取结构化表格数据
- **证件识别**：支持身份证、社保卡、通行证、学位证等 8+ 种证件类型
- **票据解析**：增值税发票、火车票、英文商业发票
- **公式识别**：数学公式和化学方程式转 LaTeX
- **题目 OCR**：从照片中识别考题和习题
- **医疗报告 OCR**：解析化验单和医疗文档
- **通用文字提取**：兜底模式，处理任意含文字图片

## 支持的场景（共 17 种）

| 序号 | 场景名称 | 场景标识 |
|------|----------|----------|
| 1 | 手写文档识别 | `handwritten-ocr` |
| 2 | 表格识别 | `table-ocr` |
| 3 | 身份证识别 | `idcard-ocr` |
| 4 | 社保卡识别 | `social-security-card-ocr` |
| 5 | 港澳通行证识别 | `travel-permit-ocr` |
| 6 | 学位证识别 | `degree-certificate-ocr` |
| 7 | 增值税发票识别 | `vat-invoice-ocr` |
| 8 | 火车票识别 | `train-ticket-ocr` |
| 9 | 公式识别 | `formula-ocr` |
| 10 | 题目识别 | `question-ocr` |
| 11 | 驾驶证识别 | `driver-license-ocr` |
| 12 | 行驶证识别 | `vehicle-license-ocr` |
| 13 | 英文发票识别 | `commercial-invoice-ocr` |
| 14 | 医疗报告单识别 | `medical-report-ocr` |
| 15 | 营业执照识别 | `business-license-ocr` |
| 16 | 商品图片识别 | `product-image-ocr` |
| 17 | 通用文字提取 | `general-ocr` |

## 示例

```
请帮我识别这张图片里的表格内容。
（附带一张表格截图）
```

```
帮我把这张手写笔记的照片转成文字。
```

```
识别这张增值税发票，提取发票号码、金额和税额。
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
- 图片会发送至夸克扫描王服务器进行识别，数据不会被永久保存
- 不支持视频处理或实时摄像头流
