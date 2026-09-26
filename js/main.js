/**
 * LOUCOS POR VITROLA - Script Principal (Global)
 * Menu responsivo, header dinâmico, triggers de carrinho e utilitários de interface
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Sticky com efeito dinâmico ao rolar
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('bg-brand-black/95', 'backdrop-blur-md', 'shadow-lg', 'shadow-black/50', 'py-3');
        header.classList.remove('bg-brand-black-soft/90', 'py-4');
      } else {
        header.classList.remove('bg-brand-black/95', 'backdrop-blur-md', 'shadow-lg', 'shadow-black/50', 'py-3');
        header.classList.add('bg-brand-black-soft/90', 'py-4');
      }
    });
  }

  // 2. Menu Mobile (Hamburger)
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

  function abrirMenuMobile() {
    if (!mobileMenuDrawer || !mobileMenuBackdrop) return;
    mobileMenuBackdrop.classList.remove('hidden');
    setTimeout(() => {
      mobileMenuBackdrop.classList.add('opacity-100');
      mobileMenuDrawer.classList.remove('-translate-x-full');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function fecharMenuMobile() {
    if (!mobileMenuDrawer || !mobileMenuBackdrop) return;
    mobileMenuDrawer.classList.add('-translate-x-full');
    mobileMenuBackdrop.classList.remove('opacity-100');
    setTimeout(() => {
      mobileMenuBackdrop.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
  }

  if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', abrirMenuMobile);
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', fecharMenuMobile);
  if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener('click', (e) => {
      if (e.target === mobileMenuBackdrop) fecharMenuMobile();
    });
  }

  // Fechar menu mobile ao clicar em qualquer link interno
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', fecharMenuMobile);
  });

  // 3. Triggers Globais de Abertura do Carrinho
  document.querySelectorAll('.cart-trigger-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof abrirCarrinho === 'function') {
        abrirCarrinho();
      }
    });
  });

  // Fechar drawer ao clicar no backdrop do carrinho
  const drawerCarrinho = document.getElementById('drawer-carrinho');
  if (drawerCarrinho) {
    drawerCarrinho.addEventListener('click', (e) => {
      if (e.target === drawerCarrinho) {
        if (typeof fecharCarrinho === 'function') fecharCarrinho();
      }
    });
  }

  // 4. Tecla ESC global para fechar modais/drawers abertos
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      fecharMenuMobile();
      if (typeof fecharCarrinho === 'function') fecharCarrinho();
      if (typeof fecharModalProduto === 'function') fecharModalProduto();
      if (typeof fecharLightbox === 'function') fecharLightbox();
    }
  });

  // 5. Destacar página ativa no menu
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === paginaAtual || (paginaAtual === '' && href === 'index.html') || (paginaAtual === '/' && href === 'index.html')) {
      link.classList.add('active', 'text-brand-cream');
      link.setAttribute('aria-current', 'page');
    }
  });
});
