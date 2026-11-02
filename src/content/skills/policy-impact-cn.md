---
name: policy-impact-cn
title: "Policy Key-Points Card and Candidate Impact Chains"
description: "Hand it one policy document and get back a verbatim key-points card plus candidate impact chains: every chain quotes one sentence of the policy as its basis and carries a source anchor, while interpretation, price direction and any \"who benefits\" list stay `[待人工]`."
source: community
author: huhoo
githubUrl: https://github.com/huhoo/cue-awesome
docsUrl: https://github.com/huhoo/cue-awesome/tree/main/policy-impact-cn
category: document
tags: [policy, impact chains, verbatim, source anchor]
roles: [finance, data-analyst]
featured: false
popular: false
isOfficial: false
installCommand: npx skills add huhoo/cue-awesome --skill policy-impact-cn
date: 2026-11-02
---

## Use Cases

- Hand it one policy document and get back a verbatim key-points card plus candidate impact chains: every chain quotes one sentence of the policy as its basis and carries a source anchor, while interpretation, price direction and any "who benefits" list stay `[待人工]`.
- `scripts/check_chain.py` gates the card: five sections and all required item names present / every line carries its quote, basis and anchor / red-line assertions appear only inside `[待人工]` lines / the declared chain count reconciles with the actual chains.

## Example

```bash
npx skills add huhoo/cue-awesome --skill policy-impact-cn
```

Install this skill on its own: npx skills add huhoo/cue-awesome --skill policy-impact-cn (this line installs this package only; on your side the session has to be restarted before it takes effect).

## Notes

- Do NOT use for: 投资建议或买卖决策、未检索到的条款编造或补全、收益与风险承诺。
- Interpretation, winner/loser calls, enforcement intensity, and how much any entity is affected all go to `[待人工]`; no "guaranteed gain", "risk-free" or "assured return" wording, and no naming of "beneficiary stocks" or sector leaders;
- A chain stops at the stage: it never ends in an investment conclusion, and any level without a quoted policy basis is dropped;
- Source sentences stay verbatim: no rounding, no "approximately", and qualifiers such as phased implementation are never collapsed into one sentence of conclusion; a date or deadline absent from the text is written as `未检索到`, never as "none" and never inferred;
- Domains and tool names follow the live catalog at its current values; this skill publishes no fixed list and promises neither a count nor real-time access to policy text.
- Quotes and fund-flow figures are not in scope (that domain is judged by live catalog values; if it is not open, nothing is promised about it). This skill does not interpret policy, does not rank who is helped or hurt, does not build a company risk sheet (`event-risk-scan`), does not survey an industry (`sector-overview`), and does not turn dates into a calendar (`catalyst-calendar`). It also stores nothing of your documents: the card is handed back and that is the end of it.
- This skill has two evidence legs: **document listing** (policy and regulatory domains, on the data leg) and **text parsing** (long documents and attachments, on the parsing leg). Both are optional — with neither installed the card still comes out from text you supply directly; what you lose is any basis sentence sitting inside an attachment, so chains can only be cut short and the three date cells may stay `未检索到`.
