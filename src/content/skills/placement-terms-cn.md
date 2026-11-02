---
name: placement-terms-cn
title: "A-share Private Placement Terms Card"
description: "Hand it one A-share private placement (refinancing) proposal and get back a ten-item terms card: every item carries the source sentence verbatim plus an anchor, any item that was not retrieved is named as `未检索到`, and dilution impact or \"is it worth joining\" always goes to `[待人工]`."
source: community
author: huhoo
githubUrl: https://github.com/huhoo/cue-awesome
docsUrl: https://github.com/huhoo/cue-awesome/tree/main/placement-terms-cn
category: document
tags: [a-share, private placement, refinancing, terms]
roles: [finance, data-analyst]
featured: false
popular: false
isOfficial: false
installCommand: npx skills add huhoo/cue-awesome --skill placement-terms-cn
date: 2026-11-02
---

## Use Cases

- Hand it one A-share private placement (refinancing) proposal and get back a ten-item terms card: every item carries the source sentence verbatim plus an anchor, any item that was not retrieved is named as `未检索到`, and dilution impact or "is it worth joining" always goes to `[待人工]`.
- `scripts/check_terms.py` gates the card: five sections present and all ten item names on the card / every item carries its source sentence and an anchor / red-line assertions appear only inside `[待人工]` lines / the missing-count declaration reconciles with the missing list.

## Example

```bash
npx skills add huhoo/cue-awesome --skill placement-terms-cn
```

Install this skill on its own: npx skills add huhoo/cue-awesome --skill placement-terms-cn (this line installs this package only; on your side the session has to be restarted before it takes effect).

## Notes

- Do NOT use for: 投资建议或参与决策、未检索到的条款编造或补全、收益与风险承诺。
- Dilution impact on existing holders, whether joining is worth it, how many approval steps are left, and float pressure after the lock-up all go to `[待人工]`; no "guaranteed gain", "risk-free" or "assured return" wording;
- The approval chain records only the node that already appears in a disclosure; a node that never appears is written as `未检索到`, never as a forecast of the next one;
- Domains and tool names follow the live catalog at its current values; this skill publishes no fixed list and promises neither a count nor real-time approval status.
- Quotes and fund-flow figures are not in scope (that domain is judged by live catalog values; if it is not open, nothing is promised about it). No side-by-side comparison across multiple proposals, no cross-entity risk sheet (`dd-checklist`), no event-level triage of a single filing (`event-brief-cn`), no general contract clause diffing (`cn-contract-clauses`). This skill stores nothing of your proposal files: the card is handed back and that is the end of it.
- This skill has two evidence legs: **source listing** (disclosure and filing domains, on the data leg) and **attachment parsing** (prospectus bodies and long appendices, on the parsing leg). Both are optional — with neither installed the card still comes out from text you supply directly; what you lose is any term that sits inside the attachments, which is exactly where the dilution table and the performance commitment usually are, so those items need a human at the original.
