'use client';
import { useState } from 'react';

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {items.map(({ q, a }, i) => (
        <div key={i} style={{ border: '1px solid #E5E5E5', background: '#FFFFFF' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              gap: 16, padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 17, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.02em', color: open === i ? '#CC1414' : '#0A0A0A', transition: 'color .15s' }}>
              {q}
            </span>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 700, color: '#CC1414', flexShrink: 0, transition: 'transform .2s', display: 'block', transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
          </button>
          {open === i && (
            <div style={{ padding: '0 22px 20px' }}>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#4A4A4A', margin: 0, borderTop: '1px solid #F0F0F0', paddingTop: 14 }}>{a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
