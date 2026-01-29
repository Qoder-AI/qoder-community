# Contributing to Qoder Community

Thank you for your interest in contributing to the Qoder Community! This guide will help you get started.

## Ways to Contribute

We currently welcome contributions for **Agent Skills**. Help the community by sharing your specialized skills to enhance AI agents!

### 1. Share Your Agent Skills

1. Fork this repository.
2. Create a new file in `src/content/skills/your-skill-name.md` (English) and/or `src/content/skills-zh/your-skill-name.md` (Chinese).
3. Use the template below.
4. Submit a Pull Request.

**Skill Template:**

```markdown
---
name: skill-name
title: Skill Title
description: A brief description of what this skill does
source: community
author: Your Name
githubUrl: https://github.com/username/skill
docsUrl: https://example.com/docs
category: development # development | design | marketing | productivity | automation | data | security | document | meta
tags:
  - tag1
  - tag2
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/username/skill
  cp -r skill-name ~/.qoder/skills/
date: 2026-01-01
---

## Use Cases

- Use case 1
- Use case 2

## Example

```bash
# Example command
```

## Notes

- Note 1
```

### 2. Improve Documentation

Found a typo or want to improve docs?

1. Edit the file directly on GitHub
2. Submit a Pull Request
3. We'll review and merge

## Development Setup

### Prerequisites

- Node.js 18+
- npm or pnpm

### Local Development

```bash
# Clone the repository
git clone https://github.com/Qoder-AI/qoder-community.git
cd qoder-community

# Install dependencies
npm install

# Start dev server
npm run dev

# Visit http://localhost:4321
```

### Building

```bash
npm run build
npm run preview
```

## Pull Request Guidelines

1. **One feature per PR** - Keep PRs focused and reviewable
2. **Clear description** - Explain what and why
3. **Test locally** - Ensure `npm run build` passes
4. **Follow existing style** - Match the code/content style

## Content Guidelines

### For Agent Skills

- Write clear, step-by-step instructions.
- Include code examples and use cases.
- Test your skill in both English and Chinese if possible.
- Ensure the frontmatter follows the required schema.

## Code of Conduct

- Be respectful and inclusive
- Help others learn
- Give credit where due
- No spam or self-promotion without value

## Questions?

- Open a [Discussion](https://github.com/Qoder-AI/qoder-community/discussions)
---

Thank you for contributing! 🎉
