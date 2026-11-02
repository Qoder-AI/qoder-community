---
name: placement-terms-cn
title: "定增条款"
description: "把一份A股定增方案拆成十项条款逐字卡：每项挂原句与锚，缺的点名未检索到，摊薄与值不值一律待人工。"
source: community
author: huhoo
githubUrl: https://github.com/huhoo/cue-awesome
docsUrl: https://github.com/huhoo/cue-awesome/tree/main/placement-terms-cn
category: document
tags: [定增, 条款, A股, 再融资, 逐字卡]
roles: [finance, data-analyst]
featured: false
popular: false
isOfficial: false
installCommand: npx skills add huhoo/cue-awesome --skill placement-terms-cn
date: 2026-11-02
---

## 使用场景

- 给一份 A 股定增（再融资）方案，产出十项条款的逐字卡：每项挂原句＋来源锚，缺的那一项点名「未检索到」，摊薄与值不值一律 `[待人工]`。
- A股定增／再融资条款速读：输入一份定增方案公告（正文、PDF 或披露页定位），产出十项条款逐字卡——发行方式、定价基准日、发行价或价格下限、发行数量与募资上限、发行对象与认购方式、限售期、募集资金用途、摊薄与回报测算、业绩承诺与补偿、审批链条与当前节点——每项挂原句＋锚，缺的那项点名「未检索到」。摊薄影响、参与值不值、审批何时走完一律挂 [待人工]，不预测、不代答。
- 产物交给 `scripts/check_terms.py` 过闸：五段齐与十项名目在场／每项原句与锚／红线断言只准出现在 `[待人工]` 行／缺数与申报对账。

## 示例

```bash
npx skills add huhoo/cue-awesome --skill placement-terms-cn
```

装本件自己：npx skills add huhoo/cue-awesome --skill placement-terms-cn（这条只装本包；装完在你这一侧重启会话才生效）。

## 注意事项

- Do NOT use for: 投资建议或参与决策、未检索到的条款编造或补全、收益与风险承诺。
- 摊薄对存量股东的影响、参与是否划算、审批还剩几步、锁定期满后的供给压力，一律 `[待人工]`；不写必涨／稳赚／零风险／保证收益；
- 审批链条只记已见诸披露的那一格，没出现的那格写「未检索到」，不推下一步；
- 域与工具名以 live catalog 现值为准，本件不列固定清单、不承诺枚数、不承诺审批状态的实时性。
- 行情与资金流类数值不在本件能力内（该域以 live catalog 现值为准，未开放就不承诺）；本件不做多份方案的横向比较（跨主体底稿走 `dd-checklist`），不做单份公告的事件级速读（走 `event-brief-cn`），不做一般合同条款比对（走 `cn-contract-clauses`）；本件也不持久存你的方案文件，卡出完就交还给你。
- 本件的取证腿有两条：**原文清单**（披露文件与公告域的清单，走数据腿）与**附件解析**（募集说明书与长附件正文，走解析腿）。两条都是可选——不装也能按你直供的原文出卡；代价是条款在附件里的那几项只能停在「未检索到」，摊薄测算与业绩补偿这两项往往就在附件里，得你回原文核。
