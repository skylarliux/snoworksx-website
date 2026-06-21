import Link from 'next/link';

export const metadata = { title: '404 — Page Not Found | SNOWORKSX' };

const HELPFUL_LINKS = [
  { icon: '🏠', label: 'Homepage',     href: '/',           desc: 'Start from the beginning'          },
  { icon: '🏂', label: 'Products',     href: '/products',   desc: 'Browse all 45 product lines'       },
  { icon: '🏭', label: 'Our Process',  href: '/process',    desc: '7-step manufacturing process'      },
  { icon: '⚙️', label: 'Technology',   href: '/technology', desc: 'Cores, profiles & constructions'   },
  { icon: '🏅', label: 'About Us',     href: '/about',      desc: 'Factory, certifications & history' },
  { icon: '✉️', label: 'Get a Quote',  href: '/contact',    desc: 'Start your OEM partnership'        },
];

export default function NotFound() {
  return (
    <div style={{ minHeight:'100vh', background:'#0A0A0A', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'80px 24px' }}>
      {/* 404 number */}
      <div style={{ position:'relative', marginBottom:8, textAlign:'center' }}>
        <span style={{
          fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(120px,20vw,220px)',
          fontWeight:900, lineHeight:1, letterSpacing:'-.04em',
          color:'transparent', WebkitTextStroke:'2px rgba(255,255,255,0.08)',
          userSelect:'none', display:'block',
        }}>404</span>
        <span style={{
          position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
          fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(28px,4vw,48px)',
          fontWeight:900, textTransform:'uppercase', letterSpacing:'.04em', color:'#FFFFFF', whiteSpace:'nowrap',
        }}>Page Not Found</span>
      </div>

      {/* Red rule */}
      <div style={{ width:44, height:3, background:'#CC1414', margin:'0 auto 28px' }}/>

      <p style={{ fontSize:16, color:'rgba(255,255,255,0.5)', textAlign:'center', maxWidth:440, lineHeight:1.7, marginBottom:56 }}>
        The page you&apos;re looking for has moved or doesn&apos;t exist. Here are some useful places to go instead:
      </p>

      {/* Navigation cards */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2, background:'rgba(255,255,255,0.05)', maxWidth:760, width:'100%' }} className="not-found-grid">
        {HELPFUL_LINKS.map(({ icon, label, href, desc }) => (
          <Link key={href} href={href} style={{ textDecoration:'none', color:'inherit', display:'block' }}>
            <div style={{ padding:'24px 20px', background:'#111111', transition:'background .15s', height:'100%' }} className="nf-card">
              <span style={{ fontSize:26, display:'block', marginBottom:12 }}>{icon}</span>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:16, fontWeight:800, textTransform:'uppercase', letterSpacing:'.04em', color:'#FFFFFF', marginBottom:6 }}>{label}</div>
              <div style={{ fontSize:12.5, color:'rgba(255,255,255,0.4)', lineHeight:1.5 }}>{desc}</div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .nf-card:hover{background:#1A1A1A!important}
        .nf-card:hover div:first-of-type{color:#CC1414!important}
        @media(max-width:600px){.not-found-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:380px){.not-found-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  );
}
