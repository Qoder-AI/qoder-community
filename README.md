# Coding Agent Skill

将编码任务委托给 Claude Code、OpenCode、iFlow 或 qodercli，通过后台进程运行。

## 前提条件

### 必须安装 tmux

由于 Bash 工具没有 PTY（伪终端）参数，运行交互式 CLI/TUI 工具（如 OpenCode、iFlow、qodercli 的交互模式）时，需要使用 **tmux** 来提供 PTY 环境。

**安装 tmux：**

```bash
# macOS
brew install tmux

# Ubuntu/Debian
sudo apt install tmux

# CentOS/RHEL
sudo yum install tmux
```

### 编码代理 CLI 工具

根据需要安装以下一个或多个编码代理：

- **Claude Code**: `claude` CLI
- **OpenCode**: `opencode` CLI
- **iFlow**: `iflow` CLI
- **qodercli**: `qodercli` CLI

## 快速开始

### 一次性任务

对于简单的提示/对话，创建临时 git 仓库并运行：

```bash
# 创建临时工作目录
SCRATCH=$(mktemp -d) && cd $SCRATCH && git init

# OpenCode 一次性任务
cd "$SCRATCH" && opencode run '你的提示词'

# iFlow 一次性任务（非交互）
cd "$SCRATCH" && iflow -p '你的提示词'

# qodercli 一次性任务（非交互）
cd "$SCRATCH" && qodercli -p '你的提示词'
```

> **为什么要 git init？** 许多代理 CLI 在 git 仓库中工作效果最佳（支持 diff、patch、历史记录）。临时仓库可以保持工作干净且可复现。

## 使用模式

### 核心模式：cd + tmux + capture-pane/send-keys

对于较长的任务，在 tmux 中启动代理，然后使用 bash 运行 tmux 命令进行监控和交互：

```bash
# 1) 在目标目录启动代理（tmux 提供 PTY）
tmux new-session -d -s opencode-1 "cd ~/project && opencode run '构建贪吃蛇游戏'"

# 2) 监控输出（最后 50 行）
tmux capture-pane -t opencode-1 -p | tail -50

# 3) 安全发送输入（文本然后回车）
tmux send-keys -t opencode-1 -l -- "yes"
sleep 0.1
tmux send-keys -t opencode-1 Enter

# 4) 如需停止
tmux send-keys -t opencode-1 C-c
# 或终止 tmux 会话
tmux kill-session -t opencode-1
```

## 各代理详细用法

### OpenCode (opencode)

OpenCode 通常是交互式的（TUI），因此**在 tmux 中运行**：

```bash
# 启动 TUI（默认）
tmux new-session -d -s opencode-1 "cd ~/project && opencode"

# 运行一次性消息
tmux new-session -d -s opencode-run-1 "cd ~/project && opencode run '添加深色模式切换'"

# 指定模型 / 继续会话
tmux new-session -d -s opencode-model-1 "cd ~/project && opencode -m zai-coding-plan/glm-4.7 run '重构认证模块'"
tmux new-session -d -s opencode-continue-1 "cd ~/project && opencode -c"
tmux new-session -d -s opencode-session-1 "cd ~/project && opencode -s <sessionId>"

# PR 工作流
tmux new-session -d -s opencode-pr-130 "cd ~/project && opencode pr 130"
```

### Claude Code

Claude Code 使用 `--print --permission-mode bypassPermissions` 模式：

```bash
# 前台运行
cd ~/project && claude --permission-mode bypassPermissions --print '你的任务'

# 后台运行
# 使用 Bash 工具的 run_in_background: true 参数
```

### iFlow (iflow)

iFlow 支持交互式和非交互式两种模式：

```bash
# 一次性任务（非交互）
cd ~/project && iflow -p '解释这个仓库的架构并提出 3 个重构建议'

# 提示后保持交互
tmux new-session -d -s iflow-1 "cd ~/project && iflow -i '扫描仓库并识别风险模式；然后等待后续指令'"

# 会话控制 / 限制
cd ~/project && iflow -c -p '总结上次发布以来的变更'
cd ~/project && iflow --max-turns 25 -p '修复失败的测试'
```

### qodercli

qodercli 可以作为交互式助手或非交互式"打印后退出"模式运行：

```bash
# 交互模式
tmux new-session -d -s qoder-1 "cd ~/project && qodercli -w ~/project"

# 一次性任务（非交互）— 委托任务的首选方式
# 注意：qodercli 的 -p 模式不需要 PTY，建议使用后台 bash 而非 tmux
# 因为 tmux capture-pane 对 qodercli 可能返回空内容
cd ~/project && qodercli -w ~/project -p '你的任务' --max-turns 25 2>&1 | tee /tmp/qoder-task.log

# 监控进度
tail -50 /tmp/qoder-task.log

# 机器可读输出
cd ~/project && qodercli -p '总结 src/ 职责' -f json
```

**处理长提示词或非 ASCII 字符：**

```bash
# 1) 将提示词写入临时文件
# 2) 通过 $(cat ...) 传递
cd ~/project && qodercli -w ~/project -p "$(cat /tmp/my-prompt.txt)" --max-turns 30
```

## 高级用法

### 使用 git worktree 并行修复多个问题

```bash
# 1. 为每个问题创建 worktree
git worktree add -b fix/issue-78 /tmp/issue-78 main
git worktree add -b fix/issue-99 /tmp/issue-99 main

# 2. 在每个 worktree 中启动代理
tmux new-session -d -s issue-78 "cd /tmp/issue-78 && pnpm install && opencode run '修复 issue #78'"
tmux new-session -d -s issue-99 "cd /tmp/issue-99 && pnpm install && iflow -i '修复 issue #99'"

# 3. 监控进度
tmux list-sessions
tmux capture-pane -t issue-78 -p | tail -50

# 4. 修复完成后创建 PR
cd /tmp/issue-78 && git push -u origin fix/issue-78
gh pr create --repo user/repo --head fix/issue-78 --title "fix: ..." --body "..."

# 5. 清理
git worktree remove /tmp/issue-78
git worktree remove /tmp/issue-99
```

## 重要规则

1. **为每个代理选择正确的执行模式**：
   - OpenCode/iFlow：在 **tmux** 中运行以获得交互性（PTY）
   - qodercli 一次性任务（`-p`）：优先使用**直接后台 bash** 配合 `tee` 记录日志
   - Claude Code：优先使用 `--print --permission-mode bypassPermissions`（非交互）

2. **尊重工具选择** - 如果用户要求使用特定代理 CLI，请使用该 CLI

3. **保持耐心** - 不要因为会话"慢"就终止它

4. **智能监控** - 首先使用 `tmux capture-pane`，如果 10 秒后返回空内容，切换到日志文件（`tee` 输出）

5. **并行是允许的** - 可以为批处理工作运行多个后台会话

6. **永远不要在 ~/ 目录启动代理** - 避免将内部文档纳入上下文

## 常见问题

### capture-pane 返回空内容

某些代理 CLI（特别是 qodercli）使用备用屏幕缓冲区或延迟 stdout，导致 `tmux capture-pane` 返回空白输出。

**解决方案**：使用 `tee` + 日志文件作为主要监控方法：

```bash
tmux new-session -d -s agent-1 "cd ~/project && agent-cli ... 2>&1 | tee /tmp/agent-task.log"
tail -50 /tmp/agent-task.log
```

### 脚手架 CLI 意外阻塞

脚手架工具（create-next-app、create-vite 等）经常在新版本中添加交互提示。

**解决方案**：管道默认答案处理意外提示：

```bash
echo "no" | npx create-next-app@latest my-app --typescript --tailwind --eslint --app --use-npm
```

### 区域设置 / 编码问题

Bash 工具环境可能不会继承 UTF-8 区域设置。如果看到乱码，请将提示词写入临时文件并通过 `$(cat /tmp/prompt.txt)` 传递。

## 进度更新

当在后台启动编码代理时，请保持用户知情：

- 启动时发送简短消息（正在运行什么 + 在哪里）
- 仅在以下情况更新：
  - 里程碑完成（构建完成、测试通过）
  - 代理提问 / 需要输入
  - 遇到错误或需要用户操作
  - 代理完成（包括变更内容 + 位置）
- 如果终止会话，立即说明原因
