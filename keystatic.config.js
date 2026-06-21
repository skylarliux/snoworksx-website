import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
     kind: 'github',
     repo: 'skylarliux/snoworksx-website',
   },
  ui: { brand: { name: 'SNOWORKSX Content Manager' } },

  collections: {

    /* ─── Blog Posts ─── */
    posts: collection({
      label: 'Blog Posts',
      slugField: 'slug',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({
          label: 'Post Title',
          description: 'The full display title shown on the blog listing and in the browser tab.',
          validation: { isRequired: true },
        }),
        slug: fields.slug({
          name: { label: 'URL Slug', description: 'Auto-generated. Used in the page URL.' },
        }),
        date: fields.date({ label: 'Publication Date', validation: { isRequired: true } }),
        excerpt: fields.text({
          label: 'Excerpt',
          description: 'Short summary shown on the blog listing page.',
          multiline: true,
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Manufacturing Guide', value: 'Manufacturing Guide' },
            { label: 'Brand Building',       value: 'Brand Building'       },
            { label: 'Industry',             value: 'Industry'             },
            { label: 'Technology',           value: 'Technology'           },
            { label: 'Sustainability',       value: 'Sustainability'       },
            { label: 'Quality Control',      value: 'Quality Control'      },
          ],
          defaultValue: 'Industry',
        }),
        readTime: fields.text({ label: 'Read Time', description: 'e.g. "5 min read"', defaultValue: '5 min read' }),
        heroImage: fields.text({
          label: 'Hero Image Path',
          description: 'Path to the cover image, e.g. /images/blog/my-post-slug.webp — should match the post slug.',
          defaultValue: '',
        }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          description: 'Article body. Supports Markdown: ## headings, **bold**, - bullet lists.',
        }),
      },
    }),

    /* ─── Individual Products ─── */
    products: collection({
      label: 'Products',
      slugField: 'id',
      path: 'src/content/products/*',
      format: { data: 'json' },
      schema: {

        /* Identity */
        id: fields.slug({
          name: { label: 'Product ID (URL slug — do not change after setup)' },
        }),
        name: fields.text({ label: 'Product Name', validation: { isRequired: true } }),
        tagline: fields.text({ label: 'Tagline', description: 'One-line description shown in product cards.' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Snowboards',      value: 'Snowboards'      },
            { label: 'Skis',            value: 'Skis'            },
            { label: 'Ski Boots',       value: 'Ski Boots'       },
            { label: 'Snowboard Boots', value: 'Snowboard Boots' },
            { label: 'Bindings',        value: 'Bindings'        },
            { label: 'Poles',           value: 'Poles'           },
          ],
          defaultValue: 'Snowboards',
        }),
        categoryId: fields.select({
          label: 'Category ID (URL filter key)',
          options: [
            { label: 'snowboards',      value: 'snowboards'      },
            { label: 'skis',            value: 'skis'            },
            { label: 'ski-boots',       value: 'ski-boots'       },
            { label: 'snowboard-boots', value: 'snowboard-boots' },
            { label: 'bindings',        value: 'bindings'        },
            { label: 'poles',           value: 'poles'           },
          ],
          defaultValue: 'snowboards',
        }),
        sortOrder: fields.integer({
          label: 'Sort Order (within category, e.g. 1, 2, 3…)',
          defaultValue: 99,
        }),
        description: fields.text({
          label: 'Full Description',
          multiline: true,
          validation: { isRequired: true },
        }),
        image: fields.text({
          label: 'Product Image Path',
          description: 'e.g. /images/products/snowboard-freeride-pro.jpg',
          defaultValue: '/images/placeholder.jpg',
        }),

        /* Performance fields */
        flex: fields.integer({
          label: 'Flex Rating (1–10, leave blank for skis/hardware)',
        }),
        abilityLevel: fields.text({
          label: 'Ability Level',
          description: 'e.g. Beginner to Intermediate, Advanced to Expert',
        }),

        /* Tags */
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags (shown on product card)', itemLabel: (p) => p.value || 'Tag' }
        ),

        /* Technical specifications */
        specs: fields.array(
          fields.object({
            label: fields.text({ label: 'Spec Label', description: 'e.g. Board Shape, Flex Rating, Core' }),
            value: fields.text({ label: 'Spec Value', multiline: true }),
          }),
          {
            label: 'Technical Specifications',
            description: 'Displayed in the spec table on the product detail page.',
            itemLabel: (p) => p.fields.label.value || 'Spec',
          }
        ),

        /* Key highlights */
        highlights: fields.array(
          fields.text({ label: 'Highlight' }),
          {
            label: 'Key Highlights',
            description: 'Bullet points shown with red checkmarks on the product page.',
            itemLabel: (p) => p.value || 'Highlight',
          }
        ),
      },
    }),
  },
});
