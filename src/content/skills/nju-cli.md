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

## Screenshots

<p align="center">
  <img alt="NJU CLI" width="20%" src="https://github.com/user-attachments/assets/d78d6040-8262-420d-892b-86d7b04afd16" />
</p>

| Thesis deadline | Graduation checklist |
| :--------------: | :------------------: |
| <img width="100%" alt="Thesis deadline screenshot" src="https://github.com/user-attachments/assets/de0576c9-6f95-4814-bf6a-f31fd13fae43" /> | <img width="100%" alt="Graduation checklist screenshot" src="https://github.com/user-attachments/assets/bbee4ab4-f631-4bbe-999d-46b7abecc0fb" /> |
| Course graduation check | Party membership guidance |
| <img width="927" height="910" alt="Course graduation check screenshot" src="https://github.com/user-attachments/assets/3258646e-87f3-40eb-8c73-a98a454d9d60" /> | <img width="949" height="1389" alt="Party membership guidance screenshot" src="https://github.com/user-attachments/assets/94d65e26-569a-4141-b464-e076852dda24" /> |

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
