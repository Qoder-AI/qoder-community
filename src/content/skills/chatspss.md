---
name: chatspss
title: ChatSPSS
description: Run 22 common statistical analysis tasks locally on user-provided data and explain results with complete Markdown tables. Advanced methods are identified and clearly scoped, not claimed as implemented.
source: community
author: jessepwj
githubUrl: https://github.com/jessepwj/ChatSPSS
docsUrl: https://chatspss.cn/
category: data
tags:
  - statistics
  - data-analysis
  - research
  - python
roles:
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: npx skills add jessepwj/ChatSPSS --skill chatspss
date: 2026-10-30
---

## Use Cases

- Analyze user-provided CSV, Excel, SPSS, or Stata datasets for common research and reporting questions.
- Inspect variable types, choose a supported task, run it locally, and explain the statistical result and its limits.
- Render every user-visible Markdown results table from the script output in full before interpreting it.

## Supported Tasks

The public v0.2.0 package documents these 22 common tasks:

1. Data overview
2. Frequencies and proportions
3. Multiple-response proportions
4. Word frequencies
5. Norm comparison
6. Normality checks
7. Pearson or Spearman correlation
8. Independent-samples t-test
9. Paired-samples t-test
10. Chi-square test of independence
11. One-way ANOVA
12. Mann–Whitney or Kruskal–Wallis nonparametric comparison
13. Linear regression
14. Binary logistic regression
15. Ordinal logistic regression
16. Cronbach's alpha reliability
17. Exploratory factor analysis (EFA, including KMO and Bartlett results)
18. Principal component analysis (PCA)
19. Clustering
20. ROC/AUC analysis
21. Decision-tree evaluation
22. Two-group sample-size estimation

## Example

Install the public skill:

```bash
npx skills add jessepwj/ChatSPSS --skill chatspss
```

Example request after installation:

> Please inspect this survey dataset, compare the outcome between the two groups, show the complete result tables, and explain the assumptions and limitations.

## Notes

- The package's result-display instructions require all user-visible Markdown tables emitted by the analysis script to be rendered in full, preserving their headers, order, values, precision, significance markers, titles, and notes before the explanation.
- Advanced requests such as CFA/SEM, mediation or moderation, longitudinal and panel models, spatial analysis, and advanced machine-learning models are recognized and described as outside the implemented 22-task set. The package provides on-demand scope references; it does not claim its local analysis script runs those methods.
- The public package uses local scripts and Python dependencies. This listing does not claim that the Qoder integration has been tested, that Qoder endorses ChatSPSS, or that the package is an official Qoder skill.
