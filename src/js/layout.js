const linksMenu = [
  { id: 'home', texto: 'Home', link: 'index.html' },
  { id: 'sobre', texto: 'Sobre', link: '#sobre' },
  { id: 'veiculos', texto: 'Veículos', link: '' },
  { id: 'servicos', texto: 'Serviços', link: '#servicos' },
  { id: 'test-drive', texto: 'Test Drive', link: '#test-drive' },
];

const modelos = [
  { nome: 'Modelo V1', imagem: 'assets/megamenu/Model v1 megamenu.png', verMais: '#', comprar: '#' },
  { nome: 'Modelo V2', imagem: 'assets/megamenu/Model v2 megamenu.png', verMais: 'modelo-v2.html', comprar: '#' },
  { nome: 'Modelo V3', imagem: 'assets/megamenu/Model v3 megamenu.png', verMais: '#', comprar: '#' },
  { nome: 'Modelo V4', imagem: 'assets/megamenu/Model v4 megamenu.png', verMais: '#', comprar: '#' },
  { nome: 'Modelo V5', imagem: 'assets/megamenu/Model v2 megamenu.png', verMais: '#', comprar: '#' },
  { nome: 'Modelo V6', imagem: 'assets/megamenu/Model v2 megamenu.png', verMais: '#', comprar: '#' },
];

const linksNavegue = [
  { texto: 'Ofertas', link: '#ofertas', destaque: false },
  { texto: 'Test Drive', link: '#test-drive', destaque: true },
  { texto: 'Lojas', link: '#lojas', destaque: false },
  { texto: 'Serviços', link: '#servicos', destaque: false },
  { texto: 'SAC', link: '#sac', destaque: false },
  { texto: 'Privacidade', link: '#privacidade', destaque: false },
];

const colunasFooter = [
  {
    titulo: 'Sobre',
    links: [
      { texto: 'A Marca', link: '#' },
      { texto: 'História', link: '#' },
      { texto: 'Qualidade', link: '#' },
      { texto: 'Onde estamos', link: '#' },
      { texto: 'Investidores', link: '#' },
    ],
  },
  {
    titulo: 'Contato',
    links: [
      { texto: 'Fale Conosco', link: '#' },
      { texto: 'Atendimento', link: '#' },
      { texto: 'SAC', link: '#' },
    ],
  },
  {
    titulo: 'SAC',
    links: [
      { texto: 'Canais Oficiais', link: '#' },
      { texto: 'Redes Sociais', link: '#' },
      { texto: 'Suporte', link: '#' },
    ],
  },
];

let cardsModelos = '';
modelos.forEach(function (modelo) {
  cardsModelos += `
    <li class="modelo-card">
      <a href="${modelo.verMais}" class="block w-full max-w-[160px]">
        <img src="${modelo.imagem}" alt="${modelo.nome}" width="240" height="120" loading="lazy">
      </a>
      <p class="modelo-nome">${modelo.nome}</p>
      <p class="modelo-links"><a href="${modelo.verMais}">Ver mais</a> <a href="${modelo.comprar}">Comprar</a></p>
    </li>
  `;
});

let itensNavegue = '';
linksNavegue.forEach(function (item) {
  let classes = 'navegue-link';
  if (item.destaque) {
    classes += ' text-vinci-red';
  }
  itensNavegue += `<li><a href="${item.link}" class="${classes}">${item.texto}</a></li>`;
});

let itensMenu = '';
linksMenu.forEach(function (item) {
  if (item.id === 'veiculos') {
    itensMenu += `
      <li id="menu-veiculos">
        <button type="button" id="link-veiculos" class="nav-link" aria-expanded="false" aria-controls="mega-menu">${item.texto}</button>

        <div id="mega-menu" class="hidden absolute left-0 right-0 top-full border-b border-line bg-paper shadow-md">
          <div class="mx-auto flex max-w-[1280px] gap-10 px-10 py-10">
            <ul class="grid flex-1 grid-cols-3 gap-x-8 gap-y-10">
              ${cardsModelos}
            </ul>
            <div class="w-48 border-l border-line pl-10">
              <p class="eyebrow border-b border-line pb-3">Navegue</p>
              <ul class="mt-6 flex flex-col gap-5">
                ${itensNavegue}
              </ul>
            </div>
          </div>
        </div>
      </li>
    `;
  } else {
    itensMenu += `<li><a href="${item.link}" id="link-${item.id}" class="nav-link">${item.texto}</a></li>`;
  }
});

let itensMenuMobile = '';
linksMenu.forEach(function (item) {
  if (item.id === 'veiculos') {
    let listaModelos = '';
    modelos.forEach(function (modelo) {
      listaModelos += `<li><a href="${modelo.verMais}">${modelo.nome}</a></li>`;
    });

    itensMenuMobile += `
      <li class="border-b border-line py-5">
        <p class="font-display text-sm uppercase tracking-[0.12em] text-ink">${item.texto}</p>
        <ul class="mt-4 flex flex-col gap-3 text-sm text-muted">
          ${listaModelos}
        </ul>
      </li>
    `;
  } else {
    itensMenuMobile += `<li><a href="${item.link}" class="mobile-link">${item.texto}</a></li>`;
  }
});

const headerHTML = `
  <header class="sticky top-0 z-50 border-b border-line bg-paper">
    <div class="mx-auto flex h-[70px] max-w-[1280px] items-center justify-between px-6 lg:px-10">

      <a href="index.html" class="flex items-center gap-4">
        <img src="assets/icons/Logo.png" width="30" height="20">
        <span class="flex h-[19px] w-[156px] items-center justify-between font-display text-[34px] leading-[19px] uppercase text-ink"><span>V</span><span>i</span><span>n</span><span>c</span><span>i</span></span>
      </a>

      <nav class="hidden lg:block">
        <ul class="flex items-center gap-12">
          ${itensMenu}
        </ul>
      </nav>

      <button type="button" id="botao-mobile" class="text-2xl text-ink lg:hidden" aria-expanded="false" aria-controls="menu-mobile" aria-label="Abrir menu">☰</button>
    </div>

    <div id="menu-mobile" class="hidden fixed left-0 right-0 top-[71px] bottom-0 overflow-y-auto bg-paper px-6 pb-10 lg:hidden">
      <ul>
        ${itensMenuMobile}
      </ul>
    </div>
  </header>
`;

let colunasHTML = '';
colunasFooter.forEach(function (coluna) {
  let links = '';
  coluna.links.forEach(function (item) {
    links += `<li><a href="${item.link}" class="footer-link">${item.texto}</a></li>`;
  });

  colunasHTML += `
    <div>
      <h2 class="footer-titulo">${coluna.titulo}</h2>
      <ul class="mt-6 flex flex-col gap-3">
        ${links}
      </ul>
    </div>
  `;
});

const footerHTML = `
  <footer class="border-t border-line bg-paper">
    <div class="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
      <div class="flex flex-col gap-12 lg:flex-row lg:justify-between">

        <a href="index.html" class="flex items-center gap-4 self-start">
          <img src="assets/icons/Logo.png" width="30" height="20">
          <span class="flex h-[19px] w-[156px] items-center justify-between font-display text-[34px] leading-[19px] uppercase text-ink"><span>V</span><span>i</span><span>n</span><span>c</span><span>i</span></span>
        </a>

        <div class="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16 lg:gap-24">
          ${colunasHTML}
        </div>

      </div>

      <p class="mt-16 max-w-[22rem] text-[9px] uppercase leading-loose tracking-[0.5em] text-muted">
        ©Copyright 2026. Todos os direitos reservados.
      </p>
    </div>
  </footer>
`;

document.getElementById('header').outerHTML = headerHTML;
document.getElementById('footer').outerHTML = footerHTML;

const pagina = document.body.dataset.pagina;
const linkAtual = document.getElementById('link-' + pagina);
if (linkAtual) {
  linkAtual.classList.add('ativo');
}
