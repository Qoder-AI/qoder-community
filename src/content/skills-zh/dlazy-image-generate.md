---
name: dlazy-image-generate
version: 1.0.0
description: 图片生成技能。根据提示词自动选择最佳的 dlazy CLI 图片生成模型。
metadata: {"clawdbot":{"emoji":"🤖","requires":{"bins":["npm","npx"]},"install":"npm install -g @dlazy/cli"},"openclaw":{"systemPrompt":"当调用此技能时，请自动选择对应的 dlazy 子命令执行。"}}
---

# dlazy-image-generate

图片生成技能。根据提示词自动选择最佳的 dlazy CLI 图片生成模型。

## Trigger Keywords / 触发关键词

- 生成图片
- 画图
- 文生图

## Usage / 使用方法

此技能处理所有图片生成请求，通过选择最佳的 `dlazy` 图片模型。

### 可用的图片模型
- `dlazy seedream-4.5`: 高质量写实/海报。
- `dlazy seedream-5.0-lite`: 快速、低成本草图。
- `dlazy banana2`, `dlazy banana-pro`: 通用文生图。
- `dlazy grok-4.2`: 极简文生图。
- `dlazy recraft-v3`: 风格化（插画等）。
- `dlazy recraft-v3-svg`: SVG/矢量图。
- `dlazy mj.imagine`: Midjourney 风格。
- `dlazy kling-image-o1`, `dlazy viduq2-t2i`, `dlazy jimeng-t2i`: 高保真图片生成。

> **智能体关键指令**: 
1. 选择最合适的图片模型。
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
