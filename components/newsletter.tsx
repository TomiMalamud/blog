"use client"
import React, { useEffect } from 'react';

const Newsletter: React.FC = () => {
  useEffect(() => {
    const w = 'https://tally.so/widgets/embed.js';

    const v = () => {
      if ('undefined' !== typeof (window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((e) => {
          const iframe = e as HTMLIFrameElement;
          iframe.src = iframe.getAttribute('data-tally-src')!;
        });
      }
    };

    if ('undefined' !== typeof (window as any).Tally) {
      v();
    } else if (!document.querySelector(`script[src="${w}"]`)) {
      const s = document.createElement('script');
      s.src = w;
      s.onload = v;
      s.onerror = v;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/wgdNJJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="176"
      title="¡Suscribite!"
    ></iframe>
  );
};

export default Newsletter;
