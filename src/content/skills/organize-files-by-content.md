---
name: organize-files-by-content
title: Organize Files by Content
description: An Agent Skill that organizes files around their purpose, existing folder structure, and the way you look for them. Every proposed change is shown in a full preview before anything is renamed or moved.
source: community
author: gegezi1205
githubUrl: https://github.com/gegezi1205/organize-files-by-content
docsUrl: https://github.com/gegezi1205/organize-files-by-content#readme
category: productivity
tags:
  - file-organization
  - office-automation
  - preview-first
  - bilingual
roles:
  - finance
  - hr
  - legal
  - executive
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/gegezi1205/organize-files-by-content
  cp -r organize-files-by-content ~/.qoder/skills/
date: 2026-07-31
---

## Use Cases

- A Desktop or Downloads folder that has piled up for months and keeps being postponed
- Work folders mixing chat downloads, email attachments, and temporary meeting versions
- Personal reference material that needs a structure you will still recognize later
- Shared folders where you have clear permission to reorganize

## How It Works

- Starts with a few short questions about your job and how you search for old files (project, purpose, people, or date)
- Reads filenames, document content, and formal metadata; your existing naming habits take priority
- Keeps useful patterns in the old folders; only offers cautious new schemes when no pattern exists
- Shows every rename, move, version, and duplicate decision in a full preview; execution requires explicit confirmation
- Ambiguous, encrypted, damaged, or unreadable files stay in place with a recorded reason

## Example

```
Help me organize my Downloads folder.

1. Back up the folder first, then run a read-only inventory.
2. Answer the short profile questions (5-8 work types).
3. Review the full preview of every proposed path and rename.
4. Approve the final preview, then verify the result.
```

## Notes

- Preview is the default: nothing is renamed or moved before you approve the full preview
- Make a separate backup and start with a small folder before organizing real files
- Deduplication requires separate authorization; the built-in organizer never deletes unique files
- `scripts/organizer.py` handles one configured root per run; files outside the root are rejected
- Bilingual README (English and Chinese) included in the repository
