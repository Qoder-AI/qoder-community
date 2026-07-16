---
slug: modellix
---

## 使用场景

- 根据文本提示生成图片（T2I）
- 编辑或改风格图片（I2I）
- 从文本或图片生成视频（T2V / I2V）
- 通过统一 CLI/API 调用 Modellix 模型，避免各厂商 SDK 割裂
- 用「提交 → 等待 → 下载」一条龙流程自动化异步生成

## 核心能力

- **CLI 优先**：`doctor` → `model run --wait` → `task download`
- **默认模型**：用户未指定 slug 时使用技能内默认值（如 T2I 用 Nano Banana lite，T2V 用 Seedance）
- **REST 回退**：CLI 不可用时再走 HTTP API
- **环境变量鉴权**：`MODELLIX_API_KEY`

## 示例

```bash
# 预检
modellix-cli doctor --json

# 文生图（可省略 --model-slug 使用技能默认，或显式指定）
modellix-cli model run \
  --model-slug google/nano-banana-2-lite \
  --body '{"prompt":"雨天街头的红色自行车，电影感"}' \
  --wait --timeout 5m --json

# 下载产物
modellix-cli task download <task_id> --output-dir ./outputs --json
```

## 注意事项

- 安装到 Qoder 时只复制 `modellix-skill/` 包目录到 `~/.qoder/skills/modellix`，不要复制整个仓库根目录。
- 有 CLI 时优先用 `modellix-cli`，不要手写 REST 轮询。
- 自动化场景优先使用 `--json` / `--quiet`。
- 文档索引：https://docs.modellix.ai/llms.txt ；CLI：https://www.npmjs.com/package/modellix-cli
