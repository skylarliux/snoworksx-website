'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function TestimonialsCarousel({ testimonials }) {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length; // 5

  const go = useCallback((newIdx) => {
    setFading(true);
    setTimeout(() => {
      setIdx(((newIdx % n) + n) % n);
      setFading(false);
    }, 250);
  }, [n]);

  const next = useCallback(() => go(idx + 1), [idx, go]);
  const prev = useCallback(() => go(idx - 1), [idx, go]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  /* 3 cards on desktop, wrapping */
  const visible = [0, 1, 2].map((i) => testimonials[(idx + i) % n]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Cards */}
      <div style={{ opacity: fading ? 0 : 1, transition: 'opacity .25s ease', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="tc-grid">
        {visible.map(({ quote, name, position }, i) => {
          const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
          return (
            <div key={`${idx}-${i}`} style={{ background: '#FFFFFF', border: '1px solid #E5E5E5', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 52, fontWeight: 900, color: '#CC1414', lineHeight: 0.6, userSelect: 'none' }}>&ldquo;</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.75, color: '#3A3A3A', margin: 0, flex: 1 }}>{quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, borderTop: '1px solid #F0F0F0', paddingTop: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 15, fontWeight: 800, color: '#FFFFFF', letterSpacing: '.04em' }}>{initials}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.03em', color: '#0A0A0A', marginBottom: 2 }}>{name}</div>
                  <div style={{ fontSize: 12.5, color: '#888', lineHeight: 1.4 }}>{position}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, flexWrap: 'wrap', gap: 16 }}>
        {/* Dots */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`Go to testimonial ${i + 1}`} style={{
              width: i === idx ? 24 : 8, height: 8, borderRadius: 4,
              background: i === idx ? '#CC1414' : '#E5E5E5',
              border: 'none', padding: 0, cursor: 'pointer', transition: 'all .3s',
            }} />
          ))}
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#AAA', marginLeft: 8 }}>
            {idx + 1} / {n}
          </span>
        </div>
        {/* Arrows */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={prev} className="tc-btn" style={arrowStyle} aria-label="Previous">←</button>
          <button onClick={next} className="tc-btn" style={arrowStyle} aria-label="Next">→</button>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.tc-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:560px){.tc-grid{grid-template-columns:1fr!important}}
        .tc-btn:hover{background:#CC1414!important;color:#FFFFFF!important;border-color:#CC1414!important}
      `}</style>
    </div>
  );
}

const arrowStyle = {
  fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700,
  padding: '8px 16px', background: '#FFFFFF', border: '1.5px solid #E5E5E5',
  cursor: 'pointer', color: '#0A0A0A', transition: 'all .15s',
};