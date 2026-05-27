---
name: b-antd
title: 高德B端PC设计规范
description: Generate React + Ant Design code that strictly follows Gaode B-end PC design specs for list, form, detail, report, and composed admin pages
source: community
author: mandy
githubUrl: https://github.com/liuman0722/b-antd
category: development
tags:
 - antd
 - react
 - gaode
 - admin
 - design-system
 - b-end
roles:
 - developer
 - designer
featured: false
popular: false
isOfficial: false
installCommand: |
 git clone https://github.com/liuman0722/b-antd.git
 cp -r b-antd ~/.qoder/skills/
date: 2026-05-26
---

## Use Cases

- Build Gaode B-end PC list pages with filter cards, tables, pagination, and batch actions
- Generate single-column, multi-column, step, and preview forms with Ant Design
- Create report pages with KPI cards, charts, detail tables, and optional AI insight blocks
- Enforce layout rules for headers, siders, filter placement, table action columns, and card spacing
- Turn product-style natural language requirements into runnable React + Ant Design pages

## Core Capabilities

- **Gaode B-end PC Specs**: Strict layout, spacing, filter, table, form, and report patterns for enterprise admin UIs
- **Page Typing**: Infer list, form, detail, report, exception, and composed workflow pages from requirements
- **Report Expertise**: KPI card variants, metric-to-chart linkage, chart grids, and optional AI-themed sections
- **Ant Design v5 First**: Official components, tokens, and `items`-based Menu/Breadcrumb APIs
- **PM-Friendly Defaults**: Ship a minimal runnable page first, then mark follow-up items without blocking delivery

## Example

```text
Use b-antd to build a merchant order list page for a Gaode B-end PC admin console.
Filters: order ID, status, order time.
Columns: order ID, buyer, amount, status, created time, actions.
Features: pagination, batch delete, primary button "Create Order".
Follow Gaode B-end PC design rules and wire into the current React + Ant Design project.
```

## Notes

- Skill ID is `b-antd`; display name is **Gaode B-end PC Design Specs** (高德B端PC设计规范)
- Best for Chinese enterprise desktop / merchant admin products on React + Ant Design
- Full rules live in `SKILL.md`; `references/`, `assets/`, and helper scripts are included
