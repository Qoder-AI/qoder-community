---
name: pdf
title: PDF Toolkit Skill
description: Complete toolkit for PDF reading/writing, text and table extraction, merging/splitting, form filling, and content editing
source: anthropic
author: Anthropic
githubUrl: https://github.com/anthropics/skills/tree/main/skills/pdf
docsUrl: https://docs.anthropic.com
category: document
tags:
  - pdf
  - extraction
  - forms
  - merge
roles:
  - developer
  - data-analyst
  - finance
  - hr
  - legal
  - executive
featured: true
popular: true
isOfficial: true
installCommand: |
  git clone https://github.com/anthropics/skills
  cp -r skills/pdf ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Extract data and tables from PDF reports
- Batch fill PDF forms
- Merge multiple PDF files
- Split large PDF documents
- Process legal documents and contracts

## Core Capabilities

- **Text Extraction**: Extract searchable text from PDFs
- **Table Extraction**: Identify and extract table data to structured formats
- **Form Processing**: Fill and read PDF form fields
- **Document Merging**: Combine multiple PDFs into one file
- **Page Operations**: Extract, delete, or reorder pages

## Example

```
Please extract from this financial report PDF:
1. All data tables, converted to CSV format
2. Summary of key financial metrics
3. Data points from charts (if identifiable)
```

## Notes

- Scanned PDFs may require OCR processing
- Encrypted PDFs need to be decrypted first
- Table extraction accuracy depends on PDF structure
