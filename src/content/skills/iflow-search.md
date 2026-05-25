---
name: iflow-search
title: iFlow Search
description: Web search, image search, and web fetch via the iFlow Search API.
source: community
author: iFlow Open Platform
githubUrl: https://github.com/iflow-ai/iflow-skills/tree/main/skills/iflow-search
docsUrl: https://platform.iflow.cn/docs
category: data
tags:
  - iflow
  - web-search
  - image-search
  - web-fetch
  - api
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/iflow-ai/iflow-skills.git /tmp/iflow-skills
  mkdir -p ~/.qoder/skills
  cp -r /tmp/iflow-skills/skills/iflow-search ~/.qoder/skills/iflow-search
  rm -rf /tmp/iflow-skills
date: 2026-05-22
---

## Use Cases

- Pull fresh web results for topics past the model's training cutoff
- Search for images by keyword (references, screenshots, product shots)
- Read a known URL as cleaned-up markdown for downstream summarization
- Chain search → pick links → fetch each, to assemble a small research dossier

## Core Capabilities

- **Web Search** — keyword search via the iFlow web index
- **Image Search** — image results with reference URLs and titles
- **Web Fetch** — fetch a URL and return cleaned markdown content

## Example

After `IFLOW_API_KEY` is exported in the shell that launches Qoder, the agent can route research tasks to this skill:

```
Find recent reporting on LLM agent benchmarks, then fetch the top three article texts so I can summarize them.
```

The skill chains `web search → choose links → web fetch` end to end.

## API Key Setup

1. Create a key at https://platform.iflow.cn/profile?tab=apiKey
2. Export it in the shell **before** starting Qoder.

For zsh:

```bash
echo 'export IFLOW_API_KEY="YOUR_IFLOW_API_KEY"' >> ~/.zshrc
source ~/.zshrc
```

For bash:

```bash
echo 'export IFLOW_API_KEY="YOUR_IFLOW_API_KEY"' >> ~/.bashrc
source ~/.bashrc
```

Do not pass the key as a CLI flag and do not commit it to any file.

## Notes

- Skill source: https://github.com/iflow-ai/iflow-skills/tree/main/skills/iflow-search
- Skill install guide: https://platform.iflow.cn/docs/skill
- iFlow Search API docs: https://platform.iflow.cn/docs/
- `IFLOW_API_KEY` must be set in the same shell that launches Qoder.
