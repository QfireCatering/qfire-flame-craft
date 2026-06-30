export function smoothScrollTo(targetY: number, duration = 1200) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  const startTime = performance.now();

  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
  }

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeOutCubic(progress);
    window.scrollTo(0, startY + diff * ease);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function initSmoothScrollLinks() {
  const handler = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (!anchor) return;

    const hash = anchor.getAttribute('href');
    if (!hash || hash === '#') return;

    const el = document.querySelector(hash);
    if (!el) return;

    e.preventDefault();
    const rect = el.getBoundingClientRect();
    const offset = 100; // match SectionNav offset
    smoothScrollTo(rect.top + window.scrollY - offset);
  };

  document.addEventListener('click', handler);
  return () => document.removeEventListener('click', handler);
}
