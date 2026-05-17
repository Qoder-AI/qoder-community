---
name: ai-shifu-course-creator
title: AI-Shifu Course Production Expert
description: Based on your teaching needs and source materials (PPT, Word, PDF, txt, etc.), helps you quickly build a one-on-one interactive AI course on the AI-Shifu platform
source: community
author: heshaofu
githubUrl: https://github.com/ai-shifu/skills/tree/main/skills/ai-shifu-course-creator
docsUrl: https://ai-shifu.cn
category: productivity
tags:
  - ai-course
  - course-production
  - instructional-design
roles:
  - content
  - pm
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/ai-shifu/skills
  cp -r skills/skills/ai-shifu-course-creator ~/.qoder/skills/
date: 2026-05-17
---

## Use Cases

- Build an AI-Shifu course from scratch on a given topic, personalized for learners from different backgrounds
- Turn uploaded source material (PPT, Word, PDF, txt) into an AI-Shifu course with text and images
- View and manage your existing courses on the AI-Shifu platform

## Core Capabilities

- **Five-phase pipeline**: Segmentation → Orchestration → Generation → Optimization → Deployment
- **MarkdownFlow (MDF) authoring**: directive-style prompts, prompt-outside / options-inside interaction syntax, mandatory anchoring with downstream effects
- **Pedagogy-aware**: variable strategy, interaction design, visual-text coordination, language resolution
- **Standard & fallback modes**: gracefully handles incomplete or low-quality source material
- **Live deployment**: build, import, and publish directly to the AI-Shifu platform
- **Creator analytics**: track learner progress, identify stuck lessons, monitor revenue and ratings

## Example

```
Build an AI-Shifu course on the topic of "Why should I learn AI".
Keep it within 4 sections, and personalize the teaching for users
from different backgrounds. The teaching should combine PPT slides with text.
```

```
Help me turn this uploaded material into an AI-Shifu course.
The lessons should be illustrated with both text and images.
```

```
Help me check my courses on the AI-Shifu platform.
```

## Notes

- Both Teaching Prompts and Course Prompts are written in MarkdownFlow (MDF)
- Output language is resolved before any prompt content — examples in references are English-only for canonical illustration
- Keep author-side meta labels (e.g. "Knowledge Block 1/2/3", "Lesson Objective") out of learner-facing output
- Use natural-language image instructions; do not inline SVG/HTML/Mermaid markup unless the user requests it
- Companion skill in the same repo: `course-direction-advisor` (course topic selection and market-fit decisions)
