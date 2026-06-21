import fs from 'fs';
import path from 'path';

const PRODUCTS_DIR = path.join(process.cwd(), 'src', 'content', 'products');

/* Category metadata: order, display label, URL id, icon (emoji fallback),
   iconSrc (your custom image — place files in public/images/icons/),
   and the OEM intro copy shown on the category listing and product banner. */
export const CATEGORIES = [
  { id: 'snowboards',      label: 'Snowboards',      icon: '🏂', iconSrc: '/images/icons/snowboards.svg',
    blurb: 'Freeride, all-mountain, freestyle, powder and youth — full directional and twin production.' },
  { id: 'skis',            label: 'Skis',            icon: '⛷️', iconSrc: '/images/icons/skis.svg',
    blurb: 'Big-mountain, all-mountain, carving, touring and women\u2019s lines across six core species.' },
  { id: 'ski-boots',       label: 'Ski Boots',       icon: '🥾', iconSrc: '/images/icons/ski-boots.svg',
    blurb: 'Performance, freeride-touring, all-mountain, comfort and women\u2019s — flex 85 to 130.' },
  { id: 'snowboard-boots', label: 'Snowboard Boots', icon: '👟', iconSrc: '/images/icons/snowboard-boots.svg',
    blurb: 'Cable, hybrid and traditional lacing across soft to stiff flex, men\u2019s, women\u2019s and youth.' },
  { id: 'bindings',        label: 'Bindings',        icon: '🔩', iconSrc: '/images/icons/bindings.svg',
    blurb: 'Freeride, all-mountain, women\u2019s and youth — 4×4 and Channel compatible.' },
  { id: 'poles',           label: 'Poles',           icon: '🎿', iconSrc: '/images/icons/poles.svg',
    blurb: 'Carbon, composite and aluminium — fixed and adjustable, resort to backcountry.' },
];

const CATEGORY_ORDER = CATEGORIES.map((c) => c.id);

function readProductFile(filename) {
  const raw = fs.readFileSync(path.join(PRODUCTS_DIR, filename), 'utf-8');
  const data = JSON.parse(raw);
  // id is taken from the JSON (source of truth = filename, kept in sync)
  return { ...data, id: data.id || filename.replace('.json', '') };
}

function readAllProductFiles() {
  if (!fs.existsSync(PRODUCTS_DIR)) return [];
  return fs
    .readdirSync(PRODUCTS_DIR)
    .filter((f) => f.endsWith('.json'))
    .map(readProductFile);
}

/* All products, sorted by category order then by sortOrder within the category. */
export const products = readAllProductFiles().sort((a, b) => {
  const ca = CATEGORY_ORDER.indexOf(a.categoryId);
  const cb = CATEGORY_ORDER.indexOf(b.categoryId);
  if (ca !== cb) {
    if (ca === -1) return 1;
    if (cb === -1) return -1;
    return ca - cb;
  }
  return (a.sortOrder || 0) - (b.sortOrder || 0);
});

/* Lookup helpers */
export function getProductById(id) {
  const filePath = path.join(PRODUCTS_DIR, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;
  return readProductFile(`${id}.json`);
}

export function getProductsByCategoryId(categoryId) {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getCategoryById(categoryId) {
  return CATEGORIES.find((c) => c.id === categoryId) || null;
}

/* Count of products per category, used for filter button labels. */
export function getCategoryCounts() {
  const counts = {};
  products.forEach((p) => { counts[p.categoryId] = (counts[p.categoryId] || 0) + 1; });
  return counts;
}
