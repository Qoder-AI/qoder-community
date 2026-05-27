---
name: b-antd
title: Gaode B-End Ant Design
description: Generate React + Ant Design admin pages that follow Gaode enterprise desktop UI rules for list, form, detail, report, and composed workflow pages
source: community
author: mandy
githubUrl: https://github.com/liuman0722/b-antd
category: development
tags:
 - antd
 - react
 - admin
 - enterprise
 - design-system
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

- Generate B-end list pages with filter cards, tables, batch actions, and pagination
- Build single-column, multi-column, step, and preview forms with Ant Design
- Create report pages with KPI cards, charts, detail tables, and AI insight modules
- Standardize page layout, spacing, breadcrumb and title rules, and header and card behavior
- Convert product-manager style requirements into runnable React + Ant Design pages

## Core Capabilities

- **Page Typing**: Infer list, form, detail, report, exception, and composed workflow pages from natural-language requirements
- **Strict Layout Rules**: Enforce filter placement, button order, table action columns, card spacing, and fixed header and sider behavior
- **Report Expertise**: Cover KPI card shapes, metric-to-chart linkage, chart grid layout, and optional AI sections
- **Ant Design v5 First**: Prefer official components, tokens, and interaction patterns instead of custom UI abstractions
- **PM-Friendly Defaults**: Fill in missing details with safe defaults and mark follow-up items without blocking delivery

## Example

```text
Use b-antd to build a merchant order management list page.
Business goal: Help operations search and manage orders efficiently.
Key fields: order number, merchant name, amount, status, created time.
Core actions: query, reset, pagination, batch delete, create.
Please follow the b-antd layout rules and wire it into the current React + Ant Design project.
```

## Notes

- Best suited for Chinese enterprise desktop products built with React + Ant Design
- Designed around Gaode B-end PC page patterns and Ant Design v5 conventions
- Includes `references/`, `assets/`, and helper scripts for reusable page scaffolding
