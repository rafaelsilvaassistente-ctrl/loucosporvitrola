/**
 * LOUCOS POR VITROLA - Catálogo de Produtos
 * Base de dados centralizada e lógica de renderização, filtros, busca e modal de detalhes
 */

const produtos = [
  {
    id: 1,
    nome: "Technics SL-BD20",
    categoria: "Vitrolas",
    preco: 1850.00,
    imagem: "assets/images/technics-sl-bd20.jpg",
    descricao: "Toca-discos semi-automático clássico Belt Drive com sistema T4P e velocidade estável.",
    detalhes: "O Technics SL-BD20 é uma das referências mais confiáveis da áudio-indústria japonesa. Equipado com motor DC servo controlado, acionamento por correia nova de precisão, retorno automático do braço ao fim do disco e cápsula T4P perfeitamente ajustada. Totalmente revisado em nossa oficina em Santo André. Acompanha tampa de acrílico polida, cabo RCA blindado e garantia total de 90 dias.",
    disponivel: true
  },
  {
    id: 2,
    nome: "Technics SL-Q03",
    categoria: "Vitrolas",
    preco: 2450.00,
    imagem: "assets/images/servico-vendas.jpg",
    descricao: "Toca-discos Direct Drive com trava de quartzo e operação totalmente automática.",
    detalhes: "Equipamento audiófilo de peso. O Technics SL-Q03 combina a lendária tração direta Quartz Phase-Locked com chassi em alumínio fundido e suspensão antivibração TNRC. Possui ajuste de peso milimétrico, anti-skating magnético e estroboscópio integrado. Aparelho em estado impecável de conservação, regulado e com garantia de 90 dias com emissão de termo de bancada.",
    disponivel: true
  },
  {
    id: 3,
    nome: "Gradiente B35",
    categoria: "Vitrolas",
    preco: 1680.00,
    imagem: "assets/images/gradiente-b35.jpg",
    descricao: "Clássico nacional dos anos 80, acionamento por correia com controle de pitch fino.",
    detalhes: "Um ícone da era de ouro do áudio brasileiro. O Gradiente B-35 passou por restauração completa pelos mestres André e Emilio: lubrificação do eixo central com óleo sintético especial, correia nova, regulagem estroboscópica e polimento do acrílico original. Som encorpado, quente e nostálgico. Garantia de 90 dias e envio em embalagem super reforçada.",
    disponivel: true
  },
  {
    id: 4,
    nome: "Gradiente DD-200Q",
    categoria: "Vitrolas",
    preco: 2900.00,
    imagem: "assets/images/gradiente-dd200q.jpg",
    descricao: "O lendário Direct Drive Quartz da Gradiente com braço em 'S' de alta fidelidade.",
    detalhes: "Objeto de desejo de 10 entre 10 colecionadores. O DD-200Q representa o auge da engenharia Gradiente em parceria com a tecnologia japonesa. Tracionamento direto com estabilidade inabalável, braço em S com headshell padrão EIA removível e comandos suaves. 100% testado, alinhado e garantido por 90 dias.",
    disponivel: true
  },
  {
    id: 5,
    nome: "Kenwood BD1",
    categoria: "Vitrolas",
    preco: 1950.00,
    imagem: "assets/images/kenwood-bd1.jpg",
    descricao: "Engenharia japonesa refinada, som aveludado e mecânica de alta durabilidade.",
    detalhes: "A Kenwood sempre se destacou pela musicalidade de seus pré-amplificadores e toca-discos. O modelo BD1 possui prato balanceado dinamicamente, amortecimento interno em borracha e braço com rolamentos de safira. Revisado preventivamente com substituição de capacitores eletrolíticos e limpeza de chaves.",
    disponivel: true
  },
  {
    id: 6,
    nome: "Garrard 6300",
    categoria: "Vitrolas",
    preco: 2150.00,
    imagem: "assets/images/garrard-6300.jpg",
    descricao: "Tradição britânica incomparável, base em madeira nobre e som analógico marcante.",
    detalhes: "Para os amantes da assinatura sonora britânica da Garrard. O modelo 6300 possui plinto em madeira natural restaurado artesanalmente por Emilio Colonic, mecânica lubrificada, idler wheel balanceada e cápsula magnética nova. Uma verdadeira obra de arte funcional em sua sala de estar.",
    disponivel: true
  },
  {
    id: 7,
    nome: "Akai AP-A2",
    categoria: "Vitrolas",
    preco: 1590.00,
    imagem: "assets/images/akai-ap-a2.jpg",
    descricao: "Design minimalista vintage, retorno automático preciso e operação silenciosa.",
    detalhes: "Toca-discos elegante com acabamento dark vintage, ideal para quem busca praticidade sem abrir mão da fidelidade analógica. Totalmente funcional, calibração de agulha recém-feita, correia nova e tampa sem trincas. 90 dias de garantia.",
    disponivel: true
  },
  {
    id: 8,
    nome: "Philips 312 Eletrônica",
    categoria: "Vitrolas",
    preco: 2200.00,
    imagem: "assets/images/servico-restauracao.jpeg",
    descricao: "Rara peça holandesa com botões touch iluminados e suspensão pendular independente.",
    detalhes: "Um clássico cult do design mundial. Teclas capacitivas com iluminação verde original, chassi flutuante que isola qualquer vibração externa e sonoridade incomparável. Esta unidade já foi adquirida por um colecionador e exemplifica o padrão de restauro da Loucos por Vitrola.",
    disponivel: false
  },
  {
    id: 9,
    nome: "Cápsula e Agulha Audio-Technica AT-3600L",
    categoria: "Peças",
    preco: 240.00,
    imagem: "assets/images/servico-manutencao.jpg",
    descricao: "Cápsula magnética universal de alta durabilidade e excelente resposta de graves.",
    detalhes: "A cápsula magnética mais versátil e confiável do mercado mundial. Compatível com a imensa maioria dos toca-discos Gradiente, Garrard, Technics, CCE e Pioneer com montagem padrão 1/2 polegada. Acompanha agulha de diamante cônica lapidada e parafusos de fixação em latão.",
    disponivel: true
  },
  {
    id: 10,
    nome: "Correia Plana de Alta Densidade (Belt Drive)",
    categoria: "Peças",
    preco: 45.00,
    imagem: "assets/images/gradiente-b25.jpg",
    descricao: "Borracha sintética de alta densidade que minimiza wow e flutter.",
    detalhes: "Fabricada sob medida com composto de borracha nitrílica vulcanizada para manter tração constante sem esticar ou ressecar prematuramente. Temos dimensões exatas para modelos Gradiente B20, B25, B35, Garrard, Philips, Kenwood e Polyvox.",
    disponivel: true
  },
  {
    id: 11,
    nome: "Escova de Fibra de Carbono Anti-Estática",
    categoria: "Acessórios",
    preco: 85.00,
    imagem: "assets/images/sony-psx23.jpg",
    descricao: "Milhares de cerdas condutivas que descarregam a estática e removem micropartículas.",
    detalhes: "Essencial para qualquer colecionador de vinil. As cerdas de fibra de carbono penetram com suavidade nos microssulcos do LP, eliminando poeira e neutralizando cargas eletrostáticas que causam aqueles estalos desagradáveis durante a reprodução.",
    disponivel: true
  },
  {
    id: 12,
    nome: "Kit de Limpeza & Preservação Hi-Fi",
    categoria: "Acessórios",
    preco: 160.00,
    imagem: "assets/images/garrard-s95-green.jpg",
    descricao: "Fluido balanceado especial sem resíduos + flanela ultra-macia + escova para agulha.",
    detalhes: "Fórmula desenvolvida para proteger o vinil sem degradar os componentes químicos da prensagem. Remove marcas de gordura, fuligem e mofo leve sem agredir o label de papel. Acompanha estojo vintage e manual de cuidados analógicos.",
    disponivel: true
  }
];

// Helper: Formata valor para Real brasileiro (R$ 1.500,00)
function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}

// Renderiza a grade de produtos na página produtos.html
function renderizarProdutos(lista = produtos) {
  const container = document.getElementById('grid-produtos');
  const contadorEl = document.getElementById('total-produtos-contador');
  if (!container) return;

  if (contadorEl) {
    contadorEl.textContent = `${lista.length} equipamento${lista.length !== 1 ? 's' : ''}`;
  }

  if (lista.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <i class="fa-solid fa-compact-disc text-5xl text-brand-gold/40 mb-4 animate-spin-slow inline-block"></i>
        <h3 class="text-2xl font-serif text-brand-cream mb-2">Nenhum produto encontrado</h3>
        <p class="text-brand-cream/70 max-w-md mx-auto mb-6">Não localizamos nenhum equipamento com os termos ou filtros selecionados. Tente outra busca ou contate-nos diretamente.</p>
        <button onclick="limparFiltros()" class="btn-secondary px-6 py-2.5 rounded text-sm uppercase tracking-wider">
          Limpar Filtros
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = lista.map(prod => `
    <article class="vintage-card rounded-lg overflow-hidden flex flex-col justify-between group border border-brand-gold/20 bg-brand-black-card" data-id="${prod.id}">
      <div>
        <!-- Imagem com Badge -->
        <div class="relative aspect-[4/3] overflow-hidden bg-brand-black">
          <img 
            src="${prod.imagem}" 
            alt="${prod.nome}" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onerror="this.src='assets/logo/logo-loucos-por-vitrola.png'; this.classList.add('p-8','object-contain')"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>
          
          <!-- Badge Categoria -->
          <span class="absolute top-3 left-3 bg-brand-wine-deep/90 text-brand-gold text-xs px-2.5 py-1 rounded border border-brand-gold/30 tracking-wider uppercase font-semibold">
            ${prod.categoria}
          </span>

          <!-- Badge Disponibilidade -->
          ${prod.disponivel ? `
            <span class="absolute top-3 right-3 bg-emerald-950/90 text-emerald-300 text-xs px-2 py-0.5 rounded border border-emerald-500/40 flex items-center gap-1.5 font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Disponível
            </span>
          ` : `
            <span class="absolute top-3 right-3 bg-neutral-900/90 text-neutral-400 text-xs px-2 py-0.5 rounded border border-neutral-700 flex items-center gap-1.5 font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-neutral-500"></span> Indisponível
            </span>
          `}
        </div>

        <!-- Conteúdo do Card -->
        <div class="p-5">
          <h3 class="text-xl font-serif text-brand-cream-light font-bold mb-2 group-hover:text-brand-gold transition-colors">
            ${prod.nome}
          </h3>
          <p class="text-sm text-brand-cream/70 line-clamp-2 mb-4 leading-relaxed">
            ${prod.descricao}
          </p>
        </div>
      </div>

      <!-- Preço e Botão Detalhes -->
      <div class="p-5 pt-0 border-t border-brand-gold/10 mt-auto">
        <div class="flex items-center justify-between mt-4">
          <div>
            <span class="block text-xs uppercase tracking-wider text-brand-cream/50">Valor</span>
            <span class="text-xl font-bold font-serif text-brand-cream-light">
              ${formatarMoeda(prod.preco)}
            </span>
          </div>
          <button 
            onclick="abrirModalProduto(${prod.id})" 
            class="btn-primary text-xs uppercase px-4 py-2 rounded tracking-wider transition-all flex items-center gap-2"
            aria-label="Ver detalhes de ${prod.nome}">
            <span>Ver Detalhes</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Modal de Detalhes do Produto
let produtoModalAtual = null;

function abrirModalProduto(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;

  produtoModalAtual = produto;
  const modal = document.getElementById('modal-produto');
  if (!modal) return;

  document.getElementById('modal-prod-img').src = produto.imagem;
  document.getElementById('modal-prod-img').alt = produto.nome;
  document.getElementById('modal-prod-nome').textContent = produto.nome;
  document.getElementById('modal-prod-categoria').textContent = produto.categoria;
  document.getElementById('modal-prod-preco').textContent = formatarMoeda(produto.preco);
  document.getElementById('modal-prod-descricao').textContent = produto.descricao;
  document.getElementById('modal-prod-detalhes').textContent = produto.detalhes;

  const statusBadge = document.getElementById('modal-prod-status');
  const btnComprar = document.getElementById('btn-modal-comprar');
  const inputQtd = document.getElementById('modal-prod-qtd');
  if (inputQtd) inputQtd.value = 1;

  if (produto.disponivel) {
    statusBadge.innerHTML = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-xs font-semibold"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> Em estoque (Revisado c/ 90 dias de garantia)</span>`;
    btnComprar.disabled = false;
    btnComprar.classList.remove('opacity-50', 'cursor-not-allowed', 'bg-neutral-800');
    btnComprar.classList.add('btn-primary');
    btnComprar.innerHTML = `<i class="fa-solid fa-cart-plus mr-2"></i> Adicionar ao Carrinho`;
    btnComprar.onclick = () => {
      const qtd = parseInt(document.getElementById('modal-prod-qtd').value) || 1;
      if (typeof adicionarAoCarrinho === 'function') {
        adicionarAoCarrinho(produto.id, qtd);
        fecharModalProduto();
        if (typeof abrirCarrinho === 'function') {
          abrirCarrinho();
        }
      }
    };
  } else {
    statusBadge.innerHTML = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-neutral-900 text-neutral-400 border border-neutral-700 text-xs font-semibold"><span class="w-2 h-2 rounded-full bg-neutral-500"></span> Equipamento Indisponível</span>`;
    btnComprar.disabled = true;
    btnComprar.classList.add('opacity-50', 'cursor-not-allowed', 'bg-neutral-800');
    btnComprar.classList.remove('btn-primary');
    btnComprar.innerHTML = `Indisponível`;
    btnComprar.onclick = null;
  }

  // Abre modal e bloqueia scroll
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function fecharModalProduto() {
  const modal = document.getElementById('modal-produto');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function alterarQtdModal(delta) {
  const input = document.getElementById('modal-prod-qtd');
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val = Math.max(1, Math.min(10, val + delta));
  input.value = val;
}

// Filtros e Busca de Produtos
let categoriaAtiva = 'TODOS';
let termoBusca = '';

function filtrarProdutos() {
  let filtrados = produtos;

  if (categoriaAtiva !== 'TODOS') {
    filtrados = filtrados.filter(p => p.categoria.toUpperCase() === categoriaAtiva);
  }

  if (termoBusca.trim() !== '') {
    const termo = termoBusca.toLowerCase().trim();
    filtrados = filtrados.filter(p => 
      p.nome.toLowerCase().includes(termo) || 
      p.descricao.toLowerCase().includes(termo) ||
      p.detalhes.toLowerCase().includes(termo) ||
      p.categoria.toLowerCase().includes(termo)
    );
  }

  renderizarProdutos(filtrados);
}

function selecionarCategoria(cat) {
  categoriaAtiva = cat.toUpperCase();
  document.querySelectorAll('.btn-filtro-categoria').forEach(btn => {
    if (btn.dataset.categoria === categoriaAtiva) {
      btn.classList.add('bg-brand-wine', 'text-brand-cream-light', 'border-brand-gold');
      btn.classList.remove('text-brand-cream/70', 'border-transparent', 'bg-brand-black-card');
    } else {
      btn.classList.remove('bg-brand-wine', 'text-brand-cream-light', 'border-brand-gold');
      btn.classList.add('text-brand-cream/70', 'border-transparent', 'bg-brand-black-card');
    }
  });
  filtrarProdutos();
}

function limparFiltros() {
  categoriaAtiva = 'TODOS';
  termoBusca = '';
  const searchInput = document.getElementById('busca-produto');
  if (searchInput) searchInput.value = '';
  selecionarCategoria('TODOS');
}

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('grid-produtos')) {
    renderizarProdutos();

    const searchInput = document.getElementById('busca-produto');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        termoBusca = e.target.value;
        filtrarProdutos();
      });
    }

    document.querySelectorAll('.btn-filtro-categoria').forEach(btn => {
      btn.addEventListener('click', () => {
        selecionarCategoria(btn.dataset.categoria);
      });
    });
  }

  // Tecla ESC para fechar modal de produto
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      fecharModalProduto();
    }
  });
});
