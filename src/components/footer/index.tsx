import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/asset-path";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contatos", label: "Contato" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/desinibidos.ec/",
    label: "Instagram",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--secondary)] text-white">
      <div className="section-shell py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="flex w-fit items-center gap-3 transition-opacity duration-200 hover:opacity-95"
            >
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src={assetPath("/desinibidos-logo-atualizada.png")}
                  alt="Desinibidos FC"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-base font-black uppercase tracking-[0.2em] text-white">
                  Desinibidos
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-slate-300">
                  Futebol Clube
                </span>
              </div>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-slate-300">
              A amizade nos une, o futebol nos reúne e a resenha nunca acaba!
            </p>

            <div className="mt-1 flex items-center gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Button
                  key={label}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-slate-200 hover:border-[var(--primary)]/60 hover:bg-white/10 hover:text-[var(--primary)]"
                  aria-label={label}
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-200">
              Navegação
            </h3>

            <ul className="flex flex-col gap-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-[var(--primary)]"
                  >
                    <span className="text-[var(--primary)]">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-200">
              Contato
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--primary)]" />
                <span>Belo Horizonte, Minas Gerais — Brasil</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-[var(--primary)]" />
                <a
                  href="mailto:contatodesinibidos@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  contatodesinibidos@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-[var(--primary)]" />
                <a
                  href="tel:+5531999999999"
                  className="transition-colors hover:text-white"
                >
                  (31) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Desinibidos Futebol Clube. Todos os
            direitos reservados.
          </p>
          <p>
            Feito com <span className="text-[var(--primary)]">♥</span> para os
            apaixonados pelo futebol
          </p>
        </div>
      </div>
    </footer>
  );
}
