# 🎨 Design System - Desinibidos FC

Todas as cores do projeto são definidas em `src/app/globals.css` usando um sistema centralizado. Qualquer novo componente/página herda automaticamente a paleta de cores.

## 📋 Paleta de Cores

**Cores Primárias:**

- `--primary`: Azul claro (header/footer background)
- `--primary-foreground`: Branco (texto sobre primary)

**Uso:**

- `bg-primary` → Aplica a cor primária (azul)
- `text-primary-foreground` → Aplica a cor do texto (branco)
- `bg-primary-foreground` → Aplica cor branca como fundo
- `text-primary` → Aplica azul como texto

## 🧩 Classes Base Reutilizáveis

Todas essas classes estão em `src/app/globals.css` dentro do `@layer components`.

### Header

```tsx
<header>
  // Automaticamente: bg-primary, text-primary-foreground, sticky, shadow, etc.
</header>
```

### Footer

```tsx
<footer>// Automaticamente: bg-primary, text-primary-foreground</footer>
```

### Seções

```tsx
<section className="section">
  <h2 className="section-header">Título</h2>
  <p className="section-subtitle">Subtítulo</p>
</section>
```

### Cards

```tsx
<div className="card-base">// Estilo padrão com bordas e hover</div>
```

### Botões

```tsx
// Botão primário (azul)
<button className="btn-primary">Clique aqui</button>

// Botão secundário (branco)
<button className="btn-secondary">Clique aqui</button>
```

## ✅ Vantagens

- ✅ **Centralizado**: Todas as cores em um único lugar (`globals.css`)
- ✅ **Consistente**: Novos componentes herdam automaticamente
- ✅ **Fácil de manter**: Mudar uma cor afeta todo o projeto
- ✅ **Sem repetição**: Não precisa copiar classes de página em página

## 🚀 Exemplo: Criar uma Página Nova

```tsx
export default function NovaPage() {
  return (
    <main>
      <section className="section">
        <h1 className="section-header">Bem-vindo</h1>
        <p className="section-subtitle">Descrição</p>

        <div className="card-base">Seu conteúdo</div>
      </section>
    </main>
  );
}
```

A página automaticamente terá as cores do design system!
