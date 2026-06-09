---
name: yescan-ocr-qoder
title: Yescan OCR - Universal Text Recognition
description: Extract, recognize, and structure text from images, screenshots, photos, or scanned documents — including handwriting, tables, math formulas, ID cards, invoices, medical reports, business licenses, and more. Powered by Quark Scan King (夸克扫描王) OCR API.
source: community
author: yescan-ai
githubUrl: https://github.com/yescan-ai/yescan-ocr-qoder
docsUrl: https://scan.quark.cn/business
category: document
tags:
  - ocr
  - text-recognition
  - handwriting
  - table
  - invoice
  - id-card
  - medical-report
  - formula
  - quark-scan
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

## Use Cases

- Extract text from handwritten notes, essays, or letters with high accuracy
- Recognize and structure table data from images into machine-readable formats
- Identify and parse Chinese ID cards, social security cards, driver's licenses, vehicle licenses, and travel permits
- Extract key fields from VAT invoices, train tickets, and commercial invoices
- Recognize math formulas and equations, outputting LaTeX-compatible results
- Parse medical reports, lab results, and health check documents from images
- Extract text from product labels, packaging images, and business licenses
- General-purpose text extraction from any image as a fallback scenario

## Core Capabilities

- **Handwritten OCR**: Recognize cursive and messy handwriting from photos
- **Table OCR**: Extract structured table data from images
- **ID & Certificate Recognition**: Support 8+ document types including ID cards, social security cards, travel permits, and degree certificates
- **Invoice & Ticket Parsing**: VAT invoices, train tickets, and English commercial invoices
- **Formula Recognition**: Math formulas and chemical equations to LaTeX
- **Question OCR**: Extract exam questions and exercises from photos
- **Medical Report OCR**: Parse lab reports and medical documents
- **General Text Extraction**: Fallback mode for any image containing text

## Supported Scenarios (17 total)

| # | Scenario | Scene ID |
|---|----------|----------|
| 1 | Handwritten documents | `handwritten-ocr` |
| 2 | Tables | `table-ocr` |
| 3 | ID cards | `idcard-ocr` |
| 4 | Social security cards | `social-security-card-ocr` |
| 5 | Travel permits | `travel-permit-ocr` |
| 6 | Degree certificates | `degree-certificate-ocr` |
| 7 | VAT invoices | `vat-invoice-ocr` |
| 8 | Train tickets | `train-ticket-ocr` |
| 9 | Math formulas | `formula-ocr` |
| 10 | Exam questions | `question-ocr` |
| 11 | Driver's licenses | `driver-license-ocr` |
| 12 | Vehicle licenses | `vehicle-license-ocr` |
| 13 | Commercial invoices | `commercial-invoice-ocr` |
| 14 | Medical reports | `medical-report-ocr` |
| 15 | Business licenses | `business-license-ocr` |
| 16 | Product images | `product-image-ocr` |
| 17 | General text | `general-ocr` |

## Example

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

## Setup

This skill requires a Quark Scan King (夸克扫描王) API Key.

1. Visit the [Quark Scan King Developer Portal](https://scan.quark.cn/business) to register and obtain an API Key (AI Agent type).
2. Save the key to `~/.yescan_env`:
```bash
echo 'SCAN_WEBSERVICE_KEY=<your_api_key>' > ~/.yescan_env
```
3. Install the skill and it will auto-read the config on each run.

## Notes

- Supports image formats: jpg, jpeg, png, gif, bmp, webp, tiff, wbmp
- Image size limit: 5MB per file
- Each invocation processes a single image; for batch processing, call in a loop
- Requires Python 3.9+
- Images are sent to Quark Scan King servers for recognition; data is not permanently stored
- Not suitable for video processing or real-time camera streams
