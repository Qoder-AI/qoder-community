---
name: modellix
title: Modellix
description: Generate images and videos via Modellix's unified model API and CLI (model run --wait, task download).
source: community
author: Modellix
githubUrl: https://github.com/Modellix/modellix-skill/tree/main/modellix-skill
docsUrl: https://docs.modellix.ai/llms.txt
category: design
tags:
  - image-generation
  - video-generation
  - modellix
  - cli
  - api
roles:
  - designer
  - developer
  - marketer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/Modellix/modellix-skill
  cp -r modellix-skill/modellix-skill ~/.qoder/skills/modellix
  npm i -g modellix-cli@latest
date: 2026-07-16
lastUpdated: 2026-07-16
---

## Use Cases

- Generate images from text prompts (T2I)
- Edit or restyle images (I2I)
- Create videos from text or images (T2V / I2V)
- Call Modellix models through one CLI/API instead of per-provider SDKs
- Automate async generation with wait + download in a single workflow

## Core Capabilities

- **CLI-first workflow**: `doctor` → `model run --wait` → `task download`
- **Default models** when the user omits a slug (e.g. Nano Banana lite for T2I, Seedance for T2V)
- **REST fallback** when the CLI is unavailable
- **Env auth**: `MODELLIX_API_KEY`

## Example

```bash
# Preflight
modellix-cli doctor --json

# Text-to-image (omit --model-slug to use skill defaults, or set explicitly)
modellix-cli model run \
  --model-slug google/nano-banana-2-lite \
  --body '{"prompt":"a red bicycle on a rainy street, cinematic"}' \
  --wait --timeout 5m --json

# Download artifacts
modellix-cli task download <task_id> --output-dir ./outputs --json
```

## Notes

- Install only the `modellix-skill/` package directory into `~/.qoder/skills/modellix` (not the whole monorepo root).
- Prefer `modellix-cli` over hand-rolled REST polling when the CLI is available.
- Prefer machine-readable flags (`--json` / `--quiet`) for automation.
- See docs index: https://docs.modellix.ai/llms.txt and CLI: https://www.npmjs.com/package/modellix-cli
