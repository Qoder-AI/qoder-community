---
name: work-partner-onboarding
title: Work Partner Onboarding
description: An onboarding skill for non-technical office workers. Through natural conversation, it learns about the user's job, recommends what QoderWork can help with, then sets up a personalized work folder, profile, and workflow skill — all in under 10 minutes.
source: community
author: QoderWork
githubUrl: https://github.com/Leroy-Zhang/work-partner-onboarding-en
docsUrl: https://github.com/Leroy-Zhang/work-partner-onboarding-en#readme
category: productivity
tags:
  - onboarding
  - work-partner
  - office-worker
  - personalization
  - workflow
roles:
  - finance
  - content
  - sales
  - pm
featured: false
popular: false
isOfficial: false
installCommand: npx skills add https://github.com/Leroy-Zhang/work-partner-onboarding-en -a qoder
date: 2026-03-11
---

## Use Cases

- First-time QoderWork users who want a guided setup experience
- Non-technical office workers (accountants, e-commerce ops, teachers, admins) looking to organize their work with AI
- Users who want QoderWork to remember their preferences, habits, and common workflows
- Re-onboarding when work responsibilities change ("re-learn about me", "update my work setup")

## Example

```
# Open QoderWork and say:
Help me organize my work

# The skill will:
# 1. Ask about your job in one simple question
# 2. Recommend 3-4 specific tasks it can help with
# 3. Walk you through setting up a work folder and profile
# 4. Create a personalized "Work Partner" skill that learns over time
```

## Notes

- Designed for non-technical users — warm, colleague-like tone, no jargon
- Three-phase flow: Icebreaker (30s) → Show Value (30s) → Set Up Work System (5min)
- Creates a plain-text work profile that the user can open and edit anytime
- Automatically generates a Layer 2 workflow skill via skill-creator for ongoing personalization
- Includes both English and Chinese versions
