import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactItems = [
  {
    title: "Email",
    value: "contatodesinibidos@gmail.com",
    href: "mailto:contatodesinibidos@gmail.com",
    icon: Mail,
  },
  {
    title: "Telefone",
    value: "(31) 99999-9999",
    href: "tel:+5531999999999",
    icon: Phone,
  },
  {
    title: "Localização",
    value: "Belo Horizonte, Minas Gerais — Brasil",
    href: null,
    icon: MapPin,
  },
];

export default function Contatos() {
  return (
    <main className="section-shell page-section">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div>
            <p className="eyebrow">Contato</p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] text-[var(--secondary)] sm:text-5xl">
              Fale com o clube
            </h1>
          </div>

          <p className="text-base leading-7 text-[var(--muted-foreground)]">
            Se você quiser conversar sobre o time, parcerias, eventos ou
            qualquer outra demanda, estamos à disposição.
          </p>

          <div className="space-y-4">
            {contactItems.map(({ title, value, href, icon: Icon }) => (
              <div
                key={title}
                className="club-card flex items-start gap-4 bg-white p-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                    {title}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-2 inline-block text-base font-semibold text-[var(--secondary)] hover:text-[var(--primary)]"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-2 text-base font-semibold text-[var(--secondary)]">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="border border-[var(--border)] bg-white">
          <CardHeader>
            <CardTitle>Envie uma mensagem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-[var(--secondary)]">
                <span>Nome</span>
                <input
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]"
                  placeholder="Seu nome"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-[var(--secondary)]">
                <span>Email</span>
                <input
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]"
                  placeholder="Seu email"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm font-medium text-[var(--secondary)]">
              <span>Assunto</span>
              <input
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="Sobre o que você quer falar?"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-[var(--secondary)]">
              <span>Mensagem</span>
              <textarea
                rows={5}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="Escreva sua mensagem"
              />
            </label>

            <Button className="w-full rounded-full uppercase tracking-[0.12em]">
              Enviar mensagem
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
