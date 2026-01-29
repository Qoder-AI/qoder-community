---
name: docx
title: Word Documents Skill
description: Create, edit, and analyze Microsoft Word documents with support for tracked changes, comments, formatting preservation, and text extraction
source: anthropic
author: Anthropic
githubUrl: https://github.com/anthropics/skills/tree/main/skills/docx
docsUrl: https://docs.anthropic.com
category: document
tags:
  - word
  - office
  - document
  - editing
roles:
  - developer
  - marketer
  - designer
  - pm
  - data-analyst
  - content
  - finance
  - hr
  - legal
  - sales
  - executive
featured: true
popular: true
isOfficial: true
installCommand: |
  git clone https://github.com/anthropics/skills
  cp -r skills/docx ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Automated report generation and formatting
- Contract document editing and annotation
- Batch document processing and conversion
- Extracting structured data from Word documents
- Revision tracking for collaborative documents

## Core Capabilities

- **Create Documents**: Build beautifully formatted Word documents from scratch
- **Edit Content**: Modify text, styles, and layout of existing documents
- **Track Changes**: Enable and manage revision tracking
- **Add Comments**: Insert annotations and comments in documents
- **Extract Text**: Pull plain text or structured content from complex documents

## Example

```
Please help me create a project progress report with:
1. Project overview
2. Tasks completed this week (in table format)
3. Next week's plan
4. Risks and issues

Use professional business document formatting.
```

## Notes

- Supports .docx format (Office 2007+)
- Complex tables and charts may require additional processing
- Be mindful of data security when processing sensitive documents
