---
name: n8n-code-javascript
title: n8n JavaScript Code
description: Write JavaScript code in n8n Code nodes for complex data transformation and logic
source: community
author: czlonkowski
githubUrl: https://github.com/czlonkowski/n8n-claude-skills/tree/main/n8n-code-javascript
category: automation
tags:
  - n8n
  - javascript
  - code
  - transformation
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/czlonkowski/n8n-claude-skills
  cp -r n8n-claude-skills/n8n-code-javascript ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Complex data transformation
- Custom business logic
- Data validation and cleaning
- Dynamic content generation
- External library calls

## Core Capabilities

- **Data Processing**: Access and transform input data
- **Logic Control**: Conditionals and loops
- **Output Format**: Generate correct output structure
- **Error Handling**: Catch and handle exceptions

## Example

```javascript
// n8n Code node example
// Transform order data to invoice format

const orders = $input.all();
const invoices = orders.map(order => {
  const items = order.json.items;
  const total = items.reduce((sum, item) => 
    sum + item.price * item.quantity, 0);
  
  return {
    json: {
      invoiceId: `INV-${order.json.orderId}`,
      customer: order.json.customer,
      items: items,
      subtotal: total,
      tax: total * 0.1,
      total: total * 1.1,
      date: new Date().toISOString()
    }
  };
});

return invoices;
```

## Notes

- Use $input.all() to get all inputs
- Return correct data structure
- Handle empty data cases
- Add appropriate logging
