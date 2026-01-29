---
slug: static-analysis
---

## 使用场景

- 安全漏洞检测
- 代码质量审查
- 依赖安全检查
- CI/CD 集成检查
- 合规性验证

## 核心能力

- **漏洞检测**：SQL 注入、XSS 等
- **代码规范**：最佳实践检查
- **依赖分析**：第三方库安全性
- **报告生成**：清晰的问题报告

## 示例

```
请对这段代码进行静态安全分析：

```javascript
const user = req.query.user;
const query = `SELECT * FROM users WHERE name = '${user}'`;
db.query(query);
```

识别：
1. 安全漏洞
2. 严重程度
3. 修复建议
4. 安全的替代实现
```

## 注意事项

- 静态分析有局限性
- 结合动态测试使用
- 优先处理高风险漏洞
- 定期更新规则库
