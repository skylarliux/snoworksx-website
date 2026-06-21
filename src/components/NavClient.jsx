'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CatIcon from './CatIcon';

const CATEGORIES = [
  { id: 'snowboards',      label: 'Snowboards',      icon: '🏂', iconSrc: '/images/icons/snowboards.svg' },
  { id: 'skis',            label: 'Skis',            icon: '⛷️', iconSrc: '/images/icons/skis.svg' },
  { id: 'ski-boots',       label: 'Ski Boots',       icon: '🥾', iconSrc: '/images/icons/ski-boots.svg' },
  { id: 'snowboard-boots', label: 'Snowboard Boots', icon: '👟', iconSrc: '/images/icons/snowboard-boots.svg' },
  { id: 'bindings',        label: 'Bindings',        icon: '🔩', iconSrc: '/images/icons/bindings.svg' },
  { id: 'poles',           label: 'Poles',           icon: '🎿', iconSrc: '/images/icons/poles.svg' },
];

const NAV_LINKS = [
  { href: '/products',   label: 'Products', hasDropdown: true },
  { href: '/process',    label: 'Process'    },
  { href: '/technology', label: 'Technology' },
  { href: '/about',      label: 'About'      },
  { href: '/blog',       label: 'Blog'       },
];

export default function NavClient() {
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeTimer = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setDropdownOpen(false); }, [pathname]);

  /* Delay close so mouse can travel from nav link → dropdown without it vanishing */
  const openDropdown  = () => { clearTimeout(closeTimer.current); setDropdownOpen(true); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setDropdownOpen(false), 180); };

  const isActive = (href) => pathname === href || pathname.startsWith(href + '/');

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: '#FFFFFF', borderBottom: '1.5px solid #0A0A0A',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.07)' : 'none', transition: 'box-shadow .2s',
    }}>
      <div className="container" style={{ display:'flex', alignItems:'center', height:56, justifyContent:'space-between' }}>
        <Link href="/" style={{ textDecoration:'none', display:'flex', alignItems:'center' }}>
          <NavLogo />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display:'flex', alignItems:'center', gap:28 }} className="desk-nav">
          {NAV_LINKS.map(({ href, label, hasDropdown }) => (
            hasDropdown ? (
              /* Outer wrapper captures hover for both the link AND the dropdown */
              <div key={href} style={{ position:'relative' }} onMouseEnter={openDropdown} onMouseLeave={scheduleClose}>
                <Link href={href} style={navLinkStyle(isActive(href))}>
                  {label}
                  <span style={{ marginLeft:5, fontSize:9, display:'inline-block', transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition:'transform .15s' }}>▼</span>
                </Link>

                {dropdownOpen && (
                  /* paddingTop creates a transparent bridge so mouse can travel into the menu */
                  <div style={{ position:'absolute', top:'100%', left:'50%', transform:'translateX(-50%)', paddingTop:6, zIndex:200 }}
                    onMouseEnter={openDropdown} onMouseLeave={scheduleClose}>
                    <div style={{ background:'#FFFFFF', border:'1.5px solid #0A0A0A', boxShadow:'0 8px 28px rgba(0,0,0,0.12)', minWidth:240, padding:'8px 0' }}>
                      <Link href="/products" style={dropdownItemStyle} className="nav-dd-item">
                        <span style={{ width:22 }}>▤</span>
                        <span style={{ fontWeight:700 }}>All Products</span>
                      </Link>
                      <div style={{ height:1, background:'#E5E5E5', margin:'6px 0' }} />
                      {CATEGORIES.map((c) => (
                        <Link key={c.id} href={`/products?cat=${c.id}`} style={dropdownItemStyle} className="nav-dd-item">
                          <span style={{ width:22, display:'flex', alignItems:'center' }}>
                            <CatIcon src={c.iconSrc} emoji={c.icon} size={18} />
                          </span>{c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={href} href={href} style={navLinkStyle(isActive(href))}>{label}</Link>
            )
          ))}
          <Link href="/contact" className="btn-red" style={{ marginLeft:4 }}>Request a Quote</Link>
        </nav>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="mob-btn"
          style={{ display:'none', background:'none', border:'none', cursor:'pointer', padding:8, flexDirection:'column', gap:5 }}>
          {[0,1,2].map((i) => (
            <span key={i} style={{
              display:'block', width:22, height:2, background:'#0A0A0A', transition:'transform .2s,opacity .2s',
              transform: open && i===0 ? 'rotate(45deg) translate(5px,5px)' : open && i===2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              opacity: open && i===1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop:'1px solid #E5E5E5', background:'#FFFFFF', padding:'12px 24px 20px', maxHeight:'calc(100vh - 56px)', overflowY:'auto' }}>
          {NAV_LINKS.map(({ href, label, hasDropdown }) => (
            hasDropdown ? (
              <div key={href}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid #F0F0F0' }}>
                  <Link href={href} style={{ ...mobileLinkStyle(isActive(href)), borderBottom:'none', flex:1 }}>{label}</Link>
                  <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)} aria-label="Toggle categories"
                    style={{ background:'none', border:'none', cursor:'pointer', padding:'12px 4px', fontSize:12, color:'#888' }}>
                    {mobileProductsOpen ? '▲' : '▼'}
                  </button>
                </div>
                {mobileProductsOpen && (
                  <div style={{ paddingLeft:12, background:'#FAFAFA' }}>
                    <Link href="/products" style={mobileSubLinkStyle}>▤ All Products</Link>
                    {CATEGORIES.map((c) => (
                      <Link key={c.id} href={`/products?cat=${c.id}`} style={mobileSubLinkStyle}>
                        <span style={{ display:'inline-flex', alignItems:'center', gap:8 }}>
                          <CatIcon src={c.iconSrc} emoji={c.icon} size={16} />
                          {c.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={href} href={href} style={mobileLinkStyle(isActive(href))}>{label}</Link>
            )
          ))}
          <Link href="/contact" className="btn-red" style={{ display:'block', textAlign:'center', marginTop:16 }}>Request a Quote</Link>
        </div>
      )}

      <style>{`
        @media(max-width:768px){.desk-nav{display:none!important}.mob-btn{display:flex!important}}
        .nav-dd-item:hover{background:#F7F7F7!important;color:#CC1414!important}
      `}</style>
    </header>
  );
}

/* Logo: shows /images/logo.png when it exists, falls back to text wordmark */
function NavLogo() {
  const [err, setErr] = useState(false);
  return err ? (
    <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:20, letterSpacing:'.06em', textTransform:'uppercase', color:'#0A0A0A' }}>SNOWORKSX</span>
  ) : (
    <img src="/images/logo.png" alt="SNOWORKSX" height={32} style={{ display:'block', width:'auto', maxWidth:180 }} onError={() => setErr(true)} />
  );
}

function navLinkStyle(active) {
  return {
    fontFamily:"'Barlow Condensed',sans-serif", fontSize:13, fontWeight:700,
    letterSpacing:'.1em', textTransform:'uppercase',
    color: active ? '#CC1414' : '#0A0A0A', textDecoration:'none',
    paddingBottom:2, borderBottom: active ? '2px solid #CC1414' : '2px solid transparent',
    transition:'color .15s,border-color .15s', display:'inline-flex', alignItems:'center', cursor:'pointer',
  };
}
const dropdownItemStyle = {
  display:'flex', alignItems:'center', gap:12, padding:'10px 18px',
  fontFamily:"'Barlow Condensed',sans-serif", fontSize:14, fontWeight:600,
  letterSpacing:'.04em', textTransform:'uppercase', color:'#0A0A0A',
  textDecoration:'none', transition:'background .12s,color .12s',
};
function mobileLinkStyle(active) {
  return {
    display:'block', fontFamily:"'Barlow Condensed',sans-serif", fontSize:18, fontWeight:700,
    letterSpacing:'.08em', textTransform:'uppercase', color: active ? '#CC1414' : '#0A0A0A',
    padding:'12px 0', borderBottom:'1px solid #F0F0F0', textDecoration:'none',
  };
}
const mobileSubLinkStyle = {
  display:'block', fontFamily:"'Barlow Condensed',sans-serif", fontSize:15, fontWeight:600,
  letterSpacing:'.04em', textTransform:'uppercase', color:'#4A4A4A',
  padding:'10px 0', borderBottom:'1px solid #F0F0F0', textDecoration:'none',
};
