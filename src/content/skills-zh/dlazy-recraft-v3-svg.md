---
name: dlazy-recraft-v3-svg
version: 1.0.0
description: 使用 Recraft v3 专属的 SVG 模型，根据文本生成高质量矢量图 (SVG)。
metadata: {"clawdbot":{"emoji":"🤖","requires":{"bins":["npm","npx"]},"install":"npm install -g @dlazy/cli"},"openclaw":{"systemPrompt":"当调用此技能时，可以使用 dlazy recraft-v3-svg -h 查看帮助信息。"}}
---

# dlazy-recraft-v3-svg

使用 Recraft v3 专属的 SVG 模型，根据文本生成高质量矢量图 (SVG)。

## 触发关键词

- recraft svg
- 生成矢量图
- 生成svg
- 文生图

## 使用方法

**CRITICAL INSTRUCTION FOR AGENT**: 
执行 `dlazy recraft-v3-svg` 命令获取结果。

```bash
dlazy recraft-v3-svg -h

Options:
  --prompt <prompt>              Prompt
  --aspect_ratio <aspect_ratio>  Aspect Ratio (Supports: auto, 1:1, 4:3, 3:4,
                                 16:9, 9:16, 3:2, 2:3, 21:9) [Default: auto]
  --style <style>                Style (Supports: Vector Art, Line Art,
                                 Engraving) [Default: Vector Art]
  -h, --help                     display help for command
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
dlazy recraft-v3-svg --prompt '提示词内容' --image '/path/to/image.png'

# 复杂调用：
dlazy recraft-v3-svg --prompt '提示词内容' --image 'https://oss.dlazy.com/image.png'
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
