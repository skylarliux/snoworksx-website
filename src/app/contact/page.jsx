import QuoteForm from '../../components/QuoteForm';
import Link from 'next/link';

export const metadata = {
  title: 'Request a Quote | SNOWORKSX OEM Manufacturer',
  description: 'Request a manufacturing quote for snowboards, skis, ski boots, snowboard boots, bindings or poles. We respond within 1 business day.',
};

const TRUST = [
  { icon:'⚡', text:'We respond within 1 business day' },
  { icon:'🔒', text:'All enquiries treated as strictly confidential' },
  { icon:'📋', text:'NDA available before any spec files are shared' },
  { icon:'🌍', text:'AEO-certified customs — we ship worldwide' },
  { icon:'🏆', text:'ISO 9001:2015 · ISO 14001 · ISO 45001 certified' },
];

export default function ContactPage() {
  return (
    <>
      <section style={{ background:'#0A0A0A', padding:'72px 0 56px', color:'#FFFFFF' }}>
        <div className="container">
          <span className="section-tag-white">Get a Quote</span>
          <h1 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(40px,6vw,72px)', fontWeight:900, textTransform:'uppercase', letterSpacing:'-.01em', lineHeight:1.0, marginBottom:20 }}>
            Request a<br />Manufacturing Quote
          </h1>
          <p style={{ fontSize:17, color:'rgba(255,255,255,0.6)', maxWidth:520, lineHeight:1.65 }}>
            Tell us about your brand, volume, and product specifications. We respond with a preliminary quotation within 1 business day.
          </p>
        </div>
      </section>

      <section style={{ padding:'72px 0 80px' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 320px', gap:72, alignItems:'start' }} className="contact-grid">
            <div>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:24, fontWeight:800, textTransform:'uppercase', letterSpacing:'.02em', marginBottom:28 }}>Your Enquiry</h2>
              <QuoteForm />
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:28 }}>
              {/* New brand card */}
              <div style={{ background:'#0A0A0A', padding:'24px 20px' }}>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'#CC1414', marginBottom:10 }}>First Season?</div>
                <p style={{ fontSize:14, color:'rgba(255,255,255,0.7)', lineHeight:1.65, marginBottom:14 }}>
                  Many of our current brand partners started with a first order of 100–200 units. MOQ starts at 20 units. We treat new brands with the same rigour as our largest clients.
                </p>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'rgba(255,255,255,0.35)' }}>Select "New brand" in the Brand Stage field →</div>
              </div>
              {/* Trust */}
              <div>
                <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'#888', marginBottom:14 }}>Why Contact Us</p>
                {TRUST.map(({ icon, text }) => (
                  <div key={text} style={{ display:'flex', gap:12, alignItems:'flex-start', padding:'11px 0', borderBottom:'1px solid #F0F0F0', fontSize:14, lineHeight:1.5 }}>
                    <span style={{ fontSize:16, flexShrink:0 }}>{icon}</span>{text}
                  </div>
                ))}
              </div>
              {/* Direct contact */}
              <div style={{ background:'#F7F7F7', border:'1px solid #E5E5E5', padding:'22px 18px' }}>
                <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'#888', marginBottom:16 }}>Direct Contact</p>
                <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  {[
                    { label:'Email', val:'info@snoworksx.com', href:'mailto:info@snoworksx.com' },
                    { label:'Website', val:'snoworksx.com', href:'https://snoworksx.com', external:true },
                  ].map(({ label, val, href, external }) => (
                    <div key={label}>
                      <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#888', marginBottom:3 }}>{label}</p>
                      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} style={{ fontSize:15, fontWeight:500, color:'#CC1414', textDecoration:'none' }}>{val}</a>
                    </div>
                  ))}
                  <div>
                    <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#888', marginBottom:3 }}>Location</p>
                    <p style={{ fontSize:14, color:'#4A4A4A', lineHeight:1.55 }}>Weihai, Shandong Province, China</p>
                  </div>
                  <div>
                    <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#888', marginBottom:3 }}>Response Time</p>
                    <p style={{ fontSize:14, color:'#4A4A4A' }}>Within 1 business day</p>
                  </div>
                </div>
              </div>
              {/* Certs */}
              <div>
                <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'#888', marginBottom:12 }}>Certifications</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                  {['ISO 9001:2015','ISO 14001','ISO 45001','AEO'].map((c) => (
                    <span key={c} className="cert-badge"><span className="cert-dot"/>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      <section style={{ background:'#F7F7F7', borderTop:'1px solid #E5E5E5', padding:'40px 0' }}>
        <div className="container">
          <div style={{ display:'flex', alignItems:'center', gap:40, flexWrap:'wrap', justifyContent:'space-between' }}>
            <div>
              <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:22, fontWeight:800, textTransform:'uppercase', marginBottom:6 }}>Not Sure What You Need?</h3>
              <p style={{ fontSize:14, color:'#6B6B6B', margin:0 }}>Read about our full 7-step manufacturing process — from enquiry to delivery.</p>
            </div>
            <Link href="/process" className="btn-outline" style={{ flexShrink:0 }}>How We Work →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
