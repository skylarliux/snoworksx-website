'use client';
import { useState } from 'react';

/**
 * Drop-in replacement for <img> in Server Components.
 * Renders exactly like a normal <img> but disappears on 404/load-error,
 * letting any underlying placeholder show through.
 */
export default function SafeImg({ src, alt, style }) {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <img
      src={src}
      alt={alt || ''}
      style={style}
      onError={() => setHidden(true)}
    />
  );
}
