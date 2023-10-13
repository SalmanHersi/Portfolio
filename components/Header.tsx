"use client";
import { NavigationMenuContent, NavigationMenuList, NavigationMenu, NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuViewport, NavigationMenuIndicator} from "@radix-ui/react-navigation-menu"


export const Header = () => {
  return (

<div className="flex justify-between p-5 mx-auto container">
  <h3>Salman</h3>
  <li className=" list-none flex gap-3">
    <a href="">Work</a>
    <a href="">About</a>
    <a href="">Contact</a>
  </li>
  </div>

  )
}


