---
name: data-compliance
title: 数据合规咨询与风险评估助手
description: 数据合规咨询与风险评估助手，覆盖 GDPR、中国个保法/数据安全法、CCPA、电商与营销专项法规。基于七维定级模型评估数据处理场景风险，指引 PII 数据表选型，说明合规评审流程，覆盖营销触达合规、影响评估（PIPIA/DPIA）、数据主体权利、留存删除、泄露应急、委托处理（DPA）。
source: community
author: Jerry8973
githubUrl: https://github.com/Jerry8973/data-compliance-skill
category: security
tags:
  - privacy
  - compliance
  - GDPR
  - PIPL
  - CCPA
  - data-protection
roles:
  - developer
  - data-engineer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/Jerry8973/data-compliance-skill.git
  cp -r data-compliance-skill/data-compliance ~/.qoder/skills/
date: 2026-06-10
---

## 使用场景

- 数据处理场景合规咨询：识别个人信息类型、处理环节、适用法规，给出合规结论
- 合规风险评估：基于七维定级模型（数据类型×处理环节×跨境×脱敏×规模×自动化决策×对外提供）输出结构化报告
- PII 离线数据表选型与使用指引：快速决策在线接口、哈希脱敏表还是明文表
- 合规评审与权限申请流程指引
- 营销触达合规：EDM/电话/WhatsApp/短信/站内消息的合规要求与退订机制
- 影响评估（PIPIA/DPIA/PIA）：触发条件判断与评估模板
- 数据生命周期管理：主体权利响应、留存删除、泄露应急、委托处理/DPA

## 示例

```
用户：我们想用买家邮箱做跨境营销推送，需要注意什么合规问题？

助手：
风险等级：中–高
适用法规：PIPL（同意）、消法29/广告法43（退订）、2024跨境新规
关键要求：需同意基础、提供退订、拒绝即停、频次上限、先过滤退订名单
跨境：按规模判断走豁免/标准合同/安全评估
建议：走合规评审，使用对应区域表取数
```

## 注意事项

- 本技能内容供初判参考，不构成法律意见
- 高风险或复杂情形建议咨询法务/走合规评审
- 法规会更新，引用条款/阈值前请核对原始来源
