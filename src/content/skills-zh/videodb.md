---
slug: videodb
---

## 使用场景

- 从 YouTube、公开 URL、本地文件或 RTSP/实时视频流摄取视频。
- 捕获桌面屏幕、麦克风和系统音频，用于实时感知工作流。
- 为上传、生成、编辑或剪辑后的媒体返回可播放的 HLS 流链接。
- 从视频和实时流中的视觉信息与语音信息生成实时上下文。
- 为视频内容构建语音词索引、视觉索引、语义索引、关键词索引和时间索引。
- 按转录文本、视觉场景、对象、动作、元数据或时间戳搜索精确片段。
- 返回带时间戳、可播放证据链接和自动生成片段的搜索结果。
- 生成干净的带时间戳转录文本和可样式化字幕。
- 在服务端完成裁剪、合并、片段编译、字幕添加和媒体时间线合成。
- 添加文字、图片、品牌元素、音频、背景音乐、旁白、配音和翻译叠加层。
- 对编解码器、FPS、分辨率、码率、质量和宽高比进行转码与标准化。
- 将视频重构为竖屏、方形、横屏等社交平台格式。
- 生成 AI 媒体素材，包括图片、视频、音乐、音效和语音。
- 监控 RTSP/实时视频流，并在事件发生时触发实时告警。
- 录制桌面会话，总结发生的事情，并保留可搜索的会话记忆。

## 工作流

VideoDB 为 AI Agent 提供统一的服务端视频能力栈：

- **See（看见）**：摄取本地文件、公开 URL、YouTube 视频、RTSP/实时流，或包含屏幕、麦克风和系统音频的桌面会话。
- **Understand（理解）**：生成实时上下文、转录文本、视觉索引、语义索引、带时间戳的记忆和可搜索证据。
- **Act（行动）**：生成片段、字幕、叠加层、音频、配音、翻译、转码、重构、告警、导出结果和可播放流。

你的 Agent 只需要把视频交给 VideoDB，就能获得结构化上下文、可搜索片段、生成素材、告警、剪辑和 HLS 流链接，而无需在本地维护视频处理基础设施。

## 示例

```bash
npx skills add video-db/skills
```

然后向你的 Agent 提出请求：

```text
上传这个 YouTube 视频，找到演讲者讨论定价的所有片段，并返回带时间戳的可播放剪辑。
```

更多示例提示词：

```text
上传 https://www.youtube.com/watch?v=MnrJzXM7a6o 并给我一个可分享的播放链接。
```

```text
截取 10s-30s 和 45s-60s 的片段，并把它们合成为一个视频。
```

```text
生成一段背景音乐，并把它添加到这个片段中。
```

```text
给原视频添加字幕，字幕使用黑底白字样式。
```

```text
找出所有出现手机特写或产品展示画面的场景。
```

```text
监控这个 RTSP 摄像头，并在有人进入房间时记录带时间戳的告警。
```

```text
捕获我的屏幕两分钟，并写一份说明我在做什么的报告，同时给出洞察和建议。
```

## 注意事项

- 需要 Python 3.9+ 和 VideoDB API key。
- 获取 $20 免费额度，无需信用卡：https://console.videodb.io
- Claude Code 中的设置命令是 `/videodb setup`。
- 对于 Cursor、GitHub Copilot、Codex、opencode 和其他 Agent，请让 Agent 执行 “setup videodb”。
- 也支持 Claude Code plugin 安装方式：`/plugin marketplace add video-db/skills` 和 `/plugin install videodb@videodb-skills`。
- 支持的宿主平台包括 macOS、Linux 和 Windows PowerShell；桌面捕获能力取决于具体宿主环境。
- Skill 源码和后续更新保留在 VideoDB 官方 skills 仓库：https://github.com/video-db/skills
