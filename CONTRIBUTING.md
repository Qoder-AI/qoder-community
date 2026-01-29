# Contributing to Qoder Community

Thank you for your interest in contributing to the Qoder Community! This guide will help you get started.

## Ways to Contribute

### 1. Share Your Agent Configuration

Help others by sharing your `.qoderrules` or agent setup:

1. Fork this repository
2. Create a new file in `src/content/agents/your-agent-name.md`
3. Use the template below
4. Submit a Pull Request

**Agent Template:**

```markdown
---
title: "Your Agent Name"
description: "Brief description of what your agent does"
author:
  name: "Your Name"
  avatar: "https://github.com/username.png"
  url: "https://github.com/username"
githubUrl: "https://github.com/username/repo"
tags: ["React", "TypeScript", "Node.js"]
category: "Full-Stack"
useCase: "Web applications"
date: 2025-01-01
featured: false
---

# Agent Description

Describe your agent configuration here...

## Key Features

- Feature 1
- Feature 2

## Configuration

\`\`\`yaml
# Your .qoderrules content
\`\`\`
```

### 2. Share Your Skills

Contribute skills to help the community:

1. Create a new file in `src/content/skills/your-skill-name.md`
2. Follow the skill template format
3. Include clear instructions and examples

### 3. Suggest Videos

Know a great Qoder tutorial or demo? Submit a video suggestion:

1. Open an [Issue](https://github.com/Qoder-AI/qoder-community/issues/new?template=video-suggestion.md)
2. Fill in the video details
3. We'll review and add it to the community

### 4. Organize a Meetup

Want to host a Qoder meetup in your city?

1. Open an [Issue](https://github.com/Qoder-AI/qoder-community/issues/new?template=meetup-proposal.md)
2. Provide event details
3. We'll help promote it

### 5. Improve Documentation

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

### For Agent Configurations

- Include clear descriptions
- Explain the use case
- Provide example prompts if applicable
- Test your configuration before sharing

### For Skills

- Write clear, step-by-step instructions
- Include code examples
- Test in both English and Chinese if possible

### For Videos

- Must be relevant to Qoder or AI coding
- No promotional/spam content
- Include accurate timestamps if referencing specific parts

## Code of Conduct

- Be respectful and inclusive
- Help others learn
- Give credit where due
- No spam or self-promotion without value

## Questions?

- Open a [Discussion](https://github.com/Qoder-AI/qoder-community/discussions)
- Join our [Discord](https://discord.gg/8NrHCxESyQ)

---

Thank you for contributing! 🎉
