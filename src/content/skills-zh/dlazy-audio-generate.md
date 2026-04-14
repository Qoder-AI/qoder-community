---
name: dlazy-audio-generate
version: 1.0.0
description: 音频生成技能。根据提示词自动选择最佳的 dlazy CLI 音频/TTS 模型。
metadata: {"clawdbot":{"emoji":"🤖","requires":{"bins":["npm","npx"]},"install":"npm install -g @dlazy/cli"},"openclaw":{"systemPrompt":"当调用此技能时，请自动选择对应的 dlazy 子命令执行。"}}
---

# dlazy-audio-generate

音频生成技能。根据提示词自动选择最佳的 dlazy CLI 音频/TTS 模型。

## Trigger Keywords / 触发关键词

- 生成音频
- 文本转语音, TTS
- 生成音乐、音效

## Usage / 使用方法

此技能处理所有音频生成请求，通过选择最佳的 `dlazy` 音频模型。

### 可用的音频模型
- `dlazy gemini-2.5-tts`, `dlazy doubao-tts`, `dlazy keling-tts`: 文本转语音 (TTS)。
- `dlazy suno.music`: 音乐生成。
- `dlazy keling-sfx`: 音效生成。
- `dlazy vidu-audio-clone`, `dlazy kling-audio-clone`: 声音克隆。

> **智能体关键指令**: 
1. 选择最合适的音频模型。
2. 运行 `dlazy <model_name> -h` 查看参数。
3. 执行命令。
4. 如果返回 `code: 503` 且提示余额不足，您必须明确告知用户并提供充值链接：[https://dlazy.com/zh-CN/dashboard/organization/settings?tab=credits](https://dlazy.com/zh-CN/dashboard/organization/settings?tab=credits)


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
