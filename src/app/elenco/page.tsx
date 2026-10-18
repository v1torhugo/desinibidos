import type { Metadata } from "next";
import Image from "next/image";

import { MemberPhoto } from "@/components/elenco/member-photo";
import { elenco } from "@/data/elenco";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Elenco | Desinibidos Futebol Clube",
  description:
    "Conheça os jogadores, a comissão técnica e as pessoas que fazem parte do Desinibidos Futebol Clube.",
};

export default function ElencoPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--secondary)] text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,123,166,0.3),_transparent_60%)]" />
        <div className="section-shell relative flex items-center justify-between gap-8 py-14 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-sky-300">
              Desinibidos Futebol Clube
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
              Nosso elenco
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Quem veste a camisa e quem faz tudo acontecer. Conheça as pessoas
              que constroem o nosso time dentro e fora de campo.
            </p>
          </div>
          <Image
            src={assetPath("/desinibidos-logo-atualizada.png")}
            alt=""
            width={160}
            height={160}
            className="hidden h-40 w-40 shrink-0 object-contain md:block"
          />
        </div>
      </section>

      <div className="section-shell page-section">
        {elenco.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-[var(--border)] p-6 text-sm text-[var(--muted-foreground)]">
            Os integrantes do elenco serão anunciados em breve.
          </p>
        ) : (
          <ul aria-label="Integrantes do elenco" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {elenco.map((member) => (
              <li key={member.id}>
                <article className="group h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_12px_35px_rgba(7,31,51,0.04)]">
                  <div className="relative aspect-[5/6] overflow-hidden bg-[var(--secondary)]">
                    <MemberPhoto name={member.name} photo={member.photo} />
                  </div>
                  <div className="border-t-4 border-[var(--primary)] p-5">
                    <h2 className="break-words text-xl font-black uppercase tracking-[-0.03em] text-[var(--secondary)]">
                      {member.name}
                    </h2>
                    <p className="eyebrow mt-2 break-words">{member.role}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
