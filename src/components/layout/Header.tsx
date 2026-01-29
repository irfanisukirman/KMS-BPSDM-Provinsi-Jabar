"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/icons/Logo';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/knowledge', label: 'Knowledge' },
  { href: '/discussion', label: 'Diskusi' },
  { href: '/learning-resources', label: 'Sumber Belajar' },
  { href: '/about', label: 'Tentang KMS' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          'relative group text-sm font-medium transition-colors hover:text-white py-2',
          isActive ? 'text-white font-bold' : 'text-primary-foreground/90'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {label}
        <span
          className={cn(
            'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent transition-all duration-300 ease-out',
            isActive ? 'w-full' : 'w-0 group-hover:w-full'
          )}
        />
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-10 w-10 text-white" />
          <div className="font-headline flex flex-col -space-y-1">
            <span className="text-lg font-bold leading-tight tracking-tight">KMS BPSDM</span>
            <span className="text-sm font-normal leading-tight">Provinsi Jawa Barat</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-primary text-primary-foreground p-0">
              <div className="flex justify-between items-center p-4 border-b border-primary/20">
                 <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo className="h-8 w-8 text-white" />
                     <div className="font-headline flex flex-col -space-y-1">
                      <span className="text-base font-bold leading-tight">KMS BPSDM</span>
                      <span className="text-xs font-normal leading-tight">Provinsi Jawa Barat</span>
                    </div>
                  </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Tutup menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-4 p-6">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
