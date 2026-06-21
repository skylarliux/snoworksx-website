import './globals.css';
import NavClient from '../components/NavClient';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';
import { EmailIcon, GlobeIcon, PinIcon } from '../components/Icons';

export const metadata = {
  title: { default: 'SNOWORKSX | OEM Winter Sports Manufacturer — Weihai, China', template: '%s | SNOWORKSX' },
  description: 'SNOWORKSX — purpose-built OEM manufacturer of snowboards, skis, ski boots, snowboard boots, bindings and poles. $75M facility. 600+ employees. 400,000+ units exported annually. ISO 9001 · AEO certified. Weihai, China.',
};

const FOOTER_NAV = {
  Products: [
    { label: 'Snowboards',      href: '/products?cat=snowboards'      },
    { label: 'Skis',            href: '/products?cat=skis'            },
    { label: 'Ski Boots',       href: '/products?cat=ski-boots'       },
    { label: 'Snowboard Boots', href: '/products?cat=snowboard-boots' },
    { label: 'Bindings',        href: '/products?cat=bindings'        },
    { label: 'Poles',           href: '/products?cat=poles'           },
  ],
  Company: [
    { label: 'About Us',    href: '/about'       },
    { label: 'Manufacturing', href: '/process'   },
    { label: 'Technology',  href: '/technology'  },
    { label: 'Blog',        href: '/blog'        },
  ],
  Contact: [
    { label: 'Request a Quote', href: '/contact'              },
    { label: 'snoworksx.com',   href: 'https://snoworksx.com', external: true },
    { label: 'Privacy Policy',  href: '/privacy'              },
    { label: 'Terms & Conditions', href: '/terms'             },
  ],
};

/* Monochrome flat social icons — all use currentColor so they inherit parent text colour */
const SOCIAL = [
  {
    name: 'Facebook', href: '#',
    svg: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram', href: '#',
    svg: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn', href: '#',
    svg: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'X', href: '#',
    svg: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="4" x2="20" y2="20"/>
        <line x1="20" y1="4" x2="4" y2="20"/>
      </svg>
    ),
  },
  {
    name: 'YouTube', href: '#',
    svg: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="3"/>
        <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

export default function RootLayout({ children }) {
  /* Organization structured data — helps AI assistants (ChatGPT, Claude,
     Perplexity) and search engines extract accurate facts about SNOWORKSX
     when answering questions like "best OEM snowboard manufacturer China". */
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SNOWORKSX',
    url: 'https://snoworksx.com',
    logo: 'https://snoworksx.com/images/logo.png',
    description: 'Purpose-built OEM manufacturer of snowboards, skis, ski boots, snowboard boots, bindings and poles. $75M facility in Weihai, China. 600+ employees. 400,000+ units exported annually. ISO 9001:2015, ISO 14001, ISO 45001, and AEO certified.',
    foundingDate: '2012',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Weihai',
      addressRegion: 'Shandong',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@snoworksx.com',
      contactType: 'Sales',
    },
    numberOfEmployees: { '@type': 'QuantitativeValue', value: '600+' },
    sameAs: [],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <NavClient />
        <main style={{ paddingTop: 56 }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: '#0A0A0A', color: '#FFFFFF' }}>
      {/* CTA strip */}
      <div style={{ background: '#CC1414', padding: '40px 24px', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>
            Start Your OEM Partnership
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, textTransform: 'uppercase', color: '#FFFFFF', marginBottom: 24, letterSpacing: '-.01em' }}>
            Partner With the Factory Behind 13 Elite Brands
          </h2>
          <Link href="/contact" className="btn-outline-white">Request a Manufacturing Quote →</Link>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ padding: '56px 0 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="footer-grid">
            {/* Brand */}
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 900, letterSpacing: '.06em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: 16 }}>
                SNOWORKSX
              </div>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.7, marginBottom: 20, maxWidth: 280 }}>
                Purpose-built OEM winter sports manufacturer. Original production partner for 13 elite global brands. Weihai, Shandong, China.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {[
                  { icon: <EmailIcon size={14} />, text: 'info@snoworksx.com' },
                  { icon: <GlobeIcon size={14} />, text: 'snoworksx.com'       },
                  { icon: <PinIcon   size={14} />, text: 'Weihai, Shandong, China' },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#888' }}>
                    <span style={{ color: '#555', flexShrink: 0 }}>{icon}</span>
                    {text}
                  </div>
                ))}
              </div>
              {/* Social icons — monochrome flat */}
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                {SOCIAL.map(({ name, href, svg }) => (
                  <a key={name} href={href} aria-label={name} title={name}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, border: '1px solid rgba(255,255,255,0.15)', color: '#666', textDecoration: 'none', transition: 'border-color .15s,color .15s' }}
                    className="social-icon"
                  >
                    {svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_NAV).map(([heading, links]) => (
              <div key={heading}>
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: 16 }}>
                  {heading}
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {links.map(({ label, href, external }) => (
                    <li key={href}>
                      <Link href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="footer-link">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #222', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ fontSize: 13, color: '#555', margin: 0 }}>© {year} SNOWORKSX. All rights reserved.</p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
              {['ISO 9001:2015', 'ISO 14001', 'ISO 45001', 'AEO Certified'].map((c) => (
                <span key={c} style={{ fontSize: 11, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#444' }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:500px){.footer-grid{grid-template-columns:1fr!important}}
        .social-icon:hover{border-color:rgba(255,255,255,0.5)!important;color:#FFFFFF!important}
      `}</style>
    </footer>
  );
}
