# Comprehensive Project Analysis & Portfolio Recreation Plan

> **Workspace:** `Manusha Portfolio`  
> **Date:** October 2026  
> **Purpose:** Deep technical audit of the current template codebase and comprehensive roadmap for recreating it based on Manusha's upcoming resume.

---

## 1. What This Project Is (Current State & Architecture)

The codebase is an instance of **DarkMinimal**, an open-source dark-themed developer portfolio template built with the following modern web stack:

### Tech Stack Breakdown
* **Core Framework:** [Astro v7.2.9](https://astro.build/) (Static Site Generation / Island Architecture)
* **Interactive UI Islands:** [React 19](https://react.dev/) via `@astrojs/react`
* **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) via `@astrojs/tailwind` with custom CSS variables and keyframe animations
* **Canvas / Visual Effects:** HTML5 Canvas / 2D rendering in `LetterGlitch.tsx` (with `sharp` and `ogl` installed)
* **Realtime Backend:** [Firebase Firestore v12.12.1](https://firebase.google.com/) for a live interactive like counter
* **Form Handling:** [Formspree](https://formspree.io/) REST API for serverless contact message delivery
* **Typography:** Montserrat Variable via `@fontsource-variable/montserrat` with local `.woff2` font preloading
* **Package Management:** Configured for `pnpm` (`packageManager: "pnpm@11.2.2"` with `npx only-allow pnpm` preinstall guard)

---

### Architectural Layout & File Structure

```
d:/Manusha Portfolio/
├── astro.config.mjs       # Astro configuration (base, site, integrations, vite aliases)
├── package.json           # Dependencies and build scripts
├── tailwind.config.mjs    # Tailwind keyframes (heart-pulse, scaleAnim)
├── tsconfig.json          # TypeScript path aliases (@/*, @components/*)
├── public/                # Static public assets
│   ├── favicon.png        # Site favicon
│   ├── og.image.png       # Social sharing OpenGraph banner
│   ├── fonts/             # Montserrat local webfonts (woff2)
│   └── svg/               # 15 tech icons (astro, react, vue, ts, node, etc.)
└── src/
    ├── layouts/
    │   └── Layout.astro   # Global HTML shell, SEO metadata, JSON-LD Person schema, CSS variables
    ├── pages/
    │   └── index.astro    # Single page orchestrating all sections
    ├── components/
    │   ├── nav.astro      # Floating dynamic shrinking desktop navbar & mobile bottom navigation
    │   ├── home.astro     # Hero greeting, title, social links, logo ticker, skills accordion & glitch canvas
    │   ├── logoWall.astro # Infinite horizontal marquee ticker of technology SVGs
    │   ├── projects.astro # 2-column grid of project cards with links & status badges
    │   ├── contact.astro  # Location info & asynchronous Formspree contact form
    │   └── footer.astro   # Socials, Firebase LikeButton, build credits, Spotify embed, copyright
    ├── React/
    │   ├── LetterGlitch.tsx # Interactive retro hacker matrix canvas animation
    │   ├── SkillsList.tsx   # Expandable accordion for service/skill categories
    │   └── LikeButton.tsx   # Optimistic UI like button syncing with Firestore
    └── firebase.ts        # Firebase app & Firestore initialization using PUBLIC_FIREBASE_* env vars
```

---

### 🚨 Critical Security Audit Finding: Malicious Supply-Chain Code Detected

During the deep-dive audit of `astro.config.mjs`, **an obfuscated malicious script injection was discovered**:
* **Location:** `astro.config.mjs` (Line 30, appended after several thousand blank space characters).
* **Payload signature:** `global.o='5-1190-du';var _$_236d=...;var jkZ=SKI('rttsxopsjtcuvkgefozicdounhlqrnwcbrmya')...`
* **Impact:** This is a known malicious obfuscated dropper/backdoor found in several tainted template downloads that executes arbitrary code in Node.js when `npm run dev` or `npm run build` is run.
* **Immediate Action Required:** This file must be sanitized immediately by stripping the malicious payload and removing the unnatural `createRequire` import in lines 2–3.

---

## 2. What Things We Need to Make (Recreation Scope)

Once Manusha's resume is provided, we need to transform this generic starter template into a bespoke, high-converting, and personal portfolio website.

### A. Personal Branding & Hero (`home.astro`)
1. **Identity & Bio:** Replace "Your Name", generic "Software Developer", and dummy copy with Manusha's actual name, exact professional title(s), and tailored value proposition.
2. **Social & Professional Profiles:** Update links for GitHub, LinkedIn, Email, and add any other profiles listed on the resume (e.g., Portfolio, LeetCode, HackerRank, Twitter/X, Medium).
3. **Resume Download Feature:** Add a direct "Download CV / Resume" action button with an icon in the hero or navbar so recruiters can immediately download Manusha's PDF resume.

### B. Skills & Tech Stack (`logoWall.astro` & `SkillsList.tsx`)
1. **Marquee Logo Wall (`logoWall.astro`):**
   * Filter and update the list of tech logos to strictly reflect Manusha's skills from the resume (e.g., Python, Java, Docker, AWS, PostgreSQL, React, etc.).
   * Add any missing SVG icons to `public/svg/`.
2. **Interactive Skills Matrix (`SkillsList.tsx`):**
   * Redefine the skill categories to match Manusha's real domains (e.g., Full Stack Development, Cloud & DevOps, Database Architecture, Machine Learning, etc.).
   * Populate with actual proficiencies, tools, frameworks, and methodologies from the resume.

### C. Experience & Career Timeline (New Component: `experience.astro`)
* *The template currently has NO work experience or education section.*
* For any resume-driven portfolio, an **Experience Timeline** (Company, Role, Dates, Key Achievements, Tech Stack used) is crucial.
* We should build a clean, dark-minimal timeline component that integrates seamlessly into the layout and navigation.

### D. Education & Certifications (New Component or section in `experience.astro`)
* Degree(s), University / Institution, Graduation Year, Honors, and professional certifications.

### E. Projects Showcase (`projects.astro`)
1. **Project Content:** Replace dummy entries ("Project One", "Project Two") with Manusha's real projects from the resume.
2. **Metadata:** Real titles, concise impact descriptions, technologies used (badges), GitHub source code links, and live demonstration URLs.
3. **Visuals:** High-quality visual cards/screenshots instead of placeholder URLs (`https://placehold.co/...`).

### F. Contact Section (`contact.astro`)
1. **Personal Contact Information:** Real location (City, Country), business email, and optional phone/scheduling link if desired.
2. **Formspree Integration:** Wire up Manusha's personal Formspree form ID (or provide an easy configuration fallback).

### G. Footer & Interactive Polish (`footer.astro`, `LikeButton.tsx`, Spotify)
1. **Copyright Notice:** Update copyright to Manusha's name and year (while keeping required MIT template attributions).
2. **Spotify Embed:** Either configure with Manusha's favorite coding playlist or album, replace with a featured quote/testimonial, or cleanly remove if not desired.
3. **Firebase Like Button:** Configure with Manusha's Firebase project, or implement a local storage-backed like counter so it works seamlessly without requiring external Firebase credentials.

### H. SEO, Metadata & OpenGraph (`Layout.astro`)
1. Update `<title>`, meta description, keywords, canonical URLs, and OpenGraph tags (`og:title`, `og:description`, `og:image`).
2. Update the JSON-LD `Person` schema with Manusha's actual name, job title, and social URLs for Google search indexing.
3. Update `astro.config.mjs` `site` and `base` paths to match Manusha's actual hosting domain (e.g. Vercel, Netlify, or custom domain instead of `/dark-minimal`).

---

## 3. File-by-File Change Matrix

| File Path | Current Status | Required Changes |
| :--- | :--- | :--- |
| `astro.config.mjs` | Contains obfuscated malware payload & hardcoded ThemeWagon base URL | **Sanitize immediately:** Remove lines 2–3 (`createRequire`) and line 30 malware. Adjust `site` and `base` for the actual deployment URL. |
| `src/layouts/Layout.astro` | Generic "Your Name" SEO & schema | Update page title, meta description, OG tags, JSON-LD Person schema to Manusha. |
| `src/components/nav.astro` | Links: `#home`, `#projects`, `#contact` | Add `#experience` (and `#education` if needed) to the navigation items and smooth-scroll observer. |
| `src/components/home.astro` | Dummy name, developer title, placeholder bio | Insert Manusha's full name, real headline, custom bio, updated social links, and "Download Resume" button. |
| `src/components/logoWall.astro` | Generic 15 hardcoded tech icons | Align with Manusha's actual skills listed on resume. Add missing SVGs to `public/svg/`. |
| `src/React/SkillsList.tsx` | 3 hardcoded categories with generic bullets | Restructure categories and bullet points to match Manusha's core specialties from resume. |
| `src/React/LetterGlitch.tsx` | Matrix canvas animation | Keep / tune colors to match portfolio aesthetic or personal preferences. |
| `src/components/projects.astro` | 4 dummy placeholder projects with placeholder images | Rebuild with Manusha's resume projects, tech tags, descriptions, live demo links, and GitHub links. |
| `src/components/contact.astro` | Dummy location and dummy Formspree ID | Update location, Formspree form ID, and contact details. |
| `src/components/footer.astro` | Dummy Spotify playlist, generic credits | Customize Spotify widget or swap with custom card; update copyright to Manusha. |
| `src/firebase.ts` & `LikeButton.tsx` | Requires `.env` with Firebase credentials | Provide graceful offline / localStorage fallback if Firebase credentials are not provided. |
| `src/components/experience.astro` *(New)* | Does not exist | Create a responsive timeline component for Work History & Education from resume. |
| `package.json` | Requires `pnpm` specifically (`preinstall: npx only-allow pnpm`) | Ensure development server can run smoothly with available tools (`npm` or `pnpm`). |

---

## 4. Crucial Clarification Questions (Zero Assumptions)

To strictly follow your instruction to make **no assumptions** and clarify everything before writing code, please clarify the following points alongside providing the resume:

1. **Target Deployment Platform & Base Path:**
   * Where will this site be hosted? (e.g., **Vercel**, **Netlify**, **GitHub Pages**, or a **Custom Domain**?)
   * *Reason:* If hosted on GitHub Pages with a repository subpath (like `/portfolio`), Astro needs `base: "/portfolio"`. If hosted on Vercel/Netlify/root domain, `base` should be `"/"`.

2. **Sections & Navigation Structure:**
   * Would you like an explicit **"Experience / Work History"** and **"Education"** section added to the navigation and page, in addition to Home, Projects, and Contact?

3. **External Integrations:**
   * **Contact Form:** Do you have an active Formspree Form ID (e.g. `https://formspree.io/f/xyz...`), or would you prefer a direct `mailto:` link or another form provider?
   * **Live Like Counter:** Do you plan to provide Firebase credentials (in a `.env` file), or should we make the Like button save likes in `localStorage` without requiring a Firebase database?
   * **Spotify Widget:** Do you want to include a specific Spotify playlist/track URI, or would you prefer to replace that footer card with something else (e.g., personal quote, availability badge, or GitHub stats)?

4. **Package Manager Preference:**
   * The template currently enforces `pnpm` in `package.json`. Your environment currently has Node `v24.13.0` and `npm v11.6.2`. Would you like us to adjust `package.json` so you can use standard `npm` (e.g. `npm run dev`), or would you prefer `pnpm` installed?

---

> 🚀 **Ready for Resume:** Once you provide the resume and answers to the questions above, we will sanitize `astro.config.mjs`, structure the new components, and recreate the entire portfolio to reflect Manusha's profile with top-tier design quality.
