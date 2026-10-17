"use client";

import Image from "next/image";
import { useState } from "react";

const defaultPhoto = "/elenco/perfil-padrao.svg";

type MemberPhotoProps = {
  name: string;
  photo?: string;
};

export function MemberPhoto({ name, photo }: MemberPhotoProps) {
  const [failedPhoto, setFailedPhoto] = useState<string>();
  const source = photo && photo !== failedPhoto ? photo : defaultPhoto;

  return (
    <Image
      src={source}
      alt={source === defaultPhoto ? "Imagem padrão de integrante do elenco" : `Foto de ${name}`}
      fill
      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
      className="object-cover object-top transition-transform duration-300 motion-safe:group-hover:scale-105"
      onError={source !== defaultPhoto ? () => setFailedPhoto(photo) : undefined}
    />
  );
}
