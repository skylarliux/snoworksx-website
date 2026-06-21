import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  match[1].split('\n').forEach((line) => {
    const colon = line.indexOf(':');
    if (colon === -1) return;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim().replace(/^['"]|['"]$/g, '');
    meta[key] = val;
  });
  return { meta, body: match[2] };
}

/**
 * Returns all post slugs, reading both .md (legacy) and .mdoc (Keystatic) files.
 * Deduplicates: if both .md and .mdoc exist for the same slug, .mdoc takes priority.
 */
export function getAllPostSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter(
    (f) => f.endsWith('.md') || f.endsWith('.mdoc')
  );

  const slugSet = new Map();
  files.forEach((f) => {
    const slug = f.replace(/\.(md|mdoc)$/, '');
    const ext = f.endsWith('.mdoc') ? '.mdoc' : '.md';
    // .mdoc takes priority over .md for the same slug
    if (!slugSet.has(slug) || ext === '.mdoc') {
      slugSet.set(slug, ext);
    }
  });

  return Array.from(slugSet.keys());
}

/** Read a single post by slug. Tries .mdoc first, then .md. */
export function getPostBySlug(slug) {
  const mdocPath = path.join(BLOG_DIR, `${slug}.mdoc`);
  const mdPath   = path.join(BLOG_DIR, `${slug}.md`);

  let raw;
  if (fs.existsSync(mdocPath))      raw = fs.readFileSync(mdocPath, 'utf-8');
  else if (fs.existsSync(mdPath))   raw = fs.readFileSync(mdPath, 'utf-8');
  else return null;

  const { meta, body } = parseFrontmatter(raw);

  return {
    slug,
    title:     meta.title     || slug,
    date:      meta.date      || '',
    excerpt:   meta.excerpt   || '',
    category:  meta.category  || 'Industry',
    readTime:  meta.readTime  || '5 min read',
    heroImage: meta.heroImage || '',   // optional: /images/blog/[slug].webp
    body,
  };
}

/** All posts sorted newest-first. */
export function getAllPosts() {
  return getAllPostSlugs()
    .map(getPostBySlug)
    .filter(Boolean)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Very simple Markdown/Markdoc → HTML (no external dependency). */
export function markdownToHtml(md) {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm,  '<h2>$1</h2>')
    .replace(/^# (.+)$/gm,   '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,     '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hul])(.+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '');
}
