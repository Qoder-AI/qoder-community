---
title: "Audio Creator · Foleyix 声音创作"
description: "撰写和优化声音提示词，通过 Foleyix 创作背景音乐、人声歌曲、播客、环境音、音效和语音。"
name: audiocreator-foleyix
source: community
author: Foleyix
githubUrl: https://github.com/lvyinchao/foleyix-skill/tree/main/skills/audiocreator-foleyix
docsUrl: https://foleyix.com/skill
category: design
tags:
  - audio
  - music
  - podcast
  - sound-effects
  - prompts
roles:
  - designer
  - content
  - marketer
featured: false
popular: false
isOfficial: false
shareImage: /images/skills/share/audiocreator-foleyix-share.png
installCommand: |
  npx skills add lvyinchao/foleyix-skill --skill audiocreator-foleyix -a qoder
date: 2026-10-05
---

## 使用场景

- 为背景音乐、人声歌曲、播客、环境音、音效、旁白、对白和声音场景撰写、优化或修复提示词。
- 保留原有歌词和台词，明确表演、声音材质、时序和禁止事项。
- 通过用户授权的 Foleyix 账号生成声音、查询已有任务和额度，下载私有 WAV。

## 安装

```bash
npx skills add lvyinchao/foleyix-skill --skill audiocreator-foleyix -a qoder
```

需安装完整技能目录，包括参考资料和脚本。v1.5.0 可从 [GitHub 发布页](https://github.com/lvyinchao/foleyix-skill/releases/tag/v1.5.0) 获取。

## 示例

```text
使用 audiocreator-foleyix，为旅行视频写一段舒缓背景音乐的提示词。包含木吉他和轻柔钢琴，无人声、无歌词。只返回提示词。
```

```text
使用 audiocreator-foleyix，生成宁静森林的环境音，有远处鸟鸣和轻风。不要对白或音乐。保存 WAV，并报告实际时长。
```

只创作提示词无需登录、运行环境或生成额度。账号操作和声音生成需 Node.js 22.20+ 及网络。用户需在 Foleyix 网站核对账号及短码并完成设备授权；agent 不读取密码，也不代用户确认授权。

## 注意事项

- Skill 与 CLI 采用 MIT-0 免费开源；实际生成使用用户的 Foleyix 免费体验或订阅额度。
- 声音类型及限制与网站共享能力清单。背景音乐和带人声歌曲有独立的提示词指导。
- CLI 可通过 `node scripts/foleyix.mjs voices --json` 查询当前账号的已保存音色。重复使用 `--voice-id ID` 最多绑定三个不同的参考音，按顺序对应 `@voice1`、`@voice2`、`@voice3`。参考音必须属于当前账号、预览已完成且仍在保留期内，每个最多 30 秒、10 MB；加上参考音描述后的完整提示词最多 3,000 字符。
- CLI 1.5.0 可用 `voice-create` 创建合成音色资料、`voice-preview` 生成可复用参考预览，以及 `voice-upload --rights-confirmed` 上传有权使用的 WAV。新版登录显示 `voices:write`，旧连接需重新登录并批准该权限。预览使用生成秒数，上传仅使用存储额度。目录导入、批量游戏音效及节目导出继续使用网站流程。
- 指定时长属于生成指导。需检查实际任务和完整文件再报告完成；下载已有声音不消耗新的生成额度。
