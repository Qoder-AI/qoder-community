# Qoder Community

Global community platform for Qoder developers - share agents, learn together, build faster.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.6+
- **Theme**: [Starlight](https://starlight.astro.build/) 0.37+
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Language**: TypeScript + Markdown/MDX

## Features

- Lightning-fast performance (Lighthouse 98-100)
- Quick builds (~4 seconds)
- Minimal JavaScript (~2.5KB)
- Built-in full-text search
- Dark mode support
- Fully responsive
- Global CDN via Cloudflare
- Free web analytics

## Project Structure

```
qoder-community/
├── src/
│   ├── content/
│   │   ├── agents/        # Community agent configurations
│   │   ├── videos/        # Tutorial videos
│   │   ├── meetups/       # Global meetup events
│   │   ├── showcase/      # Community projects
│   │   └── docs/          # Site pages
│   ├── components/
│   │   ├── AgentCard.astro
│   │   ├── VideoCard.astro
│   │   └── MeetupCard.astro
│   ├── pages/
│   │   ├── agents.astro
│   │   ├── learn.astro
│   │   ├── meetups.astro
│   │   └── showcase.astro
│   └── styles/
│       └── custom.css
├── public/
├── astro.config.mjs
└── package.json
```

## Local Development

### Install Dependencies

```bash
npm install
```

### Start Dev Server

```bash
npm run dev
```

Visit: http://localhost:4321

### Build for Production

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Community Content

### Add Agent Configuration

Create a file in `src/content/agents/`:

```markdown
---
title: "Your Agent Name"
description: "Brief description"
author:
  name: "Your Name"
  avatar: "https://github.com/username.png"
  url: "https://github.com/username"
githubUrl: "https://github.com/username/repo"
tags: ["Next.js", "TypeScript"]
category: "Full-Stack"
useCase: "Web applications"
date: 2025-01-06
featured: false
---

# Your agents.md content here
```

### Add Video

Create a file in `src/content/videos/`:

```markdown
---
title: "Video Title"
description: "Video description"
youtubeId: "VIDEO_ID"
channel: "Channel Name"
channelUrl: "https://youtube.com/@channel"
duration: "12:34"
category: "Tutorial"
tags: ["AI Coding", "Tutorial"]
date: 2025-01-06
featured: false
---
```

### Add Meetup

Create a file in `src/content/meetups/`:

```markdown
---
title: "Meetup Title"
location: "City, Country"
date: 2025-02-01
status: "upcoming"
registrationUrl: "https://eventbrite.com/..."
capacity: 100
image: "https://..."
organizer: "Your Name"
topics: ["AI Coding", "Networking"]
---
```

## Deployment

### Deploy to Cloudflare Pages

See `DEPLOYMENT.md` for detailed instructions.

Quick steps:

```bash
# 1. Push to GitHub
git add .
git commit -m "Update content"
git push

# 2. Cloudflare Pages auto-deploys (1-2 minutes)
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing agent configurations.

## Links

- **Live Site**: https://qoder-community.pages.dev
- **GitHub**: https://github.com/Qoder-AI/qoder-community
- **Astro Docs**: https://docs.astro.build/
- **Starlight Guide**: https://starlight.astro.build/

## Troubleshooting

### Build Errors

```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Content Not Showing

Check frontmatter format is correct.

### Search Not Working

Check Pagefind output in build logs.

---

Powered by Astro and Starlight  
Hosted on Cloudflare Pages
