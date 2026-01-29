---
slug: n8n-code-javascript
---

## 使用场景

- 复杂数据转换
- 自定义业务逻辑
- 数据验证和清洗
- 动态内容生成
- 外部库调用

## 核心能力

- **数据处理**：访问和转换输入数据
- **逻辑控制**：条件判断和循环
- **输出格式**：生成正确的输出结构
- **错误处理**：捕获和处理异常

## 示例

```javascript
// n8n Code 节点示例
// 将订单数据转换为发票格式

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

## 注意事项

- 使用 $input.all() 获取所有输入
- 返回正确的数据结构
- 处理空数据情况
- 添加适当的日志
