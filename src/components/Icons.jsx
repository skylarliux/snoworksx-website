/* Monochrome flat stroke icons — all use currentColor, strokeWidth 1.5
   Sized at 40×40 for use in section headers and feature cards. */

const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
const box = { width: 40, height: 40, viewBox: '0 0 24 24' };

/* ── Why SNOWORKSX ── */

export function AwardIcon() {
  return (
    <svg {...box} {...S}>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.8 14.8 7 22l5-2.5 5 2.5-1.8-7.2" />
    </svg>
  );
}

export function ShieldCheckIcon() {
  return (
    <svg {...box} {...S}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export function FactoryIcon() {
  return (
    <svg {...box} {...S}>
      <path d="M2 22V8l6 4V8l6 4V4h4v18H2z" />
      <line x1="2" y1="22" x2="22" y2="22" />
      <rect x="9" y="16" width="3" height="6" />
      <rect x="14" y="16" width="3" height="6" />
    </svg>
  );
}

/* ── Sustainability ── */

export function LeafIcon() {
  return (
    <svg {...box} {...S}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

export function RecycleIcon() {
  return (
    <svg {...box} {...S}>
      <polyline points="4 2 4 8 10 8" />
      <path d="M3.5 14a9 9 0 1 0 .5-5.5" />
    </svg>
  );
}

export function WrenchIcon() {
  return (
    <svg {...box} {...S}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

export function HandshakeIcon() {
  return (
    <svg {...box} {...S}>
      <path d="M16 8h2a2 2 0 0 1 2 2v6H4v-6a2 2 0 0 1 2-2h2" />
      <path d="M10 8h4" />
      <circle cx="8" cy="6" r="2" />
      <circle cx="16" cy="6" r="2" />
      <path d="M8 16v4m4-4v4m4-4v4" />
    </svg>
  );
}

/* ── Process / Quality ── */

export function ChecklistIcon() {
  return (
    <svg {...box} {...S}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="9" y1="7" x2="15" y2="7" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="15" x2="13" y2="15" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg {...box} {...S}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* ── Contact / Footer ── */

export function EmailIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <polyline points="2 8 12 13 22 8"/>
    </svg>
  );
}

export function GlobeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

export function PinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
