'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import CatIcon from './CatIcon';

export default function ProductsClient({ products, categories, counts }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [active, setActive] = useState('all');

  useEffect(() => {
    const cat = searchParams.get('cat');
    setActive(cat && categories.some((c) => c.id === cat) ? cat : 'all');
  }, [searchParams, categories]);

  const selectCategory = (id) => {
    setActive(id);
    const url = id === 'all' ? '/products' : `/products?cat=${id}`;
    router.push(url, { scroll: false });
  };

  const visible = active === 'all' ? products : products.filter((p) => p.categoryId === active);
  const total = products.length;
  const activeCat = categories.find((c) => c.id === active);

  return (
    <>
      <div style={{ position: 'sticky', top: 56, zIndex: 20, background: '#FFFFFF', borderBottom: '1px solid #E5E5E5', padding: '16px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <FilterButton label="All Products" count={total} active={active === 'all'} onClick={() => selectCategory('all')} />
            {categories.map((c) => (
              <FilterButton key={c.id} label={c.label} icon={c.icon} iconSrc={c.iconSrc} count={counts[c.id] || 0} active={active === c.id} onClick={() => selectCategory(c.id)} />
            ))}
          </div>
        </div>
      </div>

      {activeCat && (
        <div style={{ background: '#F7F7F7', borderBottom: '1px solid #E5E5E5', padding: '20px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <CatIcon src={activeCat.iconSrc} emoji={activeCat.icon} size={28} />
              <div>
                <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 24, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.02em', lineHeight: 1 }}>{activeCat.label}</h2>
                <p style={{ fontSize: 14, color: '#6B6B6B', marginTop: 4 }}>{activeCat.blurb}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section style={{ padding: '40px 0 72px' }}>
        <div className="container">
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#888', marginBottom: 20 }}>
            Showing {visible.length} {visible.length === 1 ? 'product' : 'products'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, background: '#E5E5E5' }} className="products-grid">
            {visible.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <article style={{ background: '#FFFFFF', borderBottom: '3px solid transparent', transition: 'border-color .15s', height: '100%', display: 'flex', flexDirection: 'column' }} className="product-card">
                  <div style={{ background: '#F7F7F7', aspectRatio: '4/3', position: 'relative', overflow: 'hidden' }}>
                    {/* Emoji fallback — shown when no image or image fails to load */}
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: 44 }}>{iconFor(categories, p.categoryId)}</span>
                    </div>
                    {/* Real product image — overlays the emoji when it loads */}
                    {p.image && <ProductImg src={p.image} alt={p.name} />}
                    <span style={{ position: 'absolute', top: 10, left: 10, fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#FFFFFF', background: '#CC1414', padding: '3px 7px', zIndex: 2 }}>{p.category}</span>
                  </div>
                  <div style={{ padding: '16px 16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 17, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.01em', marginBottom: 6, lineHeight: 1.1 }}>{p.name}</h3>
                    <p style={{ fontSize: 12.5, color: '#6B6B6B', lineHeight: 1.5, marginBottom: 12, flex: 1 }}>{p.tagline}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 12 }}>
                      {(p.tags || []).slice(0, 3).map((t) => (
                        <span key={t} style={{ fontSize: 10, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase', color: '#888', background: '#F2F2F2', padding: '2px 7px' }}>{t}</span>
                      ))}
                    </div>
                    <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#CC1414' }}>View Specs →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:900px){.products-grid{grid-template-columns:repeat(2,1fr)!important}}
          @media(max-width:480px){.products-grid{grid-template-columns:1fr!important}}
        `}</style>
      </section>
    </>
  );
}

function FilterButton({ label, icon, iconSrc, count, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 7,
      fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700,
      letterSpacing: '.06em', textTransform: 'uppercase', padding: '8px 14px', cursor: 'pointer',
      border: active ? '2px solid #CC1414' : '2px solid #E5E5E5',
      background: active ? '#CC1414' : '#FFFFFF', color: active ? '#FFFFFF' : '#0A0A0A', transition: 'all .15s',
    }}>
      <CatIcon src={iconSrc} emoji={icon} size={16} white={active} />
      {label}
      <span style={{ fontSize: 11, opacity: 0.7 }}>({count})</span>
    </button>
  );
}

function iconFor(categories, categoryId) {
  const c = categories.find((x) => x.id === categoryId);
  return c ? c.icon : '📦';
}

/* Client-side image with onError fallback.
   When the file doesn't exist, returns null so the emoji shows through. */
function ProductImg({ src, alt }) {
  const [err, setErr] = useState(false);
  if (err) return null;
  return (
    <img
      src={src}
      alt={alt || ''}
      onError={() => setErr(true)}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover', display: 'block',
        zIndex: 1,
      }}
    />
  );
}
