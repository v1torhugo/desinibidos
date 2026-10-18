# Desinibidos Futebol Clube

Site em Next.js (App Router), React e Tailwind CSS, publicado como arquivos estáticos no GitHub Pages.

O projeto usado no deploy está na raiz deste repositório, com páginas em `src/app` e imagens em `public`. A pasta `desinibidos/next-app` não é usada pelo workflow.

## Desenvolvimento local

Use Node.js 22 e npm:

```bash
npm ci
npm run dev
```

Acesse http://localhost:3000. Sem `NEXT_PUBLIC_BASE_PATH`, o site funciona na raiz do endereço local.

## Publicar no GitHub Pages

1. No repositório do GitHub, abra **Settings → Pages → Build and deployment**.
2. Em **Source**, selecione **GitHub Actions**.
3. Faça commit e push das alterações, incluindo `.github/workflows/deploy-pages.yml`, para a branch `main`.
4. Na aba **Actions**, acompanhe o workflow **Deploy GitHub Pages**. Também é possível iniciá-lo por **Run workflow** depois que o arquivo estiver na `main`.
5. Ao concluir, o endereço aparece em **Settings → Pages** e no ambiente **github-pages**. Para este repositório, sem domínio personalizado, o endereço é https://v1torhugo.github.io/desinibidos/.

O workflow instala as dependências com `npm ci`, executa `npm run build` e publica somente a pasta `out`. Não é necessário versionar `out` nem criar uma branch `gh-pages`.

### Por que apareceu apenas o README?

Ao publicar diretamente a branch com o código-fonte, o GitHub Pages não compila o Next.js automaticamente. Sem um `index.html` gerado na pasta publicada, ele pode usar `README.md` como entrada. O workflow gera o HTML, CSS e JavaScript antes de publicar.

### Configuração aplicada

- `output: "export"`: gera o site estático em `out` durante o build.
- `trailingSlash: true`: gera páginas como `sobre/index.html`, permitindo acesso direto e atualização das rotas no Pages.
- `images.unoptimized: true`: serve as imagens sem depender do servidor de otimização do Next.js.
- `basePath`: usa `NEXT_PUBLIC_BASE_PATH`, fornecido pelo workflow a partir do endereço configurado no Pages. Neste repositório, normalmente será `/desinibidos`.
- `src/lib/asset-path.ts`: aplica o mesmo prefixo às imagens em `public`, incluindo as fotos e a imagem padrão do elenco. Novas imagens com caminhos como `/foto.png` devem usar `assetPath("/foto.png")`. Os componentes `Link` do Next.js já adicionam o prefixo automaticamente.

Se mudar o endereço ou configurar um domínio personalizado, execute um novo deploy: o prefixo é definido durante o build.

## Validar o build localmente

```bash
npm run build
```

Confira `out/index.html`, `out/sobre/index.html`, `out/elenco/index.html` e `out/contatos/index.html`. Para visualizar o resultado, sirva `out` com um servidor de arquivos estáticos. `npm start` executa `next start`, que não é compatível com `output: "export"`; use `npm run dev` para desenvolvimento.

Para gerar o mesmo prefixo do Pages no PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = "/desinibidos"
npm run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
```

Nesse caso, o servidor de prévia precisa servir `out` sob `/desinibidos/`.

## Limitações atuais

O Pages hospeda arquivos estáticos e não executa um servidor Next.js. O formulário de contato atual é apenas visual: ainda não possui integração para enviar mensagens. Para habilitar o envio, será necessário conectar um serviço externo ou uma API hospedada separadamente.

Referências: [exportação estática do Next.js](https://nextjs.org/docs/app/guides/static-exports), [basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath) e [origem de publicação do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
