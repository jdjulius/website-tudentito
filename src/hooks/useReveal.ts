import { useRef, useEffect } from 'react';

export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const root = ref.current;
    const isReveal =
      root.classList.contains('reveal') ||
      root.classList.contains('reveal-stagger');

    const els: Element[] = isReveal
      ? [root]
      : Array.from(root.querySelectorAll('.reveal, .reveal-stagger'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}
