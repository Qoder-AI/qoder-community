---
name: long-doc-translation
title: Long Foreign-Language Document -> Verifiable Chinese Full Draft
description: "Turn a several-hundred-page foreign-language monograph (German / English / French / Japanese, access you are licensed to use) into a deliverable, verifiable, terminologically consistent Chinese manuscript: single main .md draft, self-contained reading .html, paragraph-by-paragraph reference file, and a new-term glossary. Uncertain terms go to an open-questions list instead of being force-translated. Not for publishing copyrighted text as-is and not practice-grade legal output."
source: community
author: huhoo
githubUrl: https://github.com/huhoo/cue-awesome
docsUrl: https://github.com/huhoo/cue-awesome/tree/main/long-doc-translation
category: document
tags: [translation, long-document, glossary, citation-anchored]
roles: [content, finance, legal]
featured: false
popular: false
isOfficial: false
installCommand: npx skills add huhoo/cue-awesome --skill long-doc-translation
date: 2026-10-24
---

## What it does
Pipeline over a licensed, accessible long foreign-language document. Four deliverables: main draft .md, self-contained reading .html (left-side TOC, directly shareable), paragraph-by-paragraph reference file, and the book-level new-term glossary sorted by pinyin.

## Discipline it enforces
- Segment inventory first; footnote ids unique; marginal page numbers captured with a wide OCR-variant regex.
- Uncertain terms go to an open-questions list for a human - no forced translation that reads smooth but is wrong.
- Out of scope: republishing copyrighted text as-is; practice-grade legal output; investment judgements (rating / target price fields stay human-only).

## Install
npx skills add huhoo/cue-awesome --skill long-doc-translation
Then re-list the installed skills to confirm it is in place. The skill needs the Cue channel configured (one API key); offline behaviour and what it costs are stated in the skill's own README.
