# 🎶 Loucos por Vitrola — A Arte em Tocar Discos

> Um projeto de refatoração e modernização do site **Loucos por Vitrola**, combinando a estética vintage dos discos de vinil com uma experiência digital moderna, elegante e responsiva.

![Loucos por Vitrola](assets/images/logo-loucos-por-vitrola.png)

---

## 📻 Sobre o projeto

O **Loucos por Vitrola** é um projeto de redesign e refatoração do site institucional da marca, preservando sua identidade e sua paixão pela cultura do vinil, enquanto introduz uma experiência de navegação mais moderna, sofisticada e intuitiva.

A proposta visual combina:

- 🎵 Cultura do vinil
- 📻 Vitrolas e equipamentos de áudio
- 🖤 Estética vintage
- 🎨 Design editorial
- 🟤 Tons vinho e escuros
- 🟡 Detalhes em creme e dourado
- 📱 Experiência responsiva
- ✨ Microinterações e animações sutis

O conceito visual parte do próprio logo da marca, utilizando sua paleta, formas e linguagem como referência para todo o sistema de design.

---

## 🎯 Objetivos

O projeto tem como principais objetivos:

- Modernizar a presença digital da marca;
- Preservar sua identidade vintage;
- Melhorar a experiência de navegação;
- Organizar o conteúdo institucional;
- Apresentar serviços de maneira mais clara;
- Criar uma galeria visual imersiva;
- Criar um catálogo de produtos;
- Permitir montagem de pedidos através de um carrinho;
- Integrar o processo de compra ao WhatsApp;
- Melhorar responsividade, acessibilidade e performance;
- Criar uma arquitetura simples e fácil de manter.

---

## 🖥️ Estrutura do site

O novo site é composto por múltiplas páginas:

```text
🏠 Home
│
├── 📖 Sobre Nós
├── 🛠️ Serviços
├── 🖼️ Galeria
├── 🛒 Produtos
└── 📞 Contato

🏠 Home
Página principal responsável por apresentar a marca, sua proposta, serviços, galeria e produtos em destaque.

📖 Sobre Nós
Apresentação da história e informações institucionais da Loucos por Vitrola.

🛠️ Serviços
Apresentação dos serviços oferecidos pela empresa.

🖼️ Galeria
Galeria de imagens com visual editorial e sistema de lightbox para visualização ampliada.

🛒 Produtos
Novo catálogo digital para apresentação de:

Vitrolas;

Toca-discos;

Peças;

Acessórios;

Equipamentos;

Outros produtos relacionados ao universo do vinil.

📞 Contato
Centralização das informações de contato e redes sociais da marca.

🛒 Catálogo de produtos
Uma das principais funcionalidades adicionadas ao projeto é o catálogo de produtos.

Os produtos são controlados por uma estrutura de dados centralizada:

js/produtos.js

Isso permite adicionar novos produtos sem precisar modificar a estrutura HTML do site.

Exemplo:

{
    id: 1,
    nome: "Vitrola Modelo X",
    categoria: "Vitrolas",
    descricao: "Descrição resumida do produto.",
    detalhes: "Descrição completa do produto.",
    preco: 1500.00,
    imagem: "assets/images/vitrola-x.webp",
    imagens: [
        "assets/images/vitrola-x.webp"
    ],
    disponivel: true,
    destaque: true
}

Ao cadastrar um novo produto, o sistema automaticamente poderá utilizá-lo em:

📦 Catálogo;

🔎 Busca;

🏷️ Filtros;

🔍 Modal de detalhes;

🛒 Carrinho;

💰 Cálculo de valores;

📱 Pedido via WhatsApp.

🔎 Busca e filtros
O catálogo possui mecanismos para facilitar a localização dos produtos.

Busca
Pesquisa por:

Nome;

Categoria;

Descrição.

Filtros
Os produtos podem ser filtrados por categorias, como:

Todos
Vitrolas
Peças
Acessórios
Outros

As categorias podem ser derivadas dinamicamente dos produtos cadastrados.

🔍 Modal de produto
Ao selecionar um produto, é exibida uma janela modal com informações detalhadas.

O modal pode apresentar:

🖼️ Imagem principal;

🖼️ Galeria de imagens;

📻 Nome;

🏷️ Categoria;

📝 Descrição;

📋 Detalhes;

💰 Preço;

📦 Disponibilidade;

🛒 Botão Comprar.

🛒 Carrinho de compras
O projeto possui um carrinho frontend desenvolvido em JavaScript puro.

O carrinho permite:

Adicionar produtos;

Remover produtos;

Aumentar quantidade;

Diminuir quantidade;

Visualizar subtotal;

Visualizar total;

Persistir os produtos utilizando localStorage.

O carrinho é apresentado através de um drawer lateral, mantendo o usuário na página enquanto revisa seu pedido.

📱 Integração com WhatsApp
A finalização do pedido ocorre através do WhatsApp.

O sistema monta automaticamente uma mensagem contendo:

Produto
Quantidade
Valor unitário
Subtotal
Total geral

Exemplo:

Olá! Tenho interesse nos seguintes produtos:

1. Vitrola Modelo X
Quantidade: 1
Valor: R$ 1.500,00

2. Peça Modelo Y
Quantidade: 2
Valor unitário: R$ 300,00
Subtotal: R$ 600,00

Total: R$ 2.100,00

Gostaria de saber mais informações sobre disponibilidade e pagamento.

O pedido é então encaminhado para o WhatsApp da empresa.

🎨 Identidade visual
A identidade visual foi construída a partir do logo da Loucos por Vitrola.

Paleta principal
Cor	Aplicação
🟥 Vinho	Cor institucional e destaques
⬛ Preto	Fundos e áreas sofisticadas
🟨 Creme	Textos e áreas claras
🟡 Dourado	Detalhes e elementos premium
🟥 Vermelho escuro	Destaques e elementos decorativos

A estética procura equilibrar:

70% Contemporâneo / Sofisticado
20% Vintage
10% Retrô

O objetivo não é criar um site excessivamente retrô, mas sim uma experiência contemporânea inspirada no universo dos discos de vinil.

🧑‍💻 Tecnologias
O projeto foi desenvolvido utilizando tecnologias frontend tradicionais:

HTML5

CSS3

JavaScript

Tailwind CSS

🚫 Não utiliza
React

Next.js

Vue

Angular

Svelte

PHP

Backend

Banco de dados

CMS

A aplicação foi projetada para funcionar como um site frontend estático.

📁 Estrutura do projeto
loucos-por-vitrola/
│
├── index.html
├── sobre-nos.html
├── servicos.html
├── galeria.html
├── produtos.html
├── contato.html
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo/
│
├── css/
│   └── custom.css
│
├── js/
│   ├── main.js
│   ├── produtos.js
│   ├── carrinho.js
│   ├── galeria.js
│   └── whatsapp.js
│
└── README.md

⚙️ Arquitetura
O projeto segue uma arquitetura simples:

                 ┌─────────────────┐
                 │  produtos.js    │
                 │                 │
                 │ Dados produtos  │
                 └────────┬────────┘
                          │
             ┌────────────┼────────────┐
             ↓            ↓            ↓
          Catálogo      Modal      Destaques
             │            │
             └──────┬─────┘
                    ↓
                 Carrinho
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
     LocalStorage          WhatsApp

A separação entre dados, apresentação e comportamento facilita a manutenção e evolução do projeto.

📱 Responsividade
O layout foi pensado para diferentes dispositivos:

📱 Smartphones;

📲 Tablets;

💻 Notebooks;

🖥️ Desktops;

🖥️ Monitores de alta resolução.

O menu, catálogo, modais, galeria e carrinho possuem comportamentos específicos para telas menores.

♿ Acessibilidade
O projeto considera princípios básicos de acessibilidade, incluindo:

HTML semântico;

Contraste adequado;

alt em imagens;

navegação por teclado;

foco visível;

aria-label;

suporte a ESC em modais;

prefers-reduced-motion;

botões e controles acessíveis.

🚀 Performance
Entre as estratégias utilizadas estão:

Lazy loading;

Imagens otimizadas;

WebP/AVIF quando possível;

JavaScript enxuto;

CSS otimizado;

Redução de dependências;

Carregamento eficiente de recursos.

🔍 SEO
O projeto também possui estrutura preparada para SEO:

Títulos específicos por página;

Meta descriptions;

Hierarquia correta de headings;

HTML semântico;

Open Graph;

Favicon;

alt nas imagens;

URLs amigáveis.

🔗 Canais oficiais
🌐 Site
https://loucosporvitrola.com.br/

📘 Facebook
https://www.facebook.com/Loucosporvitrola

📸 Instagram
https://www.instagram.com/loucos_por_vitrola/

💬 WhatsApp
https://wa.me/5511996176660

🧪 Produtos demonstrativos
Durante o desenvolvimento, caso os produtos reais ainda não estejam disponíveis, podem ser utilizados produtos demonstrativos exclusivamente para testar:

catálogo;

filtros;

modal;

carrinho;

cálculo de valores;

integração com WhatsApp.

Esses produtos devem ser claramente identificados como DEMO e não devem ser apresentados como produtos reais da empresa.

➕ Como adicionar um produto
Para adicionar um novo produto, editar:

js/produtos.js

Adicionar um novo objeto ao array:

{
    id: 10,
    nome: "Nova Vitrola",
    categoria: "Vitrolas",
    descricao: "Descrição do produto.",
    detalhes: "Detalhes completos do produto.",
    preco: 2500.00,
    imagem: "assets/images/nova-vitrola.webp",
    imagens: [
        "assets/images/nova-vitrola.webp"
    ],
    disponivel: true,
    destaque: false
}

Não é necessário modificar:

HTML;

modal;

carrinho;

filtros;

busca;

integração com WhatsApp.

🛠️ Como executar
Por ser um projeto frontend estático, pode ser executado localmente através de um servidor HTTP simples.

Exemplo utilizando VS Code:

Abra o projeto;

Instale a extensão Live Server;

Abra index.html;

Execute com Open with Live Server.

Também pode ser hospedado em serviços de páginas estáticas.

📌 Roadmap
Possíveis evoluções futuras:

 Cadastro de produtos através de CMS;

 Painel administrativo;

 Integração com banco de dados;

 Estoque em tempo real;

 Sistema de pedidos;

 Integração com pagamentos;

 Integração com catálogo do Instagram;

 Sistema de avaliações;

 Busca avançada;

 Analytics;

 PWA.

Essas funcionalidades não fazem parte da arquitetura atual.

📜 Licença
Este projeto foi desenvolvido para a Loucos por Vitrola.

Os conteúdos, textos, imagens, logotipo e identidade visual relacionados à marca pertencem aos seus respectivos proprietários.

O código-fonte e sua utilização devem respeitar os termos definidos pelos responsáveis pelo projeto.

🎶 Loucos por Vitrola
A arte em tocar discos.

Um projeto que une a nostalgia do vinil com uma experiência digital moderna.

📻 Vintage na alma.
🎵 Música no coração.
💻 Experiência na tela.
