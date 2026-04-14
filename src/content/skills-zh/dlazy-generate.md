---
name: dlazy-generate
version: 1.0.0
description: 综合生成技能。能够根据用户意图自动选择合适的 dlazy CLI 模型来生成图片、视频或音频。
metadata: {"clawdbot":{"emoji":"🤖","requires":{"bins":["npm","npx"]},"install":"npm install -g @dlazy/cli"},"openclaw":{"systemPrompt":"当调用此技能时，请自动选择对应的 dlazy 子命令执行。"}}
---

# dlazy-generate

综合生成技能。能够根据用户意图自动选择合适的 dlazy CLI 模型来生成图片、视频或音频。

## Trigger Keywords / 触发关键词

- 生成
- 创建图片、视频、音频
- 多模态生成

## Usage / 使用方法

这是一个综合技能，它会根据用户的意图，自动将生成请求路由到合适的 `dlazy` 模型。

### 按分类可用的模型

**图片生成 (Image):**
- `dlazy seedream-4.5`: 高质量写实/海报。
- `dlazy seedream-5.0-lite`: 快速、低成本草图。
- `dlazy banana2`, `dlazy banana-pro`: 通用文生图。
- `dlazy grok-4.2`: 极简文生图。
- `dlazy recraft-v3`: 风格化（插画等）。
- `dlazy recraft-v3-svg`: SVG/矢量图。
- `dlazy mj.imagine`: Midjourney 风格。
- `dlazy kling-image-o1`, `dlazy viduq2-t2i`, `dlazy jimeng-t2i`: 其他高质量图片模型。

**视频生成 (Video):**
- `dlazy veo-3.1`, `dlazy veo-3.1-fast`: 高质量电影级片段。
- `dlazy sora-2`, `dlazy sora-2-pro`: 叙事片段。
- `dlazy kling-v3`, `dlazy kling-v3-omni`: 通用短视频。
- `dlazy seedance-1.5-pro`: 带转场的叙事短片。
- `dlazy wan2.6-r2v`, `dlazy wan2.6-r2v-flash`: 通用/快速视频制作。
- `dlazy viduq2-i2v`, `dlazy jimeng-i2v-first`, `dlazy jimeng-i2v-first-tail`, `dlazy jimeng-dream-actor`, `dlazy jimeng-omnihuman-1.5`: 图生视频、数字人、动作迁移。

**音频生成 (Audio):**
- `dlazy gemini-2.5-tts`, `dlazy doubao-tts`, `dlazy keling-tts`: 文本转语音 (TTS)。
- `dlazy suno.music`: 音乐生成。
- `dlazy keling-sfx`: 音效生成。
- `dlazy vidu-audio-clone`, `dlazy kling-audio-clone`: 声音克隆。

> **智能体关键指令**: 
1. 确定用户请求的媒体类型（图片、视频或音频）。
2. 从上述列表中选择最合适的模型。
3. 运行 `dlazy <model_name> -h` 查看该特定模型所需的参数。
4. 执行命令（例如 `dlazy seedream-4.5 --prompt "..."`）。
5. 如果执行结果返回 `code: 503` 且提示余额不足（Insufficient balance），您必须明确告知用户当前积分不足，并引导用户点击以下链接前往充值：[https://dlazy.com/zh-CN/dashboard/organization/settings?tab=credits](https://dlazy.com/zh-CN/dashboard/organization/settings?tab=credits)


## Error Handling / 错误处理

| Code | Error Type                         | Example Message                                                                                                          |
| ---- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 501  | Missing required parameter         | `error: required option '--prompt <prompt>' not specified`                                                              |
| 502  | Local file read error              | `Error: Image file/Video file not found: C:\path\to\your\file`                                                          |
| 503  | API request failed (no balance)    | `Error during API request: Request failed with status code 400` / `Response details: {"error": "Insufficient balance"}` |
| 503  | API request failed (server error)  | `HTTP status code error (500 server crash)`                                                                             |
| 504  | Asynchronous task execution failed | `=== Generation Failed ===` / `{Specific error reason returned by backend, for example "Prompt violates safety policy"}` |

## Tips

Visit https://dlazy.com for more information.
