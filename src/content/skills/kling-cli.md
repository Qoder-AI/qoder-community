---
name: kling-cli
title: Kling AI CLI Skill
description: Use the official Kling AI CLI skill for image and video generation, reusable Elements, and motion control.
source: community
author: Kling AI
githubUrl: https://github.com/klingai-tech/skills
docsUrl: https://kling.ai/app/mcp/guide
category: design
tags:
  - image-generation
  - video-generation
  - cli
  - mcp
roles:
  - designer
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  npx skills add klingai-tech/skills
date: 2026-11-14
---

## Use Cases

- Create images and videos from text or reference media.
- Work with reusable Elements and motion control.
- Check generation tasks and retrieve completed results.

## Example

Ask the agent: “Help me create a video from this image using Kling.” The skill guides the agent through installation, account authorization, and the generation workflow.

## Notes

- The skill uses the official Kling CLI and requires Node.js 18 or later. Install the CLI package for your region and complete browser OAuth before use; see the upstream skill for current instructions.
- Choose `@klingai/cli-cn` for a China-region account (`klingai.com`) or `@klingai/cli-global` for a Global account (`kling.ai`); do not assume regional accounts, credits or task IDs are interchangeable.
- Generation consumes account credits. Check the connected account’s available models, parameters and generation costs before confirming a submission; this listing does not promise free generation.
- This listing links to the upstream project. Qoder-specific runtime compatibility has not been independently verified.
