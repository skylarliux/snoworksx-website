import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug, markdownToHtml } from '../../../lib/blog';

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found | SNOWORKSX' };
  return { title: `${post.title} | SNOWORKSX Blog`, description: post.excerpt };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const html = markdownToHtml(post.body);

  /* BlogPosting structured data — helps AI assistants and search engines
     surface this article directly when answering related questions. */
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'SNOWORKSX' },
    publisher: {
      '@type': 'Organization',
      name: 'SNOWORKSX',
      logo: { '@type': 'ImageObject', url: 'https://www.snoworksx.com/images/logo.png' },
    },
    ...(post.heroImage ? { image: `https://www.snoworksx.com${post.heroImage}` } : {}),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.snoworksx.com/blog/${slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section style={{ background:'#0A0A0A', padding:'72px 0 56px', color:'#FFFFFF' }}>
        <div className="container" style={{ maxWidth:800 }}>
          <nav style={{ fontSize:13, color:'rgba(255,255,255,0.4)', display:'flex', gap:8, marginBottom:24, alignItems:'center' }}>
            <Link href="/" style={{ color:'rgba(255,255,255,0.4)', textDecoration:'none' }}>Home</Link>
            <span>/</span><Link href="/blog" style={{ color:'rgba(255,255,255,0.4)', textDecoration:'none' }}>Blog</Link>
            <span>/</span><span style={{ color:'rgba(255,255,255,0.65)' }}>{post.title}</span>
          </nav>
          <div style={{ display:'flex', gap:12, alignItems:'center', marginBottom:18 }}>
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'#CC1414' }}>{post.category}</span>
            <span style={{ color:'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ fontSize:12, color:'rgba(255,255,255,0.4)' }}>{post.readTime}</span>
            <span style={{ color:'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ fontSize:12, color:'rgba(255,255,255,0.4)' }}>{post.date}</span>
          </div>
          <h1 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(32px,5vw,60px)', fontWeight:900, textTransform:'uppercase', letterSpacing:'-.01em', lineHeight:1.05, marginBottom:20 }}>{post.title}</h1>
          <p style={{ fontSize:18, color:'rgba(255,255,255,0.6)', lineHeight:1.65 }}>{post.excerpt}</p>
        </div>
      </section>

      {/* Hero image — shows photo if file exists, crosshatch placeholder if not */}
      <div style={{
        width:'100%', maxWidth:800, margin:'0 auto',
        aspectRatio:'16/9',
        background: post.heroImage
          ? `#F4F4F4 url(${post.heroImage}) center/cover no-repeat`
          : 'repeating-linear-gradient(45deg,#EBEBEB 0,#EBEBEB 1px,#F4F4F4 1px,#F4F4F4 14px)',
        display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:10,
        borderBottom:'1px solid #E5E5E5',
      }}>
        {!post.heroImage && <>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8C8C8" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#C0C0C0', textAlign:'center', padding:'0 16px' }}>
            Add blog image: /images/blog/{slug}.webp · Recommended 1200×675 px
          </span>
        </>}
      </div>

      <section style={{ padding:'clamp(40px,6vw,64px) 0' }}>
        <div className="container" style={{ maxWidth:800 }}>
          <div className="article-body" dangerouslySetInnerHTML={{ __html: html }}/>
          <div style={{ marginTop:48, paddingTop:32, borderTop:'1px solid #E5E5E5', display:'flex', gap:12, flexWrap:'wrap', alignItems:'center' }}>
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#888' }}>Filed Under:</span>
            <span className="highlight-tag">{post.category}</span>
            <span className="highlight-tag">OEM Manufacturing</span>
            <span className="highlight-tag">Winter Sports Industry</span>
          </div>
        </div>
      </section>

      <section style={{ background:'#CC1414', padding:'56px 0', color:'#FFFFFF', textAlign:'center' }}>
        <div className="container">
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:36, fontWeight:800, textTransform:'uppercase', marginBottom:12 }}>Ready to Work With Us?</h2>
          <p style={{ fontSize:16, color:'rgba(255,255,255,0.8)', marginBottom:28 }}>Turn your brand vision into real products. Request a quote today.</p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/contact" className="btn-outline-white" style={{ background:'#FFFFFF', color:'#CC1414', borderColor:'#FFFFFF' }}>Request a Quote →</Link>
            <Link href="/blog" className="btn-outline-white">← More Articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
