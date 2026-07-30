---
name: douyin-knowledge-animation
title: Douyin Knowledge Animation (Vertical Beat-Synced)
description: Turn any knowledge topic into a Douyin/TikTok-style vertical animated explainer video. Breaks the topic into "suspense cover + one punchline per animated page + freeze-frame ending" storyboards, generates a single-file HTML Canvas animation (720×1280) with built-in one-key cover image export, ready for screen recording with beat-synced BGM.
source: community
author: li872
githubUrl: https://github.com/li872/douyin-publish-skill
category: marketing
tags:
  - douyin
  - tiktok
  - canvas-animation
  - vertical-video
  - science-explainer
roles:
  - content
  - marketer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/li872/douyin-publish-skill
  cp -r douyin-publish-skill/douyin-knowledge-animation ~/.qoder/skills/
date: 2026-07-30
---

## Use Cases

- Turn a principle, formula, or fun fact into a viral-style vertical pure-animation video (no narration, no talking head)
- Create "one lyric line, one scene" beat-synced knowledge animations, then screen-record and add trending BGM in a video editor
- Auto-generate video cover images (4:3 landscape + 3:4 portrait, exported with one key press)

## Example

```text
/douyin-knowledge-animation how traffic lights are timed
# Or trigger with natural language:
Make a Douyin knowledge animation about why elevators go up before down
```

## Notes

- Output is a single-file HTML animation: press F for fullscreen, Enter to play, C to export two cover PNGs; BGM is added separately in your video editor
- Ships with hard readability rules (Douyin safe area, minimum font size, pure-white text) distilled from real publishing experience
- Uses progressive disclosure: SKILL.md holds the main workflow, while tech spec and publishing strategy live in references/ and load on demand
