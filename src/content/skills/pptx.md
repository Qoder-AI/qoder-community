---
name: pptx
title: PowerPoint Skill
description: Create, edit, and analyze PowerPoint presentations with support for layouts, content generation, and speaker notes
source: anthropic
author: Anthropic
githubUrl: https://github.com/anthropics/skills/tree/main/skills/pptx
docsUrl: https://docs.anthropic.com
category: document
tags:
  - powerpoint
  - presentation
  - slides
  - office
roles:
  - marketer
  - designer
  - pm
  - sales
  - executive
featured: true
popular: false
isOfficial: true
installCommand: |
  git clone https://github.com/anthropics/skills
  cp -r skills/pptx ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Quick professional presentation generation
- Auto-create slides from document content
- Unify presentation style and format
- Add speaker notes and transitions
- Client proposals and product demos

## Core Capabilities

- **Create Presentations**: Build complete presentations from scratch
- **Content Layout**: Smart arrangement of text, images, and charts
- **Template Application**: Apply and customize presentation templates
- **Notes Management**: Add and edit speaker notes
- **Batch Processing**: Update multiple presentations at once

## Example

```
Please create a 10-page product launch presentation:

Product: Qoder 2.0
Target audience: Developers
Key features:
- AI code generation
- Smart debugging
- Team collaboration

Use modern minimalist style with one core point per page.
```

## Notes

- Supports .pptx format
- Complex animation effects may not fully preserve
- Provide clear style guidance for best results
