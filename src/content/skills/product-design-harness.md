---
name: product-design-harness
title: Product Design Harness (UX3)
description: Review product decisions through user needs, evidence, and business viability, with explicit execution boundaries and structured handoffs.
source: community
author: cis2042
githubUrl: https://github.com/cis2042/ux3-product-design-harness/tree/48965c6b501f61ebbb8130c9c2e4f9af08922b9f/skills/product-design-harness
docsUrl: https://github.com/cis2042/ux3-product-design-harness#readme
category: design
tags:
  - product-decisions
  - evidence
  - handoff
roles:
  - designer
  - developer
  - pm
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/cis2042/ux3-product-design-harness.git ux3-source &&
  git -C ux3-source checkout --detach 48965c6b501f61ebbb8130c9c2e4f9af08922b9f &&
  mkdir -p .qoder/skills &&
  test ! -e .qoder/skills/product-design-harness && cp -R ux3-source/skills/product-design-harness .qoder/skills/product-design-harness
date: 2026-10-23
---

## Review-only candidate

This contribution is a Draft for maintainer review. It is not ready for publication. The upstream package.json at the reviewed base declares no build script; npm run build was not run. The required 1200×630 PNG share image is not supplied. Qoder host loading and model execution have not been tested.

## Use Cases

- Review a feature, workflow, experiment, launch, or feedback signal before execution.
- Identify weak user, evidence, or business assumptions and choose continue, verify, or reframe.
- Produce structured review results and a context pack with explicit allowed actions, stop conditions, and human-owned decisions.

## Example

After reviewing the fixed source and its MIT license, copy the complete skill folder into a new project destination using the Install command. If the destination already exists, stop and review it instead of overwriting it. Keep all 91 files, including the original LICENSE and resources.

For a local deterministic example, use existing Python and jsonschema, from the installed skill directory:

```bash
python3 -B resources/scripts/check_review.py resources/examples/quick-gate-review.json --context-pack resources/examples/quick-context-pack.json
```

This validates a bundled example; it is not evidence of Qoder execution, model quality, or product outcomes.

## Notes

- The fixed source is version 0.2.0 at the listed commit. Original instructions and resources are in English; this page does not provide a translated runtime skill.
- Requires a compatible host that can read local resources. Python with jsonschema is needed for the bundled local validators. Model and retrieval-service costs depend on the user's host and provider; free source does not imply free inference.
- Local briefs and context packs remain user-controlled files. User-authorized external evidence tools may transmit necessary task context to destinations selected by the host or user; no fixed publisher endpoint or publisher retention service is supplied. The bundled Jev helper runs offline; connecting a remote decision service requires separate configuration and explicit consent.
- Review does not authorize general execution. Apply the actual may_do, must_not_do, must_ask, and stop conditions; missing human authority is a stop. No extra tool permissions, MCP service, agents, hooks, or global context are added by this listing.
- Shared source fixes in PR23 and PR24 are not merged into this pin. Known scope/whitespace validation limitations remain; do not interpret a passing local check as complete authorization or security certification.
- Source, MIT terms, installation prerequisites, and limitations can be reviewed at the linked repository. For project or adoption enquiries, use the author's existing public [LinkedIn profile](https://www.linkedin.com/in/cis2042/). No paid offer or outcome guarantee is implied.
