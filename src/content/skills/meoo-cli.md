---
name: meoo-cli
title: Meoo CLI — Full-Stack App Builder Skill
description: Let AI assistants handle database, auth, storage, edge functions, and CDN deployment — complete lifecycle from zero to production
source: community
author: Meoo Team
githubUrl: https://github.com/ali-meoo/meoo-cli
docsUrl: https://docs.meoo.com
category: development
tags:
  - fullstack
  - deploy
  - cloud
  - supabase
  - postgresql
  - edge-functions
  - cdn
  - react
  - vue
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  # Option 1: Official install (recommended)
  # Read meoo.com/skill-setup.md and follow the instructions to install the Meoo skill

  # Option 2: Manual install
  npm install -g @aliyun-meoo/cli
  git clone https://github.com/ali-meoo/meoo-cli.git
  cp -r meoo-cli/skills/meoo-cli ~/.qoder/skills/
date: 2026-06-10
---

## Use Cases

- **Build full-stack apps from scratch**: Describe your requirements in natural language — AI handles project init, database provisioning, API generation, and deployment
- **Add backend to existing frontend**: Connect your React/Vue project to database, auth, and storage with a single command
- **Database management**: Execute SQL queries, create tables, and manage migrations directly through your AI assistant
- **Edge function deployment**: Write serverless functions in Deno for API endpoints, webhooks, and scheduled tasks
- **One-click CDN deploy**: Build, package, and publish to global CDN with a shareable access link
- **Sandbox code sync**: Bidirectional sync between local code and cloud sandbox for multi-device collaboration

## Core Commands

```bash
meoo login                      # Authenticate (browser-based one-click auth)
meoo init react-design          # Initialize from template
meoo projects create "My App"   # Create remote project
meoo cloud enable               # Provision cloud services (PostgreSQL + Auth + Storage)
meoo cloud pull-env             # Pull environment variables to local .env
meoo deploy                     # Build and publish to CDN
meoo db query "SELECT ..."      # Execute SQL queries
meoo fn deploy <name>           # Deploy edge functions
meoo sandbox push               # Push code to cloud sandbox
meoo sandbox pull               # Pull sandbox code to local
meoo account                    # View plan, credits, and benefits
```

## Tech Stack

- **Frontend**: React / Vue SPA + Tailwind CSS
- **Database**: PostgreSQL (Supabase)
- **Auth**: Supabase Auth (email/SMS/OAuth)
- **Storage**: Supabase Storage
- **Functions**: Deno Edge Functions
- **Hosting**: Global CDN static hosting

## Example

In your AI assistant, simply type:

```
Create a Todo app with user login and database using meoo cli, then deploy it
```

The AI will automatically handle everything — project initialization, cloud provisioning, code generation, and deployment.

## Notes

- Requires Node.js 20+
- Must use pnpm as package manager
- Dev server runs on port 3015 (fixed)
- Hash routing only (CDN does not support history mode)
- Cloud services are optional — pure frontend projects don't need them
