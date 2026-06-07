---
slug: omem
---

## 使用场景

- 让 AI 从你真实的工作经历里回答问题——过去的会议、同事、项目代号、供应商和合同细节——而不是凭空猜。
- "Q3 预算那件事我们最后是怎么定的?" / "找一下 Alice 上周发我的那份文档" / "我和 Acme 团队的日程是什么时候?"
- 给任何 agent 任务接上你自己的上下文:起草回信、准备会议、总结一长串邮件、想起某个内部缩写到底指什么。
- 本地优先、agent 中立:记忆留在你自己机器上,跨 agent 通用,不上传给任何第三方服务。

## 核心能力

- **统一的本地 wiki**:OMem 把邮件、日历、本地文件(OneDrive / Dropbox / iCloud Drive / 任意文件夹)和协作笔记,全部归并进一个可查询、本地索引的 wiki——它就是事实源。
- **自动触发**:这个 skill 知道*什么时候*该去查,你不用反复提醒 agent "我还有工作历史可以查"。
- **四级渐进披露(L0–L3)**:查询 → 页面 → 解析后原文 → 原始文件,agent 需要多深就读多深,不浪费。
- **确定性、高质量解析**:每种格式(docx / pdf / pptx / xlsx / 邮件……)都有专门的解析器,所以 agent 读得准;内容寻址缓存让重复内容跳过 LLM、省钱。
- **中文一等公民**:jieba 分词、跨语言检索、原文逐字召回。
- **只读设计**:这个 skill 只会*读*你的记忆(查询 / 页面 / 原文),绝不 ingest、删除或改配置——那些都是用户自己的操作。

## 示例

```
你:Project Atlas 的定价我们当时是怎么定的?

Agent(调用 OMem skill):
  → omem query "Project Atlas pricing decision" --format json --limit 20
  → omem page get <page_id>
  从你本地 wiki 里找到对应的邮件 / 文档,读完后给出当时真正的决定,
  并标明来源页面——而不是瞎猜。
```

## 注意事项

- **需要先装 OMem 二进制**(macOS,用上面那行 curl 命令装),再跑一次 `omem setup` 连上你的数据源。这个 skill 只是那个本地 CLI 之上的一层只读薄封装。
- skill 暴露 6 个只读操作:`query`、`page_get`、`raw_get_path`、`raw_get_parsed_path`、`wiki_ls`、`doctor`。它绝不会跑 `setup` / `ingest` / `lint` / `index rebuild`——那些是用户操作。
- **其他 agent**(Claude Code、Cursor、Codex、Cline……):用 `npx skills add seacen/omem --global` 跨平台装同一个 skill;没有 skill 机制的 agent 走 MCP(`omem mcp`)兜底。
- 文档:https://seacen.github.io/omem/zh-cn/ · English docs: https://seacen.github.io/omem/
