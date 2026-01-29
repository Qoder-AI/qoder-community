---
name: n8n-code-python
title: n8n Python Code
description: Write Python code in n8n Code nodes for data processing and scientific computing
source: community
author: czlonkowski
githubUrl: https://github.com/czlonkowski/n8n-claude-skills/tree/main/n8n-code-python
category: automation
tags:
  - n8n
  - python
  - data
  - processing
roles:
  - developer
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/czlonkowski/n8n-claude-skills
  cp -r n8n-claude-skills/n8n-code-python ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Data analysis and statistics
- Machine learning inference
- Complex text processing
- Data visualization preparation
- Scientific computing

## Core Capabilities

- **Data Access**: Get workflow data
- **Library Support**: Use common Python libraries
- **Data Transformation**: Pandas and similar processing
- **Result Return**: Correct output format

## Example

```python
# n8n Python Code node example
# Analyze sales data

import pandas as pd
from datetime import datetime

# Get input data
items = _input.all()

# Convert to DataFrame
df = pd.DataFrame([item['json'] for item in items])

# Calculate metrics
result = {
    'total_sales': df['amount'].sum(),
    'avg_order': df['amount'].mean(),
    'order_count': len(df),
    'top_product': df.groupby('product')['amount'].sum().idxmax(),
    'analysis_date': datetime.now().isoformat()
}

return [{'json': result}]
```

## Notes

- n8n Python node has limitations
- Not all libraries are available
- Be aware of memory and execution time limits
- Test data edge cases
