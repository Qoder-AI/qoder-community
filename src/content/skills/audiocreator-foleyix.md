---
title: "Audio Creator · Foleyix"
description: "Write better audio prompts and create music, vocal songs, podcasts, ambience, effects and speech through Foleyix."
name: audiocreator-foleyix
source: community
author: Foleyix
githubUrl: https://github.com/lvyinchao/foleyix-skill/tree/main/skills/audiocreator-foleyix
docsUrl: https://foleyix.com/skill
category: design
tags:
  - audio
  - music
  - podcast
  - sound-effects
  - prompts
roles:
  - designer
  - content
  - marketer
featured: false
popular: false
isOfficial: false
shareImage: /images/skills/share/audiocreator-foleyix-share.png
installCommand: |
  npx skills add lvyinchao/foleyix-skill --skill audiocreator-foleyix -a qoder
date: 2026-10-05
---

## Use Cases

- Write, optimize, or repair prompts for background music, vocal songs, podcasts, ambience, effects, narration, dialogue, and sound scenes.
- Preserve exact lyrics or spoken words while clarifying delivery, timing, textures, and exclusions.
- Generate audio through an authorized Foleyix account, inspect existing tasks, and download private WAV results.

## Install

```bash
npx skills add lvyinchao/foleyix-skill --skill audiocreator-foleyix -a qoder
```

Install the complete skill directory, including its references and script. Version 1.5.0 is available from the [GitHub release](https://github.com/lvyinchao/foleyix-skill/releases/tag/v1.5.0).

## Examples

```text
Use audiocreator-foleyix to write a prompt for gentle instrumental background music for a travel video. Include acoustic guitar and soft piano; no vocals or lyrics. Return the prompt only.
```

```text
Use audiocreator-foleyix to generate a calm forest ambience with distant birds and light wind. No speech or music. Save the WAV and report the result's actual duration.
```

Prompt-only requests require no login, local runtime, or generation quota. When account operations or generation are requested, the bundled CLI requires Node.js 22.20+ and network access. The user completes device authorization on Foleyix; the agent must not read passwords or approve on the user's behalf.

## Notes

- The skill and CLI are free MIT-0 software; actual generation uses the user's Foleyix trial or subscription quota.
- Audio types and limits share a capability catalog with the website. Background music and vocal songs use different prompt guidance.
- The CLI lists the connected account's saved voices with `node scripts/foleyix.mjs voices --json`. Repeated `--voice-id ID` flags bind up to three distinct, completed, retained voice references in `@voice1`, `@voice2`, `@voice3` order. Each reference is limited to 30 seconds and 10 MB; the compiled prompt, including reference descriptions, must fit 3,000 characters.
- CLI 1.5.0 creates synthetic voice metadata with `voice-create`, generates reusable reference audio with `voice-preview`, and uploads authorized WAVs with `voice-upload --rights-confirmed`. New login displays `voices:write`; older connections must reconnect and approve this permission. Preview consumes generation seconds; upload consumes storage only. Catalog import, batch game effects and programme exports use website workflows.
- Requested duration is guidance. Report completion only after the existing task and its delivered file have been checked; downloading an existing result does not consume new generation quota.
