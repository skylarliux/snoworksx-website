'use client';
import { useState } from 'react';

const PRODUCTS = [
  'Snowboards','Skis','Ski Boots','Snowboard Boots',
  'Snowboard Bindings','Ski Poles',
  'Multiple Product Lines','Not sure yet — need guidance',
];

const VOLUMES = [
  'Under 50 units','50–200 units','200–500 units',
  '500–2,000 units','2,000+ units',
];

const BRAND_STAGES = [
  'New brand — planning first collection',
  'Growing brand — scaling an existing line',
  'Established brand — annual OEM program',
  'Retailer / distributor — private label',
  'Not sure yet',
];

const TARGET_SEASONS = [
  'Winter 2026/27 — order needed by April 2026',
  'Winter 2027/28 — planning ahead',
  'Flexible / ongoing program',
  'Sample/R&D only at this stage',
];

export default function QuoteForm() {
  const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', country:'', product:'', volume:'', brandStage:'', targetSeason:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) { setError('Please fill in your name, company, and email.'); return; }
    setError('');
    // TODO: replace with real endpoint → fetch('/api/quote', { method:'POST', body: JSON.stringify(form) })
    setSubmitted(true);
  };

  if (submitted) return (
    <div style={{ background:'#F7F7F7', border:'1px solid #E5E5E5', padding:'48px 40px', textAlign:'center' }}>
      <div style={{ width:48, height:48, background:'#0A0A0A', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 24px' }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 11L9 16L18 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:28, fontWeight:800, textTransform:'uppercase', marginBottom:12 }}>
        Quote Request Received
      </h3>
      <p style={{ color:'#6B6B6B', maxWidth:400, margin:'0 auto' }}>
        Thank you, {form.name}. Our team will review your enquiry and respond within 1 business day.
      </p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
      {error && (
        <div style={{ background:'#FFF3F3', border:'1px solid #FFCCCC', color:'#CC0000', padding:'12px 16px', marginBottom:24, fontSize:14 }}>
          {error}
        </div>
      )}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
        <div><label className="form-label">Full Name *</label><input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" className="form-input" required/></div>
        <div><label className="form-label">Company / Brand *</label><input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your Brand Name" className="form-input" required/></div>
        <div><label className="form-label">Email *</label><input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@yourbrand.com" className="form-input" required/></div>
        <div><label className="form-label">Phone / WhatsApp</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" className="form-input"/></div>
        <div><label className="form-label">Country</label><input type="text" name="country" value={form.country} onChange={handleChange} placeholder="United States" className="form-input"/></div>
        <div>
          <label className="form-label">Product Category</label>
          <select name="product" value={form.product} onChange={handleChange} className="form-select">
            <option value="">Select a product…</option>
            {PRODUCTS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div style={{ gridColumn:'1 / -1' }}>
          <label className="form-label">Estimated Annual Volume</label>
          <select name="volume" value={form.volume} onChange={handleChange} className="form-select">
            <option value="">Select volume…</option>
            {VOLUMES.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className="form-label">Brand Stage</label>
          <select name="brandStage" value={form.brandStage} onChange={handleChange} className="form-select">
            <option value="">Select…</option>
            {BRAND_STAGES.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className="form-label">Target Delivery Season</label>
          <select name="targetSeason" value={form.targetSeason} onChange={handleChange} className="form-select">
            <option value="">Select…</option>
            {TARGET_SEASONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div style={{ gridColumn:'1 / -1' }}>
          <label className="form-label">Project Details</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="form-textarea"
            placeholder="Tell us about your brand, product specifications, target markets, or any other requirements…"/>
        </div>
      </div>
      <div style={{ marginTop:28, display:'flex', alignItems:'center', gap:20, flexWrap:'wrap' }}>
        <button type="submit" className="btn-primary">Send Quote Request →</button>
        <p style={{ fontSize:13, color:'#6B6B6B', margin:0, lineHeight:1.5 }}>
          We respond within 1 business day. All enquiries are strictly confidential.
        </p>
      </div>
      <style>{`@media(max-width:600px){form>div{grid-template-columns:1fr!important}}`}</style>
    </form>
  );
}
