---
slug: nju-cli
---

## 使用场景

- 查询教务网官方通知、校历、考试通知和毕业相关公告。
- 在具备账号权限和网络条件时，查询 eHall 网上办事大厅里的课表、培养方案、成绩等信息。
- 检索南京大学交换生管理系统中的交换项目和相关通知。
- 查看南大团委最新动态和公告通知。

## 核心能力

- **教务网**：收集并解读官方通知、校历、考试和毕业相关信息。
- **eHall**：指导 Qoder 调用 `nju-cli` 二进制完成校园服务查询。
- **交换生管理**：搜索交换项目信息和相关公告。
- **南大团委**：获取最新动态和公告通知。

## 截图

<p align="center">
  <img alt="NJU CLI" width="20%" src="https://github.com/user-attachments/assets/d78d6040-8262-420d-892b-86d7b04afd16" />
</p>

| 毕业论文 ddl 什么时候 | 毕业要交什么 |
| :-------------------: | :----------: |
| <img width="100%" alt="毕业论文 ddl 截图" src="https://github.com/user-attachments/assets/de0576c9-6f95-4814-bf6a-f31fd13fae43" /> | <img width="100%" alt="毕业事项截图" src="https://github.com/user-attachments/assets/bbee4ab4-f631-4bbe-999d-46b7abecc0fb" /> |
| 我的选课够毕业吗 | 怎么入党 |
| <img width="927" height="910" alt="选课毕业检查截图" src="https://github.com/user-attachments/assets/3258646e-87f3-40eb-8c73-a98a454d9d60" /> | <img width="949" height="1389" alt="入党流程截图" src="https://github.com/user-attachments/assets/94d65e26-569a-4141-b464-e076852dda24" /> |

## 示例

```
我的选课够毕业吗？
```

```
帮我找最近的南京大学交换生项目通知，并总结申请截止时间。
```

## 注意事项

- 安装命令会 shallow clone Codex marketplace 仓库，然后把 `nju-cli` skill、scripts 和全部内置二进制复制到 `~/.qoder/skills/nju-cli`。
- 内置二进制包含 macOS Apple Silicon、Linux x86_64 和 Windows x86_64。
- 部分 eHall 流程需要有效的南京大学账号，以及能够访问校园服务的网络环境。
