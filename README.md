# SNOWORKSX Website

B2B Next.js website for SNOWORKSX — OEM winter sports manufacturer, Weihai, China.

**Stack:** Next.js App Router · Tailwind CSS v4 · JavaScript · Vercel

---

## Setup

### 1. Install Node.js

Download LTS from [nodejs.org](https://nodejs.org). Verify:

```bash
node --version   # v18+ required
npm --version
```

### 2. Create a new Next.js project

```bash
npx create-next-app@latest snoworksx-website
```

Answer the prompts:

| Question | Answer |
|---|---|
| TypeScript? | **No** |
| ESLint? | Yes |
| Tailwind CSS? | **Yes** |
| `src/` directory? | **Yes** |
| App Router? | **Yes** |
| Import alias? | No |

### 3. Copy project files

Unzip `snoworksx-website-source.zip` and copy **all files** into the generated `snoworksx-website/` folder. Overwrite all existing files when prompted.

### 4. Run locally

```bash
cd snoworksx-website
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Hard refresh (Ctrl+Shift+R / Cmd+Shift+R) if styles look wrong on first load.

---

## Deploy on Vercel

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Import Project** → select your repo → **Deploy**
4. Every future push to GitHub triggers automatic redeploy

---

## Content Updates

### Add a blog post

Create a new `.md` file in `src/content/blog/`:

```
---
title: Your Post Title
date: 2025-10-01
excerpt: Short description shown on the blog listing page.
category: Manufacturing Guide
readTime: 5 min read
---

Your content here in standard markdown.
```

Push to GitHub — live in ~60 seconds.

### Update product information

Edit `src/lib/products.js` — all product data lives here. No page code changes needed.

### Update company information

| What to change | File |
|---|---|
| Navigation / footer | `src/app/layout.jsx` |
| Homepage | `src/app/page.jsx` |
| About page | `src/app/about/page.jsx` |
| Products | `src/lib/products.js` |
| Quote form product list | `src/components/QuoteForm.jsx` |

### Add product photos

Drop `.jpg` or `.webp` images into `public/images/`. Update the `image` field in `src/lib/products.js` to match.

### Hook up the quote form

The quote form shows a success message on submit. To send real emails:

1. Create `src/app/api/quote/route.js`
2. Use [Resend](https://resend.com), [SendGrid](https://sendgrid.com), or [EmailJS](https://emailjs.com)
3. In `QuoteForm.jsx`, replace the TODO comment with a real `fetch('/api/quote', ...)` call

---

## Pages

| URL | File |
|---|---|
| `/` | `src/app/page.jsx` |
| `/products` | `src/app/products/page.jsx` |
| `/products/[id]` | `src/app/products/[id]/page.jsx` |
| `/process` | `src/app/process/page.jsx` |
| `/about` | `src/app/about/page.jsx` |
| `/projects` | `src/app/projects/page.jsx` |
| `/contact` | `src/app/contact/page.jsx` |
| `/blog` | `src/app/blog/page.jsx` |
| `/blog/[slug]` | `src/app/blog/[slug]/page.jsx` |

---

## Tech Notes

- **Tailwind v4**: Config is in `globals.css` (`@import "tailwindcss"`) — no `tailwind.config.js`
- **Server Components**: All pages are Server Components except `NavClient.jsx` and `QuoteForm.jsx`
- **Dynamic routes**: `params` awaited in Next.js 15+ (`const { id } = await params`)
- **Fonts**: Google Fonts loaded via CSS import — Barlow Condensed (headings) + Barlow (body)
- **Website**: snoworksx.com

---

*SNOWORKSX · snoworksx.com · Weihai, Shandong, China*

---

## Content Manager (Keystatic)

SNOWORKSX uses **Keystatic** as a visual content manager. No code editing required for blog posts or product data.

### Install the extra packages

After running `create-next-app` and copying the project files, run:

```bash
npm install @keystatic/core @keystatic/next @markdoc/markdoc
```

### Open the admin panel

Start the dev server (`npm run dev`) then open:

```
http://localhost:3000/keystatic
```

You will see the SNOWORKSX Content Manager with two sections:

| Section | What you can do |
|---|---|
| **Blog Posts** | Create, edit, and delete blog posts with a rich text editor |
| **Products** | Edit product names, specs, MOQ, lead times, highlights, and variants |

### Adding a blog post

1. Open `localhost:3000/keystatic`
2. Click **Blog Posts → Create entry**
3. Fill in: Title, Date, Excerpt, Category, Read Time
4. Write the article body in the rich text editor (supports Markdown: `##` for headings, `**bold**`, `- bullet lists`)
5. Click **Save** — the post appears on the website immediately

### Editing a product

1. Open `localhost:3000/keystatic`
2. Click **Products → [product name]**
3. Edit any fields: specs, MOQ, lead time, highlights, description, etc.
4. Click **Save**
5. Restart the dev server or redeploy to see changes live

### In production (Vercel)

The Keystatic admin only works locally by default. To enable it on your live site, set up **Keystatic Cloud** or **GitHub mode**:

- See [keystatic.com/docs/github-mode](https://keystatic.com/docs/github-mode)
- GitHub mode lets you edit content at `yourdomain.com/keystatic`, and changes commit directly to your GitHub repo, triggering an automatic Vercel redeploy

### File storage

Keystatic stores content in your project files:

| Content | Location |
|---|---|
| Blog posts | `src/content/blog/*.mdoc` |
| Products | `src/content/products/*.json` |

These are plain text files — you can always edit them directly if you prefer.

