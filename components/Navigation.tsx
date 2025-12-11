'use client';

import { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FiPhoneCall, FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuItems = [
    { label: '24/7 Ontstoppingsdienst', href: '/ontstoppingsdienst', badge: '24/7' },
    { label: 'Rioolonderhoud & Inspectie', href: '/rioolonderhoud-inspectie', badge: 'Onderhoud' },
    { label: 'Camera inspectie', href: '/riool-camera-inspectie', badge: 'Inspectie' },
    { label: 'Rioolreiniging & preventie', href: '/rioolreiniging-preventie', badge: 'Preventie' },
    { label: 'Toilet, badkamer & keuken', href: '/toilet-badkamer-keuken-ontstoppen', badge: 'Afvoer' },
    { label: 'Spoed ontstoppingsservice', href: '/spoed-ontstoppingsservice', badge: 'Spoed' },
  ];

  const navLinks = [
    { label: 'Over ons', href: '#over' },
    { label: 'Diensten', href: '#diensten' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow ${scrolled ? 'shadow-md' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold tracking-tighter uppercase text-slate-950 hover:text-slate-900 transition-colors">
          Rioolhulp Gils
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-slate-900 transition-colors inline-flex items-center gap-2">
              Diensten
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5l3 3 3-3" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {menuItems.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  asChild
                  className="flex items-start gap-3 text-slate-700 hover:bg-slate-50 focus:bg-slate-50"
                >
                  <a href={item.href}>
                    <div className="text-xs font-semibold text-sky-600">{item.badge}</div>
                    <div className="text-sm leading-tight">{item.label}</div>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-slate-900 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a
            href="tel:+31851304693"
            className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            Bel nu +31 85 130 4693
          </a>
        </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Open menu"
          >
            <FiMenu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-5/6 max-w-sm bg-white shadow-2xl p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <a
                href="/"
                className="text-xl font-bold tracking-tighter uppercase text-slate-950"
                onClick={() => setOpen(false)}
              >
                Rioolhulp Gils
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-100"
                aria-label="Sluit menu"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Diensten</div>
              <div className="space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-start justify-between gap-3 py-2 text-slate-900"
                  >
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className="text-xs font-semibold text-sky-600">{item.badge}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Navigatie</div>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-semibold text-slate-900"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <a
                href="tel:+31851304693"
                className="w-full text-center bg-slate-950 text-white px-4 py-3 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors"
                onClick={() => setOpen(false)}
              >
                Bel nu +31 85 130 4693
              </a>
              <a
                href="mailto:service@rioolhulp-gils.nl"
                className="w-full text-center border border-slate-200 text-slate-900 px-4 py-3 rounded-full text-sm font-semibold hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                Mail ons
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden bg-white border-t border-slate-200 shadow-[0_-4px_12px_rgba(15,23,42,0.08)]">
        <div className="max-w-7xl mx-auto grid grid-cols-2">
          <a
            href="tel:+31851304693"
            className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 transition-colors"
          >
            <FiPhoneCall className="w-4 h-4" />
            Bel nu
          </a>
          <a
            href="https://wa.me/31851304693"
            className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-50 transition-colors"
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
