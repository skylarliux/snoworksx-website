const BASE_URL = 'https://www.snoworksx.com';

export default function robots() {
  return {
    rules: [
      {
        /* Standard search engines + general crawlers */
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/keystatic/'],
      },
      {
        /* AI assistants / answer engines — explicitly allowed so SNOWORKSX
           can be found and cited when buyers ask AI tools about OEM winter
           sports manufacturing. This is the GEO (Generative Engine
           Optimization) equivalent of classic SEO robots.txt rules. */
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
