'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-16">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Logo className="h-6" />
            <p className="text-muted-foreground max-w-xs">
              Creating beautiful, functional digital experiences with a focus on detail and user experience.
            </p>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <span className="text-muted-foreground text-sm">
                Toggle Theme
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Connect</h4>
            <ul className="space-y-2">
              {[
                { name: 'Twitter', url: 'https://twitter.com' },
                { name: 'GitHub', url: 'https://github.com' },
                { name: 'LinkedIn', url: 'https://linkedin.com' },
                { name: 'Dribbble', url: 'https://dribbble.com' },
                { name: 'Instagram', url: 'https://instagram.com' },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.url}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Subscribe</h4>
            <p className="text-muted-foreground mb-4">
              Stay updated with my latest projects and articles.
            </p>
            <form className="flex items-center">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex h-10 w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button type="submit" className="inline-flex items-center justify-center h-10 rounded-r-md border border-input bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link 
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}