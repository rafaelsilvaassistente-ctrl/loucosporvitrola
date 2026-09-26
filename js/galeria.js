/**
 * LOUCOS POR VITROLA - Módulo de Galeria & Lightbox
 * Grid editorial de restaurações reais, filtros por fabricante e visualizador em alta resolução
 */

const itensGaleria = [
  {
    id: 1,
    titulo: "Akai AP-A2",
    categoria: "Akai",
    descricao: "Restauração estética completa e alinhamento do mecanismo de braço automático.",
    imagem: "assets/images/akai-ap-a2.jpg",
    tags: ["Japão", "Belt Drive", "Automático"]
  },
  {
    id: 2,
    titulo: "Sony PS-X23",
    categoria: "Sony",
    descricao: "Revisão eletrônica do sistema Direct Drive e polimento artesanal da tampa em acrílico.",
    imagem: "assets/images/sony-psx23.jpg",
    tags: ["Direct Drive", "Vintage 80s", "Japão"]
  },
  {
    id: 3,
    titulo: "Gradiente DD-200Q",
    categoria: "Gradiente",
    descricao: "Restauração de topo de linha nacional. Quartzo estabilizado e novo cabeamento blindado.",
    imagem: "assets/images/gradiente-dd200q.jpg",
    tags: ["Direct Drive Quartz", "Top de Linha", "Braço em S"]
  },
  {
    id: 4,
    titulo: "Kenwood BD1",
    categoria: "Kenwood",
    descricao: "Revisão mecânica, lubrificação de mancal com óleo sintético e troca de rolamentos.",
    imagem: "assets/images/kenwood-bd1.jpg",
    tags: ["Precisão Japonesa", "Belt Drive", "Hi-Fi"]
  },
  {
    id: 5,
    titulo: "Garrard 6300",
    categoria: "Garrard",
    descricao: "Trabalho primoroso em marcenaria nobre, revisão de idler e regulagem estroboscópica.",
    imagem: "assets/images/garrard-6300.jpg",
    tags: ["Madeira Nobre", "Inglaterra", "Clássico"]
  },
  {
    id: 6,
    titulo: "Gradiente DD-100Q",
    categoria: "Gradiente",
    descricao: "Direct Drive clássico. Calibração estroboscópica, revisão de fonte e anti-skating.",
    imagem: "assets/images/gradiente-dd100q.jpg",
    tags: ["Nacional", "Quartzo", "Audiófilo"]
  },
  {
    id: 7,
    titulo: "Gradiente D-40",
    categoria: "Gradiente",
    descricao: "Restauração total mecânica e cosmética. Pintura refinada e alinhamento de cápsula.",
    imagem: "assets/images/gradiente-d40.jpg",
    tags: ["Anos 80", "Belt Drive", "Marcenaria"]
  },
  {
    id: 8,
    titulo: "Gradiente B25",
    categoria: "Gradiente",
    descricao: "Substituição de correia de alta densidade, polimento do prato de alumínio e nova agulha.",
    imagem: "assets/images/gradiente-b25.jpg",
    tags: ["Belt Drive", "Revisão de Bancada", "Gradiente"]
  },
  {
    id: 9,
    titulo: "Garrard S95 Clássico",
    categoria: "Garrard",
    descricao: "Ícone vintage britânico restaurado com fidelidade às especificações de fábrica de 1974.",
    imagem: "assets/images/garrard-s95.jpg",
    tags: ["Restauração Fiel", "Polia Idler", "História"]
  },
  {
    id: 10,
    titulo: "Garrard S95 Custom Vintage Green",
    categoria: "Garrard",
    descricao: "Customização exclusiva em laca verde vintage com plinto artesanal laqueado.",
    imagem: "assets/images/garrard-s95-green.jpg",
    tags: ["Custom Exclusivo", "Laca Vintage", "Obra de Arte"]
  },
  {
    id: 11,
    titulo: "Gradiente B35",
    categoria: "Gradiente",
    descricao: "Gabinete revitalizado, calibração de velocidade 33/45 RPM e balanceamento dinâmico.",
    imagem: "assets/images/gradiente-b35.jpg",
    tags: ["Belt Drive", "Retorno Automático", "Gradiente"]
  },
  {
    id: 12,
    titulo: "ION Profile",
    categoria: "Outras",
    descricao: "Modernização de cabeamento interno e ajuste fino de tração para uso contemporâneo.",
    imagem: "assets/images/ion-profile.jpg",
    tags: ["Contemporâneo", "Revisão", "Cápsula Magnética"]
  },
  {
    id: 13,
    titulo: "Technics SL-BD20",
    categoria: "Technics",
    descricao: "Belt Drive japonês impecável, suspensão calibrada e ajuste milimétrico de tracking.",
    imagem: "assets/images/technics-sl-bd20.jpg",
    tags: ["Technics", "T4P", "Japão"]
  },
  {
    id: 14,
    titulo: "Gradiente TD34",
    categoria: "Gradiente",
    descricao: "Restauração nostálgica de modelo clássico compacto brasileiro dos anos 80.",
    imagem: "assets/images/gradiente-td34.jpeg",
    tags: ["Compacto", "Nostalgia", "Anos 80"]
  },
  {
    id: 15,
    titulo: "Philips 312 Eletrônica",
    categoria: "Outras",
    descricao: "Substituição de sensores capacitivos touch e regulagem de suspensão pendular flutuante.",
    imagem: "assets/images/servico-restauracao.jpeg",
    tags: ["Touch Iluminado", "Holanda", "Design Ícone"]
  },
  {
    id: 16,
    titulo: "Garrard S125",
    categoria: "Garrard",
    descricao: "Revisão profunda da bancada mecânica, lubrificação especial e alinhamento de braço.",
    imagem: "assets/images/servico-manutencao.jpg",
    tags: ["Mecânica Pesada", "Garrard", "Calibração"]
  }
];

let indiceLightboxAtual = 0;
let listaFiltradaGaleria = [...itensGaleria];

// Renderiza a galeria de imagens
function renderizarGaleria(itens = itensGaleria) {
  const container = document.getElementById('grid-galeria');
  if (!container) return;

  container.innerHTML = itens.map((item, index) => `
    <div class="group relative overflow-hidden rounded-lg bg-brand-black-card border border-brand-gold/15 cursor-pointer transition-all duration-300 hover:border-brand-gold/45 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(112,24,20,0.3)]" onclick="abrirLightbox(${index})">
      <div class="aspect-[4/3] overflow-hidden bg-brand-black">
        <img 
          src="${item.imagem}" 
          alt="${item.titulo}" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5">
        <span class="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-1">
          ${item.categoria}
        </span>
        <h3 class="font-serif text-lg font-bold text-brand-cream-light mb-1 group-hover:text-brand-gold transition-colors">
          ${item.titulo}
        </h3>
        <p class="text-xs text-brand-cream/80 line-clamp-2 mb-3">
          ${item.descricao}
        </p>
        <div class="flex items-center justify-between pt-2 border-t border-brand-gold/20">
          <div class="flex gap-1.5 flex-wrap">
            ${item.tags.map(t => `<span class="text-[10px] px-1.5 py-0.5 rounded bg-brand-wine-dark/70 text-brand-cream-muted border border-brand-gold/20">${t}</span>`).join('')}
          </div>
          <span class="text-brand-gold text-xs flex items-center gap-1 font-medium">
            <i class="fa-solid fa-expand"></i> Ampliar
          </span>
        </div>
      </div>
    </div>
  `).join('');
}

// Filtro de Marcas / Categorias
function filtrarGaleria(categoria) {
  document.querySelectorAll('.btn-filtro-galeria').forEach(btn => {
    if (btn.dataset.categoria.toUpperCase() === categoria.toUpperCase()) {
      btn.classList.add('bg-brand-wine', 'text-brand-cream-light', 'border-brand-gold');
      btn.classList.remove('text-brand-cream/70', 'border-transparent', 'bg-brand-black-card');
    } else {
      btn.classList.remove('bg-brand-wine', 'text-brand-cream-light', 'border-brand-gold');
      btn.classList.add('text-brand-cream/70', 'border-transparent', 'bg-brand-black-card');
    }
  });

  if (categoria === 'TODAS') {
    listaFiltradaGaleria = [...itensGaleria];
  } else {
    listaFiltradaGaleria = itensGaleria.filter(item => item.categoria.toUpperCase() === categoria.toUpperCase());
  }

  renderizarGaleria(listaFiltradaGaleria);
}

// Abrir Lightbox
function abrirLightbox(index) {
  indiceLightboxAtual = index;
  const modal = document.getElementById('modal-lightbox');
  if (!modal) return;

  atualizarConteudoLightbox();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Fechar Lightbox
function fecharLightbox() {
  const modal = document.getElementById('modal-lightbox');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Navegar no Lightbox (Anterior / Próxima)
function navegarLightbox(direcao) {
  indiceLightboxAtual = (indiceLightboxAtual + direcao + listaFiltradaGaleria.length) % listaFiltradaGaleria.length;
  atualizarConteudoLightbox();
}

function atualizarConteudoLightbox() {
  const item = listaFiltradaGaleria[indiceLightboxAtual];
  if (!item) return;

  const imgEl = document.getElementById('lightbox-img');
  const tituloEl = document.getElementById('lightbox-titulo');
  const catEl = document.getElementById('lightbox-categoria');
  const descEl = document.getElementById('lightbox-descricao');
  const contadorEl = document.getElementById('lightbox-contador');

  if (imgEl) {
    imgEl.src = item.imagem;
    imgEl.alt = item.titulo;
  }
  if (tituloEl) tituloEl.textContent = item.titulo;
  if (catEl) catEl.textContent = `${item.categoria} • Loucos por Vitrola`;
  if (descEl) descEl.textContent = item.descricao;
  if (contadorEl) {
    contadorEl.textContent = `${indiceLightboxAtual + 1} de ${listaFiltradaGaleria.length}`;
  }
}

// Event listeners do teclado e inicialização
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('grid-galeria')) {
    renderizarGaleria();

    document.querySelectorAll('.btn-filtro-galeria').forEach(btn => {
      btn.addEventListener('click', () => {
        filtrarGaleria(btn.dataset.categoria);
      });
    });
  }

  // Teclado para lightbox: Esc, Seta Esquerda, Seta Direita
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('modal-lightbox');
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') fecharLightbox();
    if (e.key === 'ArrowLeft') navegarLightbox(-1);
    if (e.key === 'ArrowRight') navegarLightbox(1);
  });
});
