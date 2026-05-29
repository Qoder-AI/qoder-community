---
name: jinshuju
title: Jinshuju (金数据)
description: Build and edit forms, query and bulk-update entries, and check account, billing, and team data on Jinshuju (金数据) through its MCP server using natural language.
source: community
author: Jinshuju
githubUrl: https://github.com/jinshuju/jinshuju-skill
docsUrl: https://open.jinshuju.net/mcp/
category: productivity
tags:
  - forms
  - data-collection
  - survey
  - mcp
  - 金数据
roles:
  - developer
  - data-analyst
  - pm
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/jinshuju/jinshuju-skill
  mkdir -p ~/.qoder/skills/jinshuju
  cp -r jinshuju-skill/skills/jinshuju/. ~/.qoder/skills/jinshuju/
date: 2026-05-29
lastUpdated: 2026-05-29
---

## Use Cases

- Create, copy, move, or edit forms and adjust themes — 39 field types including matrix, product, formula, linked-form, and appointment fields, with AI-generated header images
- Query, create, bulk-update, and delete form entries with server-side filter push-down (equals / range / fuzzy / set conditions) and cursor pagination
- Check the current user, enterprise plan and usage quota, and list team members
- Look up electronic invoices and payment history

## Example

```text
User: Build a "2026 Spring Product Launch" registration form with name, mobile, company, and title.
Assistant: (calls create_form, returns the form link and form_token)

User: Count this month's registrations whose mobile number starts with 138.
Assistant: (list_entries pushes the like / created_at filters down to the database, then paginates)

User: Set "follow-up status" to "Contacted" for all of those people.
Assistant: (shows matched entries, asks for confirmation, then calls update_entry one by one)
```

## Notes

- This skill is powered by the Jinshuju MCP server at `https://jinshuju.net/mcp`. After installing the skill, configure the MCP connector in your AI client — OAuth 2.0 is recommended, or HTTP Basic with an API Key / Secret. See the [MCP docs](https://open.jinshuju.net/mcp/) for details.
- Only the `skills/jinshuju/` subdirectory of the repository should be copied into `~/.qoder/skills/jinshuju/`.
- Entry payload keys must be the field `api_code` (not the Chinese label), and option fields take the option's `api_code` (not the display text) — otherwise the server silently drops the value or returns a 400.
- `update_entry` defaults to PATCH (`is_put=false`); only set `is_put=true` for a confirmed full-record replacement, as it clears any field you omit.
