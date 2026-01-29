/**
 * Skill Sources translations for Chinese
 * Contains translated descriptions for skill source cards
 */

export interface SkillSourceTranslation {
  zhDescription: string; // Chinese description
}

export const skillSourcesTranslations: Record<string, SkillSourceTranslation> = {
  'skills-sh': {
    zhDescription: '开放的 Agent Skills 生态系统，收录 27,000+ Skills，支持 Qoder 等 17+ 主流 AI Agent',
  },
  'mcp-marketplace': {
    zhDescription: '官方 Skills 市场，收录 31,000+ Skills，支持一键安装和持续更新',
  },
  'anthropic-official': {
    zhDescription: 'Anthropic 官方 Skill 集合，包含 16 个核心 Skills，涵盖文档处理、创意设计和开发工具',
  },
  'vercel-labs': {
    zhDescription: 'Vercel Labs 前端优化 Skills，凝聚 10+ 年前端性能优化经验',
  },
  'awesome-skills': {
    zhDescription: '社区精选的 Agent Skills 列表，包含 60+ 经过验证的高质量 Skills',
  },
};

/**
 * Get translated description for a skill source
 */
export function getSkillSourceDescription(slug: string, description: string, lang: 'en' | 'zh-CN'): string {
  if (lang === 'en') {
    return description;
  }
  
  const translation = skillSourcesTranslations[slug];
  return translation?.zhDescription || description;
}
