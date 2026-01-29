---
slug: skill-template
---

## 使用场景

- 快速创建新 Skills
- 学习 Skill 结构
- 确保格式正确
- 团队 Skill 标准化

## 核心能力

- **标准结构**：完整的目录结构
- **元数据模板**：YAML frontmatter
- **指令占位符**：可自定义的指令区域
- **资源目录**：scripts/、references/、assets/

## 基础结构

```
my-skill/
|-- SKILL.md          # 必需：主文件
|-- scripts/          # 可选：可执行代码
|-- references/       # 可选：参考文档
|-- assets/           # 可选：资源文件
```

## SKILL.md 模板

```markdown
---
name: my-skill
description: 描述 Skill 功能和触发场景
---

# Skill 名称

[核心指令]

## 使用场景
- 场景 1
- 场景 2

## 指令
1. 步骤 1
2. 步骤 2
```

## 注意事项

- name 使用小写和连字符
- description 要清晰具体
- 保持 SKILL.md 简洁
- 大文件放在 references/ 中
