/**
 * UI translations for the Qoder Community website
 * Contains all translatable UI strings for English and Chinese
 */

export const languages = {
  en: 'English',
  'zh-CN': '中文',
} as const;

export const defaultLang = 'en' as const;

export const ui = {
  en: {
    // Navigation
    'nav.skills': 'Skills',
    'nav.agents': 'Agents',
    'nav.learn': 'Learn',
    'nav.showcase': 'Showcase',
    'nav.meetups': 'Meetups & Hackathon',
    'nav.home': 'Back to Home',
    'nav.navigation': 'Navigation',
    
    // Page titles
    'page.skills.title': 'Skills',
    'page.skills.description': 'Discover and install powerful skills for your Qoder agent',
    'page.agents.title': 'Agents',
    'page.agents.description': 'Explore community-built agents and configurations',
    'page.learn.title': 'Learn',
    'page.learn.description': 'Tutorials and resources to master Qoder',
    'page.showcase.title': 'Showcase',
    'page.showcase.description': 'Projects built with Qoder',
    'page.meetups.title': 'Meetups & Hackathon',
    'page.meetups.description': 'Join the community events',
    
    // Skill detail page
    'skill.description': 'Description',
    'skill.install': 'Install',
    'skill.information': 'Information',
    'skill.links': 'Links',
    'skill.tags': 'Tags',
    'skill.applicableRoles': 'Applicable Roles',
    'skill.relatedSkills': 'Related Skills',
    'skill.backToSkills': 'Back to Skills',
    'skill.useCases': 'Use Cases',
    'skill.coreCapabilities': 'Core Capabilities',
    'skill.example': 'Example',
    'skill.notes': 'Notes',
    'skill.copyInstallCommand': 'Copy Install Command',
    'skill.copied': 'Copied!',
    'skill.githubRepository': 'GitHub Repository',
    'skill.documentation': 'Documentation',
    'skill.marketplace': 'Marketplace',
    
    // Information fields
    'info.source': 'Source',
    'info.author': 'Author',
    'info.category': 'Category',
    'info.dateAdded': 'Date Added',
    'info.lastUpdated': 'Last Updated',
    
    // Badges
    'badge.official': 'Verified',
    'badge.popular': 'Popular',
    'badge.featured': 'Featured',
    
    // Categories
    'category.document': 'Document',
    'category.development': 'Development',
    'category.design': 'Design',
    'category.automation': 'Automation',
    'category.marketing': 'Marketing',
    'category.data': 'Data',
    'category.security': 'Security',
    'category.productivity': 'Productivity',
    'category.meta': 'Meta',
    
    // Sources
    'source.anthropic': 'Anthropic',
    'source.vercel': 'Vercel',
    'source.community': 'Community',
    'source.enterprise': 'Enterprise',
    
    // Roles
    'role.developer': 'Developer',
    'role.marketer': 'Marketer',
    'role.designer': 'Designer',
    'role.pm': 'Product Manager',
    'role.data-analyst': 'Data Analyst',
    'role.devops': 'DevOps/IT',
    'role.content': 'Content Creator',
    'role.sales': 'Sales',
    'role.finance': 'Finance',
    'role.hr': 'HR',
    'role.legal': 'Legal',
    'role.executive': 'Executive',
    
    // Filters
    'filter.all': 'All',
    'filter.category': 'Category',
    'filter.source': 'Source',
    'filter.search': 'Search skills...',
    'filter.noResults': 'No skills found',
    
    // Agent card
    'agent.viewOnGithub': 'View on GitHub',
    'agent.useCase': 'Use Case',
    
    // Common
    'common.github': 'GitHub',
    'common.viewAll': 'View All',
    'common.learnMore': 'Learn More',
    
    // Footer
    'footer.builtWith': 'This site was created 100% with Qoder and Skills. No code written.',
  },
  'zh-CN': {
    // Navigation - Keep Skills/Agents in English
    'nav.skills': 'Skills',
    'nav.agents': 'Agents',
    'nav.learn': '学习',
    'nav.showcase': '展示',
    'nav.meetups': '聚会与黑客松',
    'nav.home': '返回首页',
    'nav.navigation': '导航',
    
    // Page titles - Keep Agent Skills in English
    'page.skills.title': 'Agent Skills',
    'page.skills.description': '发现并安装强大的 Qoder Agent Skills',
    'page.agents.title': 'Agents',
    'page.agents.description': '探索社区构建的 Agents 和配置',
    'page.learn.title': '学习',
    'page.learn.description': '掌握 Qoder 的教程和资源',
    'page.showcase.title': '展示',
    'page.showcase.description': '使用 Qoder 构建的项目',
    'page.meetups.title': '聚会与黑客松',
    'page.meetups.description': '加入社区活动',
    
    // Skill detail page
    'skill.description': '描述',
    'skill.install': '安装',
    'skill.information': '信息',
    'skill.links': '链接',
    'skill.tags': '标签',
    'skill.applicableRoles': '适用角色',
    'skill.relatedSkills': '相关 Skills',
    'skill.backToSkills': '返回 Skills 列表',
    'skill.useCases': '使用场景',
    'skill.coreCapabilities': '核心能力',
    'skill.example': '示例',
    'skill.notes': '注意事项',
    'skill.copyInstallCommand': '复制安装命令',
    'skill.copied': '已复制！',
    'skill.githubRepository': 'GitHub 仓库',
    'skill.documentation': '文档',
    'skill.marketplace': '市场',
    
    // Information fields
    'info.source': '来源',
    'info.author': '作者',
    'info.category': '分类',
    'info.dateAdded': '添加日期',
    'info.lastUpdated': '最后更新',
    
    // Badges
    'badge.official': '高质量',
    'badge.popular': '热门',
    'badge.featured': '精选',
    
    // Categories
    'category.document': '文档',
    'category.development': '开发',
    'category.design': '设计',
    'category.automation': '自动化',
    'category.marketing': '营销',
    'category.data': '数据',
    'category.security': '安全',
    'category.productivity': '生产力',
    'category.meta': 'Skill 开发',
    
    // Sources
    'source.anthropic': 'Anthropic',
    'source.vercel': 'Vercel',
    'source.community': '社区',
    'source.enterprise': '企业',
    
    // Roles
    'role.developer': '开发者',
    'role.marketer': '营销人员',
    'role.designer': '设计师',
    'role.pm': '产品经理',
    'role.data-analyst': '数据分析师',
    'role.devops': 'DevOps/IT',
    'role.content': '内容创作者',
    'role.sales': '销售',
    'role.finance': '财务',
    'role.hr': '人力资源',
    'role.legal': '法务',
    'role.executive': '高管',
    
    // Filters
    'filter.all': '全部',
    'filter.category': '分类',
    'filter.source': '来源',
    'filter.search': '搜索 Skills...',
    'filter.noResults': '未找到 Skills',
    
    // Agent card
    'agent.viewOnGithub': '在 GitHub 查看',
    'agent.useCase': '使用场景',
    
    // Common
    'common.github': 'GitHub',
    'common.viewAll': '查看全部',
    'common.learnMore': '了解更多',
    
    // Footer
    'footer.builtWith': '该网站 100% 由 Qoder 和 Skills 打造，全程零手写代码。',
  },
} as const;

export type UIKey = keyof typeof ui.en;
