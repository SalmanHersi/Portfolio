"use client";
import Link from 'next/link'
import { NavigationMenuContent, NavigationMenuList, NavigationMenu, NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuViewport, NavigationMenuIndicator} from "@radix-ui/react-navigation-menu"
import {RxHamburgerMenu} from 'react-icons/rx'


export const Header = () => {
  return (

<div className="flex justify-between p-5 container mx-auto max-w-7xl border-b w-full">
  <Link href={"/"}>
  <h3>Salman</h3>
  </Link>
 <nav className='flex gap-7 invisible sm:visible items-center'>
 <Link href={"/Work"}>Work</Link>
 <Link href={"/About"}>About</Link>
 <Link href={"/Contact"}>Contact</Link>
 <div className='visible sm:invisible'>
 <RxHamburgerMenu/>
 </div>

 </nav>

  </div>

  )
}


