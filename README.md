# VINCI — Site institucional

Site de uma montadora fictícia de veículos elétricos, desenvolvido para o TDE 02 da disciplina de Frameworks.
O layout de referência está em `docs/PROJETO-VINCI.png`.

## Tecnologias

- HTML5
- CSS3 + [Tailwind CSS v4](https://tailwindcss.com/) (via Tailwind CLI)
- JavaScript puro

## Páginas

| Arquivo          | Conteúdo                                                                 |
| ---------------- | ------------------------------------------------------------------------ |
| `index.html`     | Home: banner do Model V3, comparativo V2 × V1, chamadas e fotos          |
| `modelo-v2.html` | Página do Model V2: destaque, números, features, anatomia do carro e FAQ |

## Estrutura

```
/
├── index.html
├── modelo-v2.html
├── src/
│   ├── css/input.css   
│   └── js/
│       ├── layout.js    
│       └── header.js    
├── dist/css/style.css   
├── assets/              
└── docs/PROJETO-VINCI.png
```

## Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Gere o CSS:
   ```bash
   npm run build   
   npm run dev     
   ```
3. Abra o `index.html` no navegador.

> Sempre que adicionar ou mudar classes do Tailwind, rode `npm run build` (ou deixe o `npm run dev` aberto).

## Header e footer

O header e o footer são iguais em todas as páginas. Em vez de repetir o HTML, cada página tem:

```html
<body data-pagina="home">
    <div id="header"></div>
    ...
    <div id="footer"></div>

    <script src="src/js/layout.js"></script>
    <script src="src/js/header.js"></script>
</body>
```

O `layout.js` monta o HTML a partir de arrays (`linksMenu`, `modelos`, `linksNavegue`, `colunasFooter`) e substitui essas divs.
Para adicionar ou mudar um link, basta editar o array correspondente.

O atributo `data-pagina` no `<body>` indica qual item do menu fica destacado (`home`, `sobre`, `veiculos`, `servicos`, `test-drive`).

## Identidade visual

| Cor        | Hex       | Uso                                  |
| ---------- | --------- | ------------------------------------ |
| vinci-red  | `#E3182D` | logo, botão principal, destaques     |
| ink        | `#1A1A1A` | títulos e texto principal            |
| muted      | `#8C8C8C` | textos secundários                   |
| line       | `#E6E6E6` | divisórias                           |
| paper      | `#FFFFFF` | fundo                                |

Fontes (Google Fonts): **Genos** para títulos, menu e botões; **Montserrat** para textos.