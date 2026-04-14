---
name: dlazy-viduq2-i2v
version: 1.0.0
description: 使用 Vidu Q2 图生视频模型，将静态图片通过智能运镜转化为动态视频。
metadata: {"clawdbot":{"emoji":"🤖","requires":{"bins":["npm","npx"]},"install":"npm install -g @dlazy/cli"},"openclaw":{"systemPrompt":"当调用此技能时，可以使用 dlazy viduq2-i2v -h 查看帮助信息。"}}
---

# dlazy-viduq2-i2v

使用 Vidu Q2 图生视频模型，将静态图片通过智能运镜转化为动态视频。

## 触发关键词

- vidu q2
- 图生视频
- 图片变视频

## 使用方法

**CRITICAL INSTRUCTION FOR AGENT**: 
执行 `dlazy viduq2-i2v` 命令获取结果。

```bash
dlazy viduq2-i2v -h

Options:
  --prompt <prompt>                    Prompt
  --generation_mode <generation_mode>  Generation Mode (Supports: Components,
                                       Frames) [Default: Components]
  --subjects <subjects>                Subjects
  --audio <audio>                      Audio (Supports: true, false) [Default:
                                       false]
  --audioType <audioType>              Audio Type (Supports: all, speech_only)
                                       [Default: all]
  --duration <duration>                Duration (s) (Supports: 2, 3, 4, 5, 6,
                                       7, 8, 9, 10) [Default: 5]
  --aspectRatio <aspectRatio>          Aspect Ratio (Supports: 16:9, 9:16, 1:1,
                                       3:4, 4:3, 21:9, 2:3, 3:2) [Default:
                                       9:16]
  --resolution <resolution>            Resolution (Supports: 540p, 720p, 1080p)
                                       [Default: 720p]
  --watermark <watermark>              Watermark (Supports: true, false)
                                       [Default: false]
  --wmPosition <wmPosition>            Watermark Position (Supports: 1, 2, 3,
                                       4) [Default: 3]
  --wmUrl <wmUrl>                      Watermark URL
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
dlazy viduq2-i2v --prompt '提示词内容' --image '/path/to/image.png'

# 复杂调用：
dlazy viduq2-i2v --prompt '提示词内容' --image 'https://oss.dlazy.com/image.png'
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
