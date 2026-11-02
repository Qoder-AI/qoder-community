---
name: policy-impact-cn
title: "政策影响链"
description: "把一份政策文件拆成要点逐字卡＋受影响环节候选链：每条链挂政策原句依据与锚，因果与涨跌一律待人工。"
source: community
author: huhoo
githubUrl: https://github.com/huhoo/cue-awesome
docsUrl: https://github.com/huhoo/cue-awesome/tree/main/policy-impact-cn
category: document
tags: [政策, 影响链, A股, 逐字卡, 环节候选]
roles: [finance, data-analyst]
featured: false
popular: false
isOfficial: false
installCommand: npx skills add huhoo/cue-awesome --skill policy-impact-cn
date: 2026-11-02
---

## 使用场景

- 给一份政策文件，产出要点逐字卡＋受影响环节的候选链：每条链挂政策原文的一句依据与来源锚，因果、涨跌与受益名单一律 `[待人工]`。
- 政策要点与影响链候选：输入一份政策文件（正文、PDF 或披露页链接均可），产出五段卡——头部申报、政策要点逐字、受影响环节候选链、时间与窗口表、缺数与待人工。每条候选链必须挂政策原文里的一句依据加来源锚，只列可能牵动的环节，不写因果、不判涨跌、不点名受益主体。生效日、过渡期、申报窗逐字挂锚，未取到就点名「未检索到」。解读、受益与受损判断、执行强度预测一律挂 [待人工]。
- 产物交给 `scripts/check_chain.py` 过闸：五段齐与名目在场／每条原句、依据与锚／红线断言只准出现在 `[待人工]` 行／候选链条数与申报一致。

## 示例

```bash
npx skills add huhoo/cue-awesome --skill policy-impact-cn
```

装本件自己：npx skills add huhoo/cue-awesome --skill policy-impact-cn（这条只装本包；装完在你这一侧重启会话才生效）。

## 注意事项

- Do NOT use for: 投资建议或买卖决策、未检索到的条款编造或补全、收益与风险承诺。
- 解读、受益与受损判断、执行强度与落地节奏、对任何主体的影响大小一律 `[待人工]`；不写必涨／稳赚／零风险／保证收益，不点名「受益股」「龙头标的」；
- 环节链只到环节为止，末端不接投资结论；一句原文依据挂不住的环节不进链；
- 原句逐字：不四舍五入、不写「约」、不把「分阶段实施」那类限定词省成一句结论；正文没写的日期与期限写「未检索到」，不写「无」也不推断；
- 域与工具名以 live catalog 现值为准，本件不列固定清单、不承诺枚数、不承诺政策文本的实时性。
- 行情与资金流类数值不在本件能力内（该域以 live catalog 现值为准，未开放就不承诺）；本件不做政策解读与影响大小排序，不做具体公司的风险底稿（走 `event-risk-scan`），不做行业综述（走 `sector-overview`），不把日期做成日历（走 `catalyst-calendar`）；本件也不持久存你的政策文件，卡出完就交还给你。
- 本件的取证腿有两条：**文件清单**（政策与监管域的清单与定位，走数据腿）与**正文解析**（长文件与附件，走解析腿）。两条都是可选——不装也能按你直供的原文出卡；代价是依据句落在附件里时挂不上，环节链只能剪短，时间与窗口表里那三格也可能停在「未检索到」。
