'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export const Header = () => (
  <div className='container mx-auto flex w-full max-w-7xl justify-between border-b p-5'>
    <Link href={'/'}>
      <h3 className='text-2xl'>Salman</h3>
    </Link>
    <nav className='invisible flex items-center gap-5 sm:visible'>
      <Link href={'/Work'}>Work</Link>
      <Link href={'/About'}>About</Link>
      <Link href={'/Contact'}>Contact</Link>

      <Sheet>
        <SheetTrigger>
          {' '}
          <div className='visible text-2xl sm:invisible'>
            <Menu />
          </div>
        </SheetTrigger>
        <SheetContent className=' w-[60%]'>
          <div className='mt-7 flex flex-col gap-8 p-3 text-center'>
            <Link href={'/Work'}>Work</Link>
            <Link href={'/About'}>About</Link>
            <Link href={'/Contact'}>Contact</Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  </div>
);
