'use client';
import Link from 'next/link';
import { ModeToggle } from './ui/toggle-mode';

export const Header = () => (
  <header className="border-b">
    <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
      <Link href="/">
        <h3 className="text-xl font-semibold">Salman</h3>
      </Link>
      <ModeToggle />
    </div>
  </header>
);
