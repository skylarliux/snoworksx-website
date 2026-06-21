import { Suspense } from 'react';
import { products, CATEGORIES, getCategoryCounts } from '../../lib/products';
import ProductsClient from '../../components/ProductsClient';

export const metadata = {
  title: 'OEM Product Range | SNOWORKSX',
  description: 'Browse representative products across snowboards, skis, ski boots, snowboard boots, bindings and poles. Every product is produced to your brand specification — full custom OEM.',
};

export default function ProductsPage() {
  const counts = getCategoryCounts();
  return (
    <>
      <section style={{ background: '#0A0A0A', padding: '72px 0 56px', color: '#FFFFFF' }}>
        <div className="container">
          <span className="section-tag-white">Product Range</span>
          <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(40px,6vw,72px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-.01em', lineHeight: 1.0, marginBottom: 20 }}>
            Representative<br />Product Range
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', maxWidth: 620, lineHeight: 1.65 }}>
            A selection of products we manufacture across seven categories. Filter by category below. Every item shown is a representative example — <strong style={{ color: '#FFFFFF' }}>we build to your exact specification</strong>, and this is only part of what we produce.
          </p>
        </div>
      </section>

      <Suspense fallback={<div style={{ padding: '60px 0', textAlign: 'center', color: '#888' }}>Loading products…</div>}>
        <ProductsClient products={products} categories={CATEGORIES} counts={counts} />
      </Suspense>

      {/* OEM callout */}
      <section style={{ background:'#F7F7F7', borderTop:'1px solid #E5E5E5', padding:'clamp(40px,6vw,64px) 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:2, background:'#E5E5E5', marginBottom:40 }} className="products-cta-grid">
            {/* Custom OEM */}
            <div style={{ background:'#0A0A0A', padding:'28px 24px', color:'#FFFFFF' }}>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'#CC1414', marginBottom:12 }}>Full Custom OEM</div>
              <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:20, fontWeight:800, textTransform:'uppercase', marginBottom:12, lineHeight:1.1 }}>Your Spec, Your Brand</h3>
              <p style={{ fontSize:13.5, color:'rgba(255,255,255,0.6)', lineHeight:1.65, marginBottom:20 }}>
                These are representative examples. We build to your shapes, flex, graphics and branding — no SNOWORKSX reference on the finished product.
              </p>
              <a href="/contact" className="btn-outline-white" style={{ fontSize:12 }}>Discuss Your Project →</a>
            </div>
            {/* Women's */}
            <div style={{ background:'#FFFFFF', padding:'28px 24px' }}>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'#CC1414', marginBottom:12 }}>Women's Range</div>
              <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:20, fontWeight:800, textTransform:'uppercase', marginBottom:12, lineHeight:1.1 }}>Women's-Specific Engineering Available</h3>
              <p style={{ fontSize:13.5, color:'#555', lineHeight:1.65, marginBottom:20 }}>
                Women's-specific flex patterns, stance geometry, boot last shapes, and sizing are available across all seven product categories. Women's is the fastest-growing segment in winter sports globally.
              </p>
              <a href="/contact" style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'#CC1414', textDecoration:'none' }}>Enquire about women's →</a>
            </div>
            {/* New brand */}
            <div style={{ background:'#FFFFFF', padding:'28px 24px', borderLeft:'1px solid #E5E5E5' }}>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'#CC1414', marginBottom:12 }}>New Brand?</div>
              <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:20, fontWeight:800, textTransform:'uppercase', marginBottom:12, lineHeight:1.1 }}>MOQ Starts at 20 Units</h3>
              <p style={{ fontSize:13.5, color:'#555', lineHeight:1.65, marginBottom:20 }}>
                Many of our current partners began with 100–200 unit first orders. We treat new brand launches with the same production rigour as our largest programs.
              </p>
              <a href="/contact" style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'#CC1414', textDecoration:'none' }}>Start here →</a>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.products-cta-grid{grid-template-columns:1fr!important}}`}</style>
      </section>
    </>
  );
}
