---
name: marketing-mindset
title: Marketing Mindset
description: Marketing decision framework for agents — positioning, offer construction, channel kill rules, and outreach sequencing
source: community
author: axelfreeman
githubUrl: https://github.com/axelfreeman/marketing-mindset
docsUrl: https://axelfreeman.github.io/marketing-mindset/
category: marketing
tags:
  - marketing
  - positioning
  - b2b
  - cold-email
  - growth
roles:
  - marketer
  - sales
  - content
featured: false
popular: false
isOfficial: false
installCommand: |
  npx skills add axelfreeman/marketing-mindset
date: 2026-09-21
---

## Use Cases

- Decide whether a marketing tactic (ads, cold email, SEO, partnerships) is worth doing before spending money on it
- Write an ad, landing page, or cold outreach message from a positioning and offer angle instead of a template
- Evaluate a marketing idea, plan, or channel and get an honest read on whether to continue, fix, or kill it
- Set volume floors and stop rules for a channel so a test either proves itself or ends on schedule
- Find and win a B2B product's first customers when there is no brand, no traffic, and no budget

## Core Capabilities

- **Decision framework, not tactics**: the skill reasons about positioning, offer, audience, channel, and proof before recommending any specific tactic
- **Kill rules**: explicit thresholds for when a channel, angle, or offer should be stopped rather than optimized further
- **Offer construction**: turns a product's capability into an offer a specific buyer can act on
- **Outreach sequencing**: first-touch and follow-up logic grounded in reply-rate benchmarks rather than volume
- **Cross-host install**: ships as SKILL.md with AGENTS.md, `.cursorrules`, and a lite variant for hosts without full skill support

## Example

```
Use marketing-mindset to review my plan:
I want to run cold email to 2,000 SaaS founders for a $99/month
reporting tool. I have no case studies yet and a $300 budget.

Tell me whether this is worth doing, what the offer should be,
what volume would prove or kill it, and what I should do instead
if the unit economics do not work.
```

Output is a decision with stated assumptions, the offer and positioning to test, a volume floor and a kill threshold, and the cheaper alternative to try first.

## Notes

- MIT licensed; source repository: https://github.com/axelfreeman/marketing-mindset
- Written for B2B and SaaS client acquisition; the framework is not tied to a specific ad platform or CRM
- Skill files only provide judgement and plans — no credentials, no account access, and no automated sending
