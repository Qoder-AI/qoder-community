---
name: dlazy-seedance-1.5-pro
version: 1.0.0
description: 使用豆包 Seedance 1.5 Pro 动作/舞蹈视频生成模型，将图片转化为动感的跳舞视频。
metadata: {"clawdbot":{"emoji":"🤖","requires":{"bins":["npm","npx"]},"install":"npm install -g @dlazy/cli"},"openclaw":{"systemPrompt":"当调用此技能时，可以使用 dlazy seedance-1.5-pro -h 查看帮助信息。"}}
---

# dlazy-seedance-1.5-pro

使用豆包 Seedance 1.5 Pro 动作/舞蹈视频生成模型，将图片转化为动感的跳舞视频。

## 触发关键词

- 豆包 seedance
- 生成舞蹈视频
- 跳舞视频
- 动作视频

## 使用方法

**CRITICAL INSTRUCTION FOR AGENT**: 
执行 `dlazy seedance-1.5-pro` 命令获取结果。

```bash
dlazy seedance-1.5-pro -h

Options:
  --prompt <prompt>                    Prompt
  --generation_mode <generation_mode>  Generation Mode (Supports: Frames)
                                       [Default: Frames]
  --resolution <resolution>            Resolution (Supports: 480p, 720p, 1080p)
                                       [Default: 720p]
  --ratio <ratio>                      画幅比例 (Supports: 16:9, 4:3, 1:1, 3:4,
                                       9:16, 21:9, adaptive) [Default:
                                       adaptive]
  --duration <duration>                Duration (s) (Supports: 4, 5, 6, 7, 8,
                                       9, 10, 11, 12) [Default: 5]
  --generate_audio <generate_audio>    Generate Audio [Default: true]
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
dlazy seedance-1.5-pro --prompt '提示词内容' --image '/path/to/image.png'

# 复杂调用：
dlazy seedance-1.5-pro --prompt '提示词内容' --image 'https://oss.dlazy.com/image.png'
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
