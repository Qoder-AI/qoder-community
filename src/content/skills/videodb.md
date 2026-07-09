---
name: videodb
title: VideoDB - Perception, Memory, and Action for Video Agents
description: The perception, memory, and action layer for AI agents. Ingest, understand, search, edit, transcribe, subtitle, capture, monitor, and stream video and audio through natural language.
source: community
author: VideoDB
githubUrl: https://github.com/video-db/skills
docsUrl: https://docs.videodb.io/
category: data
tags:
  - video
  - audio
  - perception
  - multimodal-ai
  - video-search
  - transcription
  - rtsp
  - hls
  - video-editing
  - ai-agents
roles:
  - developer
featured: false
popular: false
isOfficial: true
installCommand: |
  npx skills add video-db/skills
date: 2026-07-09
---

## Use Cases

- Ingest videos from YouTube, public URLs, local files, or RTSP/live feeds.
- Capture desktop screen, mic, and system audio for real-time perception workflows.
- Return playable HLS stream links for uploaded, generated, edited, or clipped media.
- Create real-time context from visual and spoken information in videos and live streams.
- Build spoken-word, visual, semantic, keyword, and temporal indexes over video content.
- Search exact moments by transcript, visual scene, object, action, metadata, or timestamp.
- Return search results with timestamps, playable evidence links, and auto-generated clips.
- Generate clean timestamped transcripts and styled subtitles.
- Trim, merge, compile clips, add subtitles, and compose media timelines server-side.
- Overlay text, images, branding, audio, background music, voiceover, dubbing, and translations.
- Transcode and normalize codec, FPS, resolution, bitrate, quality, and aspect ratio.
- Reframe videos for social formats such as vertical, square, and landscape.
- Generate AI media assets including images, video, music, sound effects, and voiceovers.
- Monitor RTSP/live feeds and trigger real-time alerts when events happen.
- Record desktop sessions, summarize what happened, and preserve searchable session memory.

## Flow

VideoDB gives agents one consistent server-side video stack:

- **See**: ingest local files, public URLs, YouTube videos, RTSP/live feeds, or desktop sessions with screen, mic, and system audio.
- **Understand**: create real-time context, transcripts, visual indexes, semantic indexes, timestamped memory, and searchable evidence.
- **Act**: generate clips, subtitles, overlays, audio, dubbing, translations, transcodes, reframes, alerts, exports, and playable streams.

Your agent sends video in and gets back structured context, searchable moments, generated assets, alerts, clips, and HLS stream links without running local video infrastructure.

## Example

```bash
npx skills add video-db/skills
```

Then ask your agent:

```text
Upload this YouTube video, find every moment where the speaker discusses pricing, and return playable clips with timestamps.
```

More example prompts:

```text
Upload https://www.youtube.com/watch?v=MnrJzXM7a6o and give me a shareable stream link.
```

```text
Take clips from 10s-30s and 45s-60s and compile them.
```

```text
Generate background music and add it to this clip.
```

```text
Add subtitles to the original video with white text on a black background.
```

```text
Find every scene showing a phone close-up or product on screen.
```

```text
Monitor this RTSP camera and log an alert with timestamp whenever a person enters the room.
```

```text
Capture my screen for two minutes and write a report of what I am doing with insights and suggestions.
```

## Notes

- Requires Python 3.9+ and a VideoDB API key.
- Get $20 free credits. No credit card needed: https://console.videodb.io
- The Claude Code setup command is `/videodb setup`.
- For Cursor, GitHub Copilot, Codex, opencode, and other agents, ask the agent to "setup videodb".
- Claude Code plugin install is also supported with `/plugin marketplace add video-db/skills` and `/plugin install videodb@videodb-skills`.
- Supported host platforms include macOS, Linux, and Windows PowerShell; desktop capture support depends on the host environment.
- Skill source and updates stay in the official VideoDB skills repository: https://github.com/video-db/skills
