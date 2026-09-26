/**
 * LOUCOS POR VITROLA - Módulo de Carrinho de Compras
 * Gestão de estado, persistência em localStorage, drawer lateral e integração via WhatsApp
 */

const STORAGE_KEY = 'loucos_por_vitrola_carrinho';
let carrinho = [];

// Formatação brasileira de moeda
function formatarBRL(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}

// Carregar carrinho do localStorage
function carregarCarrinho() {
  try {
    const salvo = localStorage.getItem(STORAGE_KEY);
    if (salvo) {
      carrinho = JSON.parse(salvo);
      // Validar integridade dos dados
      if (!Array.isArray(carrinho)) carrinho = [];
    }
  } catch (e) {
    console.error('Erro ao ler carrinho do localStorage:', e);
    carrinho = [];
  }
  atualizarCarrinho();
}

// Salvar carrinho no localStorage
function salvarCarrinho() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(carrinho));
  } catch (e) {
    console.error('Erro ao salvar carrinho:', e);
  }
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(id, quantidade = 1) {
  // Procura se o produto já existe no catálogo
  const produto = typeof produtos !== 'undefined' ? produtos.find(p => p.id === id) : null;
  if (!produto || !produto.disponivel) {
    alert('Desculpe, este equipamento está indisponível para compra no momento.');
    return;
  }

  const itemExistente = carrinho.find(item => item.id === id);
  if (itemExistente) {
    itemExistente.quantidade += quantidade;
  } else {
    carrinho.push({
      id: produto.id,
      nome: produto.nome,
      categoria: produto.categoria,
      preco: produto.preco,
      imagem: produto.imagem,
      quantidade: quantidade
    });
  }

  salvarCarrinho();
  atualizarCarrinho();
  animarIconeCarrinho();
}

// Remover produto do carrinho
function removerDoCarrinho(id) {
  carrinho = carrinho.filter(item => item.id !== id);
  salvarCarrinho();
  atualizarCarrinho();
}

// Aumentar quantidade
function aumentarQuantidade(id) {
  const item = carrinho.find(item => item.id === id);
  if (item) {
    item.quantidade += 1;
    salvarCarrinho();
    atualizarCarrinho();
  }
}

// Diminuir quantidade
function diminuirQuantidade(id) {
  const item = carrinho.find(item => item.id === id);
  if (item) {
    if (item.quantidade > 1) {
      item.quantidade -= 1;
    } else {
      removerDoCarrinho(id);
      return;
    }
    salvarCarrinho();
    atualizarCarrinho();
  }
}

// Calcular total do carrinho
function calcularTotal() {
  return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}

// Calcular quantidade total de itens
function calcularQuantidadeTotal() {
  return carrinho.reduce((total, item) => total + item.quantidade, 0);
}

// Atualizar interface do carrinho e contadores do header
function atualizarCarrinho() {
  const qtdTotal = calcularQuantidadeTotal();
  const valorTotal = calcularTotal();

  // Atualizar badges no header
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(badge => {
    badge.textContent = qtdTotal;
    badge.style.display = qtdTotal > 0 ? 'flex' : 'none';
  });

  // Elementos do drawer
  const containerItens = document.getElementById('carrinho-itens');
  const viewVazio = document.getElementById('carrinho-vazio');
  const viewCheio = document.getElementById('carrinho-conteudo-cheio');
  const totalEl = document.getElementById('carrinho-total-valor');
  const qtdHeaderEl = document.getElementById('carrinho-drawer-qtd');

  if (qtdHeaderEl) {
    qtdHeaderEl.textContent = `(${qtdTotal})`;
  }

  if (!containerItens || !viewVazio || !viewCheio) return;

  if (carrinho.length === 0) {
    viewVazio.classList.remove('hidden');
    viewCheio.classList.add('hidden');
  } else {
    viewVazio.classList.add('hidden');
    viewCheio.classList.remove('hidden');

    // Renderizar itens
    containerItens.innerHTML = carrinho.map(item => `
      <div class="flex gap-4 p-3.5 rounded-lg bg-brand-black-card border border-brand-gold/15 transition-colors hover:border-brand-gold/30">
        <img 
          src="${item.imagem}" 
          alt="${item.nome}" 
          class="w-20 h-20 object-cover rounded bg-brand-black border border-brand-gold/20 flex-shrink-0"
          onerror="this.src='assets/logo/logo-loucos-por-vitrola.png'"
        />
        <div class="flex flex-col justify-between flex-grow min-w-0">
          <div>
            <div class="flex items-start justify-between gap-2">
              <h4 class="font-serif font-bold text-brand-cream-light text-sm truncate leading-snug">
                ${item.nome}
              </h4>
              <button 
                onclick="removerDoCarrinho(${item.id})" 
                class="text-brand-cream/40 hover:text-red-400 text-xs p-1 transition-colors"
                title="Remover item"
                aria-label="Remover ${item.nome}">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
            <span class="text-xs text-brand-cream/60 block">
              Unitário: ${formatarBRL(item.preco)}
            </span>
          </div>

          <div class="flex items-center justify-between mt-2 pt-2 border-t border-brand-gold/10">
            <!-- Controle de Quantidade -->
            <div class="flex items-center border border-brand-gold/30 rounded bg-brand-black/60">
              <button 
                onclick="diminuirQuantidade(${item.id})" 
                class="w-6 h-6 flex items-center justify-center text-brand-cream hover:bg-brand-gold/20 text-xs transition-colors"
                aria-label="Diminuir quantidade">
                <i class="fa-solid fa-minus text-[9px]"></i>
              </button>
              <span class="w-8 text-center text-xs font-semibold text-brand-cream-light">
                ${item.quantidade}
              </span>
              <button 
                onclick="aumentarQuantidade(${item.id})" 
                class="w-6 h-6 flex items-center justify-center text-brand-cream hover:bg-brand-gold/20 text-xs transition-colors"
                aria-label="Aumentar quantidade">
                <i class="fa-solid fa-plus text-[9px]"></i>
              </button>
            </div>

            <!-- Subtotal -->
            <div class="text-right">
              <span class="text-xs text-brand-gold font-bold">
                ${formatarBRL(item.preco * item.quantidade)}
              </span>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    if (totalEl) {
      totalEl.textContent = formatarBRL(valorTotal);
    }
  }
}

// Efeito de feedback ao adicionar item
function animarIconeCarrinho() {
  const btns = document.querySelectorAll('.cart-trigger-btn');
  btns.forEach(btn => {
    btn.classList.add('scale-125', 'text-brand-gold');
    setTimeout(() => {
      btn.classList.remove('scale-125', 'text-brand-gold');
    }, 300);
  });
}

// Abrir Drawer do Carrinho
function abrirCarrinho() {
  const drawer = document.getElementById('drawer-carrinho');
  if (!drawer) return;
  drawer.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Fechar Drawer do Carrinho
function fecharCarrinho() {
  const drawer = document.getElementById('drawer-carrinho');
  if (!drawer) return;
  drawer.classList.remove('active');
  document.body.style.overflow = '';
}

// Montar e abrir mensagem oficial do WhatsApp
function finalizarPedidoWhatsApp() {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  const numeroWhatsApp = '5511996176660';
  let mensagem = 'Olá, equipe Loucos por Vitrola! 🎶\n\nTenho interesse nos seguintes equipamentos/produtos:\n\n';

  carrinho.forEach((item, index) => {
    const subtotal = item.preco * item.quantidade;
    mensagem += `${index + 1}. *${item.nome}*\n`;
    mensagem += `   Quantidade: ${item.quantidade}\n`;
    if (item.quantidade > 1) {
      mensagem += `   Valor unitário: ${formatarBRL(item.preco)}\n`;
      mensagem += `   Subtotal: ${formatarBRL(subtotal)}\n\n`;
    } else {
      mensagem += `   Valor: ${formatarBRL(item.preco)}\n\n`;
    }
  });

  const total = calcularTotal();
  mensagem += '--------------------------------\n';
  mensagem += `*Total Geral: ${formatarBRL(total)}*\n\n`;
  mensagem += 'Gostaria de saber mais informações sobre disponibilidade, condições de pagamento e detalhes para envio ou retirada no ABC Paulista.\n\nObrigado!';

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

// Inicializar listeners
document.addEventListener('DOMContentLoaded', () => {
  carregarCarrinho();

  // Fechar carrinho com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      fecharCarrinho();
    }
  });
});
