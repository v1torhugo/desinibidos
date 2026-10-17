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
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--secondary)] text-white shadow-[0_10px_30px_rgba(7,31,51,0.18)] backdrop-blur-md">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-95"
          >
            <div className="relative h-16 w-16 shrink-0">
              <Image
                src="/desinibidos-logo-atualizada.png"
                alt="Desinibidos FC"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>

            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-base font-black uppercase tracking-[0.2em] text-white">
                Desinibidos
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-slate-300">
                Futebol Clube
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "relative px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-200",
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-slate-300 hover:text-white",
                    "after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-6 after:-translate-x-1/2 after:rounded-full after:bg-[var(--primary)] after:transition-all after:duration-200",
                    isActive ? "after:opacity-100" : "after:opacity-0",
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center md:flex">
            <Button
              asChild
              size="sm"
              className="rounded-full uppercase tracking-[0.12em] shadow-[0_14px_30px_rgba(6,123,166,0.28)]"
            >
              <Link href="/contatos">Fale Conosco</Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 md:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-80 border-l border-white/10 bg-[var(--secondary)] p-0 text-white"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      src="/desinibidos-logo-atualizada.png"
                      alt="Desinibidos FC"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
                    Desinibidos
                  </span>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="text-slate-200 hover:bg-white/5"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <nav className="flex flex-col gap-2 px-4 py-5">
                {navLinks.map(({ href, label }) => {
                  const isActive = pathname === href;

                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-200",
                        isActive
                          ? "bg-white/8 text-[var(--primary)]"
                          : "text-slate-300 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {label}
                      <ChevronRight className="h-4 w-4 opacity-60" />
                    </Link>
                  );
                })}
              </nav>

              <Separator className="mx-4 bg-white/10" />

              <div className="px-4 py-5">
                <Button
                  asChild
                  className="w-full rounded-full uppercase tracking-[0.14em]"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/contatos">Fale Conosco</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
