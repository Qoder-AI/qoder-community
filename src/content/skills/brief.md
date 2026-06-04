---
name: brief
title: Brief
description: Initialize a professional Brief report site, generate Brief-style analysis reports, and publish them into the site
source: community
author: yofine
githubUrl: https://github.com/yofine/skills/tree/main/brief
docsUrl: https://github.com/yofine/skills#brief
category: development
tags:
  - reports
  - react
  - vite
  - publishing
roles:
  - developer
  - content
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/yofine/skills
  mkdir -p ~/.qoder/skills
  cp -r skills/brief ~/.qoder/skills/
date: 2026-06-05
---

## Use Cases

- Initialize a polished Brief site from a bundled React/Vite template
- Generate standalone Brief-style HTML analysis reports from articles, topics, or codebases
- Publish generated reports into the site archive and metadata index
- Build the site and start a local preview server
- Maintain a focused report site with one featured report, archive view, tags, and detail pages

## Core Capabilities

- **Site Initialization**: Creates a complete Brief frontend project in `~/brief` by default
- **Report Generation**: Produces standalone HTML research reports with clear analysis and useful visual structure
- **Publishing Workflow**: Adds report HTML under `public/reports` and updates `src/content/reports.ts`
- **Preview And Validation**: Installs dependencies, starts the dev server, and runs build checks when needed
- **Template Included**: Ships with a complete Brief frontend template and one sample report

## Example

```
Use brief to initialize a new report site and start it locally.

Then analyze this article, generate a Brief-style report, publish it to the site,
and make it the featured report.
```

## Notes

- Users describe the desired outcome in natural language; the agent handles setup and commands
- The default site location is `~/brief` unless the user explicitly provides another path
- Reports can follow the language requested by the user or implied by the existing site
- The skill is intended for professional research briefs, not generic blogs or marketing pages
