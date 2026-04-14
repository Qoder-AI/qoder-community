---
name: dlazy-video-generate
version: 1.0.0
description: 视频生成技能。根据提示词自动选择最佳的 dlazy CLI 视频生成模型。
metadata: {"clawdbot":{"emoji":"🤖","requires":{"bins":["npm","npx"]},"install":"npm install -g @dlazy/cli"},"openclaw":{"systemPrompt":"当调用此技能时，请自动选择对应的 dlazy 子命令执行。"}}
---

# dlazy-video-generate

视频生成技能。根据提示词自动选择最佳的 dlazy CLI 视频生成模型。

## Trigger Keywords / 触发关键词

- 生成视频
- 文生视频
- 图片动起来

## Usage / 使用方法

此技能处理所有视频生成请求，通过选择最佳的 `dlazy` 视频模型。

### 可用的视频模型
- `dlazy veo-3.1`, `dlazy veo-3.1-fast`: 高质量电影级片段。
- `dlazy sora-2`, `dlazy sora-2-pro`: 叙事片段。
- `dlazy kling-v3`, `dlazy kling-v3-omni`: 通用短视频。
- `dlazy seedance-1.5-pro`: 带转场的叙事短片。
- `dlazy wan2.6-r2v`, `dlazy wan2.6-r2v-flash`: 通用/快速视频制作。
- `dlazy viduq2-i2v`, `dlazy jimeng-i2v-first`, `dlazy jimeng-i2v-first-tail`, `dlazy jimeng-dream-actor`, `dlazy jimeng-omnihuman-1.5`: 图生视频、数字人、动作迁移。

> **智能体关键指令**: 
1. 选择最合适的视频模型。
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
