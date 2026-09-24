const menuVeiculos = document.getElementById('menu-veiculos');
const botaoVeiculos = document.getElementById('link-veiculos');
const megaMenu = document.getElementById('mega-menu');
let timerFechar;

function abrirMegaMenu() {
  clearTimeout(timerFechar);
  megaMenu.classList.remove('hidden');
  botaoVeiculos.setAttribute('aria-expanded', 'true');
}

function fecharMegaMenu() {
  megaMenu.classList.add('hidden');
  botaoVeiculos.setAttribute('aria-expanded', 'false');
}

menuVeiculos.addEventListener('mouseenter', abrirMegaMenu);

menuVeiculos.addEventListener('mouseleave', function () {
  timerFechar = setTimeout(fecharMegaMenu, 150);
});

botaoVeiculos.addEventListener('click', function () {
  if (megaMenu.classList.contains('hidden')) {
    abrirMegaMenu();
  } else {
    fecharMegaMenu();
  }
});

document.addEventListener('click', function (evento) {
  if (!menuVeiculos.contains(evento.target)) {
    fecharMegaMenu();
  }
});

const botaoMobile = document.getElementById('botao-mobile');
const menuMobile = document.getElementById('menu-mobile');

function abrirMenuMobile() {
  menuMobile.classList.remove('hidden');
  botaoMobile.setAttribute('aria-expanded', 'true');
  botaoMobile.textContent = '✕';
  document.body.style.overflow = 'hidden';
}

function fecharMenuMobile() {
  menuMobile.classList.add('hidden');
  botaoMobile.setAttribute('aria-expanded', 'false');
  botaoMobile.textContent = '☰';
  document.body.style.overflow = '';
}

botaoMobile.addEventListener('click', function () {
  if (menuMobile.classList.contains('hidden')) {
    abrirMenuMobile();
  } else {
    fecharMenuMobile();
  }
});

document.addEventListener('keydown', function (evento) {
  if (evento.key === 'Escape') {
    if (!megaMenu.classList.contains('hidden')) {
      fecharMegaMenu();
      botaoVeiculos.focus();
    }
    if (!menuMobile.classList.contains('hidden')) {
      fecharMenuMobile();
      botaoMobile.focus();
    }
  }
});
