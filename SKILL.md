---
name: coding-agent
version: 0.1.0
description: 'Delegate coding tasks to Claude Code, OpenCode, iFlow, or qodercli via background process. Use when: (1) building/creating new features or apps, (2) reviewing PRs (spawn in temp dir), (3) refactoring large codebases, (4) iterative coding that benefits from agent-driven exploration. NOT for: simple one-liner fixes (just edit), reading a single known file (use file read), thread-bound ACP harness requests in chat, or any work in ~/clawd workspace (never spawn agents here). Claude Code: prefer --print --permission-mode bypassPermissions. OpenCode/iFlow/qodercli: run inside tmux for interactivity (PTY).'
---

# Coding Agent (bash-first)

Use **bash** + **tmux** for all coding agent work. Simple and effective.

## ⚠️ Interactive CLIs: use tmux to provide a PTY

The bash tool has **no** `pty` parameter. To run interactive CLIs/TUIs like OpenCode / iFlow / qodercli, use **tmux** to provide a PTY, then use `tmux capture-pane` / `tmux send-keys` for monitoring and input.

```bash
# ✅ Start an interactive CLI inside a tmux session (PTY provided by tmux)
tmux new-session -d -s opencode-1 "cd /path/to/project && opencode"
tmux new-session -d -s iflow-1 "cd /path/to/project && iflow"
tmux new-session -d -s qoder-1 "cd /path/to/project && qodercli -w /path/to/project"
```

For **Claude Code** (`claude` CLI), use `--print --permission-mode bypassPermissions` instead.
`--dangerously-skip-permissions` with PTY can exit after the confirmation dialog.
`--print` mode keeps full tool access and avoids interactive confirmation:

```bash
# ✅ Correct for Claude Code (no PTY needed)
cd /path/to/project && claude --permission-mode bypassPermissions --print 'Your task'

# For background execution: use run_in_background:true on the bash tool

# ❌ Wrong for Claude Code
claude --dangerously-skip-permissions 'task'
```

### Bash Tool Parameters

| Parameter    | Type    | Description                                                                 |
| ------------ | ------- | --------------------------------------------------------------------------- |
| `command`    | string  | The shell command to run                                                    |
| `run_in_background` | boolean | Run in background (non-blocking)                                     |
| `timeout`    | number  | Timeout in **milliseconds** (kills process on expiry)                     |
| `description` | string |  (optional) — A short 5–10 word summary of what the command does, for clarity. |

---

## Quick Start: One-Shot Tasks

For quick prompts/chats, create a temp git repo and run:

```bash
# Quick chat in a temp repo (safe scratch workspace)
SCRATCH=$(mktemp -d) && cd $SCRATCH && git init

# OpenCode one-shot
bash command:"cd \"$SCRATCH\" && opencode run 'Your prompt here'"

# iFlow one-shot (non-interactive)
bash command:"cd \"$SCRATCH\" && iflow -p 'Your prompt here'"

# qodercli one-shot (non-interactive)
bash command:"cd \"$SCRATCH\" && qodercli -p 'Your prompt here'"

# Or in a real project - interactive via tmux (PTY)
bash command:"tmux new-session -d -s opencode-quick \"cd ~/Projects/myproject && opencode run 'Add error handling to the API calls'\""
```

**Why git init?** Many agent CLIs work best inside a git repo (diffs, patches, history). A temp repo keeps scratch work clean and reproducible.

---

## The Pattern: cd + tmux + capture-pane/send-keys

For longer tasks, start the agent inside tmux (PTY), then monitor and interact using **bash** run tmux command:

```bash
# 1) Start agent in target directory (PTY provided by tmux)
tmux new-session -d -s opencode-1 "cd ~/project && opencode run 'Build a snake game'"

# 2) Monitor output (last 50 lines)
tmux capture-pane -t opencode-1 -p | tail -50

# 3) Send input safely (text then Enter)
tmux send-keys -t opencode-1 -l -- "yes"
sleep 0.1
tmux send-keys -t opencode-1 Enter

# 4) Stop if needed
tmux send-keys -t opencode-1 C-c
# or kill the tmux session
tmux kill-session -t opencode-1
```

**Why `cd` matters:** Our bash tool has no `workdir`, so you must `cd` explicitly to scope context and side effects.

### ⚠️ Fallback: when `capture-pane` returns empty

Some agent CLIs (notably **qodercli**) use alternate screen buffers or defer stdout, making `tmux capture-pane` return blank output even while the agent is actively working. If capture-pane is empty after 10+ seconds but the process is still running:

1. **Don't assume the agent is stuck** — check the log file or process status first.
2. **Use `tee` + log file** as the primary monitoring method:
   ```bash
   # Start with tee to capture output to a log file
   tmux new-session -d -s agent-1 "cd ~/project && agent-cli ... 2>&1 | tee /tmp/agent-task.log"
   # Monitor via log file instead of capture-pane
   tail -50 /tmp/agent-task.log
   wc -c /tmp/agent-task.log  # quick check: is it growing?
   ```
3. **For non-interactive one-shot tasks**, skip tmux entirely and use `run_in_background:true` on the Bash tool (see qodercli section below).

---

## OpenCode (opencode)

OpenCode is typically interactive (TUI), so **run it in tmux**. (Also using the **bash** tool to run tmux)

### Common Commands

- **Start TUI (default)**:

```bash
tmux new-session -d -s opencode-1 "cd ~/project && opencode"
```

- **Run with a one-shot message**:

```bash
tmux new-session -d -s opencode-run-1 "cd ~/project && opencode run 'Build a dark mode toggle'"
```

- **Choose model / continue session**:

```bash
# Model format: provider/model
tmux new-session -d -s opencode-model-1 "cd ~/project && opencode -m zai-coding-plan/glm-4.7 run 'Refactor the auth module'"
tmux new-session -d -s opencode-continue-1 "cd ~/project && opencode -c"
tmux new-session -d -s opencode-session-1 "cd ~/project && opencode -s <sessionId>"
```

### PR Workflow Helpers (optional)

```bash
# Fetch & checkout PR, then run opencode
tmux new-session -d -s opencode-pr-130 "cd ~/project && opencode pr 130"
```

---

## Claude Code

```bash
# Foreground
bash command:"cd ~/project && claude --permission-mode bypassPermissions --print 'Your task'"

# Background
bash run_in_background:true command:"cd ~/project && claude --permission-mode bypassPermissions --print 'Your task'"
```

---

## iFlow (iflow)

iFlow supports both interactive and non-interactive modes.

### One-shot (non-interactive)

```bash
bash command:"cd ~/project && iflow -p 'Explain the architecture of this repo and propose 3 refactors'"
```

### Prompt then stay interactive

```bash
tmux new-session -d -s iflow-1 "cd ~/project && iflow -i 'Scan the repo and identify risky patterns; then wait for follow-ups'"
```

### Session controls / limits

```bash
bash command:"cd ~/project && iflow -c -p 'Summarize changes since last release'"
bash command:"cd ~/project && iflow --max-turns 25 -p 'Fix failing tests'"
```

---

## qodercli

qodercli can run as an interactive assistant, or as a non-interactive “print and exit”.

### Interactive

```bash
tmux new-session -d -s qoder-1 "cd ~/project && qodercli -w ~/project"
```

### One-shot (non-interactive) — **preferred for delegated tasks**

For one-shot tasks (with `-p`), **prefer direct background bash over tmux**. qodercli's `-p` mode does not need a PTY, and its terminal output is incompatible with `tmux capture-pane` (capture-pane returns empty while qodercli is running). Use `run_in_background:true` on the Bash tool instead:

```bash
# ✅ Recommended: direct background execution with log file for monitoring
bash run_in_background:true command:"cd ~/project && qodercli -w ~/project -p 'Your task here' --max-turns 25 2>&1 | tee /tmp/qoder-task.log"

# Monitor progress by reading the log file
tail -50 /tmp/qoder-task.log

# ❌ Avoid: tmux + capture-pane for qodercli one-shot tasks
# capture-pane will return empty — qodercli likely uses alternate screen buffer
# or defers stdout flush, making capture-pane unreliable for progress monitoring.
```

### Long / non-ASCII prompts

When the prompt is long or contains non-ASCII characters (Chinese, etc.), write it to a temp file first to avoid shell escaping and encoding issues:

```bash
# 1) Write prompt to file (via the Write tool)
# 2) Pass it via $(cat ...)
bash run_in_background:true command:"cd ~/project && qodercli -w ~/project -p \"$(cat /tmp/my-prompt.txt)\" --max-turns 30 2>&1 | tee /tmp/qoder-task.log"
```

### Machine-readable output

```bash
bash command:"cd ~/project && qodercli -p 'Summarize src/ responsibilities' -f json"
```

---

## Parallel Issue Fixing with git worktrees

For fixing multiple issues in parallel, use git worktrees:

```bash
# 1. Create worktrees for each issue
git worktree add -b fix/issue-78 /tmp/issue-78 main
git worktree add -b fix/issue-99 /tmp/issue-99 main

# 2. Launch agents in each (PTY via tmux)
tmux new-session -d -s issue-78 "cd /tmp/issue-78 && pnpm install && opencode run 'Fix issue #78: <description>. Stop before committing; summarize what changed.'"
tmux new-session -d -s issue-99 "cd /tmp/issue-99 && pnpm install && iflow -i 'Fix issue #99 from the approved ticket summary. Implement only the in-scope edits; then wait for review.'"

# 3. Monitor progress
tmux list-sessions
tmux capture-pane -t issue-78 -p | tail -50
tmux capture-pane -t issue-99 -p | tail -50

# 4. Create PRs after fixes
cd /tmp/issue-78 && git push -u origin fix/issue-78
gh pr create --repo user/repo --head fix/issue-78 --title "fix: ..." --body "..."

# 5. Cleanup
git worktree remove /tmp/issue-78
git worktree remove /tmp/issue-99
```

---

## ⚠️ Rules

1. **Use the right execution mode per agent**:
   - OpenCode/iFlow: run inside **tmux** for interactivity (PTY)
   - qodercli one-shot (`-p`): prefer **direct background bash** with `tee` for logging; use tmux only for interactive mode (`-w` without `-p`)
   - Claude Code: prefer `--print --permission-mode bypassPermissions` (non-interactive)
2. **Respect tool choice** - if the user asks for a specific agent CLI, use that CLI.
   - In orchestrator mode: do NOT hand-code patches yourself.
   - If an agent fails/hangs, respawn it or ask the user for direction; don't silently take over.
3. **Be patient** - don't kill sessions because they're "slow"
4. **Monitor smart** - use `tmux capture-pane` first, but if it returns empty after 10s, switch to log file (`tee` output). Don't repeat a failing monitoring method more than twice.
5. **Parallel is OK** - run multiple background sessions for batch work
6. **NEVER start agents in ~/** - keep internal docs out of context

---

## ⚠️ Known Pitfalls

### Locale / Encoding

The Bash tool environment may not inherit a UTF-8 locale (e.g., `LANG` may be unset, defaulting to `C`). This causes cosmetic issues (non-ASCII characters appear garbled in `ps aux` output) but **does not affect actual byte-level argument passing** — agents still receive correct UTF-8 content.

If you see garbled characters in process listings, don't assume the agent received bad input. Check the actual output (log file) before concluding there's an encoding problem.

For safety with non-ASCII prompts, write the prompt to a temp file and pass via `$(cat /tmp/prompt.txt)`.

### Scaffolding CLIs (create-next-app, create-vite, etc.)

Scaffolding tools frequently add new interactive prompts across versions. Even with all known flags (e.g. `--typescript --tailwind --eslint`), a new version may introduce an unexpected question that blocks the command.

Always pipe a default answer to handle unexpected prompts:
```bash
# ✅ Safe: pipe default answer for unexpected prompts
echo "no" | npx create-next-app@latest my-app --typescript --tailwind --eslint --app --use-npm

# ❌ Risky: may hang on new interactive prompts
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --use-npm
```

---

## Progress Updates (Critical)

When you spawn coding agents in the background, keep the user in the loop.

- Send 1 short message when you start (what's running + where).
- Then only update again when something changes:
  - a milestone completes (build finished, tests passed)
  - the agent asks a question / needs input
  - you hit an error or need user action
  - the agent finishes (include what changed + where)
- If you kill a session, immediately say you killed it and why.

This prevents the user from seeing only "Agent failed before reply" and having no idea what happened.

