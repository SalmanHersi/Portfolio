import React from 'react';

const Footer = () => {
  return (
    <footer className=' flex items-center justify-center p-14'>
      <p className=' max-w-sm text-sm text-muted-foreground'>
        {' '}
        Developed in Visual Studio Code by me. Built using Next.js, Tailwind
        CSS, and Shadcn UI, and deployed with Vercel.
      </p>
    </footer>
  );
};

export default Footer;
