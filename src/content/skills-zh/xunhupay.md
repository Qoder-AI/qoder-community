---
name: xunhupay-payment
title: 虎皮椒支付（xunhupay）API集成
description: 虎皮椒支付（xunhupay）API集成，支持发起支付、查询订单、退款、验证回调通知、签名生成。当用户需要对接虎皮椒支付、集成微信/支付宝个人收款接口、处理虎皮椒支付回调签名验证、生成支付二维码时使用。
source: community
author: 迅虎网络
githubUrl: https://github.com/xunhuweb/xunhupay_skill
docsUrl: https://www.xunhupay.com/doc/api/pay.html
category: development # development
tags:
  - 虎皮椒支付
  - xunhupay
  - 微信/支付宝个人收款
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/xunhuweb/xunhupay_skill
  cp -r xunhupay ~/.qoder/skills/
date: 2026-05-20
---

## 使用场景

- 网站集成微信、支付宝个人收款

## 示例

```bash
用PHP对接虎皮椒支付发起支付接口
```

## 注意事项

- 已注册并完成支付渠道申请
- 在虎皮椒后台支付渠道获取APPID、秘钥、支付网关
- notify_url 必须是公网可访问的 HTTP/HTTPS 地址，不可为 localhost或本地地址