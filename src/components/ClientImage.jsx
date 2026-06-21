'use client';
import { useState } from 'react';

/* Shows the image when it loads; shows a styled placeholder when the file is missing.
   Drop the image file in public/ and it appears automatically — no code changes needed. */
export default function ClientImage({ src, alt, label, note, aspectRatio = '4/3', iconSize = 28 }) {
  const [err, setErr] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio, overflow: 'hidden', background: '#F2F2F2' }}>
      {/* Placeholder shown when no image / load error */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 10, padding: 20,
        background: 'repeating-linear-gradient(45deg,#EBEBEB 0,#EBEBEB 1px,#F4F4F4 1px,#F4F4F4 14px)',
      }}>
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="#C8C8C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        {label && (
          <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#AAA', textAlign:'center' }}>
            {label}
          </span>
        )}
        {note && (
          <span style={{ fontSize:11, color:'#BBB', textAlign:'center', lineHeight:1.4 }}>{note}</span>
        )}
      </div>

      {/* Actual image — covers placeholder once loaded */}
      {!err && (
        <img
          src={src}
          alt={alt || label || ''}
          onError={() => setErr(true)}
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block' }}
        />
      )}
    </div>
  );
}
