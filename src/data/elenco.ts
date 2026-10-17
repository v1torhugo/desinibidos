export type ElencoMember = {
  id: string;
  name: string;
  role: string;
  photo?: string;
};

// Substitua os registros provisórios pelos integrantes reais.
// Para adicionar uma pessoa, inclua um objeto com id único, name (nome)
// e role (setor ou função). A página exibe todos na ordem desta lista.
// Fotos: salve em public/elenco/ e informe photo: "/elenco/nome-do-jogador.jpg".
// Sem photo, o cartão usa a imagem padrão.
export const elenco: ElencoMember[] = [
  { id: "goleiro-1", name: "A confirmar", role: "Goleiro" },
  { id: "defensor-1", name: "A confirmar", role: "Zagueiro" },
  { id: "defensor-2", name: "A confirmar", role: "Lateral" },
  { id: "meio-campista-1", name: "A confirmar", role: "Volante" },
  { id: "meio-campista-2", name: "A confirmar", role: "Meia" },
  {
    id: "atacante-1",
    name: "Victor Hugo Santos Pereira",
    role: "Atacante",
    photo: "/elenco/victor-hugo.jpg",
  },
  { id: "comissao-1", name: "A confirmar", role: "Treinador" },
  { id: "apoio-1", name: "A confirmar", role: "Apoio" },
];
