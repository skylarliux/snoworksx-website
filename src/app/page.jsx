import Link from 'next/link';
import { Suspense } from 'react';
import { CATEGORIES, getCategoryCounts } from '../lib/products';
import { AwardIcon, ShieldCheckIcon, FactoryIcon, LeafIcon, RecycleIcon, WrenchIcon, HandshakeIcon } from '../components/Icons';
import CatIcon from '../components/CatIcon';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import FAQAccordion from '../components/FAQAccordion';
import SafeImg from '../components/SafeImg';

const counts = getCategoryCounts();

const TESTIMONIALS = [
  { quote: 'SNOWORKSX took our brand from a concept sketch to 200 finished boards in under eight weeks. The build quality matched the samples exactly — our customers never knew it was our first production run.', name: 'Marcus Lindqvist', position: 'Founder, Nordic Snow Co. (Sweden)' },
  { quote: 'We have run our full annual program through SNOWORKSX for three seasons. Defect rates below half a percent, on-time every time, and the NDA protection gives us complete peace of mind on our designs.', name: 'Jennifer Hayes', position: 'VP Product, North American Ski Brand' },
  { quote: 'Their R&D team understood our flax and bio-resin sustainability goals immediately and engineered a ski that hit our weight target on the first sample round. A true manufacturing partner.', name: 'Thomas Berger', position: 'Head of Development, Alpine Brand (Austria)' },
  { quote: 'The Olympic pedigree is real. The precision and consistency we get on our boot tooling is the best we have worked with anywhere in Asia or Europe.', name: 'Hiroshi Tanaka', position: 'Sourcing Director, Japanese Retailer' },
  { quote: 'From poles to bindings to a full snowboard line, SNOWORKSX is the one factory we can trust across every category. Their communication and quality control are simply on another level.', name: 'Elena Rossi', position: 'Brand Owner, Italian Winter Sports Label' },
];

export const metadata = {
  title: 'SNOWORKSX | OEM Winter Sports Manufacturer',
  description: 'Purpose-built OEM manufacturer of snowboards, skis, boots, bindings and poles in Weihai, China. $75M facility. 600+ employees. 400,000+ units/year. 13 elite global brands. ISO 9001 · AEO certified.',
};

const PARTNERS = ['K2','Völkl','Ride','Line','Madshus','Tubbs','Atlas'];

const WHY_US = [
  { icon: <AwardIcon />,        title:'Olympic-Proven',          body:'Official equipment supplier for Beijing 2022 national teams. Supported 86 athletes at Sochi 2014 — 7 Gold, 8 Silver, 6 Bronze. Our products perform where it counts most.' },
  { icon: <ShieldCheckIcon />,  title:'ISO-Certified Quality',   body:'ISO 9001:2015 with 30–40 inspection checkpoints per unit. Three-Gate QC: self-check → in-process → final team. AEO customs certified for faster, smoother export.' },
  { icon: <FactoryIcon />,      title:'Factory-Scale Capacity',  body:'$75M USD facility. 100,000 m² site. 2,500 units/day at peak. 600+ skilled employees. 400,000+ units exported in 2024 across all product categories.' },
];

const MFG_CALLOUTS = [
  { num:'100+', label:'Assembly machines on the production floor', sub:'Dedicated ski and snowboard presses, CNC processors, laser cutters' },
  { num:'±0.1mm', label:'CNC precision cutting tolerance', sub:'3 new CNC wood processors + smart laser cutter for exact-spec cores' },
  { num:'120K+', label:'Units of R&D-optimised wood core shipped', sub:'USD 12M value — optimised weight and elasticity through in-house R&D' },
  { num:'2,500', label:'Units produced per day at peak capacity', sub:'Across snowboards, skis, boots, bindings and poles' },
];

const SUS_PILLARS = [
  { icon: <LeafIcon />,       title:'Cleaner Production',
    body:'Cleaner energy, leaner processes, and lower carbon per unit — with the measurement data to back it up for your sustainability reports.' },
  { icon: <RecycleIcon />,    title:'Materials With Purpose',
    body:'Bio-based resins, natural flax, recycled Titanal, and recycled textile linings — all with full material provenance documentation available for your ESG reporting.' },
  { icon: <WrenchIcon />,     title:'Built to Last Longer',
    body:'Durable, repairable products have a lower lifetime carbon footprint — a measurable metric for your brand\'s product lifecycle claims.' },
  { icon: <HandshakeIcon />,  title:'Your ESG Commitments, Supported',
    body:'If your retail partners or large brand customers request supply chain sustainability data, we provide the certificates, material documentation, and energy data to respond promptly and accurately.' },
];

const FACTORY_PHOTOS = [
  { src:'/images/factory/factory-1.webp', label:'Production Floor',    note:'68,000 m² dedicated manufacturing space' },
  { src:'/images/factory/factory-2.webp', label:'CNC Core Processing', note:'±0.1 mm precision on all wood cores' },
  { src:'/images/factory/factory-3.webp', label:'Assembly Lines',      note:'100+ specialist machines' },
  { src:'/images/factory/factory-4.webp', label:'Quality Control',     note:'30–40 checkpoints per unit' },
  { src:'/images/factory/factory-5.webp', label:'Equipment Detail',    note:'Smart laser cutting' },
  { src:'/images/factory/factory-6.webp', label:'Shipping & Export',   note:'400,000+ units per year' },
];

/* Points for the "Why source from here" section */
const SOURCING_POINTS = [
  { stat:'60–70%',
    label:'of global winter sports equipment is manufactured in China',
    body:'The supply chain, materials expertise, and production infrastructure for this category are concentrated here. No other geography can match the depth at scale.' },
  { stat:'7 categories',
    label:'one factory, one contract, one quality standard',
    body:'Snowboards, skis, boots, bindings and poles from a single certified facility. One NDA, one QC system, one point of contact.' },
  { stat:'AEO certified',
    label:'advanced customs clearance — reducing your shipping risk',
    body:'Our Authorized Economic Operator status means expedited clearance, fewer inspections, and predictable export timelines. Most alternative OEM destinations cannot offer this.' },
  { stat:'13 brands',
    label:'have stayed through COVID, supply chain shocks, and trade volatility',
    body:'Client retention across a decade of market disruption is the most honest measure of OEM reliability. Every one of those 13 brands made a deliberate choice to continue.' },
];

const FAQ_ITEMS = [
  { q:'What is your minimum order quantity?',
    a:'MOQ varies by product: 20 units for splitboards, 30 for skis, 50 for boots and bindings, and 100 pairs for poles. Many successful brand partnerships began with a first order of 100–200 units across a small size run.' },
  { q:'How long does production take from order to shipment?',
    a:'Lead times range from 40 days (poles) to 60 days (ski boots) from purchase order confirmation. Custom shapes or new mould tooling add 2–4 weeks for sample approval. For seasonal planning, place orders by February–April to receive product by July–August.' },
  { q:'Do you sign non-disclosure agreements?',
    a:'Yes. We sign an NDA before any proprietary design files, board shapes, or brand assets are shared. Protecting your intellectual property is a condition of doing business with us, not an optional extra.' },
  { q:'Can we visit the factory?',
    a:'Yes. We welcome factory visits from brand partners and serious prospective clients. Contact us in advance to arrange a visit to our Weihai, Shandong facility — we will handle the logistics.' },
  { q:'Can you manufacture under our own brand name?',
    a:'This is exactly what we do. Every product leaves the factory with your branding, your graphics, and your packaging. We are the factory; you are the brand. No reference to SNOWORKSX appears on the finished product.' },
  { q:'Do you offer pre-production samples before a full order?',
    a:'Yes. Sample development is a standard part of our process. We produce pre-production samples for your approval before any full production run begins. Most products require 1–2 sample rounds.' },
  { q:'Can you help develop new products from a brief or sketch?',
    a:'Yes. Our R&D team can work from your brief, a reference product, a sketch, or finished CAD files. We have taken products from concept to commercial production many times.' },
  { q:'What payment terms do you offer?',
    a:'Standard terms are 30% deposit on purchase order placement, 70% balance before shipment. Terms can be adjusted for established long-term partnerships.' },
  /* International buyer questions */
  { q:'How do you protect our designs in a Chinese manufacturing environment?',
    a:'Every partnership begins with a signed NDA before any specification or design file is shared. Design files are stored under internal access controls accessible only to the production team on your order. Our governance frameworks are built to the standards of a long-established, internationally audited operation. AEO certification also requires auditable compliance processes across our entire export operation.' },
  { q:'What ESG and sustainability documentation can you provide for our reports?',
    a:'We provide: ISO 14001 environmental management certification, specific material certifications (bio-resin content, recycled Titanal provenance, recycled textile percentages), production waste and energy data on request, and factory audit reports. If your retail partners or large brand customers ask for supply chain sustainability data — whether through their own reporting frameworks, retailer codes, or voluntary standards like VSME — we are experienced in providing the documentation packages these requests typically require.' },
  { q:'We are a new brand launching our first collection. Is SNOWORKSX the right fit?',
    a:'Yes. Our lowest MOQ starts at 20 units. Many of our current brand partners began with a first order of 100–200 units on two or three sizes. We treat first-season brands with the same production rigour as our largest clients — the first order is how we demonstrate what a long-term partnership looks like. We can also assist with product development from brief to sample.' },
  { q:'Which markets do you export to and how is shipping handled?',
    a:'We export to North America, all major European markets, Japan, South Korea, Australia, and the Middle East. AEO certification means all shipments receive advanced customs clearance — fewer inspections, faster port processing, and predictable transit times. Ocean freight to Europe typically takes 25–30 days; to North America, 18–22 days. We provide a full shipping documentation pack with every order.' },
];

const STATS = [
  { num:'400K+', label:'Units Exported / Year' },
  { num:'$75M',  label:'USD Investment' },
  { num:'13',    label:'Global Brand Partners' },
  { num:'2×',    label:'Olympic Supplier' },
];

const PROCESS_STEPS = [
  { num:'01', title:'Enquiry & Spec Review', body:'Send your requirements. We respond within 1 business day with a preliminary quotation.' },
  { num:'02', title:'Sample Development',    body:'Our R&D team produces pre-production samples to your specification for brand approval.' },
  { num:'03', title:'Production & QC',       body:'30–40 checkpoint Three-Gate inspection on every unit. ISO 9001:2015 throughout.' },
  { num:'04', title:'Export & Delivery',     body:'AEO-certified customs clearance. Branded packaging. On-time delivery to your warehouse.' },
];

const CERTS = [
  { code:'ISO 9001:2015', name:'Quality Management' },
  { code:'ISO 14001',     name:'Environmental' },
  { code:'ISO 45001',     name:'Health & Safety' },
  { code:'AEO',           name:'Customs Advanced' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO — background image with text on top ── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: '#F4F4F4',           /* light fallback if photo missing */
        backgroundImage: 'url(/images/hero-banner.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex', flexDirection: 'column',
        minHeight: 'clamp(580px,90vh,900px)',
        borderBottom: '1px solid #E5E5E5',
      }}>
        {/* No dark overlay — photo is light/white so text is dark */}

        {/* ① Main content — dark text directly on light photo */}
        <div className="container" style={{
          position: 'relative', zIndex: 2,
          paddingTop: 'clamp(72px,10vw,112px)', paddingBottom: 'clamp(40px,5vw,64px)',
          flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <span className="section-tag-muted">OEM Manufacturer · Weihai, China · Est. 2012</span>
          <h1 style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: 'clamp(52px,8vw,96px)', fontWeight: 900,
            textTransform: 'uppercase', letterSpacing: '-.01em', lineHeight: .95,
            color: '#0A0A0A', marginBottom: 6,
          }}>
            Where <span style={{ color:'#CC1414' }}>elite<br />boards</span> are born.
          </h1>
          <div className="red-rule" />
          <p style={{
            fontFamily: "'Barlow',sans-serif", fontSize: 'clamp(15px,1.8vw,17px)',
            fontWeight: 300, color: '#4A4A4A',
            lineHeight: 1.75, maxWidth: 520, marginBottom: 32,
          }}>
            Trusted by 13 of the world&apos;s leading winter sports brands. $75M production facility.
            400,000+ units exported annually across snowboards, skis, boots, bindings and poles.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }} className="hero-cta">
            <Link href="/contact" className="btn-red">Request a Manufacturing Quote →</Link>
            <Link href="/products" className="btn-outline">View Product Lines</Link>
          </div>
        </div>

        {/* ② Stats bar — solid black box at bottom, white text inside */}
        <div style={{
          position: 'relative', zIndex: 2,
          background: '#0A0A0A',
          borderTop: '3px solid #CC1414',
        }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }} className="stats-bar-grid">
              {STATS.map(({ num, label }, i) => (
                <div key={num} style={{
                  padding: '20px 0',
                  paddingLeft: i > 0 ? 24 : 0,
                  paddingRight: i < 3 ? 24 : 0,
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                }}>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(24px,3vw,44px)', fontWeight:900, lineHeight:1, color:'#FFFFFF', marginBottom:4 }}>{num}</div>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:480px){.hero-cta{flex-direction:column!important;align-items:flex-start!important}}
        `}</style>
      </section>

      {/* ── 03 WHY SNOWORKSX ── */}
      <section style={{ padding:'clamp(48px,7vw,88px) 0' }}>
        <div className="container">
          <div style={{ marginBottom:52 }}>
            <span className="section-tag">Why SNOWORKSX</span>
            <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(32px,4.5vw,56px)', fontWeight:800, textTransform:'uppercase', letterSpacing:'-.01em', maxWidth:560 }}>
              Elite Manufacturing at Industrial Scale
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:48 }} className="why-us-grid">
            {WHY_US.map(({ icon, title, body }) => (
              <div key={title}>
                <div style={{ width:48, height:48, color:'#CC1414', marginBottom:18 }}>{icon}</div>
                <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:22, fontWeight:800, textTransform:'uppercase', letterSpacing:'.02em', marginBottom:12 }}>{title}</h3>
                <p style={{ fontSize:15, lineHeight:1.75, color:'#4A4A4A' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
        {/* why-us-grid: 3→1 col handled in globals.css */}
      </section>

      {/* ── 05 MANUFACTURING STRENGTH ── */}
      <section style={{ background:'#F7F7F7', borderTop:'1px solid #E5E5E5', borderBottom:'1px solid #E5E5E5', padding:'clamp(48px,7vw,88px) 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start' }} className="mfg-outer-grid">
            <div>
              <span className="section-tag">Manufacturing Strength</span>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(32px,4vw,52px)', fontWeight:800, textTransform:'uppercase', letterSpacing:'-.01em', marginBottom:20 }}>
                The Equipment &amp;<br />Technology Behind<br />Every Board
              </h2>
              <p style={{ fontSize:15, lineHeight:1.75, color:'#4A4A4A', marginBottom:28 }}>
                Over 100 dedicated assembly machines, CNC-precision wood core processing, and a smart laser cutter on the production floor. Our in-house R&amp;D has optimised wood core weight and elasticity — proven across 120,000+ units valued at over USD 12 million.
              </p>
              <Link href="/process" className="btn-outline">Full Manufacturing Process →</Link>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }} className="mfg-inner-grid">
              {MFG_CALLOUTS.map(({ num, label, sub }) => (
                <div key={num} style={{ background:'#FFFFFF', border:'1px solid #E5E5E5', padding:'24px 20px' }}>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(24px,2.5vw,36px)', fontWeight:900, lineHeight:1, marginBottom:8 }}>{num}</div>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:13, fontWeight:700, textTransform:'uppercase', letterSpacing:'.04em', marginBottom:6 }}>{label}</div>
                  <div style={{ fontSize:12, color:'#888', lineHeight:1.5 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* mfg-outer-grid 2→1, mfg-inner-grid 2→1 on mobile: see globals.css */}
      </section>

      {/* ── FACTORY PHOTOS ── */}
      <section style={{ padding:'0 0 72px', background:'#F7F7F7' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2, background:'#E5E5E5' }} className="factory-grid">
            {FACTORY_PHOTOS.map(({ src, label, note }) => (
              <div key={label} style={{ position:'relative', aspectRatio:'4/3', overflow:'hidden', background:'#1A1A1A' }}>
                <div style={{ position:'absolute', inset:0, background:'repeating-linear-gradient(45deg,#1A1A1A 0,#1A1A1A 1px,#222 1px,#222 12px)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', textAlign:'center', padding:'0 12px' }}>{label}</span>
                </div>
                <SafeImg src={src} alt={label} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(transparent,rgba(0,0,0,0.6))', padding:'20px 14px 10px' }}>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'#FFFFFF' }}>{label}</div>
                  <div style={{ fontSize:11, color:'rgba(255,255,255,0.5)', marginTop:2 }}>{note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.factory-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:480px){.factory-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── 06 PRODUCT LINES ── */}
      <section style={{ padding:'clamp(48px,7vw,88px) 0' }}>
        <div className="container">
          <div style={{ marginBottom:48 }}>
            <span className="section-tag">Product Lines</span>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:24, flexWrap:'wrap' }}>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(32px,4.5vw,52px)', fontWeight:800, textTransform:'uppercase', letterSpacing:'-.01em' }}>
                Six Product Lines.<br />One Factory.
              </h2>
              <Link href="/products" className="btn-outline">View All Products</Link>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:2, background:'#E5E5E5' }} className="home-product-grid">
            {CATEGORIES.map((c) => (
              <Link href={`/products?cat=${c.id}`} key={c.id} style={{ textDecoration:'none', color:'inherit', display:'block' }}>
                <div style={{ background:'#FFFFFF', padding:'24px 20px', borderBottom:'3px solid transparent', transition:'border-color .15s', height:'100%' }} className="product-card">
                  <div style={{ marginBottom:12 }}><CatIcon src={c.iconSrc} emoji={c.icon} size={32} /></div>
                  <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#CC1414', display:'block', marginBottom:8 }}>{counts[c.id] || 0} Products</span>
                  <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:18, fontWeight:800, textTransform:'uppercase', marginBottom:8, letterSpacing:'.01em' }}>{c.label}</h3>
                  <p style={{ fontSize:13, color:'#6B6B6B', lineHeight:1.55, marginBottom:16 }}>{c.blurb}</p>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'#CC1414' }}>View {c.label} →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* home-product-grid: 4→2→1 on mobile: see globals.css */}
      </section>

      {/* ── 07 OLYMPIC HERITAGE ── */}
      <section style={{ background:'#0A0A0A', color:'#FFFFFF', padding:'clamp(48px,7vw,80px) 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }} className="olympic-grid">
            <div>
              <span className="section-tag-white">Olympic Heritage</span>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(32px,4vw,52px)', fontWeight:800, textTransform:'uppercase', lineHeight:1.05, marginBottom:20 }}>
                Proven on the<br />Olympic Stage
              </h2>
              <p style={{ fontSize:15, lineHeight:1.75, color:'rgba(255,255,255,0.65)', marginBottom:32 }}>
                Official equipment supplier for Beijing 2022 national teams. At Sochi 2014, equipment produced in our facility supported 86 athletes across disciplines — delivering one of the most decorated Olympic performances ever recorded.
              </p>
              <Link href="/about" className="btn-outline-white">Our Story →</Link>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              {[
                { ev:'Sochi 2014',    d:'86 Athletes Supported' },
                { ev:'7 Gold',        d:'Sochi 2014 Medal Count' },
                { ev:'Beijing 2022',  d:'Official Supplier' },
                { ev:'8S + 6B',       d:'Sochi 2014 Additional Medals' },
              ].map(({ ev, d }) => (
                <div key={ev} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', padding:'22px 18px' }}>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:22, fontWeight:800, marginBottom:6 }}>{ev}</div>
                  <div style={{ fontSize:13, color:'rgba(255,255,255,0.45)' }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* olympic-grid: 2→1 col on mobile: see globals.css */}
      </section>

      {/* ── 08 CLIENT TESTIMONIALS ── */}
      <section style={{ padding:'88px 0', background:'#F7F7F7', borderTop:'1px solid #E5E5E5', borderBottom:'1px solid #E5E5E5' }}>
        <div className="container">
          <div style={{ marginBottom:52, display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:20 }}>
            <div>
              <span className="section-tag">Client Testimonials</span>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:800, textTransform:'uppercase', letterSpacing:'-.01em', lineHeight:1.05 }}>
                Trusted by Brands<br />Around the World
              </h2>
            </div>
            <Link href="/contact" className="btn-outline" style={{ flexShrink:0 }}>Become a Partner →</Link>
          </div>
          <Suspense fallback={<div style={{ height:300, display:'flex', alignItems:'center', justifyContent:'center', color:'#888' }}>Loading…</div>}>
            <TestimonialsCarousel testimonials={TESTIMONIALS} />
          </Suspense>
        </div>
      </section>

      {/* ── PARTNER BAR (below testimonials) ── */}
      <section style={{ background:'#F7F7F7', borderBottom:'1px solid #E5E5E5', padding:'20px 0' }}>
        <div className="container">
          <div style={{ display:'flex', alignItems:'center', gap:28, flexWrap:'wrap' }}>
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'#BBB', flexShrink:0 }}>
              Manufacturing partner to
            </span>
            {PARTNERS.map((b, i) => (
              <span key={b} className={`brand-name${i < 2 ? ' active' : ''}`}>{b}</span>
            ))}
            <span className="brand-name">+ 6 more</span>
          </div>
        </div>
      </section>

      {/* ── SOURCING INTELLIGENCE ── */}
      <section style={{ padding:'clamp(48px,7vw,80px) 0', background:'#0A0A0A', color:'#FFFFFF' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:72, alignItems:'start' }} className="sourcing-grid">
            <div>
              <span className="section-tag-white">Sourcing Intelligence</span>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(28px,4vw,44px)', fontWeight:800, textTransform:'uppercase', letterSpacing:'-.01em', lineHeight:1.05, marginBottom:16 }}>
                The Case for Manufacturing Here
              </h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.55)', lineHeight:1.75 }}>
                Brands increasingly ask why China, and why here specifically. These are the direct answers.
              </p>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, background:'rgba(255,255,255,0.08)' }} className="sourcing-inner">
              {SOURCING_POINTS.map(({ stat, label, body }) => (
                <div key={stat} style={{ background:'#111', padding:'24px 20px' }}>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(26px,3vw,38px)', fontWeight:900, color:'#CC1414', lineHeight:1, marginBottom:6 }}>{stat}</div>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:13, fontWeight:700, textTransform:'uppercase', letterSpacing:'.04em', color:'#FFFFFF', marginBottom:10 }}>{label}</div>
                  <p style={{ fontSize:13.5, color:'rgba(255,255,255,0.5)', lineHeight:1.65, margin:0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:900px){.sourcing-grid{grid-template-columns:1fr!important}}
          @media(max-width:600px){.sourcing-inner{grid-template-columns:1fr!important}}
        `}</style>
      </section>

      {/* ── 09 SUSTAINABILITY ── */}
      <section style={{ padding:'clamp(48px,7vw,80px) 0', background:'#FFFFFF' }}>
        <div className="container">
          <div style={{ marginBottom:44 }}>
            <span className="section-tag">Sustainability & ESG</span>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:24, flexWrap:'wrap' }}>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:800, textTransform:'uppercase', letterSpacing:'-.01em' }}>
                We Help You Meet<br />Your ESG Commitments.
              </h2>
              <Link href="/about#sustainability" style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#16a34a', textDecoration:'none', flexShrink:0 }}>
                Full Sustainability Detail →
              </Link>
            </div>
            <p style={{ fontSize:15, color:'#555', lineHeight:1.75, maxWidth:640, marginTop:16 }}>
              ISO 14001 certified. Bio-based resins, recycled alloys, and sustainable textile linings across all product lines — with full material provenance documentation available to share with your retail partners or large brand customers when they request supply chain sustainability data.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:2, background:'#E5E5E5' }} className="sus-brief-grid">
            {SUS_PILLARS.map(({ icon, title, body }) => (
              <div key={title} className="sus-card">
                <div style={{ width:40, height:40, color:'#16a34a', marginBottom:14 }}>{icon}</div>
                <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:16, fontWeight:800, textTransform:'uppercase', letterSpacing:'.04em', marginBottom:10, color:'#0A0A0A' }}>{title}</h3>
                <p style={{ fontSize:13, color:'#555', lineHeight:1.65 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
        {/* sus-brief-grid: 4→2→1 on mobile: see globals.css */}
      </section>

      {/* ── QC DARK STRIP ── */}
      <section style={{ background:'#0A0A0A', padding:'32px 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1px 1fr 1px 1fr', gap:0 }} className="qc-strip-grid">
            {[
              { num:'30–40', label:'QC Checkpoints per Unit · ISO 9001:2015' },
              null,
              { num:'Three-Gate', label:'Self-check · In-process · Final QC team' },
              null,
              { num:'AEO',    label:'Customs Advanced Certified · Faster Export Clearance' },
            ].map((item, i) =>
              item === null
                ? <div key={i} className="qc-divider" style={{ background:'rgba(255,255,255,0.1)' }}/>
                : <div key={item.num} style={{ padding:'0 24px' }}>
                    <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(20px,2.5vw,28px)', fontWeight:900, color:'#FFFFFF', lineHeight:1, marginBottom:4 }}>{item.num}</div>
                    <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', lineHeight:1.4 }}>{item.label}</div>
                  </div>
            )}
          </div>
        </div>
        {/* qc-strip-grid: collapses + dividers hidden on mobile: see globals.css */}
      </section>

      {/* ── 10 CERTIFICATIONS BAR ── */}
      <section style={{ background:'#F7F7F7', borderBottom:'1px solid #E5E5E5', padding:'24px 0' }}>
        <div className="container">
          <div style={{ display:'flex', alignItems:'center', gap:28, flexWrap:'wrap' }}>
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'#BBB', flexShrink:0 }}>Certified &amp; Accredited:</span>
            {CERTS.map(({ code, name }) => (
              <div key={code} className="cert-badge" title={name}>
                <span className="cert-dot"/>{code}
              </div>
            ))}
            <span style={{ fontSize:13, color:'#888', marginLeft:'auto' }}>Shandong Provincial Sports Industry Model Unit 2023</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding:'clamp(48px,7vw,80px) 0', background:'#FFFFFF' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:72, alignItems:'start' }} className="faq-grid">
            <div>
              <span className="section-tag">FAQ</span>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(28px,4vw,44px)', fontWeight:800, textTransform:'uppercase', letterSpacing:'-.01em', lineHeight:1.05, marginBottom:16 }}>
                Common Questions
              </h2>
              <p style={{ fontSize:15, color:'#6B6B6B', lineHeight:1.75, marginBottom:28 }}>
                MOQ, lead times, IP protection, ESG documentation, new brand starts, export logistics — answered directly.
              </p>
              <Link href="/contact" className="btn-primary">Ask Something Else →</Link>
            </div>
            <Suspense fallback={null}>
              <FAQAccordion items={FAQ_ITEMS} />
            </Suspense>
          </div>
        </div>
        <style>{`@media(max-width:768px){.faq-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── QUOTE CTA ── */}
      <section style={{ background:'#0A0A0A', padding:'80px 0', color:'#FFFFFF', textAlign:'center' }}>
        <div className="container">
          <span className="section-tag-white">Start Your OEM Partnership</span>
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(32px,5vw,60px)', fontWeight:900, textTransform:'uppercase', letterSpacing:'-.01em', marginBottom:20, lineHeight:1.05 }}>
            Ready to Build<br />Your Brand?
          </h2>
          <p style={{ fontSize:17, color:'rgba(255,255,255,0.6)', maxWidth:500, margin:'0 auto 36px', lineHeight:1.65 }}>
            Seven product lines. One certified factory. Trusted by 13 global brands and proven on Olympic podiums.
          </p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/contact" className="btn-red">Request a Quote →</Link>
            <Link href="/products" className="btn-outline-white">Browse Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
