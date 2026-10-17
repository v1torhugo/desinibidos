import { ArrowRight, Trophy, Shield, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const pillars = [
  {
    title: "Tradição",
    description:
      "Uma identidade construída com paixão, respeito e compromisso dentro e fora de campo.",
    icon: Trophy,
  },
  {
    title: "Organização",
    description:
      "Estrutura, disciplina e foco para crescer com consistência e profissionalismo.",
    icon: Shield,
  },
  {
    title: "Unidade",
    description:
      "O clube é feito por pessoas que acreditam no mesmo sonho e no mesmo time.",
    icon: Users,
  },
];

export default function Sobre() {
  return (
    <main className="section-shell page-section">
      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Sobre o clube</p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] text-[var(--secondary)] md:text-5xl">
            O espírito do Desinibidos FC
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5 text-base leading-8 text-[var(--muted-foreground)]">
            <p>
              O Desinibidos FC nasceu do futebol de rua, da amizade e da vontade
              de transformar cada partida em uma história.
            </p>
            <p>
              mais do que um time, somos um grupo de pessoas unidas por paixão,
              rivalidade saudável e muita energia em campo.
            </p>
            <p>
              Aqui, o futebol é vivido com identidade, respeito e personalidade.
              A marca do clube é a busca por evolução constante, sem perder sua
              essência.
            </p>
          </div>

          <div className="club-card bg-[var(--secondary)] text-white">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-300">
              Valores
            </p>
            <ul className="mt-6 space-y-4 text-base text-slate-200">
              <li>• Competitividade</li>
              <li>• União</li>
              <li>• Respeito</li>
              <li>• Paixão</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {pillars.map(({ title, description, icon: Icon }) => (
          <Card
            key={title}
            className="h-full border border-[var(--border)] bg-white"
          >
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                <Icon className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardTitle>{title}</CardTitle>
              <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                {description}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="mt-16 flex justify-center">
        <Button
          asChild
          size="lg"
          className="rounded-full uppercase tracking-[0.12em]"
        >
          <Link href="/contatos">
            Fale conosco <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
}
