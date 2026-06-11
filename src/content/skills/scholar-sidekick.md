---
name: scholar-sidekick
title: Scholar Sidekick - Citation Resolver, Formatter & Fabrication Verifier
description: Teach AI agents to resolve scholarly identifiers (DOI, PMID, PMCID, ISBN, ISSN, arXiv, ADS bibcode, WHO IRIS URL) into clean citations in 10,000+ CSL styles, export bibliographies (BibTeX, RIS, EndNote, CSL-JSON, CSV), and check retraction, open-access, and citation-fabrication status. Ships three interchangeable skills - zero-install REST, a Node CLI, and an MCP server - so it fits however your agent is wired.
source: community
author: Mark Lavercombe
githubUrl: https://github.com/mlava/scholar-sidekick-skills
docsUrl: https://scholar-sidekick.com
category: document
tags:
  - citations
  - bibliography
  - doi
  - academic-research
  - fact-checking
  - retraction
  - mcp
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  # Install all three skills (host-agnostic; auto-detects ~/.qoder/skills, Cursor, Claude Code, etc.)
  npx -y skills@latest add mlava/scholar-sidekick-skills

  # Or install just the zero-install REST skill (start here)
  npx -y skills@latest add mlava/scholar-sidekick-skills/skills/scholar-sidekick-api
date: 2026-06-12
---

## Use Cases

- Resolve any scholarly identifier (DOI, PMID, PMCID, ISBN, ISSN, arXiv ID, ADS bibcode, WHO IRIS URL) into structured CSL-JSON metadata.
- Format a reference in 10,000+ CSL styles (Vancouver, APA, AMA, IEEE, Chicago, Harvard, MLA, Nature, BMJ, Lancet, ...) as text, HTML, or JSON.
- Export a bibliography to BibTeX, RIS, EndNote XML, RefWorks, MEDLINE, Zotero RDF, CSL-JSON, or CSV.
- Check whether a paper has been retracted, corrected, or flagged with an expression of concern (Crossref + Retraction Watch).
- Check whether a paper is open access and surface the best legal full-text URL, license, and version (Unpaywall).
- Verify a claimed citation against the paper at its identifier - catching the real-DOI-plus-invented-title fabrication pattern (Topaz et al., Lancet 2026) that plain DOI resolution misses.

## Example

```bash
# Zero-install: format a DOI in APA via the public REST API (no key required)
curl -sS -X POST "https://scholar-sidekick.com/api/format" \
  -H "Content-Type: application/json" \
  -d '{"text":"10.1038/nphys1170","style":"apa","output":"text"}'

# CLI (agent has Node >=20): verify a citation for fabrication
scholar verify "10.1016/S0140-6736(26)00001-2" --title "An entirely invented title"
```

## Notes

- Three interchangeable skills are bundled - `scholar-sidekick-api` (zero-install REST, start here), `scholar-sidekick-cli` (Node >=20, the `scholar` command), and `scholar-sidekick-mcp` (host has the MCP server connected). All expose the same capabilities; pick the one that matches how your agent is wired.
- Free tier needs no API key or sign-up. Optional `SCHOLAR_API_KEY` / `RAPIDAPI_KEY` raise rate limits.
- Outputs are deterministic given pinned inputs; provenance is surfaced via response headers (request id, cache status, CSL warnings).
- Use the verifier (`verifyCitation`), not plain identifier resolution, when the question is "is this citation real?" - resolution alone never catches the dominant fabrication pattern.
