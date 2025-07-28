'use client';
import Link from 'next/link';
import { ModeToggle } from './ui/toggle-mode';

export const Header = () => (
  <div>
    <div className='container mx-auto flex w-full max-w-7xl justify-between border-b p-5 '>
      <Link href={'/'}>
        <h3 className='text-2xl'>Salman</h3>
      </Link>
      <ModeToggle />
    </div>
  </div>
);
