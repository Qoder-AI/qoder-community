// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://qoder-community.pages.dev',
	image: {
		service: { entrypoint: 'astro/assets/services/noop' }
	},
	integrations: [
		starlight({
			title: 'Qoder Community',
			description: 'Global Qoder community - Share agents, learn together, build faster',
			
			// i18n configuration
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				zh: {
					label: '中文',
					lang: 'zh-CN',
				},
			},
			defaultLocale: 'root',
			
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Qoder-AI/qoder-community' }
			],
			
			sidebar: [
				{
					label: 'Community',
					items: [
						{ label: 'Agents', link: '/agents/' },
						{ label: 'Learn', link: '/learn/' },
						{ label: 'Meetups', link: '/meetups/' },
						{ label: 'Showcase', link: '/showcase/' },
					],
				},
			],
			
			customCss: [
				'./src/styles/custom.css',
			],
			
			editLink: {
				baseUrl: 'https://github.com/Qoder-AI/qoder-community/edit/main/',
			},
			
			lastUpdated: true,
			
			disable404Route: false,
			
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
				Header: './src/components/Header.astro',
				Footer: './src/components/Footer.astro',
			},
		}),
	],
});