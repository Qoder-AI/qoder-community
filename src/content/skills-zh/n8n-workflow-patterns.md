---
slug: n8n-workflow-patterns
---

## 使用场景

- 构建自动化工作流
- 集成多个服务和 API
- 处理 webhook 触发的任务
- 数据同步和转换
- AI 驱动的自动化

## 核心能力

- **Webhook 处理**：接收和处理外部事件
- **HTTP 集成**：调用各种 REST API
- **数据库操作**：读写数据库
- **AI 任务**：集成 LLM 能力

## 示例

```
请帮我设计一个 n8n 工作流：
1. 监听 GitHub webhook（新 Issue 创建）
2. 使用 AI 分析 Issue 内容
3. 自动添加标签
4. 如果是 Bug 则创建 Linear 任务
5. 发送 Slack 通知
```

## 注意事项

- 妥善处理错误情况
- 设置合理的超时时间
- 注意 API 速率限制
- 测试各种边界情况
