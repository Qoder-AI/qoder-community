---
slug: postgres
---

## 使用场景

- 数据库查询和分析
- 报表数据提取
- 数据质量检查
- 性能诊断查询
- 数据探索

## 核心能力

- **安全查询**：只读操作，防止意外修改
- **复杂查询**：支持 JOINs、子查询、CTEs
- **数据分析**：聚合、窗口函数
- **结果格式化**：清晰的输出格式

## 示例

```sql
-- 请帮我分析用户活跃情况
-- 查询过去 30 天的日活跃用户
-- 按天统计，包含周同比增长

SELECT 
  date_trunc('day', created_at) as date,
  COUNT(DISTINCT user_id) as dau,
  LAG(COUNT(DISTINCT user_id), 7) OVER (ORDER BY date_trunc('day', created_at)) as dau_7d_ago
FROM events
WHERE event_type = 'page_view'
  AND created_at >= NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 1;
```

## 注意事项

- 仅支持只读操作
- 大表查询注意性能
- 使用 EXPLAIN 分析查询计划
- 敏感数据注意脱敏
