---
name: systematic-debugging
title: Systematic Debugging
description: Methodical problem-solving in code through systematic processes to quickly locate and fix bugs
source: community
author: obra
githubUrl: https://github.com/obra/superpowers/tree/main/skills/systematic-debugging
category: development
tags:
  - debugging
  - troubleshooting
  - methodology
roles:
  - developer
  - devops
featured: false
popular: true
isOfficial: false
installCommand: |
  git clone https://github.com/obra/superpowers
  cp -r superpowers/skills/systematic-debugging ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Systematic investigation of complex bugs
- Production environment issue diagnosis
- Performance problem localization
- Intermittent error tracking
- Identifying potential issues in code review

## Core Capabilities

- **Problem Isolation**: Narrow down problem scope
- **Hypothesis Verification**: Systematically test assumptions
- **Log Analysis**: Effectively interpret log information
- **Binary Search Debugging**: Quickly locate problematic code

## Example

```
The application occasionally returns 500 errors under high load,
but logs show no obvious anomalies.

Please help systematically investigate:
1. Collect more diagnostic information
2. Develop investigation plan
3. Progressively narrow down the problem
```

## Notes

- Reproduce the issue before fixing
- Document investigation process
- Verify fix actually resolves the issue
- Consider adding related tests
