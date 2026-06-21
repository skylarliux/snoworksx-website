import Link from 'next/link';

export const metadata = {
  title: 'OEM Projects & Case Studies | SNOWORKSX',
  description: 'Real-world OEM manufacturing outcomes. How SNOWORKSX helps brands launch private-label winter sports products, scale production, and deliver on time.',
};

const METRICS = [
  { num:'13',    label:'Active Brand Partnerships' },
  { num:'400K+', label:'Units Produced in 2024' },
  { num:'<0.5%', label:'Average Defect Rate' },
  { num:'45',    label:'Avg Lead Time (days)' },
];

const CASES = [
  {
    tag:'Private Label Launch',
    title:'New Brand Launch: 200-Unit All-Mountain Snowboard Line',
    client:'European specialty ski retailer',
    outcome:'200 boards delivered in 52 days',
    stats:[
      { label:'Order Volume', value:'200 units' },
      { label:'Product', value:'All-Mountain Series' },
      { label:'Lead Time', value:'52 days' },
      { label:'Graphics', value:'Full sublimation' },
    ],
    body:'A European specialty ski retailer approached us to create their first private-label snowboard line ahead of the upcoming winter season. Starting from a brand brief only — no existing spec sheet — our R&D and design teams produced pre-production samples in 12 days, received graphic approval in round two, and shipped 200 fully branded all-mountain boards within 52 days of purchase order. The retailer launched under their own brand name and achieved full sell-through in season one.',
  },
  {
    tag:'Brand Manufacturer OEM',
    title:'Annual Catalogue OEM: Multi-Category Winter Sports Program',
    client:'US snowboard and ski brand — annual program',
    outcome:'4,000+ units across 4 product lines, <0.4% defect rate',
    stats:[
      { label:'Annual Volume', value:'4,000+ units' },
      { label:'Product Lines', value:'Snowboards · Skis · Boots · Bindings' },
      { label:'Lead Time', value:'45 days per seasonal run' },
      { label:'QC Pass Rate', value:'99.6%+' },
    ],
    body:'An established US winter sports brand partnered with us for their full annual production program across four product lines. Each seasonal run is produced to their detailed specification files — board shape CAD data, boot last tooling, binding chassis specs, and full graphic packages. Our Three-Gate QC maintains a consistent defect rate below 0.4%. All design files are protected under NDA. The partnership has now entered its third year with order volume growing over 20% annually.',
  },
  {
    tag:'Custom Shape Development',
    title:'Custom Ski Development: New Freeride Line from CAD to Market',
    client:'Backcountry ski brand — North America',
    outcome:'Custom shape to production in 68 days',
    stats:[
      { label:'Construction', value:'Triaxially braided + metal laminate Ti' },
      { label:'Sample Rounds', value:'2 rounds' },
      { label:'Time to Production', value:'68 days from CAD approval' },
      { label:'First Run', value:'300 units across 4 sizes' },
    ],
    body:'A North American backcountry ski brand needed a fully custom freeride ski — designed from their industrial designer\'s CAD files. Our R&D team specified a triaxially braided construction with titanal metal laminate, paulownia core, and bio-based resin formulation (30% bio-content) aligned with the brand\'s sustainability positioning. Two sample rounds were completed and approved within 24 days. The first production run of 300 units across four sizes launched on schedule for the season. The brand subsequently added poles and a ski boot program to their annual order.',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section style={{ background:'#0A0A0A', padding:'72px 0 56px', color:'#FFFFFF' }}>
        <div className="container">
          <span className="section-tag-white">Projects & Case Studies</span>
          <h1 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(40px,6vw,72px)', fontWeight:900, textTransform:'uppercase', letterSpacing:'-.01em', lineHeight:1.0, marginBottom:20 }}>
            Brands We&apos;ve Helped<br />Build &amp; Scale
          </h1>
          <p style={{ fontSize:17, color:'rgba(255,255,255,0.6)', maxWidth:560, lineHeight:1.65 }}>
            From first-season private-label launches to multi-category annual programs — real outcomes from real OEM partnerships.
          </p>
        </div>
      </section>

      {/* Metrics bar */}
      <section style={{ background:'#CC1414', padding:'32px 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0 }}>
            {METRICS.map(({ num, label }, i) => (
              <div key={label} style={{ textAlign:'center', padding:'8px 16px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.25)' : 'none' }}>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(24px,3vw,40px)', fontWeight:900, color:'#FFFFFF', lineHeight:1, marginBottom:4 }}>{num}</div>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,0.65)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:600px){section:nth-of-type(2) .container>div{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </section>

      {/* Case studies */}
      <section style={{ padding:'80px 0' }}>
        <div className="container">
          {CASES.map((cs, idx) => (
            <div key={cs.title} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'start', paddingBottom: idx < CASES.length - 1 ? 72 : 0, marginBottom: idx < CASES.length - 1 ? 72 : 0, borderBottom: idx < CASES.length - 1 ? '1px solid #E5E5E5' : 'none' }} className="case-row">
              <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'#CC1414', display:'block', marginBottom:12 }}>{cs.tag}</span>
                <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(22px,3vw,34px)', fontWeight:800, textTransform:'uppercase', letterSpacing:'-.01em', marginBottom:8, lineHeight:1.1 }}>{cs.title}</h2>
                <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:13, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'#888', marginBottom:20 }}>{cs.client}</p>
                <p style={{ fontSize:15, lineHeight:1.75, color:'#4A4A4A', marginBottom:24 }}>{cs.body}</p>
                <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#0A0A0A', color:'#FFFFFF', fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', padding:'10px 16px' }}>
                  ✓ {cs.outcome}
                </div>
              </div>
              <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                <div style={{ background:'#F7F7F7', border:'1px solid #E5E5E5', padding:'32px 28px' }}>
                  <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'#888', marginBottom:16 }}>Project Snapshot</p>
                  {cs.stats.map(({ label, value }) => (
                    <div key={label} className="spec-row">
                      <span className="spec-label">{label}</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.case-row{grid-template-columns:1fr!important}.case-row>div{order:unset!important}}`}</style>
      </section>

      {/* NDA note + CTA */}
      <section style={{ background:'#F7F7F7', borderTop:'1px solid #E5E5E5', padding:'64px 0' }}>
        <div className="container">
          <div style={{ maxWidth:680 }}>
            <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:28, fontWeight:800, textTransform:'uppercase', marginBottom:16 }}>NDA-Protected Partnerships</h2>
            <p style={{ fontSize:15, lineHeight:1.75, color:'#4A4A4A', marginBottom:28 }}>
              All active partnerships with named brands are governed by non-disclosure agreements. The case studies above represent anonymous composite examples based on real program types and outcomes. All proprietary design files, spec sheets, and brand information are treated with the strictest confidentiality — always.
            </p>
            <Link href="/contact" className="btn-primary">Start Your Project →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
