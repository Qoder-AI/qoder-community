---
name: dlazy-veo-3.1-fast
version: 1.0.0
description: 使用 Google Veo 3.1 Fast 极速版模型，快速响应并生成短时长的文生视频或图生视频。
metadata: {"clawdbot":{"emoji":"🤖","requires":{"bins":["npm","npx"]},"install":"npm install -g @dlazy/cli"},"openclaw":{"systemPrompt":"当调用此技能时，可以使用 dlazy veo-3.1-fast -h 查看帮助信息。"}}
---

# dlazy-veo-3.1-fast

使用 Google Veo 3.1 Fast 极速版模型，快速响应并生成短时长的文生视频或图生视频。

## 触发关键词

- veo 3.1 fast
- 快速生成视频
- 文生视频、图生视频

## 使用方法

**CRITICAL INSTRUCTION FOR AGENT**: 
执行 `dlazy veo-3.1-fast` 命令获取结果。

```bash
dlazy veo-3.1-fast -h

Options:
  --prompt <prompt>                    Prompt
  --generation_mode <generation_mode>  Generation Mode (Supports: Frames,
                                       Components) [Default: Frames]
  --size <size>                        Size (Supports: 16:9, 9:16) [Default:
                                       16:9]
  --resolution <resolution>            Resolution (Supports: 720P, 1080P, 4K)
                                       [Default: 720P]
  --image <image>                      Path to the local image file or remote
                                       image URL (First frame)
  --image-tail <imageTail>             Path to the local image file or remote
                                       image URL (Tail/Last frame)
  -h, --help                           display help for command
```

## 输出格式

```json
{
  "code": 0,
  "message": "",
  "data": {
    "urls": ["https://oss.dlazy.com/result.png"]
  }
}
```

## 命令示例

```bash
# 基础调用：
dlazy veo-3.1-fast --prompt '提示词内容' --image '/path/to/image.png'

# 复杂调用：
dlazy veo-3.1-fast --prompt '提示词内容' --image 'https://oss.dlazy.com/image.png'
```

## 错误处理

| Code | 错误类型                   | 示例信息                                                                                                                |
| ---- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 501  | 缺少必填参数               | `error: required option '--prompt <prompt>' not specified`                                                              |
| 502  | 本地文件读取错误           | `Error: Image file/Video file not found: C:\path\to\your\file`                                                          |
| 503  | API 请求失败（余额不足）   | `Error during API request: Request failed with status code 400` / `Response details: {"error": "Insufficient balance"}` |
| 503  | API 请求失败（服务器异常） | `HTTP 状态码异常（500 服务器崩溃）`                                                                                     |
| 504  | 异步任务执行失败           | `=== Generation Failed ===` / `{后端返回的具体错误原因，比如 "Prompt violates safety policy"}`                          |

> **智能体关键指令**: 如果执行结果返回 `code: 503` 且提示余额不足（Insufficient balance），您必须明确告知用户当前积分不足，并引导用户点击以下链接前往充值：[https://dlazy.com/zh-CN/dashboard/organization/settings?tab=credits](https://dlazy.com/zh-CN/dashboard/organization/settings?tab=credits)

## 提示

您可以访问 https://dlazy.com 查看更多信息。
