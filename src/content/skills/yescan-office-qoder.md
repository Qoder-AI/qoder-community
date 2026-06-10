---
name: yescan-office-qoder
title: Yescan Office - Image to Office/PDF Conversion
description: Convert images, screenshots, or scanned documents into editable Office documents (Word/Excel) or PDF. Preserves layout of complex tables, contracts, and mixed text-image content. Powered by Quark Scan King conversion API.
source: community
author: changri
githubUrl: https://github.com/yescan-ai/yescan-office-qoder
docsUrl: https://scan.quark.cn/business
category: document
tags:
  - ocr
  - image-to-word
  - image-to-excel
  - image-to-pdf
  - format-conversion
  - table-restoration
  - quark-scan
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

## Use Cases

- Convert financial report screenshots containing tables into editable Excel files
- Transform handwritten inventory record photos into structured Excel spreadsheets
- Convert meeting notes photos into Word documents
- Transform product manual screenshots into .docx format with original layout preserved
- Convert handwritten classroom note images into PDF documents for archiving
- Process contract photos into clean PDF files for storage and distribution
- Convert whiteboard sketches into well-formatted PDF documents

## Core Capabilities

- **Image to Excel**: Recognize table data in images and convert to .xlsx files, preserving row/column structure and data relationships
- **Image to Word**: Restore text and image layout from images, generating editable .docx documents with support for long text and multi-paragraph content
- **Image to PDF**: Convert images into well-formatted PDF documents suitable for archiving and printing
- **Layout Restoration**: Preserve original visual elements including table borders, font sizes, and text formatting from the source image
- **Auto-save**: Converted files are automatically saved to the local temporary directory, returning a file path ready for immediate use

## Supported Scenarios (3 total)

| # | Scenario | Scene ID | Output Format |
|---|----------|----------|---------------|
| 1 | Image to Excel | `image-to-excel` | .xlsx |
| 2 | Image to Word | `image-to-word` | .docx |
| 3 | Image to PDF | `image-to-pdf` | .pdf |

## Example

```
Please convert this financial report screenshot into an Excel file.
(attach a screenshot containing a table)
```

```
Convert this photo of meeting notes into a Word document.
```

```
Please convert this equipment nameplate photo into PDF format for archiving.
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
- Converted files are saved to the system temporary directory (e.g., `/tmp`); manage cleanup manually
- Images are sent to Quark Scan King servers for conversion; data is not permanently stored
- Not suitable for video processing or real-time camera streams
