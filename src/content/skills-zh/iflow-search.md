---
slug: iflow-search
---

## 使用场景

- 在模型训练截止之后做实时网页检索
- 按关键词搜索图片（参考图、截图、商品图）
- 把已知 URL 抓取并清洗为 markdown，供 agent 总结
- 串起 "搜索 → 选链接 → 抓正文" 的研究流程

## 核心能力

- **Web Search** —— 通过 iFlow 网页索引按关键词检索
- **Image Search** —— 图片结果，带 refUrl 和标题
- **Web Fetch** —— 抓取 URL 并返回清洗后的 markdown 正文

## 示例

在启动 Qoder 之前先在 shell 里导出 `IFLOW_API_KEY`，agent 即可把检索类任务交给这个 skill：

```
帮我找最近关于 LLM agent benchmark 的报道，再抓取前三篇正文给我做总结。
```

Skill 内部会按 "web search → 选链接 → web fetch" 串起来。

## API Key 设置

1. 在 https://platform.iflow.cn/profile?tab=apiKey 申请 API Key
2. 在启动 Qoder **之前**导出环境变量。

zsh：

```bash
echo 'export IFLOW_API_KEY="YOUR_IFLOW_API_KEY"' >> ~/.zshrc
source ~/.zshrc
```

bash：

```bash
echo 'export IFLOW_API_KEY="YOUR_IFLOW_API_KEY"' >> ~/.bashrc
source ~/.bashrc
```

不要把 key 作为 CLI 参数传，也不要 commit 进任何文件。

## 注意事项

- Skill 源码：https://github.com/iflow-ai/iflow-skills/tree/main/skills/iflow-search
- Skill 安装指南：https://platform.iflow.cn/docs/skill
- iFlow Search API 文档：https://platform.iflow.cn/docs/
- `IFLOW_API_KEY` 必须在启动 Qoder 的同一个 shell 里设置好。
