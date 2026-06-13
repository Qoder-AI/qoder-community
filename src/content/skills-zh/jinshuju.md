---
slug: jinshuju
---

## 使用场景

- 创建、复制、移动、编辑表单并调整主题——支持 39 种字段类型（含矩阵、商品、公式、关联表单、预约等），头图可由 AI 根据表单内容自动生成
- 查询、新增、批量修改与删除表单数据，支持字段值条件下推过滤（等值 / 区间 / 模糊 / 集合等）与游标分页
- 查看当前用户、企业套餐与用量额度，列出团队成员
- 查询电子发票与付款记录

## 示例

```text
用户：帮我建一个"2026 春季产品发布会"报名表，要姓名、手机号、公司、职位
助手：（调用 create_form 创建表单并返回链接与 form_token）

用户：统计一下本月报名里手机号以 138 开头的有几条
助手：（list_entries 用 filters 把 like / created_at 条件下推到数据库，分页拉回）

用户：把这些人的"跟进状态"全部改成"已联系"
助手：（先展示命中记录并二次确认，确认后逐条调用 update_entry）
```

## 注意事项

- 本 Skill 基于金数据 MCP Server（`https://jinshuju.net/mcp`）。安装 Skill 后需在 AI 客户端配置 MCP 连接器——推荐 OAuth 2.0 授权，也可用 API Key / Secret 走 HTTP Basic。配置方式见 [金数据 MCP 文档](https://open.jinshuju.net/mcp/)。
- 安装到 Qoder 时只需复制仓库的 `skills/jinshuju/` 子目录到 `~/.qoder/skills/jinshuju/`。
- entry 数据的键必须是字段的 `api_code`（不是中文 label），选项字段要传选项的 `api_code`（不是显示文案），否则服务端会静默丢弃或返回 400。
- `update_entry` 默认走 PATCH（`is_put=false`）；只有在确认整条替换时才设 `is_put=true`，因为它会清空所有未提供的字段。
