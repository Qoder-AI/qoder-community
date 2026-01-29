---
name: xlsx
title: Excel Spreadsheet Skill
description: Create, edit, and analyze Excel spreadsheets with support for formulas, data analysis, formatting, and visualization
source: anthropic
author: Anthropic
githubUrl: https://github.com/anthropics/skills/tree/main/skills/xlsx
docsUrl: https://docs.anthropic.com
category: document
tags:
  - excel
  - spreadsheet
  - data
  - analysis
roles:
  - data-analyst
  - finance
  - pm
  - marketer
  - sales
  - executive
featured: true
popular: true
isOfficial: true
installCommand: |
  git clone https://github.com/anthropics/skills
  cp -r skills/xlsx ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Create financial models and budgets
- Data cleaning and transformation
- Automated report generation
- Pivot table analysis
- Chart and visualization creation

## Core Capabilities

- **Formula Calculation**: Support for complex formulas and functions
- **Data Formatting**: Conditional formatting, number formats, cell styles
- **Chart Creation**: Bar charts, line graphs, pie charts, etc.
- **Data Validation**: Set input rules and dropdown lists
- **Batch Operations**: Process across worksheets and workbooks

## Example

```
Please create a sales data analysis sheet:
1. Include monthly sales, costs, and profit calculations
2. Add year-over-year growth rate formulas
3. Create a sales trend chart
4. Set conditional formatting warnings for profit margins below 10%
```

## Notes

- Supports .xlsx and .xlsm formats
- Limited macro and VBA code processing
- Very large files may need batch processing
