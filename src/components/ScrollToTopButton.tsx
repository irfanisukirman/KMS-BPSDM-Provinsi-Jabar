'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const calculateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      
      if (winHeightPx > 0) {
        const scrolled = (scrollPx / winHeightPx) * 100;
        setScrollProgress(scrolled);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('scroll', calculateScrollProgress);

    // Initial check
    toggleVisibility();
    calculateScrollProgress();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-card p-0 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
      )}
      aria-label="Scroll to top"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 44 44"
        aria-hidden="true"
      >
        <circle
          cx="22"
          cy="22"
          r={radius}
          strokeWidth="4"
          className="stroke-border"
          fill="transparent"
        />
        <circle
          cx="22"
          cy="22"
          r={radius}
          strokeWidth="4"
          className="stroke-primary transition-all duration-300"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 22 22)"
          strokeLinecap="round"
        />
      </svg>
      <ArrowUp className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-primary" />
    </button>
  );
}
