---
name: static-analysis
title: Static Analysis
description: Code static analysis skill to identify security vulnerabilities, code smells, and quality issues
source: community
author: trailofbits
githubUrl: https://github.com/trailofbits/skills/tree/main/static-analysis
category: security
tags:
  - analysis
  - security
  - code-quality
  - vulnerabilities
roles:
  - developer
  - devops
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/trailofbits/skills
  cp -r skills/static-analysis ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Security vulnerability detection
- Code quality review
- Dependency security checks
- CI/CD integration checks
- Compliance verification

## Core Capabilities

- **Vulnerability Detection**: SQL injection, XSS, etc.
- **Code Standards**: Best practice checks
- **Dependency Analysis**: Third-party library security
- **Report Generation**: Clear issue reports

## Example

```
Please perform static security analysis on this code:

```javascript
const user = req.query.user;
const query = `SELECT * FROM users WHERE name = '${user}'`;
db.query(query);
```

Identify:
1. Security vulnerabilities
2. Severity level
3. Fix recommendations
4. Secure alternative implementation
```

## Notes

- Static analysis has limitations
- Combine with dynamic testing
- Focus on high-risk vulnerabilities first
- Update rule library regularly
