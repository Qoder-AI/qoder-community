/**
 * Skills translations for Chinese
 * Contains translated names, titles, and descriptions for all skills
 */

export interface SkillTranslation {
  zhName?: string;       // Chinese name (optional - if not set, use English name)
  zhTitle: string;       // Chinese title
  zhDescription: string; // Chinese description
}

export const skillsTranslations: Record<string, SkillTranslation> = {
  // === Design Skills ===
  'canvas-design': {
    // No zhName - keep 'canvas-design' in English
    zhTitle: 'Canvas 设计',
    zhDescription: '基于设计理念创建精美的 PNG 和 PDF 视觉作品，适用于海报、艺术作品和静态设计',
  },
  'algorithmic-art': {
    zhName: '算法艺术',
    zhTitle: '使用 p5.js 创作算法艺术',
    zhDescription: '使用 p5.js 创建生成艺术，支持种子随机性和交互式参数探索',
  },
  'frontend-design': {
    zhName: '前端设计',
    zhTitle: '前端设计',
    zhDescription: '创建独特的生产级前端界面和 UI 组件，避免千篇一律的 AI 美学风格',
  },
  'brand-guidelines': {
    zhName: '品牌指南',
    zhTitle: '品牌指南',
    zhDescription: '应用 Anthropic 官方品牌色彩和字体标准，确保视觉一致性',
  },
  'slack-gif-creator': {
    zhName: 'Slack GIF 创建器',
    zhTitle: 'Slack GIF 创建器',
    zhDescription: '创建符合 Slack 尺寸限制的动画 GIF，包含验证工具和动画概念',
  },
  'theme-factory': {
    zhName: '主题工厂',
    zhTitle: '主题工厂',
    zhDescription: '为各种产物应用专业主题的工具包，包括幻灯片、文档、报告和落地页',
  },

  // === Document Skills ===
  'pdf': {
    // No zhName - use 'pdf'
    zhTitle: 'PDF 工具包',
    zhDescription: '完整的 PDF 读写、文本和表格提取、合并/拆分、表单填写和内容编辑工具包',
  },
  'docx': {
    // No zhName - use 'docx'
    zhTitle: 'Word 文档处理',
    zhDescription: '创建、编辑和分析 Microsoft Word 文档，支持修订跟踪、批注、格式保留和文本提取',
  },
  'xlsx': {
    // No zhName - use 'xlsx'
    zhTitle: 'Excel 电子表格处理',
    zhDescription: '创建、编辑和分析 Excel 电子表格，支持公式、数据分析、格式设置和可视化',
  },
  'pptx': {
    // No zhName - use 'pptx'
    zhTitle: 'PowerPoint 演示文稿',
    zhDescription: '创建、编辑和分析 PowerPoint 演示文稿，支持布局、内容生成和演讲者备注',
  },
  'doc-coauthoring': {
    zhName: '文档协作',
    zhTitle: '文档协作',
    zhDescription: '协作式文档编辑和共创工具，支持结构化写作流程、迭代优化和读者验证',
  },
  'internal-comms': {
    zhName: '内部沟通',
    zhTitle: '内部沟通',
    zhDescription: '撰写各类内部沟通文档，包括状态报告、领导层更新、3P 更新、通讯、FAQ 和事故报告',
  },

  // === Development Skills ===
  'test-driven-development': {
    zhName: '测试驱动开发',
    zhTitle: '测试驱动开发',
    zhDescription: '先写测试再实现代码的开发方法论，产出更可靠和可维护的软件',
  },
  'mcp-builder': {
    zhName: 'MCP Server 构建器',
    zhTitle: 'MCP Server 构建器',
    zhDescription: '构建高质量的 MCP (Model Context Protocol) Server，使 AI Agent 能够与外部服务和 API 交互',
  },
  'webapp-testing': {
    zhName: 'Web 应用测试',
    zhTitle: '使用 Playwright 测试 Web 应用',
    zhDescription: '使用 Playwright 进行 Web 应用前端自动化测试，支持功能验证、UI 调试和截图捕获',
  },
  'playwright-skill': {
    zhName: 'Playwright 自动化',
    zhTitle: 'Playwright 自动化',
    zhDescription: 'Playwright 浏览器自动化技能，用于端到端测试和 Web 应用交互',
  },
  'systematic-debugging': {
    zhName: '系统化调试',
    zhTitle: '系统化调试',
    zhDescription: '通过系统化流程进行代码问题排查，快速定位和修复 Bug',
  },
  'root-cause-tracing': {
    zhName: '根因追溯',
    zhTitle: '根因追溯',
    zhDescription: '调查并识别问题的根本原因，避免只处理表面症状',
  },
  'verification-before-completion': {
    zhName: '完成前验证',
    zhTitle: '完成前验证',
    zhDescription: '交付前的验证检查，确保交付物符合质量标准',
  },
  'using-git-worktrees': {
    zhName: 'Git Worktrees 管理',
    zhTitle: 'Git Worktrees 管理',
    zhDescription: '管理多个 Git worktrees，同时在多个分支上工作而无需切换',
  },
  'finishing-a-development-branch': {
    zhName: '完成开发分支',
    zhTitle: '完成开发分支',
    zhDescription: '完成 Git 开发分支的标准流程，确保代码质量和合并准备就绪',
  },
  'requesting-code-review': {
    zhName: '请求代码审查',
    zhTitle: '请求代码审查',
    zhDescription: '请求代码审查的最佳实践，帮助审查者高效完成审查',
  },
  'receiving-code-review': {
    zhName: '接收代码审查',
    zhTitle: '接收代码审查',
    zhDescription: '处理和整合代码审查反馈的最佳实践',
  },
  'web-artifacts-builder': {
    zhName: 'Web 组件构建器',
    zhTitle: 'Web 组件构建器',
    zhDescription: '使用 React、Tailwind CSS 和 shadcn/ui 构建复杂的多组件 HTML 产物',
  },
  'static-analysis': {
    zhName: '静态分析',
    zhTitle: '静态分析',
    zhDescription: '代码静态分析技能，识别安全漏洞、代码异味和质量问题',
  },
  'aws-skills': {
    zhName: 'AWS 开发',
    zhTitle: 'AWS 开发技能',
    zhDescription: 'AWS 开发和基础设施自动化，包括 CDK、Lambda、S3 和其他服务',
  },
  'dev-agent-skills': {
    zhName: 'Git & GitHub 工作流',
    zhTitle: 'Git & GitHub 工作流',
    zhDescription: 'Git 和 GitHub 工作流技能，包括 Conventional Commits、PR 创建、合并和代码审查',
  },

  // === Marketing Skills ===
  'copywriting': {
    zhName: '营销文案',
    zhTitle: '营销文案',
    zhDescription: '撰写高转化营销文案，包括广告、落地页、邮件和社交媒体内容',
  },
  'email-sequence': {
    zhName: '邮件序列',
    zhTitle: '邮件序列',
    zhDescription: '设计和撰写自动化邮件序列，用于用户引导、转化和留存',
  },
  'seo-audit': {
    zhName: 'SEO 审计',
    zhTitle: 'SEO 审计',
    zhDescription: '全面的 SEO 审计和优化建议，提升网站搜索引擎排名',
  },
  'social-content': {
    zhName: '社交媒体内容',
    zhTitle: '社交媒体内容',
    zhDescription: '创建适合各平台的社交媒体内容，包括帖子、话题和互动策略',
  },
  'paid-ads': {
    zhName: '付费广告',
    zhTitle: '付费广告',
    zhDescription: '创建和优化付费广告，包括 Google Ads、Facebook Ads 等平台',
  },
  'marketing-ideas': {
    zhName: '营销创意',
    zhTitle: '营销创意生成器',
    zhDescription: '生成创意营销想法和增长策略，突破思维瓶颈',
  },
  'launch-strategy': {
    zhName: '发布策略',
    zhTitle: '产品发布策略',
    zhDescription: '规划和执行产品发布策略，最大化发布影响力',
  },
  'pricing-strategy': {
    zhName: '定价策略',
    zhTitle: '定价策略',
    zhDescription: '制定和优化定价策略，平衡用户价值和商业目标',
  },

  // === Automation Skills ===
  'writing-plans': {
    zhName: '编写计划',
    zhTitle: '编写计划',
    zhDescription: '创建项目计划和策略文档，帮助清晰定义目标、步骤和预期结果',
  },
  'executing-plans': {
    zhName: '执行计划',
    zhTitle: '执行计划',
    zhDescription: '实施和执行战略计划，跟踪进度并调整执行策略',
  },
  'dispatching-parallel-agents': {
    zhName: '调度并行 Agent',
    zhTitle: '调度并行 Agent',
    zhDescription: '协调多个同时运行的 Agent 进行并行任务处理和工作流编排',
  },
  'n8n-workflow-patterns': {
    zhName: 'n8n 工作流模式',
    zhTitle: 'n8n 工作流模式',
    zhDescription: 'n8n 工作流模式，包括 webhook、HTTP、数据库和 AI 任务自动化模式',
  },
  'n8n-code-javascript': {
    zhName: 'n8n JavaScript 代码',
    zhTitle: 'n8n JavaScript 代码',
    zhDescription: '在 n8n Code 节点中编写 JavaScript 代码，用于复杂数据转换和逻辑处理',
  },
  'n8n-code-python': {
    zhName: 'n8n Python 代码',
    zhTitle: 'n8n Python 代码',
    zhDescription: '在 n8n Code 节点中编写 Python 代码，用于数据处理和科学计算',
  },
  'n8n-expression-syntax': {
    zhName: 'n8n 表达式语法',
    zhTitle: 'n8n 表达式语法',
    zhDescription: 'n8n 表达式语法指南，用于在工作流中动态访问和转换数据',
  },

  // === Data Skills ===
  'postgres': {
    // No zhName - use 'postgres'
    zhTitle: 'PostgreSQL 查询',
    zhDescription: '在 PostgreSQL 数据库上执行安全的只读 SQL 查询和数据分析',
  },
  'evaluation': {
    zhName: '评估框架',
    zhTitle: '评估框架',
    zhDescription: '为 Agent 系统构建评估框架，衡量性能和质量',
  },
  'vexor': {
    // No zhName - use 'vexor'
    zhTitle: '向量搜索',
    zhDescription: '使用向量搜索进行语义文件查找和相似度匹配',
  },

  // === Security Skills ===
  'building-secure-contracts': {
    zhName: '构建安全智能合约',
    zhTitle: '构建安全智能合约',
    zhDescription: '构建安全的智能合约，避免常见安全漏洞和陷阱',
  },
  'security-bluebook-builder': {
    zhName: '安全蓝皮书构建器',
    zhTitle: '安全蓝皮书构建器',
    zhDescription: '构建安全蓝皮书，包括威胁模型、数据分类、认证会话和审计日志',
  },
  'varlock': {
    // No zhName - use 'varlock'
    zhTitle: '安全环境变量',
    zhDescription: '安全的环境变量管理，防止敏感信息意外泄露',
  },

  // === Productivity Skills ===
  'brainstorming': {
    zhName: '头脑风暴',
    zhTitle: '头脑风暴',
    zhDescription: '生成和探索创意想法，突破思维障碍',
  },
  'linear-claude-skill': {
    zhName: 'Linear 项目管理',
    zhTitle: 'Linear 项目管理',
    zhDescription: '使用 MCP 工具管理 Linear 问题和项目，实现工作流自动化',
  },
  'notion-skills': {
    zhName: 'Notion 集成',
    zhTitle: 'Notion 集成',
    zhDescription: 'Notion 集成工作流，用于管理知识库、数据库和协作文档',
  },
  'things3-agent-skill': {
    zhName: 'Things 3 任务管理',
    zhTitle: 'Things 3 任务管理',
    zhDescription: 'Things 3 任务管理集成，用于个人待办事项和项目管理',
  },

  // === Meta Skills ===
  'skill-creator': {
    zhName: '用于创建 Skills 的 Skill',
    zhTitle: '用于创建 Skills 的 Skill',
    zhDescription: '创建 Skills 以扩展 AI Agent 能力的指南，是构建新 Skills 的 Skill',
  },
  'skill-template': {
    zhName: 'Skill 模板',
    zhTitle: 'Skill 模板',
    zhDescription: '创建新 Skills 的基础模板，快速开始 Skill 开发',
  },
};

/**
 * Get translated skill data for a given slug and language
 */
export function getSkillTranslation(slug: string): SkillTranslation | undefined {
  return skillsTranslations[slug];
}

/**
 * Get the display name for a skill
 * Format: "中文名称（english-name）" or just "english-name" if no Chinese translation
 */
export function getSkillDisplayName(slug: string, name: string, lang: 'en' | 'zh-CN'): string {
  if (lang === 'en') {
    return name;
  }
  
  const translation = skillsTranslations[slug];
  if (translation?.zhName) {
    return `${translation.zhName}（${name}）`;
  }
  return name;
}

/**
 * Get the translated title for a skill
 */
export function getSkillTitle(slug: string, title: string, lang: 'en' | 'zh-CN'): string {
  if (lang === 'en') {
    return title;
  }
  
  const translation = skillsTranslations[slug];
  return translation?.zhTitle || title;
}

/**
 * Get the translated description for a skill
 */
export function getSkillDescription(slug: string, description: string, lang: 'en' | 'zh-CN'): string {
  if (lang === 'en') {
    return description;
  }
  
  const translation = skillsTranslations[slug];
  return translation?.zhDescription || description;
}
