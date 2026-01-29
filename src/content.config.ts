import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Showcase collection schema
const showcaseCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()).min(1).max(5),
		image: z.string(),
		link: z.string().url().optional(),
		featured: z.boolean().default(false),
		date: z.coerce.date(), // For sorting: newest first
	}),
});

// Agents collection schema
const agentsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		author: z.object({
			name: z.string(),
			avatar: z.string().url(),
			url: z.string().url(),
		}),
		githubUrl: z.string().url(),
		tags: z.array(z.string()),
		category: z.enum(['Frontend', 'Backend', 'Full-Stack', 'Mobile', 'CLI']),
		useCase: z.string(),
		date: z.coerce.date(),
		featured: z.boolean().default(false),
	}),
});

// Videos collection schema
const videosCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		youtubeId: z.string(),
		channel: z.string(),
		channelUrl: z.string().url(),
		duration: z.string(),
		category: z.enum(['Tutorial', 'Review', 'Introduction', 'Case Study']),
		tags: z.array(z.string()),
		date: z.coerce.date(),
		featured: z.boolean().default(false),
	}),
});

// Meetups collection schema
const meetupsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		location: z.string(),
		date: z.coerce.date(),
		status: z.enum(['upcoming', 'past']),
		registrationUrl: z.string().url().optional(),
		capacity: z.number().optional(),
		attendees: z.number().optional(),
		image: z.string(),
		recordingUrl: z.string().url().optional(),
		photos: z.array(z.string()).optional(),
		organizer: z.string(),
		topics: z.array(z.string()),
	}),
});

// Skills collection schema
const skillsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		// Basic info
		name: z.string(),
		title: z.string(),
		description: z.string(),
		
		// Source info
		source: z.enum(['anthropic', 'vercel', 'community', 'enterprise']),
		author: z.string().optional(),
		
		// Links
		githubUrl: z.string().url(),
		docsUrl: z.string().url().optional(),
		marketplaceUrl: z.string().url().optional(),
		
		// Category
		category: z.enum([
			'document',
			'development',
			'design',
			'automation',
			'marketing',
			'data',
			'security',
			'productivity',
			'meta',
		]),
		tags: z.array(z.string()).optional(),
		
		// Applicable roles (for role-based recommendations)
		roles: z.array(z.enum([
			'developer',
			'marketer',
			'designer',
			'pm',
			'data-analyst',
			'devops',
			'content',
			'finance',
			'hr',
			'legal',
			'sales',
			'executive',
		])).optional(),
		
		// Display properties
		featured: z.boolean().default(false),
		popular: z.boolean().default(false),
		isOfficial: z.boolean().default(false),
		
		// Install info
		installCommand: z.string().optional(),
		
		// Metadata
		date: z.coerce.date(),
		lastUpdated: z.coerce.date().optional(),
	}),
});

// Skill Sources collection schema (external resource entries)
const skillSourcesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		description: z.string(),
		url: z.string().url(),
		skillCount: z.string().optional(),
		icon: z.string().optional(),
		order: z.number(),
	}),
});

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	showcase: showcaseCollection,
	agents: agentsCollection,
	videos: videosCollection,
	meetups: meetupsCollection,
	skills: skillsCollection,
	skillSources: skillSourcesCollection,
};
