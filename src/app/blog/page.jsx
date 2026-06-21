import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';

export const metadata = {
  title: 'OEM Winter Sports Industry Blog | SNOWORKSX',
  description: 'Practical guides on private-label manufacturing, OEM snowboard and ski production, quality control, and launching your own winter sports brand.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <section style={{ background:'#0A0A0A', padding:'72px 0 56px', color:'#FFFFFF' }}>
        <div className="container">
          <span className="section-tag-white">Industry Insights</span>
          <h1 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(40px,6vw,72px)', fontWeight:900, textTransform:'uppercase', letterSpacing:'-.01em', lineHeight:1.0, marginBottom:20 }}>
            OEM Knowledge Hub
          </h1>
          <p style={{ fontSize:17, color:'rgba(255,255,255,0.6)', maxWidth:520, lineHeight:1.65 }}>
            Practical guides on private-label snowboard and ski manufacturing, brand creation, quality control, and getting the most from your OEM partnership.
          </p>
        </div>
      </section>

      <section style={{ padding:'clamp(40px,6vw,64px) 0' }}>
        <div className="container">
          {posts.length === 0 ? (
            <div style={{ textAlign:'center', padding:'64px 0' }}>
              <p style={{ fontSize:18, color:'#888', marginBottom:24 }}>Blog posts coming soon.</p>
              <Link href="/contact" className="btn-primary">Request a Quote →</Link>
            </div>
          ) : (
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }} className="blog-grid">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration:'none', color:'inherit', display:'block' }}>
                  <article style={{ border:'1px solid #E5E5E5', height:'100%', transition:'border-color .15s', display:'flex', flexDirection:'column' }} className="blog-card">
                    {/* Image / placeholder */}
                    <div style={{
                      aspectRatio:'16/9', overflow:'hidden', flexShrink:0,
                      background: post.heroImage
                        ? `#F4F4F4 url(${post.heroImage}) center/cover no-repeat`
                        : 'repeating-linear-gradient(45deg,#EBEBEB 0,#EBEBEB 1px,#F4F4F4 1px,#F4F4F4 14px)',
                      display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:8,
                    }}>
                      {!post.heroImage && <>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8C8C8" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#C8C8C8' }}>/images/blog/{post.slug}.webp</span>
                      </>}
                    </div>
                    {/* Card body */}
                    <div style={{ padding:'22px 20px', display:'flex', flexDirection:'column', flex:1 }}>
                      <div style={{ display:'flex', gap:12, alignItems:'center', marginBottom:12 }}>
                        <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#CC1414' }}>{post.category}</span>
                        <span style={{ color:'#CCC' }}>·</span>
                        <span style={{ fontSize:12, color:'#888' }}>{post.readTime}</span>
                      </div>
                      <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:20, fontWeight:800, textTransform:'uppercase', letterSpacing:'.01em', marginBottom:10, lineHeight:1.15 }}>{post.title}</h2>
                      <p style={{ fontSize:14, lineHeight:1.7, color:'#6B6B6B', marginBottom:20, flex:1 }}>{post.excerpt}</p>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <span style={{ fontSize:12, color:'#888' }}>{post.date}</span>
                        <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'#CC1414' }}>Read →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* blog-grid: 3→1 col handled in globals.css */}
      </section>

      <section style={{ background:'#F7F7F7', borderTop:'1px solid #E5E5E5', padding:'48px 0', textAlign:'center' }}>
        <div className="container">
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:28, fontWeight:800, textTransform:'uppercase', marginBottom:12 }}>Ready to Start Manufacturing?</h2>
          <p style={{ fontSize:15, color:'#6B6B6B', marginBottom:24 }}>Skip the reading and talk to us directly.</p>
          <Link href="/contact" className="btn-primary">Request a Quote →</Link>
        </div>
      </section>
    </>
  );
}
