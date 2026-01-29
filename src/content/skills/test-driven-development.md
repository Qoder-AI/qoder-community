---
name: test-driven-development
title: Test-Driven Development
description: Development methodology of writing tests before implementing code, producing more reliable and maintainable software
source: community
author: obra
githubUrl: https://github.com/obra/superpowers/tree/main/skills/test-driven-development
category: development
tags:
  - testing
  - tdd
  - quality
  - methodology
roles:
  - developer
  - devops
featured: true
popular: true
isOfficial: false
installCommand: |
  git clone https://github.com/obra/superpowers
  cp -r superpowers/skills/test-driven-development ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Test planning before new feature development
- Ensuring behavior doesn't change during refactoring
- Writing reproduction tests before bug fixes
- Improving code coverage and quality
- Standardizing team code review

## Core Capabilities

- **Test First**: Define expected behavior before implementation
- **Red-Green-Refactor**: Follow the TDD cycle
- **Edge Coverage**: Identify and test boundary cases
- **Testable Design**: Write code structures that are easy to test

## Example

```
I need to implement a user registration feature with requirements:
- Username 3-20 characters
- Valid email format
- Password at least 8 characters with numbers and letters

Please help me write test cases first, then implement the feature.
```

## Notes

- Tests should be independent and repeatable
- Avoid testing implementation details, test behavior
- Keep tests simple and readable
