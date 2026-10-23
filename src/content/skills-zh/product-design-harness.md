---
name: product-design-harness
title: Product Design Harness (UX3)
description: 從使用者需求、證據與商業可行性審查產品決策，輸出明確執行邊界與結構化交接。
source: community
author: cis2042
githubUrl: https://github.com/cis2042/ux3-product-design-harness/tree/48965c6b501f61ebbb8130c9c2e4f9af08922b9f/skills/product-design-harness
docsUrl: https://github.com/cis2042/ux3-product-design-harness#readme
category: design
tags:
  - product-decisions
  - evidence
  - handoff
roles:
  - designer
  - developer
  - pm
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/cis2042/ux3-product-design-harness.git ux3-source &&
  git -C ux3-source checkout --detach 48965c6b501f61ebbb8130c9c2e4f9af08922b9f &&
  mkdir -p .qoder/skills &&
  test ! -e .qoder/skills/product-design-harness && cp -R ux3-source/skills/product-design-harness .qoder/skills/product-design-harness
date: 2026-10-23
---

## 僅供審查的候選

本貢獻維持 Draft，尚未準備發布。已讀上游基底的 package.json 沒有 build script，因此未執行 npm run build。要求的1200×630 PNG分享圖尚未提供，未驗證Qoder host載入或模型執行。

## 使用情境

- 在執行前審查功能、流程、實驗、發布或回饋訊號。
- 辨認使用者、證據及商業假設的弱點，選擇 continue、verify 或 reframe。
- 產出結構化審查結果及context pack，明列允許行動、停止條件與人類負責的決策。

## 範例

先閱讀固定來源及MIT授權，再以Install指令將完整技能資料夾複製至新的專案目的地。若目的地已存在，停止並審查，不覆寫。保留全部91檔、原始LICENSE及resources。

於安裝後的技能資料夾內，使用既有Python及jsonschema執行本地確定性範例：

```bash
python3 -B resources/scripts/check_review.py resources/examples/quick-gate-review.json --context-pack resources/examples/quick-context-pack.json
```

這只驗證隨附範例，不代表Qoder執行、模型品質或產品成效。

## 注意事項

- 固定來源為連結commit的0.2.0版本。原始指令與資源為英文；本頁是中文介紹，不是已翻譯的runtime技能。
- 需要可讀取本地資源的相容host；本地validators需要Python及jsonschema。模型與檢索服務費用依使用者host/provider而定，免費來源不表示免費推論。
- 本地brief與context pack由使用者管理。經使用者授權的外部證據工具可能把必要任務內容傳給host或使用者所選目的地；未提供固定publisher endpoint或publisher資料保留服務。隨附Jev helper離線運行，連接遠端決策服務另需設定與明確同意。
- 審查不授權一般執行，須依實際may_do、must_not_do、must_ask與停止條件；缺人類授權即停止。本介紹不新增工具權限、MCP服務、agents、hooks或全局context。
- 共用來源修復PR23及PR24尚未合併至固定版本；已知scope／whitespace驗證限制仍在。本地check通過不是完整授權或安全認證。
- 原始來源、MIT條款、安裝前提與限制見repository。團隊導入可透過作者既有公開[LinkedIn](https://www.linkedin.com/in/cis2042/)洽詢，不代表已提供付費服務或效果保證。
