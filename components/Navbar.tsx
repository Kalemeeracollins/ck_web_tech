'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container1 mb-4 fixed top-0 z-[40] w-full h-[100px]  flex justify-between items-center px-6 md:px-20 ">
      <div className=" container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex flex-row gap-3 items-center" prefetch={false}> 
        <Image
              src="/logo.jpg"
              alt="logo"
              width={70}
              height={70}
              className="text-white mt-2 h-full object-contain rounded-full"
            />
          <h1 className="text-white flex text-[25px] font-semibold">
            CK{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
             {'_'}
              WEB{'_'}
            </span>
            TECH
          </h1>
        </Link>
        <nav
          className={`fixed top-0 right-0 h-full lg:bg-none lg:text-white bg-gradient-to-r from-indigo-300 shadow-lg z-50 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 lg:static lg:flex lg:items-center lg:gap-6 mt-4 lg:transform-none lg:transition-none lg:translate-x-0 lg:h-auto lg:bg-transparent lg:shadow-none lg:z-auto`}
        >
          <NavigationMenu>
            <div className=" w-[100vw] h-64  justify-center items-start p-4">
              <Button variant="ghost" size="icon" className="self-end pointer  mb-12" onClick={toggleMenu}>
                <CloseIcon className="h-6 text-white h-16 bg-black rounded mt-4 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            <NavigationMenuList className="flex flex-col lg:flex-row gap-4 ">
              <NavigationMenuItem>
                <NavigationMenuLink href="/services" className='hover:underline'>Services</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/resources"className='hover:underline'>Resources</NavigationMenuLink>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                {/* <NavigationMenuContent className='' >
                  
                </NavigationMenuContent> 
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger >Resources</NavigationMenuTrigger>
                {/* <NavigationMenuContent >
                  
                </NavigationMenuContent>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <NavigationMenuLink href="/pricing" className='hover:underline'>Pricing</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/About" className='hover:underline'>About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className='hover:underline'>Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            </div>
          </NavigationMenu>
        </nav>
        <div className="flex items-center gap-4 lg:hidden">
        <Image
              src="/whatsapp.gif"
              alt="logo"
              width={44}
              height={44}
              className="text-white mt-2 h-full object-contain rounded-full"
            />
          <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleMenu}>
      {isMenuOpen ? (
        <>
        </>
      ) : (
        <>
          <MenuIcon className="text-white z-[20] h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </>
      )}
    </Button>
        </div>
      </div>
    </header>
  );
}
function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  );
}


export default Navbar;
