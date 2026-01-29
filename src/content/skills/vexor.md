---
name: vexor
title: Vector Search
description: Use vector search for semantic file finding and similarity matching
source: community
author: VexorAI
githubUrl: https://github.com/VexorAI/vexor-skills
category: data
tags:
  - vector
  - search
  - semantic
  - embedding
roles:
  - developer
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/VexorAI/vexor-skills
  cp -r vexor-skills ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Semantic code search
- Document similarity finding
- Knowledge base Q&A
- Duplicate content detection
- Recommendation systems

## Core Capabilities

- **Vectorization**: Convert text to vectors
- **Similarity Calculation**: Semantic similarity search
- **Index Management**: Efficient vector indexing
- **Hybrid Search**: Combine keyword and semantic search

## Example

```
Please search the codebase for code semantically similar to:

"User login verification, check password hash and generate JWT token"

Search scope: src/ directory
Return: 5 most similar code snippets
```

## Notes

- Requires vector database configuration
- First use needs index building
- Large codebases may take time to index
- Update index regularly
