/**
 * i18n module exports
 */

export { ui, languages, defaultLang, type UIKey } from './ui';
export {
  getLangFromUrl,
  getLangFromPath,
  useTranslations,
  getLocalizedPath,
  formatDate,
  getCategoryLabel,
  getSourceLabel,
  getRoleLabel,
} from './utils';
export {
  skillsTranslations,
  getSkillTranslation,
  getSkillDisplayName,
  getSkillTitle,
  getSkillDescription,
  type SkillTranslation,
} from './skills-translations';
export {
  skillSourcesTranslations,
  getSkillSourceDescription,
  type SkillSourceTranslation,
} from './skillSources-translations';
