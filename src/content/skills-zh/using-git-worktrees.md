---
slug: using-git-worktrees
---

## 使用场景

- 同时在多个功能分支工作
- 处理紧急修复不中断当前工作
- 对比不同分支的代码
- 并行运行多版本测试
- 代码审查时保留本地修改

## 核心能力

- **创建 Worktree**：为分支创建独立目录
- **管理 Worktree**：列出、切换、删除 worktree
- **最佳实践**：Worktree 组织和命名规范

## 示例

```
我正在 feature/auth 分支开发，突然需要修复
main 分支上的紧急 bug。

请帮我：
1. 创建一个新的 worktree 用于热修复
2. 不影响当前工作的情况下完成修复
3. 完成后清理 worktree
```

## 注意事项

- Worktree 共享同一个 .git 目录
- 不要在多个 worktree 中 checkout 同一分支
- 定期清理不需要的 worktree
