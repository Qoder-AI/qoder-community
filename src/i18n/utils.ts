/**
 * i18n utility functions for the Qoder Community website
 */

import { ui, defaultLang, type UIKey } from './ui';

/**
 * Get the language from the URL pathname
 */
export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  if (lang === 'zh') return 'zh-CN';
  return defaultLang;
}

/**
 * Get the language from Astro context
 */
export function getLangFromPath(pathname: string): keyof typeof ui {
  if (pathname.startsWith('/zh/') || pathname === '/zh') {
    return 'zh-CN';
  }
  return defaultLang;
}

/**
 * Create a translation function for the given language
 */
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

/**
 * Get translated path for language switching
 */
export function getLocalizedPath(pathname: string, targetLang: keyof typeof ui): string {
  // Remove existing language prefix
  let cleanPath = pathname;
  if (pathname.startsWith('/zh/')) {
    cleanPath = pathname.slice(3) || '/';
  } else if (pathname === '/zh') {
    cleanPath = '/';
  }
  
  // Add new language prefix if not default
  if (targetLang === 'zh-CN') {
    return `/zh${cleanPath === '/' ? '' : cleanPath}`;
  }
  
  return cleanPath;
}

/**
 * Format date according to locale
 */
export function formatDate(date: Date, lang: keyof typeof ui): string {
  const locale = lang === 'zh-CN' ? 'zh-CN' : 'en-US';
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Get category label
 */
export function getCategoryLabel(category: string, lang: keyof typeof ui): string {
  const key = `category.${category}` as UIKey;
  return ui[lang][key] || ui[defaultLang][key] || category;
}

/**
 * Get source label
 */
export function getSourceLabel(source: string, lang: keyof typeof ui): string {
  const key = `source.${source}` as UIKey;
  return ui[lang][key] || ui[defaultLang][key] || source;
}

/**
 * Get role label
 */
export function getRoleLabel(role: string, lang: keyof typeof ui): string {
  const key = `role.${role}` as UIKey;
  return ui[lang][key] || ui[defaultLang][key] || role;
}
