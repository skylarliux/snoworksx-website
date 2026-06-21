'use client';
import { useState } from 'react';

/**
 * Category icon component.
 * Shows the custom image (src) when the file exists.
 * Falls back to the emoji when the image is missing or fails to load.
 *
 * The wrapper div adds consistent padding so icons with different shape
 * proportions (wide snowboard vs. narrow ski) appear visually balanced.
 * Pair this with consistent SVG internal padding in your design file
 * (leave ~6 px of space around the drawing within the 64×64 canvas).
 */
export default function CatIcon({ src, emoji, size = 28, white = false }) {
  const [err, setErr] = useState(false);

  if (src && !err) {
    return (
      /* Fixed outer box — both icons always occupy the same space */
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        flexShrink: 0,
      }}>
        {/* img fills 82% of the box — the 18% gap is consistent padding */}
        <img
          src={src}
          alt=""
          style={{
            width: '82%',
            height: '82%',
            objectFit: 'contain',
            display: 'block',
            filter: white ? 'invert(1) brightness(10)' : 'none',
          }}
          onError={() => setErr(true)}
        />
      </span>
    );
  }

  return (
    <span style={{ fontSize: size * 0.8, lineHeight: 1, display: 'inline-block', flexShrink: 0 }}>
      {emoji}
    </span>
  );
}
