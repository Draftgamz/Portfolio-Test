'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';

const menuItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav className="fixed z-20 w-full">
        <div 
          className={cn(
            'mx-auto mt-2 transition-all duration-300',
            isScrolled ? 'px-4 lg:px-8' : 'px-6 lg:px-12',
            isScrolled ? 'max-w-5xl' : 'max-w-7xl'
          )}
        >
          <div 
            className={cn(
              'rounded-full border transition-all duration-300',
              isScrolled && 'bg-background/50 backdrop-blur-lg shadow-lg'
            )}
          >
            <div className="relative flex items-center justify-between px-4 py-3">
              <Link
                href="/"
                aria-label="home"
                className="relative z-10">
                <Logo />
              </Link>

              <div className="hidden lg:block">
                <ul className="flex items-center gap-8">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="nav-item">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button
                  asChild
                  size="sm"
                  className="hidden lg:inline-flex">
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                  className="relative z-10 lg:hidden">
                  <Menu className={cn(
                    "size-6 transition-all",
                    menuState && "opacity-0 rotate-90"
                  )} />
                  <X className={cn(
                    "absolute inset-0 size-6 transition-all",
                    !menuState && "opacity-0 -rotate-90"
                  )} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 z-0 bg-background/80 backdrop-blur-sm transition-all lg:hidden",
          menuState ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
          <div className={cn(
            "absolute inset-x-0 top-0 pt-20 pb-6 px-6 border-b bg-background transition-all",
            menuState ? "translate-y-0" : "-translate-y-full"
          )}>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="nav-item text-lg"
                    onClick={() => setMenuState(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="w-full mt-6">
              <Link href="#contact" onClick={() => setMenuState(false)}>
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};