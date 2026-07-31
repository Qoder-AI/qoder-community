---
name: organize-files-by-content
title: 按内容整理文件（organize-files-by-content）
description: 围绕文件用途、现有目录结构和使用者查找习惯整理文件的 Agent Skill。所有改动先给出完整预览，确认后才会改名或移动。
source: community
author: gegezi1205
githubUrl: https://github.com/gegezi1205/organize-files-by-content
docsUrl: https://github.com/gegezi1205/organize-files-by-content#readme
category: productivity
tags:
  - 文件整理
  - 办公自动化
  - 预览确认
  - 中英文
roles:
  - finance
  - hr
  - legal
  - executive
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/gegezi1205/organize-files-by-content
  cp -r organize-files-by-content ~/.qoder/skills/
date: 2026-07-31
---

## 使用场景

- 桌面或下载目录堆积了几个月、一直拖着不想整理
- 工作文件夹混杂着聊天下载、邮件附件和会议临时版本
- 个人参考资料需要一套以后仍然认得、愿意继续用的目录
- 权限明确的共享文件夹需要重新整理

## 核心能力

- **简短问询**：先了解职业和查找习惯（按项目、用途、相关人还是时间找文件）
- **内容优先**：读取文件名、正文和正式元数据，已有命名习惯优先保留
- **沿用旧规律**：原有目录有可用思路就尽量沿用，没有规律时才给出稳妥的新分法
- **完整预览**：路径、改名、版本和重复文件处理全部列出，明确确认后才执行
- **拿不准不动**：用途不明、加密、损坏或无法读取的文件留在原处并记录原因

## 示例

```
帮我整理下载目录。

1. 先备份文件夹，然后只读盘点确认的范围。
2. 回答几个简短的工作情况问题（第一轮 5-8 个工作类型选项）。
3. 在完整预览中核对每一项路径和改名。
4. 批准最终预览，再检查执行结果。
```

## 注意事项

- 默认先预演：确认完整预览前不会改名或移动任何文件
- 处理真实文件前请另存备份，并先从小文件夹开始试用
- 去重需要单独授权，内置整理器不会删除独有文件
- `scripts/organizer.py` 每次处理一个根目录，根目录外的文件会被拒绝
- 仓库内含中英文双语 README
