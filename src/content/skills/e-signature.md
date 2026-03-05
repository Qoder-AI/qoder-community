---
name: e-signature
title: Electronic Signature for Word Documents
description: Insert handwritten electronic signatures into Word documents (.doc/.docx). Provides a canvas-based signature pad for hand-drawing, parses documents to locate signature fields, and generates signed documents with embedded signature images.
source: community
author: tianhao909
githubUrl: https://github.com/tianhao909/qoderwork-e-signature
docsUrl: https://github.com/tianhao909/qoderwork-e-signature#readme
category: document
tags:
  - electronic-signature
  - handwritten-signature
  - word-document
  - automation
  - legal
roles:
  - developer
  - legal
  - hr
  - executive
  - finance
  - sales
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/tianhao909/qoderwork-e-signature
  cp -r qoderwork-e-signature/e-signature ~/.qoder/skills/
date: 2026-03-05
---

## Use Cases

- Sign NDAs, contracts, and legal documents electronically with a handwritten signature
- Batch sign multiple Word documents in one session
- Fill in signature fields, dates, and names in template-based documents
- Capture and reuse handwritten signatures via an interactive HTML Canvas pad
- Convert legacy .doc files to .docx and insert signatures programmatically

## Core Capabilities

- **Signature Capture**: Interactive HTML Canvas pad with pen width/color controls and transparent PNG export
- **Document Parsing**: Read both .doc (via word-extractor) and .docx formats to locate signature placeholders
- **Signature Insertion**: Embed signature images at precise positions using docx-js ImageRun
- **Auto-fill Fields**: Automatically populate date, name, and other fields alongside the signature
- **Font Fallback**: Generate text-based signatures using system calligraphy fonts when handwriting is unavailable

## Example

```
Please sign this NDA document for me:
1. Open the signature pad and let me draw my signature
2. Read the Word document and find the signature field
3. Insert my handwritten signature image into the document
4. Fill in today's date next to the signature
```

## Notes

- Supports both .doc (legacy) and .docx (Office 2007+) formats
- Signature images are exported as transparent PNGs for clean overlay
- Dependencies: docx, word-extractor, canvas (Node.js)
- The signature pad supports both mouse and touch input with i18n (English/Chinese)
