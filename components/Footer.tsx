import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <p
        className="text-center text-xs tracking-wider text-muted-foreground/60 uppercase"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Built with Next.js &middot; Tailwind CSS &middot; Deployed on Vercel
      </p>
    </footer>
  );
};

export default Footer;
