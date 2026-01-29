---
name: postgres
title: PostgreSQL Query Skill
description: Execute safe read-only SQL queries and data analysis on PostgreSQL databases
source: community
author: sanjay3290
githubUrl: https://github.com/sanjay3290/postgres
category: data
tags:
  - sql
  - database
  - postgresql
  - query
roles:
  - developer
  - data-analyst
  - devops
featured: true
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/sanjay3290/postgres
  cp -r postgres ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Database queries and analysis
- Report data extraction
- Data quality checks
- Performance diagnostic queries
- Data exploration

## Core Capabilities

- **Safe Queries**: Read-only operations, prevent accidental modifications
- **Complex Queries**: Support JOINs, subqueries, CTEs
- **Data Analysis**: Aggregation, window functions
- **Result Formatting**: Clear output format

## Example

```sql
-- Please help analyze user activity
-- Query daily active users for past 30 days
-- Statistics by day with week-over-week growth

SELECT 
  date_trunc('day', created_at) as date,
  COUNT(DISTINCT user_id) as dau,
  LAG(COUNT(DISTINCT user_id), 7) OVER (ORDER BY date_trunc('day', created_at)) as dau_7d_ago
FROM events
WHERE event_type = 'page_view'
  AND created_at >= NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 1;
```

## Notes

- Only read-only operations supported
- Be mindful of performance on large tables
- Use EXPLAIN to analyze query plans
- Mask sensitive data appropriately
