---
slug: n8n-code-python
---

## 使用场景

- 数据分析和统计
- 机器学习推理
- 复杂文本处理
- 数据可视化准备
- 科学计算

## 核心能力

- **数据访问**：获取工作流数据
- **库支持**：使用常见 Python 库
- **数据转换**：Pandas 等处理
- **结果返回**：正确的输出格式

## 示例

```python
# n8n Python Code 节点示例
# 分析销售数据

import pandas as pd
from datetime import datetime

# 获取输入数据
items = _input.all()

# 转换为 DataFrame
df = pd.DataFrame([item['json'] for item in items])

# 计算指标
result = {
    'total_sales': df['amount'].sum(),
    'avg_order': df['amount'].mean(),
    'order_count': len(df),
    'top_product': df.groupby('product')['amount'].sum().idxmax(),
    'analysis_date': datetime.now().isoformat()
}

return [{'json': result}]
```

## 注意事项

- n8n Python 节点有限制
- 不是所有库都可用
- 注意内存和执行时间限制
- 测试数据边界情况
