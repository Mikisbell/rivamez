'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PrefetchLink({ 
  href, 
  children, 
  className = '',
  prefetchDelay = 100,
  ...props 
}) {
  const router = useRouter();
  const [isPrefetching, setIsPrefetching] = useState(false);

  const handleMouseEnter = () => {
    if (!isPrefetching && href) {
      setIsPrefetching(true);
      
      // Prefetch la ruta después de un pequeño delay
      setTimeout(() => {
        router.prefetch(href);
      }, prefetchDelay);
    }
  };

  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleMouseEnter} // También en mobile
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
