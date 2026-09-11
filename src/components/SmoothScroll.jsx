import React, { useEffect } from 'react';

/**
 * SmoothScroll
 * -------------------------------------------------------------
 * Wrap your <App /> with this component once, and any <a href="#id">
 * link anywhere in the app will smoothly scroll to that section.
 *
 * - Intercepts clicks on any element with data-scroll-link or <a href="#...">
 * - Uses native scrollIntoView({ behavior: 'smooth' })
 * - Accounts for a fixed navbar offset (configurable)
 * - Also enables CSS scroll-behavior fallback
 */
export default function SmoothScroll({
  children,
  offset = 80,          // px offset (navbar height). Set to 0 to disable
  duration = 700,       // fallback scroll duration (ms)
}) {
  useEffect(() => {
    // Fallback: enable native smooth scrolling for the whole document
    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'smooth';

    /**
     * Custom easing scroll — used only if we need to control duration.
     * scrollIntoView({ behavior: 'smooth' }) is browser-native, but
     * its duration isn't controllable. This gives us a nicer feel.
     */
    const smoothScrollTo = (targetY, ms = duration) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      // easeInOutCubic
      const ease = (t) =>
        t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / ms, 1);
        window.scrollTo(0, startY + distance * ease(progress));
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const handleClick = (event) => {
      // Find the closest anchor tag (or element with data-scroll-link)
      const anchor = event.target.closest('a[href^="#"], [data-scroll-link]');
      if (!anchor) return;

      const href =
        anchor.getAttribute('href') ||
        anchor.getAttribute('data-scroll-link');

      if (!href || href === '#' || href === '#!') return;

      const id = href.startsWith('#') ? href.slice(1) : href;
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();

      // Close mobile menus, etc. — dispatch a custom event so
      // any component (e.g. Navbar) can react if it wants.
      window.dispatchEvent(
        new CustomEvent('smooth-scroll-start', { detail: { id } })
      );

      const rect = target.getBoundingClientRect();
      const targetY =
        window.scrollY + rect.top - (offset > 0 ? offset : 0);

      // Respect user's reduced-motion preference
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        window.scrollTo(0, targetY);
      } else {
        smoothScrollTo(targetY, duration);
      }

      // Update the URL hash without jumping
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', href);
      }

      window.dispatchEvent(
        new CustomEvent('smooth-scroll-end', { detail: { id } })
      );
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
      html.style.scrollBehavior = previousBehavior;
    };
  }, [offset, duration]);

  return <>{children}</>;
}