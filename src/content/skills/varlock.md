---
name: varlock
title: Secure Environment Variables
description: Secure environment variable management to prevent accidental exposure of sensitive information
source: community
author: wrsmith108
githubUrl: https://github.com/wrsmith108/varlock-claude-skill
category: security
tags:
  - secrets
  - environment
  - security
  - configuration
roles:
  - developer
  - devops
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/wrsmith108/varlock-claude-skill
  cp -r varlock-claude-skill ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Environment variable security management
- Secret rotation
- Configuration security audit
- Prevent sensitive info leaks
- Multi-environment config management

## Core Capabilities

- **Leak Detection**: Identify hardcoded secrets in code
- **Secure Storage**: Recommend secure storage solutions
- **Access Control**: Least privilege principle
- **Audit Trail**: Secret usage records

## Example

```
Please audit the project's environment variable security:

Check:
1. Are there hardcoded secrets in code
2. Is .env file in .gitignore
3. Are env variable names standardized
4. Do sensitive variables have appropriate access control

Project path: ./src
```

## Notes

- Never commit secrets to code repository
- Use dedicated secret management services
- Regularly rotate sensitive credentials
- Limit secret access scope
