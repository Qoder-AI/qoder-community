---
slug: investoday-finance-data
---

## 使用场景

- 查询 A 股、港股、指数、基金、ETF 的近期走势和市场表现
- 拉取公司基本资料、财务报表、估值指标、分红等结构化数据
- 查看公告、研报、机构观点、新闻和市场热点
- 浏览板块、主题、产业链以及宏观经济数据
- 为后续对比、分析和研究导出结构化金融数据

## 示例

```bash
# 首次使用前初始化 CLI 本地运行环境
investoday-api init

# 浏览分组和叶子菜单
investoday-api list
investoday-api list 沪深京数据/公司行为/基本信息

# 按关键词搜索接口
investoday-api search-api query=股票,基本面分析

# 明确接口后直接取数
investoday-api stock/basic-info stockCode=600519
```

## 注意事项

- 这个 GitHub 仓库里不只有 skill，还包含 `create/`、`package/`、`tests/` 等工程化内容；安装到 Qoder 时只应复制 `skills/` 子目录。
- 除了复制 skill，还需要安装 `@investoday/investoday-api`，并在首次使用前执行 `investoday-api init`。
- 当接口路径不明确时，优先使用 `investoday-api list` 和 `investoday-api search-api`，不要手写 HTTP 请求替代 CLI。
