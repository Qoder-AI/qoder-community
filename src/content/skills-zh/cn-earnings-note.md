---
name: cn-earnings-note
title: A 股财报点评（数字逐字回原文，评级留人工）
description: 把一份 A 股定期报告变成可复核的点评初稿：四期差异、科目勾稽、预告对照；每个数字都标出它来自哪份文件的哪一页或哪个表格单元格，评级与目标价一律留给人。
source: community
author: huhoo
githubUrl: https://github.com/huhoo/cue-awesome/tree/main/cn-earnings-note
docsUrl: https://github.com/huhoo/cue-awesome/blob/main/cn-earnings-note/SKILL.md
category: document
tags:
  - a股
  - 财报
  - 投研
  - 信息披露
  - 逐字回原文
roles:
  - finance
  - data-analyst
featured: false
popular: false
isOfficial: false
installCommand: |
  npx skills add huhoo/cue-awesome --skill cn-earnings-note
date: 2026-11-02
lastUpdated: 2026-11-02
---

## Use Cases

按固定顺序，把一家 A 股公司的定期报告写成点评初稿：

1. **四期对照**：营收、毛利率、费用项与净利，按本季／上季／去年同期／近四季滚动四条轴铺开。
2. **科目勾稽**：每一个显著变动都配一条应当解释它的科目（应收对营收、存货对成本、现金流对利润）。
3. **预告对照**：若存在前期业绩预告，实际值与预告比，而不是与我们无法核实的"一致预期"比。
4. **带锚输出**：每个数字都带一个出处指针（文件、页码或表格单元格），复核的人能一跳回到那一处。

## Notes

- **不做评级、不给目标价**：这些位置一律输出 `[待人工]`。
- **不编造来源**：披露材料里没有的数字，就写"未检索到"，不补常识。
- 通道可用性在运行时读目录现值；**未开放的域不做承诺**，也不硬编码工具名。
- 数据腿由 Cue 通道提供，配一把 API key 即可；不自建数据层、不随包携带语料。

## Example

```text
npx skills add huhoo/cue-awesome --skill cn-earnings-note
```

然后指定公司与期间即可。包内自带机检：草稿里任何没有出处的数字会被机检判红，机检入口是

```text
cd <安装目录>/cn-earnings-note && python3 -B scripts/check_report.py --selftest
```
