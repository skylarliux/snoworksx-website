import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProductById, getCategoryById, getProductsByCategoryId } from '../../../lib/products';
import SafeImg from '../../../components/SafeImg';

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = getProductById(id);
  if (!p) return { title: 'Product Not Found | SNOWORKSX' };
  return { title: `${p.name} — ${p.category} | SNOWORKSX OEM`, description: p.description.slice(0, 160) };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const category = getCategoryById(product.categoryId);
  const related = getProductsByCategoryId(product.categoryId).filter((p) => p.id !== id).slice(0, 4);

  /* Product structured data — helps AI assistants and search engines surface
     this exact product when answering OEM sourcing questions. */
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: product.category,
    brand: { '@type': 'Brand', name: 'SNOWORKSX' },
    manufacturer: {
      '@type': 'Organization',
      name: 'SNOWORKSX',
      url: 'https://snoworksx.com',
    },
    ...(product.image ? { image: `https://snoworksx.com${product.image}` } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* ── BANNER ── */}
      <section style={{ background: '#0A0A0A', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-overlay" style={{ opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', padding: '40px 24px 0' }}>
          <nav style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/products" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Products</Link>
            <span>/</span>
            <Link href={`/products?cat=${product.categoryId}`} style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>{product.category}</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>{product.name}</span>
          </nav>
        </div>
        <div className="container" style={{ position: 'relative', padding: '32px 24px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="banner-grid">
            <div>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: '#CC1414', display: 'block', marginBottom: 12 }}>{product.category}</span>
              <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(36px,5vw,60px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-.01em', lineHeight: 1.0, marginBottom: 14 }}>{product.name}</h1>
              <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, color: 'rgba(255,255,255,0.7)', marginBottom: 18 }}>{product.tagline}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {(product.tags || []).map((t) => (
                  <span key={t} style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.25)', padding: '5px 11px' }}>{t}</span>
                ))}
              </div>
            </div>
            {/* Product image panel */}
            <div style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
              {/* Emoji fallback — visible until/unless image loads */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                <span style={{ fontSize: 80 }}>{category ? category.icon : '📦'}</span>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                  {product.image ? 'Loading photo…' : 'Product Photo Coming Soon'}
                </span>
              </div>
              {/* Real image — covers fallback once loaded */}
              {product.image && (
                <SafeImg
                  src={product.image}
                  alt={product.name}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              )}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.banner-grid{grid-template-columns:1fr!important;gap:28px!important}}`}</style>
      </section>

      {/* ── OEM INTRO STRIP ── */}
      <section style={{ background: '#CC1414', color: '#FFFFFF', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
            <span style={{ fontSize: 22 }}>ℹ️</span>
            <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, maxWidth: 880 }}>
              This is a <strong>representative example</strong> of our {product.category.toLowerCase()} production. The specifications shown reflect what we can build — <strong>we manufacture to your exact requirements</strong> under your own brand. What you see across this site is only part of what we produce.
            </p>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION + SPECS ── */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 72, alignItems: 'start' }} className="detail-grid">
            {/* Left: description + highlights */}
            <div>
              <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 26, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.02em', marginBottom: 16 }}>Overview</h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4A4A4A', marginBottom: 32 }}>{product.description}</p>

              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.02em', marginBottom: 18 }}>Key Highlights</h3>
              <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'flex', flexDirection: 'column', gap: 13 }}>
                {(product.highlights || []).map((h) => (
                  <li key={h} style={{ display: 'flex', gap: 13, alignItems: 'flex-start', fontSize: 14.5, lineHeight: 1.55 }}>
                    <span style={{ display: 'inline-flex', width: 20, height: 20, background: '#CC1414', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div style={{ background: '#F7F7F7', border: '1px solid #E5E5E5', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 800, textTransform: 'uppercase', marginBottom: 10 }}>Want This Built for Your Brand?</h3>
                <p style={{ fontSize: 14, color: '#6B6B6B', lineHeight: 1.6, marginBottom: 18 }}>
                  We can produce this product — or any custom variation — to your exact specification, with your graphics and branding.
                </p>
                <Link href="/contact" className="btn-primary">Request a Quote →</Link>
              </div>
            </div>

            {/* Right: full specs */}
            <div>
              <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 26, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.02em', marginBottom: 20 }}>Technical Specifications</h2>
              <div style={{ border: '1px solid #E5E5E5' }}>
                {(product.specs || []).map(({ label, value }, i) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: 20, padding: '13px 18px', borderBottom: i < product.specs.length - 1 ? '1px solid #E5E5E5' : 'none', background: i % 2 === 0 ? '#FFFFFF' : '#FAFAFA' }}>
                    <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#888', minWidth: 120, flexShrink: 0 }}>{label}</span>
                    <span style={{ fontSize: 13.5, color: '#0A0A0A', textAlign: 'right', lineHeight: 1.5 }}>{value}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12.5, color: '#888', marginTop: 14, lineHeight: 1.6, fontStyle: 'italic' }}>
                Specifications are representative. Dimensions, flex, construction, graphics, and sizing are all customisable to your brand&rsquo;s requirements.
              </p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.detail-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      {related.length > 0 && (
        <section style={{ background: '#F7F7F7', borderTop: '1px solid #E5E5E5', padding: '64px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
              <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 28, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.02em' }}>More {product.category}</h2>
              <Link href={`/products?cat=${product.categoryId}`} className="btn-outline">View All {product.category} →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, background: '#E5E5E5' }} className="related-grid">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div style={{ background: '#FFFFFF', borderBottom: '3px solid transparent', transition: 'border-color .15s', height: '100%' }} className="product-card">
                    <div style={{ background: '#F7F7F7', aspectRatio: '4/3', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: 40 }}>{category ? category.icon : '📦'}</span>
                      {p.image && (
                        <SafeImg
                          src={p.image}
                          alt={p.name}
                          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      )}
                    </div>
                    <div style={{ padding: '16px' }}>
                      <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 800, textTransform: 'uppercase', marginBottom: 6, lineHeight: 1.1 }}>{p.name}</h3>
                      <p style={{ fontSize: 12.5, color: '#6B6B6B', lineHeight: 1.5 }}>{p.tagline}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.related-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){.related-grid{grid-template-columns:1fr!important}}`}</style>
        </section>
      )}
    </>
  );
}
