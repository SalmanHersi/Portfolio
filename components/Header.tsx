'use client';
import Link from 'next/link';
import { ModeToggle } from './ui/toggle-mode';

export const Header = () => (
  <header className="sticky top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 md:px-8 py-4">
      <Link href="/" className="group flex items-center gap-2 transition-opacity hover:opacity-70">
        <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
          Salman
        </span>
      </Link>
      <ModeToggle />
    </div>
  </header>
);
