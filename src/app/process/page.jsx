import Link from 'next/link';

export const metadata = {
  title: 'Manufacturing Process | SNOWORKSX OEM Factory',
  description: '7-step OEM manufacturing process — from enquiry to delivery. Three-Gate QC, ISO 9001:2015, 30-40 checkpoints per unit. Full tech breakdown of cores, construction, profiles, bases, boot and pole technology.',
};

const STEPS = [
  { num:'01', title:'Enquiry & Specification Review', duration:'1 Business Day',
    body:'Submit your requirements via our quote form or email. Our team reviews your spec sheet, volumes, timeline, and brand direction — responding within 1 business day with a preliminary quotation and any clarifying questions.',
    details:['Product line selection or full custom specification','Estimated volumes and delivery schedule','Graphic brief or design files (if available)','Certification and labelling requirements'] },
  { num:'02', title:'Quotation & NDA Agreement', duration:'2–3 Business Days',
    body:'We issue a formal quotation covering unit pricing, MOQ confirmation, lead time, and payment terms. An NDA is signed before any proprietary design files are shared. Once agreed, a purchase order is raised.',
    details:['Itemised unit pricing and tooling costs (if applicable)','NDA and full IP protection in place','Payment terms: typically 30% deposit, balance before shipment','Written production schedule confirmation'] },
  { num:'03', title:'Core & Material Preparation', duration:'Weeks 1–2',
    body:'Wood cores are precision-milled on our CNC machines to exact weight and flex specifications. Our in-house R&D has optimised core construction across 120,000+ units — delivering proven weight, elasticity, and performance results.',
    details:['3 CNC wood processing machines + smart laser cutter for ±0.1mm precision','Six core wood species available: Aspen, Aspen Microblock, Maple, Paulownia, Fir, Balsa','Multi-species blended cores (bamboo/aspen/paulownia) for snowboard lines','Carbon stringer, titanal laminate, and natural flax fibre layup preparation'] },
  { num:'04', title:'Graphic & Topsheet Production', duration:'Weeks 2–3',
    body:'Brand graphics are produced using full sublimation, screen printing, or foil methods. Topsheets are produced to your material specification. Pre-production proofs are submitted for brand approval before lamination begins.',
    details:['Full sublimation for photo-quality graphics','Screen print for clean brand / logo applications','Custom sidewall colour and edge graphics','Pre-production proof approval before lamination'] },
  { num:'05', title:'Product Assembly', duration:'Weeks 3–6',
    body:'Over 100 dedicated assembly machines press, laminate, and shape each product. Our smart laser cutter ensures profiles and shapes meet exact specification. Boot uppers are injection-moulded; liners heat-formed; pole shafts precision-trimmed.',
    details:['100+ dedicated ski and snowboard assembly machines','Smart laser cutter for edge profiles and shapes','Boot shell injection moulding — variable-thickness TPU construction','Pole shaft lamination: Carbon Web, composite, and aircraft-grade 7075 aluminium'] },
  { num:'06', title:'Three-Gate Quality Control', duration:'Ongoing',
    body:'Every unit passes three quality gates before packaging: self-check by the production operator, in-process inspection by line supervisors, and final inspection by our dedicated QC team. ISO 9001:2015 governs 30–40 checkpoints per unit.',
    details:['Gate 1 — Operator self-check at each production stage','Gate 2 — In-process supervisor inspection','Gate 3 — Final QC team: 30–40 checkpoints per unit','Defective units documented, removed, and rectified before shipment'] },
  { num:'07', title:'Packaging & Export', duration:'Weeks 6–9',
    body:'Units are packaged in your custom branded cartons or our standard export cartons. AEO-certified customs clearance speeds up export processing. We provide full shipping documentation, commercial invoices, and certificates of origin.',
    details:['Custom branded or standard export carton options','AEO customs certification — expedited clearance, reduced inspection frequency','Full shipping documentation pack provided','Tracking from factory to destination port'] },
];


export default function ProcessPage() {
  return (
    <>
      <section style={{ background:'#0A0A0A', padding:'72px 0 56px', color:'#FFFFFF' }}>
        <div className="container">
          <span className="section-tag-white">Manufacturing Process</span>
          <h1 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(40px,6vw,72px)', fontWeight:900, textTransform:'uppercase', letterSpacing:'-.01em', lineHeight:1.0, marginBottom:20 }}>
            How We Build<br />Your Products
          </h1>
          <p style={{ fontSize:17, color:'rgba(255,255,255,0.6)', maxWidth:540, lineHeight:1.65 }}>
            From your specification sheet to your warehouse — every step documented, ISO-certified, and designed to protect your brand, your IP, and your timeline.
          </p>
        </div>
      </section>

      {/* 7-step process */}
      <section style={{ padding:'clamp(48px,7vw,80px) 0' }}>
        <div className="container">
          {STEPS.map((step, i) => (
            <div key={step.num} style={{ display:'grid', gridTemplateColumns:'180px 1fr', gap:56, paddingBottom:52, marginBottom:52, borderBottom: i < STEPS.length - 1 ? '1px solid #E5E5E5' : 'none' }} className="process-row">
              <div>
                <div className="step-num">{step.num}</div>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#CC1414', marginTop:8 }}>{step.duration}</div>
              </div>
              <div>
                <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:26, fontWeight:800, textTransform:'uppercase', letterSpacing:'.01em', marginBottom:12 }}>{step.title}</h2>
                <p style={{ fontSize:15, lineHeight:1.75, color:'#4A4A4A', marginBottom:20 }}>{step.body}</p>
                <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:10 }}>
                  {step.details.map((d) => (
                    <li key={d} style={{ display:'flex', gap:12, alignItems:'flex-start', fontSize:14, color:'#4A4A4A' }}>
                      <span style={{ color:'#CC1414', fontWeight:700, flexShrink:0, marginTop:1 }}>→</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:600px){.process-row{grid-template-columns:1fr!important;gap:12px!important}}`}</style>
      </section>

      {/* QC dark strip */}
      <section style={{ background:'#0A0A0A', color:'#FFFFFF', padding:'clamp(48px,6vw,72px) 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'start' }} className="process-qc-grid">
            <div>
              <span className="section-tag-white">Quality Control</span>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(30px,4vw,48px)', fontWeight:800, textTransform:'uppercase', lineHeight:1.05, marginBottom:20 }}>
                30–40 Checkpoints.<br />Every Unit.
              </h2>
              <p style={{ fontSize:15, lineHeight:1.75, color:'rgba(255,255,255,0.65)', marginBottom:28 }}>
                Our Three-Gate QC system runs concurrently with production — not as an afterthought. ISO 9001:2015 governs every checkpoint. Any unit that fails a gate is pulled, documented, and rectified before packaging.
              </p>
              <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
                {['ISO 9001:2015','Three-Gate System','AEO Certified'].map((c) => (
                  <span key={c} style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#FFFFFF', border:'1px solid rgba(255,255,255,0.25)', padding:'7px 14px' }}>✓ {c}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.35)', marginBottom:16 }}>Sample QC Checkpoints</p>
              {['Core weight and flex measurement','Edge straightness and sharpness','Base flatness and material integrity','Topsheet adhesion and graphic register','Insert / binding integration test','Camber / rocker profile verification','Sidewall adhesion integrity','Length, width, and tolerance verification'].map((cp, i) => (
                <div key={cp} style={{ display:'flex', gap:16, alignItems:'center', padding:'12px 0', borderBottom: i < 7 ? '1px solid rgba(255,255,255,0.07)' : 'none', fontSize:14, color:'rgba(255,255,255,0.75)' }}>
                  <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, color:'#CC1414', width:24, flexShrink:0 }}>{String(i+1).padStart(2,'0')}</span>{cp}
                </div>
              ))}
              <p style={{ fontSize:12, color:'rgba(255,255,255,0.3)', marginTop:14 }}>+ 22–32 additional checkpoints per unit</p>
            </div>
          </div>
        </div>
        {/* process-qc-grid: 2→1 col handled in globals.css */}
      </section>

      {/* Technology link */}
      <section style={{ padding:'clamp(40px,5vw,64px) 0', background:'#F7F7F7', borderTop:'1px solid #E5E5E5' }}>
        <div className="container">
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:32, flexWrap:'wrap' }}>
            <div style={{ maxWidth:560 }}>
              <span className="section-tag">Production Technology</span>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(26px,3.5vw,40px)', fontWeight:800, textTransform:'uppercase', letterSpacing:'-.01em', marginBottom:14 }}>
                Explore What We Build With
              </h2>
              <p style={{ fontSize:15, color:'#555', lineHeight:1.75 }}>
                Six core wood species, seven profile types, five base grades, and a full suite of advanced reinforcement technologies. See the complete breakdown of our manufacturing capabilities.
              </p>
            </div>
            <Link href="/technology" className="btn-primary" style={{ flexShrink:0 }}>View Technology →</Link>
          </div>
        </div>
      </section>

      {/* Seasonal order planning calendar */}
      <section style={{ padding:'clamp(48px,6vw,72px) 0', background:'#FFFFFF' }}>
        <div className="container">
          <span className="section-tag">Planning Reference</span>
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(26px,3.5vw,40px)', fontWeight:800, textTransform:'uppercase', letterSpacing:'-.01em', marginBottom:12 }}>
            Seasonal Order Calendar
          </h2>
          <p style={{ fontSize:15, color:'#555', lineHeight:1.75, maxWidth:580, marginBottom:36 }}>
            Missing the placement window for your target season means waiting a full year. Plan backwards from your retail delivery date using this reference.
          </p>
          <div style={{ border:'1px solid #E5E5E5', overflow:'hidden', marginBottom:16 }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1.2fr', background:'#0A0A0A', padding:'14px 20px', gap:16 }} className="cal-grid">
              {['Target Season','Order Deadline','Why','Warehouse Arrival'].map((h) => (
                <div key={h} style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.55)' }}>{h}</div>
              ))}
            </div>
            {[
              { season:'Winter 2026/27', deadline:'Feb – Apr 2026', why:'45–65 day production + 5–6 week ocean freight', arrives:'July – Aug 2026' },
              { season:'Winter 2027/28', deadline:'Feb – Apr 2027', why:'Same lead time structure', arrives:'July – Aug 2027' },
            ].map(({ season, deadline, why, arrives }, i) => (
              <div key={season} style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1.2fr', padding:'18px 20px', gap:16, background: i % 2 === 0 ? '#FFFFFF' : '#FAFAFA', borderTop:'1px solid #E5E5E5' }} className="cal-grid">
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:15, fontWeight:800, textTransform:'uppercase' }}>{season}</div>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:15, fontWeight:700, color:'#CC1414' }}>{deadline}</div>
                <div style={{ fontSize:13.5, color:'#555' }}>{why}</div>
                <div style={{ fontSize:13.5, color:'#555' }}>{arrives}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize:13, color:'#888', lineHeight:1.6, maxWidth:640 }}>
            New mould tooling, custom shapes, or first-season sample rounds add 2–4 weeks. Always build in a buffer — contact us early and we will map an exact timeline for your specific project.
          </p>
        </div>
        <style>{`
          @media(max-width:768px){.cal-grid{grid-template-columns:1fr 1fr!important}}
          @media(max-width:480px){.cal-grid{grid-template-columns:1fr!important}}
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ padding:'clamp(44px,6vw,72px) 0', textAlign:'center' }}>
        <div className="container">
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:40, fontWeight:800, textTransform:'uppercase', marginBottom:16 }}>Start the Process</h2>
          <p style={{ fontSize:16, color:'#6B6B6B', maxWidth:440, margin:'0 auto 32px', lineHeight:1.65 }}>
            Send us your spec. We respond within 1 business day with a preliminary quotation and production timeline.
          </p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Quote →</Link>
            <Link href="/products" className="btn-outline">Browse Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
