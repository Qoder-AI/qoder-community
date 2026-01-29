---
name: root-cause-tracing
title: Root Cause Tracing
description: Investigate and identify root causes of issues, avoiding treating only surface symptoms
source: community
author: obra
githubUrl: https://github.com/obra/superpowers/tree/main/skills/root-cause-tracing
category: development
tags:
  - debugging
  - analysis
  - investigation
roles:
  - developer
  - devops
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/obra/superpowers
  cp -r superpowers/skills/root-cause-tracing ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Production incident root cause analysis
- Tracking recurring issues
- Systematic failure diagnosis
- Technical debt assessment
- Improving preventive measures

## Core Capabilities

- **5 Why Analysis**: Deep questioning to find root causes
- **Fishbone Diagram**: Multi-dimensional cause analysis
- **Timeline Reconstruction**: Restore event sequence
- **Impact Assessment**: Analyze complete scope of impact

## Example

```
Issue: Database deadlock occurred last night at 2:00 AM,
causing 15 minutes of service interruption.

Please help with root cause analysis:
1. Reconstruct event timeline
2. Analyze possible causes
3. Determine root cause
4. Propose preventive measures
```

## Notes

- Don't stop at surface causes
- Collect all relevant evidence
- Avoid assumptions, analyze based on facts
- Document analysis process and conclusions
