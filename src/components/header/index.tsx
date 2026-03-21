"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/elenco", label: "Elenco" },
  { href: "/galeria", label: "Galeria" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary text-primary-foreground shadow-lg">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-opacity hover:opacity-90"
          >
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/images/desinibidos-removebg-preview.png"
                alt="Desinibidos FC"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-extrabold text-base tracking-wide uppercase">
                Desinibidos
              </span>
              <span className="text-xs font-medium text-primary-foreground/70 tracking-widest uppercase">
                Futebol Clube
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 tracking-wide uppercase",
                    isActive
                      ? "text-yellow-300"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10",
                  )}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-yellow-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="bg-yellow-400 text-black font-bold hover:bg-yellow-300 uppercase tracking-wide shadow-md"
            >
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-primary-foreground hover:bg-white/10"
                aria-label="Abrir menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-72 bg-primary text-primary-foreground border-l border-white/10 p-0"
            >
              {/* Sheet Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8">
                    <Image
                      src="/images/desinibidos-removebg-preview.png"
                      alt="Desinibidos FC"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <span className="font-extrabold text-sm uppercase tracking-wide">
                    Desinibidos FC
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="text-primary-foreground hover:bg-white/10 -mr-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Sheet Nav */}
              <nav className="flex flex-col px-4 py-4 gap-1">
                {navLinks.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all",
                        isActive
                          ? "bg-white/15 text-yellow-300"
                          : "text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground",
                      )}
                    >
                      {label}
                      <ChevronRight className="h-4 w-4 opacity-50" />
                    </Link>
                  );
                })}
              </nav>

              <Separator className="bg-white/10 mx-4" />

              <div className="px-4 py-4">
                <Button
                  asChild
                  className="w-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 uppercase tracking-wide"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/contato">Fale Conosco</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
