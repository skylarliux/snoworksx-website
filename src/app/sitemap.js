import { products } from '../lib/products';
import { getAllPosts } from '../lib/blog';

const BASE_URL = 'https://www.snoworksx.com';

export default function sitemap() {
  const now = new Date();

  /* Static pages */
  const staticPages = [
    { url: `${BASE_URL}/`,           priority: 1.0, changeFrequency: 'weekly'  },
    { url: `${BASE_URL}/products`,   priority: 0.9, changeFrequency: 'weekly'  },
    { url: `${BASE_URL}/process`,    priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/technology`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/about`,      priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/blog`,       priority: 0.7, changeFrequency: 'weekly'  },
    { url: `${BASE_URL}/contact`,    priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/privacy`,    priority: 0.3, changeFrequency: 'yearly'  },
    { url: `${BASE_URL}/terms`,      priority: 0.3, changeFrequency: 'yearly'  },
  ].map((p) => ({ ...p, lastModified: now }));

  /* Individual product pages */
  const productPages = products.map((p) => ({
    url: `${BASE_URL}/products/${p.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  /* Blog posts */
  const posts = getAllPosts();
  const blogPages = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
