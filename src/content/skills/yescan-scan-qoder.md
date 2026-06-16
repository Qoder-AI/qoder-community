---
name: yescan-scan-qoder
title: Quark Scan · Image Enhancement
description: When users need image quality optimization, defect removal, or visual enhancement, the AI Agent automatically calls the Quark Scan image enhancement API. Supports 13 scenes including HD enhance, remove watermark, remove shadow, remove handwriting, remove moiré pattern, remove background color, certificate enhance, exam enhance, contract scan, crop & rectify, sketch drawing, lineart extraction, and general scan. Outputs enhanced HD image files.
source: community
author: yescan-vision
githubUrl: https://github.com/yescan-ai/yescan-scan-qoder
docsUrl: https://scan.quark.cn/business
category: productivity
tags:
  - image enhancement
  - scan
  - remove watermark
  - remove shadow
  - remove handwriting
  - quark scan
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

## Use Cases

- Enhance image quality of photographed exam papers, notes, and textbooks
- Remove watermarks, shadows, handwriting, and moiré patterns from images
- Optimize clarity of ID documents and receipts (ID cards, invoices, passports)
- Enhance and archive contract/agreement document images
- Convert colored background documents to clean white background with black text
- Auto-rectify perspective and crop edges of tilted documents
- Convert photos to sketch/pencil drawing style or extract lineart

## Supported Scenes

| # | Scene | Scene ID |
|---|-------|----------|
| 1 | Exam Enhance | `exam-enhance` |
| 2 | HD Enhance | `image-hd-enhance` |
| 3 | Certificate Enhance | `certificate-enhance` |
| 4 | Remove Handwriting | `remove-handwriting` |
| 5 | Remove Watermark | `remove-watermark` |
| 6 | Remove Shadow | `remove-shadow` |
| 7 | Remove Screen Pattern | `remove-screen-pattern` |
| 8 | Remove Background Color | `remove-background-color` |
| 9 | Crop & Rectify | `image-crop-rectify` |
| 10 | Sketch Drawing | `sketch-drawing` |
| 11 | Extract Lineart | `extract-lineart` |
| 12 | Scan Contract | `scan-contract` |
| 13 | Scan Document (fallback) | `scan-document` |

## Example

```
User: This exam paper photo is blurry, please enhance it
Agent: [Auto-matches exam-enhance scene, executes scan.py, returns enhanced image path]

User: Remove the watermark in the bottom-right corner of this image
Agent: [Auto-matches remove-watermark scene, processes image, returns watermark-free image]

User: The text on this contract photo is too faint, please enhance it
Agent: [Auto-matches scan-contract scene, processes image, returns clear contract image]
```

## Notes

- Requires Python 3.9+ and `requests` library
- Requires Quark Scan API Key (`SCAN_WEBSERVICE_KEY`), obtainable at https://scan.quark.cn/business
- Images are sent to Quark servers via HTTPS for processing; server does not permanently store data
- Local file size limit: 5MB; supported formats: jpg/png/gif/bmp/webp/tiff
- Only single image processing per request
