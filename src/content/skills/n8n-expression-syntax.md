---
name: n8n-expression-syntax
title: n8n Expression Syntax
description: n8n expression syntax guide for dynamically accessing and transforming data in workflows
source: community
author: czlonkowski
githubUrl: https://github.com/czlonkowski/n8n-claude-skills/tree/main/n8n-expression-syntax
category: automation
tags:
  - n8n
  - expressions
  - syntax
roles:
  - developer
  - devops
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/czlonkowski/n8n-claude-skills
  cp -r n8n-claude-skills/n8n-expression-syntax ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Dynamic node data references
- Data field mapping
- Conditional logic expressions
- Date and time processing
- String operations

## Core Capabilities

- **Data Reference**: $json, $node syntax
- **Function Calls**: Built-in function usage
- **Conditional Expressions**: Ternary and logical operators
- **Chain Access**: Safe property access

## Example

```
Common expression examples:

// Access current node data
{{ $json.fieldName }}

// Access other node data
{{ $node["NodeName"].json.field }}

// Conditional expression
{{ $json.status === "active" ? "Yes" : "No" }}

// Date formatting
{{ $now.format("YYYY-MM-DD") }}

// Safe nested field access
{{ $json.user?.address?.city ?? "Unknown" }}
```

## Notes

- Expressions are case sensitive
- Handle null values properly
- Use ?? for default values
- Test edge cases
