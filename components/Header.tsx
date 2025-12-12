'use client';
import Link from 'next/link';
import { ModeToggle } from './ui/toggle-mode';

export const Header = () => (
  <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
    <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
      <Link href="/" className="transition-opacity hover:opacity-70">
        <h3 className="text-xl font-semibold">Salman</h3>
      </Link>
      <ModeToggle />
    </div>
  </header>
);
