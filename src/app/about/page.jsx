import Link from 'next/link';
import { LeafIcon, RecycleIcon, WrenchIcon, HandshakeIcon } from '../../components/Icons';
import SafeImg from '../../components/SafeImg';

export const metadata = {
  title: 'About SNOWORKSX | Purpose-Built Winter Sports OEM Factory',
  description: 'SNOWORKSX — purpose-built OEM winter sports manufacturer in Weihai, China. 100,000 m² facility, 600+ employees, ISO 9001:2015, AEO certified. Olympic equipment supplier. 400,000+ units exported annually.',
};

const FACTORY_STATS = [
  { num:'100,000', unit:'m²', label:'Total Site Area' },
  { num:'68,000',  unit:'m²', label:'Production Floor' },
  { num:'600+',    unit:'',   label:'Skilled Employees' },
  { num:'2,500',   unit:'/day', label:'Peak Daily Output' },
  { num:'400K+',   unit:'',   label:'Units Exported 2024' },
  { num:'100+',    unit:'',   label:'Assembly Machines' },
];

const CAPABILITIES = [
  { title:'CNC Core Processing', body:'Three dedicated CNC wood processors deliver ±0.1 mm cutting precision across six wood species. Cores are milled to exact weight and flex specifications, verified before lamination begins.' },
  { title:'Smart Laser Cutting', body:'Our smart laser cutter handles edge profiling and shape cutting for snowboards and skis with consistent accuracy across every run — no operator variance, no batch drift.' },
  { title:'Hot Press Lamination', body:'Dedicated ski and snowboard hot presses with programmable temperature, pressure, and dwell-time profiles ensure consistent lamination across the full production run.' },
  { title:'Boot & Binding Assembly', body:'Dedicated injection-moulding and assembly lines for ski boots and snowboard bindings, with calibrated torque tooling, fit-check jigs, and flex-measurement stations.' },
  { title:'In-House R&D', body:'Our R&D team has optimised wood core construction across 120,000+ units, refining weight, elasticity, and durability parameters through measured testing — not guesswork.' },
  { title:'Quality Control Lab', body:'Three-Gate QC with 30–40 checkpoints per unit, governed by ISO 9001:2015. Dedicated final inspection team with documented defect tracking and root-cause review.' },
];

const TIMELINE = [
  { year:'2012', event:'SNOWORKSX established in Weihai, Shandong, China. The facility was designed and built from the ground up as a dedicated winter sports equipment manufacturer — not a converted factory. Initial capital investment: USD 75 million.' },
  { year:'2014', event:'Production launches. Equipment from our facility supports 86 athletes at the Sochi Winter Olympics — delivering 7 Gold, 8 Silver, and 6 Bronze medals. A statement of intent in year one.' },
  { year:'2016', event:'ISO 9001:2015 Quality Management Certification achieved. Three-Gate QC system implemented across all production lines: self-check, in-process inspection, and dedicated final QC team.' },
  { year:'2018', event:'ISO 14001 Environmental Management and ISO 45001 Occupational Health & Safety certifications achieved. Both renewed in subsequent audits with zero major non-conformances.' },
  { year:'2020', event:'AEO (Authorized Economic Operator) Customs Advanced Certification granted by the General Administration of Customs, China — reducing export clearance times and inspection frequency for all brand partners.' },
  { year:'2022', event:'Official equipment supplier for Beijing Winter Olympics national teams. In-house R&D completes wood core optimisation project — 120,000+ units delivered, USD 12M+ in verified value.' },
  { year:'2023', event:'Shandong Provincial Sports Industry Model Unit award. Order volume +20% year-on-year. Mandatory Cleaner Production Audit completed with commendation.' },
  { year:'2025', event:'Three new CNC wood processors and one smart laser cutter added to the production floor. Ski board export value reaches RMB 210M in the first 11 months. Capacity expansion ongoing.' },
];

const CERTS = [
  { code:'AEO', full:'Authorized Economic Operator', body:'General Administration of Customs, China', desc:'Expedited customs clearance and reduced inspection frequency on all export shipments — faster, more predictable delivery for brand partners.' },
  { code:'ISO 9001:2015', full:'Quality Management System', body:'International Organisation for Standardisation', desc:'30–40 quality checkpoints per unit. Three-Gate QC throughout production. Covers raw material intake through to final shipment.' },
  { code:'ISO 14001', full:'Environmental Management', body:'International Organisation for Standardisation', desc:'Formal commitment to reducing environmental impact across manufacturing operations, waste, and resource consumption.' },
  { code:'ISO 45001', full:'Occupational Health & Safety', body:'International Organisation for Standardisation', desc:'Workplace safety standards across the full 68,000 m² production floor and all 600+ employees.' },
];

const SUS_SECTIONS = [
  {
    icon: <LeafIcon />,
    title: 'Cleaner Production',
    body: 'Every unit we produce has an environmental cost. We are actively reducing it: optimising energy inputs, shortening process cycles, and cutting material waste at source. The goal is fewer emissions per board, per ski, per pair — not just at the end of the line, but at every step of it.',
  },
  {
    icon: <RecycleIcon />,
    title: 'Materials With Purpose',
    body: 'We actively seek out materials that perform the same job with less environmental impact. Bio-based resins (30% bio-content), natural uni-directional flax fibre, recycled Titanal alloy, recycled coffee-mesh textile, and 30%-regrind rubber outsoles are already in production — not on a roadmap.',
  },
  {
    icon: <WrenchIcon />,
    title: 'Built to Last Longer',
    body: 'A product that lasts ten seasons is inherently more sustainable than one that fails in two. We build for longevity: 5-year-warranty core constructions, modular bootboard inserts, replaceable outsoles, and components designed to be repaired rather than replaced. Durability is not a premium option — it is a manufacturing standard.',
  },
  {
    icon: <HandshakeIcon />,
    title: 'Shared Responsibility',
    body: 'Sustainable manufacturing is not something one factory achieves alone. We work with brand partners, material suppliers, and industry organisations to push standards across the supply chain. When your retail partners or large brand customers request supply chain sustainability data, we have the material certificates, ISO documentation, and energy data to help you respond.',
  },
];

const SUS_MATERIALS = [
  'Bio-based resin formulation — 30% bio-content, superior cold-temperature bond strength',
  'Uni-directional natural flax fibre layer — renewable, improves ride composure',
  'Recycled metal alloy laminate (AMAG Recycled Titanal) — same performance, lower footprint',
  'Recycled coffee-mesh textile lining (95% post-consumer) — odour control, zero added chemicals',
  'EcoStep rubber outsole compound — 30% regrind rubber content',
  'Recycled PET textile lace construction — structural performance from recycled content',
  'Eco-friendly Pebax upper cuff (touring ski boots) — lighter, greener, consistent cold flex',
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background:'#0A0A0A', padding:'clamp(40px,6vw,72px) 0 clamp(32px,5vw,56px)', color:'#FFFFFF', position:'relative', overflow:'hidden' }}>
        <div className="grid-overlay" style={{ opacity:0.35 }} />
        <div className="container" style={{ position:'relative' }}>
          <span className="section-tag-white">About SNOWORKSX</span>
          <h1 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(40px,6vw,72px)', fontWeight:900, textTransform:'uppercase', letterSpacing:'-.01em', lineHeight:1.0, marginBottom:20 }}>
            Purpose-Built.<br />Precision-Made.
          </h1>
          <p style={{ fontSize:17, color:'rgba(255,255,255,0.6)', maxWidth:600, lineHeight:1.7 }}>
            A factory designed from the ground up for winter sports equipment — not a converted facility, not a general manufacturer. Every square metre, every machine, every process exists for one purpose: building the best boards, skis, boots, and hardware in the world, at scale.
          </p>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW + STATS ── */}
      <section style={{ padding:'clamp(48px,7vw,80px) 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start' }} className="about-2col">
            <div>
              <span className="section-tag">The Factory</span>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(28px,4vw,44px)', fontWeight:800, textTransform:'uppercase', lineHeight:1.05, marginBottom:24 }}>
                Built for This.<br />Only This.
              </h2>
              <p style={{ fontSize:15, lineHeight:1.8, color:'#4A4A4A', marginBottom:18 }}>
                Established in 2012 in Weihai, Shandong, China, SNOWORKSX was built with a single mandate: manufacture world-class winter sports equipment. The site covers 100,000 m², with 68,000 m² of dedicated production floor housing over 100 specialist assembly machines — all selected, installed, and maintained specifically for ski and snowboard manufacturing.
              </p>
              <p style={{ fontSize:15, lineHeight:1.8, color:'#4A4A4A', marginBottom:18 }}>
                600+ skilled employees run six product lines simultaneously: snowboards, skis, ski boots, snowboard boots, bindings, and poles. Peak capacity reaches 2,500 units per day. In 2024, we exported over 400,000 units across all categories.
              </p>
              <p style={{ fontSize:15, lineHeight:1.8, color:'#4A4A4A' }}>
                What makes SNOWORKSX different is not just scale — it is focus. We do not make furniture, electronics, or sporting goods in general. We make winter sports equipment, and we have invested every dollar, every machine, and every training hour into being the best at it.
              </p>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              {FACTORY_STATS.map(({ num, unit, label }) => (
                <div key={label} style={{ background:'#F7F7F7', border:'1px solid #E5E5E5', padding:'22px 18px' }}>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(20px,2vw,28px)', fontWeight:900, lineHeight:1, marginBottom:6 }}>
                    {num}<span style={{ fontSize:'.55em', color:'#CC1414', marginLeft:2 }}>{unit}</span>
                  </div>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'#888' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.about-2col{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── MANUFACTURING CAPABILITY ── */}
      <section style={{ background:'#F7F7F7', borderTop:'1px solid #E5E5E5', borderBottom:'1px solid #E5E5E5', padding:'clamp(48px,7vw,80px) 0' }}>
        <div className="container">
          <span className="section-tag">Manufacturing Capability</span>
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:800, textTransform:'uppercase', letterSpacing:'-.01em', marginBottom:16 }}>
            The Equipment and<br />Expertise Behind Every Build
          </h2>
          <p style={{ fontSize:15, color:'#555', lineHeight:1.75, maxWidth:620, marginBottom:52 }}>
            Our production floor runs six equipment types across six product lines. Here is what drives quality and consistency on every order.
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2, background:'#E5E5E5' }} className="cap-grid">
            {CAPABILITIES.map(({ title, body }) => (
              <div key={title} style={{ background:'#FFFFFF', padding:'28px 24px' }}>
                <div style={{ width:3, height:28, background:'#CC1414', marginBottom:16 }} />
                <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:18, fontWeight:800, textTransform:'uppercase', letterSpacing:'.02em', marginBottom:12 }}>{title}</h3>
                <p style={{ fontSize:14, color:'#555', lineHeight:1.7 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.cap-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:560px){.cap-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── FACTORY PHOTOS ── */}
      <section style={{ padding:'0 0 clamp(48px,7vw,80px)', background:'#F7F7F7' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2, background:'#E5E5E5' }} className="about-factory-grid">
            {[
              { src:'/images/about/about-1.webp', label:'Laminating Press',    note:'100+ machines' },
              { src:'/images/about/about-2.webp', label:'Finger Jointer', note:'100+ machines' },
              { src:'/images/about/about-3.webp', label:'Waterjet Cutter',      note:'100+ machines' },
              { src:'/images/about/about-4.webp', label:'Laser Cutter',     note:'100+ machines' },
              { src:'/images/about/about-5.webp', label:'Heat Transfer Printer',    note:'100+ machines' },
              { src:'/images/about/about-6.webp', label:'Silk Screen Printer',    note:'100+ machines' },
            ].map(({ src, label, note }) => (
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
        <style>{`@media(max-width:768px){.about-factory-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:480px){.about-factory-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding:'clamp(48px,7vw,80px) 0' }}>
        <div className="container">
          <span className="section-tag">Our History</span>
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(28px,4vw,44px)', fontWeight:800, textTransform:'uppercase', marginBottom:44 }}>
            Built Year by Year
          </h2>
          {TIMELINE.map(({ year, event }, i) => (
            <div key={year} style={{ display:'grid', gridTemplateColumns:'80px 1fr', gap:40, padding:'24px 0', borderBottom: i < TIMELINE.length-1 ? '1px solid #E5E5E5' : 'none', alignItems:'start' }}>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:22, fontWeight:900, color:'#CC1414', lineHeight:1, paddingTop:2 }}>{year}</div>
              <p style={{ fontSize:15, lineHeight:1.7, color:'#4A4A4A', margin:0 }}>{event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OLYMPIC HERITAGE ── */}
      <section style={{ background:'#0A0A0A', color:'#FFFFFF', padding:'clamp(48px,7vw,80px) 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }} className="olym-grid">
            <div>
              <span className="section-tag-white">Olympic Heritage</span>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(30px,4vw,48px)', fontWeight:800, textTransform:'uppercase', lineHeight:1.05, marginBottom:20 }}>
                Tested Where the<br />Stakes Are Highest
              </h2>
              <p style={{ fontSize:15, lineHeight:1.75, color:'rgba(255,255,255,0.65)', marginBottom:28 }}>
                Our products have been used in competition at the highest level of international winter sport. Equipment from our facility supported 86 athletes at the 2014 Sochi Winter Olympics, contributing to one of the most successful performances ever recorded. In 2022, we were appointed official equipment supplier for Beijing Winter Olympics national teams.
              </p>
              <p style={{ fontSize:15, lineHeight:1.75, color:'rgba(255,255,255,0.65)' }}>
                Olympic performance is the ultimate proof-of-concept for manufacturing quality. What works on the podium works on the mountain.
              </p>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              {[
                { ev:'Sochi 2014',   d:'86 Athletes Supported'       },
                { ev:'7 Gold',       d:'Olympic Medals'              },
                { ev:'8S · 6B',      d:'Further Sochi Medals'        },
                { ev:'Beijing 2022', d:'Official Equipment Supplier' },
              ].map(({ ev, d }) => (
                <div key={ev} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', padding:'22px 18px' }}>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:22, fontWeight:800, marginBottom:6 }}>{ev}</div>
                  <div style={{ fontSize:13, color:'rgba(255,255,255,0.45)' }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.olym-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
      </section>

      {/* ── SUSTAINABILITY ── */}
      <section id="sustainability" style={{ padding:'clamp(48px,7vw,80px) 0' }}>
        <div className="container">
          <span className="section-tag">Sustainability</span>
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:800, textTransform:'uppercase', letterSpacing:'-.01em', marginBottom:16 }}>
            Less Waste.<br />Better Materials.<br />Longer Lifetimes.
          </h2>
          <p style={{ fontSize:16, color:'#555', lineHeight:1.75, maxWidth:640, marginBottom:52 }}>
            We are a manufacturing company. We use energy, raw materials, and human labour to make physical products. That means environmental impact is real, and responsibility for it is ours. Here is what we are doing about it.
          </p>

          {/* 4 pillars */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:2, background:'#E5E5E5', marginBottom:56 }} className="sus-grid">
            {SUS_SECTIONS.map(({ icon, title, body }) => (
              <div key={title} style={{ background:'#FFFFFF', padding:'32px 28px' }}>
                <div style={{ width:40, height:40, color:'#16a34a', marginBottom:18 }}>{icon}</div>
                <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:20, fontWeight:800, textTransform:'uppercase', letterSpacing:'.02em', marginBottom:12 }}>{title}</h3>
                <p style={{ fontSize:15, color:'#4A4A4A', lineHeight:1.75 }}>{body}</p>
              </div>
            ))}
          </div>

          {/* In-production materials */}
          <div style={{ background:'#0A0A0A', padding:'40px 36px' }}>
            <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:18, fontWeight:800, textTransform:'uppercase', letterSpacing:'.04em', color:'#FFFFFF', marginBottom:8 }}>
              In Production — Not on a Roadmap
            </h3>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.45)', marginBottom:24 }}>
              Every material below is already in active use across our product lines.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:0 }} className="sus-mat-grid">
              {SUS_MATERIALS.map((m, i) => (
                <div key={m} style={{
                  display:'flex', gap:14, alignItems:'flex-start',
                  padding:'13px 0',
                  borderBottom: i < SUS_MATERIALS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  paddingRight: i % 2 === 0 ? 24 : 0,
                  paddingLeft: i % 2 !== 0 ? 24 : 0,
                }}>
                  <span style={{ color:'#16a34a', fontSize:14, flexShrink:0, marginTop:2 }}>✓</span>
                  <span style={{ fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:1.6 }}>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:768px){.sus-grid{grid-template-columns:1fr!important}}
          @media(max-width:600px){.sus-mat-grid{grid-template-columns:1fr!important;padding-right:0!important;padding-left:0!important}
            .sus-mat-grid>div{border-right:none!important;padding-left:0!important;padding-right:0!important}}
        `}</style>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section style={{ background:'#F7F7F7', borderTop:'1px solid #E5E5E5', borderBottom:'1px solid #E5E5E5', padding:'clamp(48px,7vw,80px) 0' }}>
        <div className="container">
          <span className="section-tag">Certifications</span>
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(28px,4vw,44px)', fontWeight:800, textTransform:'uppercase', marginBottom:44 }}>
            Audited. Verified. Documented.
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:20 }} className="cert-grid">
            {CERTS.map(({ code, full, body, desc }) => (
              <div key={code} style={{ border:'1px solid #E5E5E5', background:'#FFFFFF', padding:'28px 24px' }}>
                <div style={{ marginBottom:14 }}>
                  <span style={{ background:'#CC1414', color:'#FFFFFF', fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:800, letterSpacing:'.06em', textTransform:'uppercase', padding:'5px 12px' }}>{code}</span>
                </div>
                <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:19, fontWeight:800, textTransform:'uppercase', marginBottom:4 }}>{full}</h3>
                <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'#888', marginBottom:12 }}>{body}</p>
                <p style={{ fontSize:14, lineHeight:1.7, color:'#4A4A4A' }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop:20 }}>
            <div style={{ display:'flex', flexWrap:'wrap', gap:12, padding:'24px', background:'#FFFFFF', border:'1px solid #E5E5E5' }}>
              <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#888', marginRight:8 }}>Additional recognitions:</span>
              {['Shandong Provincial Sports Industry Model Unit 2023','Mandatory Cleaner Production Audit 2025','Weihai Tax Star Enterprise (multiple years)','Weihai Top 10 Employee Trusted Enterprise 2024'].map((r) => (
                <span key={r} style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.04em', textTransform:'uppercase', padding:'5px 12px', background:'#F7F7F7', color:'#555', border:'1px solid #E5E5E5' }}>{r}</span>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:600px){.cert-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:'#0A0A0A', color:'#FFFFFF', padding:'72px 0', textAlign:'center' }}>
        <div className="container">
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:40, fontWeight:800, textTransform:'uppercase', marginBottom:16 }}>See the Factory in Action</h2>
          <p style={{ fontSize:16, color:'rgba(255,255,255,0.55)', maxWidth:440, margin:'0 auto 32px', lineHeight:1.65 }}>
            Send us your specification. We will tell you exactly how we would build it, how long it will take, and what it will cost.
          </p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Quote →</Link>
            <Link href="/process" className="btn-outline-white">Manufacturing Process</Link>
          </div>
        </div>
      </section>
    </>
  );
}
