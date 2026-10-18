import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assetPath } from "@/lib/asset-path";

import { HeroBackground } from "@/components/inicio/hero-background";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const highlights = [
  {
    title: "Nossa História",
    description:
      "De um grupo de amigos para um clube com identidade, compromisso e presença no futebol local.",
    image: "/desinibidos-card-historia.png",
  },
  {
    title: "Próximo Confronto",
    description:
      "Confira a agenda, o local e os dados do próximo jogo da temporada.",
    image: null,
  },
  {
    title: "Galeria",
    description:
      "Momentos marcantes, vitórias, torcida e a energia do nosso time em campo.",
    image: null,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="relative isolate w-full overflow-hidden bg-[var(--secondary)] text-white">
        <HeroBackground />
        {/* Preserva a altura do banner com o espaço antes ocupado pelos botões. */}
        <div className="section-shell relative pt-20 pb-[13.75rem] sm:pt-24 sm:pb-44 lg:pt-28 lg:pb-48">
          <div className="flex justify-center text-center">
            <div className="w-full max-w-2xl">
              <h1 className="text-4xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                A paixão entra em campo.
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-100 sm:text-lg">
                Bem-vindo ao portal oficial do Desinibidos FC.
                <br />A amizade nos une, o futebol nos reúne e a resenha nunca
                acaba!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell page-section">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Descubra mais</p>
            <h2 className="section-title mt-3">Futebol com identidade</h2>
          </div>
          <Link
            href="/sobre"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--primary)] hover:text-[var(--primary-hover)]"
          >
            Conhecer clube <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="group overflow-hidden border border-[var(--border)] bg-white"
            >
              <div className="relative h-52 w-full overflow-hidden bg-[var(--muted)]">
                {item.image ? (
                  <Image
                    src={assetPath(item.image)}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,_rgba(6,123,166,0.08),_rgba(7,31,51,0.05))] text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                    Em breve
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
