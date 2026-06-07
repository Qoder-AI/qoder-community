---
name: nju-cli
title: Nanjing University CLI
description: Skills and a bundled CLI for working with Nanjing University services, including academic affairs, eHall, exchange programs, and Youth League notices.
source: community
author: nju-cli
githubUrl: https://github.com/nju-cli/codex-marketplace/tree/main/plugins/nju-cli
docsUrl: https://github.com/nju-cli/nju-cli
category: productivity
tags:
  - nju
  - university
  - cli
  - campus
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone --depth 1 https://github.com/nju-cli/codex-marketplace.git
  mkdir -p ~/.qoder/skills
  rm -rf ~/.qoder/skills/nju-cli
  cp -R codex-marketplace/plugins/nju-cli/skills/nju-cli ~/.qoder/skills/nju-cli
  cp -R codex-marketplace/plugins/nju-cli/scripts ~/.qoder/skills/nju-cli/scripts
  cp -R codex-marketplace/plugins/nju-cli/bin ~/.qoder/skills/nju-cli/bin
date: 2026-06-08
---

## Use Cases

- Read official academic affairs notices, calendars, exam notices, and graduation-related announcements.
- Query eHall data such as class schedules, training plans, and grades when credentials and access are available.
- Look up exchange program information from Nanjing University's exchange system.
- Check Youth League news and announcement notices.

## Core Capabilities

- **Academic Affairs**: Collect and interpret official notices, calendars, and exam information.
- **eHall**: Guide Qoder to use the `nju-cli` binary for campus service queries.
- **Exchange System**: Search exchange program information and related notices.
- **Youth League**: Retrieve recent Youth League news and announcement updates.

## Example

```
Do my current courses satisfy the NJU graduation requirements?
```

```
Find recent NJU exchange program notices and summarize the deadlines.
```

## Notes

- The install command shallow-clones the Codex marketplace repository, then copies the `nju-cli` skill, scripts, and all bundled binaries into `~/.qoder/skills/nju-cli`.
- Bundled binaries are copied for macOS Apple Silicon, Linux x86_64, and Windows x86_64.
- Some eHall workflows may require valid Nanjing University credentials and network access to campus services.
