---
name: gpt-image2-pro
title: AI图片生成器
description: AI 图片生成器 — 基于 gpt-image-2 模型，支持文生图与图生图，内置免费额度，开箱即用。
author: redfox-data
githubUrl: https://github.com/redfox-data/redfox-community/tree/main/skills/gpt-image2-pro
tags:
  - ai
  - image-generation
  - gpt-image-2
  - text-to-image
  - image-to-image
  - design
roles:
  - developer
  - designer
  - creator
  - content-creator
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/redfox-data/redfox-community.git
  cp -r redfox-community/skills/gpt-image2-pro ~/.qoder/skills/gpt-image2-pro
  pip3 install requests
date: 2026-05-20
---

## Use Cases

- **文生图**：输入提示词，基于 gpt-image-2 生成全新图片（支持 1024×1024、横竖版及 auto 尺寸）
- **图生图**：上传参考图 + 提示词，进行风格迁移、局部修改或背景替换（`--fidelity high/low` 控制保真度）
- **批量与格式**：单次最多生成 10 张；支持 PNG / JPEG / WebP，可输出透明背景 logo 或图标
- **开箱即用**：内置公共 API Key，约 10000 次免费额度，无需订阅或绑卡；额度用完后可在[红狐hub](https://redfox.hk/settings/api-keys?source=github) 获取自有 Token

## Example

```bash
# 文生图 — 基本生成
python3 "$SKILL_PATH/assets/imagegen.py" "一只橘色的猫咪坐在窗台上看着窗外的夕阳"

# 图生图 — 基于参考图编辑
python3 "$SKILL_PATH/assets/imagegen.py" "把猫咪改成白色，背景换成星空" --image ~/Pictures/cat.png

# 透明背景 logo，批量 4 张
python3 "$SKILL_PATH/assets/imagegen.py" "icon set, flat style" -n 4 --bg transparent --format png
```

## Notes

- 依赖：`pip3 install requests`
- 默认输出目录：`~/Downloads/QoderImages`；可用 `-o`、`--prefix` 自定义路径与文件名前缀
- 生成耗时通常 10–30 秒，脚本会自动轮询等待；可用 `--no-download` 仅提交任务，再用 `--task-id` 查询结果
- 透明背景需 `--bg transparent`，且格式为 PNG 或 WebP（JPEG 不支持透明）
- 额度用尽后：环境变量 `export REDFOX_API_KEY=ak_你的密钥`，或 `--api-key`，或写入 `~/.qoder/apis/redfox.json`
