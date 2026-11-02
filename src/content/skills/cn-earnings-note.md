---
name: cn-earnings-note
title: A-share Earnings Note (source-anchored, human sign-off)
description: Turn an A-share quarterly report into a reviewable research note: four-period deltas, line-item cross-checks, guidance-vs-actual comparison, every number quoted back to the exact source cell or page, ratings and target prices always left to a human.
source: community
author: huhoo
githubUrl: https://github.com/huhoo/cue-awesome/tree/main/cn-earnings-note
docsUrl: https://github.com/huhoo/cue-awesome/blob/main/cn-earnings-note/SKILL.md
category: document
tags:
  - a-share
  - earnings
  - equity-research
  - disclosure
  - source-anchoring
roles:
  - finance
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  npx skills add huhoo/cue-awesome --skill cn-earnings-note
date: 2026-11-02
lastUpdated: 2026-11-02
---

## Use Cases

Drafts a first-pass earnings note for one A-share company from its disclosed report, in a fixed order:

1. **Four-period comparison** - revenue, gross margin, expense lines and net profit across the current quarter, the prior quarter, the year-ago quarter and the trailing four quarters.
2. **Line-item cross-checks** - each material move is paired with the account that should explain it (receivables vs revenue, inventory vs cost of sales, cash flow vs profit).
3. **Guidance vs actual** - if a prior pre-announcement exists, actuals are compared against it rather than against the consensus we cannot verify.
4. **Anchored output** - every figure carries a source pointer (document, page or table cell) so a reviewer can re-open exactly that spot.

## Notes

- **No ratings, no target prices.** Those fields are emitted as `[needs human]` placeholders.
- **No fabricated sources.** If a number is not in the disclosed material, the line says it was not found instead of filling it in.
- **Live domain availability is read from the channel catalog at run time**; nothing is promised about domains that are not currently open, and no tool list is hard-coded.
- The data leg is provided by the Cue channel and needs one API key - no self-hosted data sources, no bundled corpus.

## Example

```text
npx skills add huhoo/cue-awesome --skill cn-earnings-note
```

Then ask for a company and a period, e.g. "write the earnings note for <company> FY26Q3". The skill drives its own checklist and refuses to output an unanchored figure; a machine check inside the package scans the draft and fails it if any number lacks a source pointer.

**Verifying the install**

The package ships its own self-test entry:

```text
cd <install dir>/cn-earnings-note && python3 -B scripts/check_report.py --selftest
```
