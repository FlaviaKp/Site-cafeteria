// Dados dos produtos
const produtos = {
    quentes: [
        { nome: "Cappuccino", descricao: "Espresso com leite vaporizado e espuma cremosa, polvilhado com canela (270ml).", preco: "R$ 12,00", imagem: "imagens/bebidas quentes/cap_italiano.jpg" }

        ,{nome: "Big Latte", descricao: "Uma dose dupla de café espresso (Orfeu) e leite vaporizado cremosinho. 500ml de café com leite para você se esbaldar!.", preco: "R$ 23,90", imagem: "imagens/bebidas quentes/big_latte.jpg" }

        ,{nome: "Cappuccino Especial", descricao: "Sua composição leva calda de chocolate gourmet meio amargo, uma mistura deliciosa do nosso cappuccino especial, leite vaporizado, uma pitadinha de canela em pó e, opcionalmente, chantilly em um potinho enviado separadamente (270ml).", preco: "R$ 19,90", imagem: "imagens/bebidas quentes/cap_especial.jpg" }
    ],
    geladas: [
        { nome: "Coffee", descricao: "Café gelado com leite condensado e pedras de gelo crocantes.", preco: "R$ 13,00", imagem: "imagens/bebidas geladas/frappês.jpg" },
        { nome: "Frappuccino", descricao: "Blend cremoso de café, leite e chantilly batido com gelo.", preco: "R$ 16,00", imagem: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&crop=face" }
    ],
    bolo_pote: [
        { nome: "Ninho com Nutella", descricao: "Camadas cremosas de leite ninho com a legítima Nutella.", preco: "R$ 15,00", imagem: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=400&fit=crop" },
        { nome: "Red Velvet", descricao: "Massa aveludada com recheio de cream cheese e geleia de morango.", preco: "R$ 16,00", imagem: "https://images.unsplash.com/photo-1616031037011-087000171abe?w=400&h=400&fit=crop" }
    ],
    bombom_pote: [
        { nome: "Bombom de Morango", descricao: "Morangos frescos, brigadeiro branco e cobertura de chocolate meio amargo.", preco: "R$ 14,00", imagem: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=400&fit=crop" },
        { nome: "Bombom de Uva", descricao: "Uvas selecionadas com creme belga e ganache de chocolate ao leite.", preco: "R$ 14,00", imagem: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?w=400&h=400&fit=crop" }
    ],
    brownies: [
        { nome: "Brownie Tradicional", descricao: "Brownie super chocolatudo com casquinha crocante e interior úmido.", preco: "R$ 10,00", imagem: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop" },
        { nome: "Brownie com Sorvete", descricao: "Nosso brownie quente servido com uma bola de sorvete de baunilha.", preco: "R$ 18,00", imagem: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&h=400&fit=crop" }
    ],
    tortas: [
        { nome: "Banoffee", descricao: "Torta de banana com doce de leite caseiro e chantilly levemente polvilhado.", preco: "R$ 14,00", imagem: "https://images.unsplash.com/photo-1535927842660-3487d4a62e02?w=400&h=400&fit=crop" },
        { nome: "Torta Holandesa", descricao: "Creme leve de baunilha com cobertura de ganache e biscoito calipso.", preco: "R$ 15,00", imagem: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=400&fit=crop" }
    ],
    salgados: [
        { nome: "Coxinha", descricao: "Coxinha cremosa de frango com catupiry e massa crocante.", preco: "R$ 8,00", imagem: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=400&fit=crop&crop=face" },
        { nome: "Pão de Queijo", descricao: "Pão de queijo mineiro quentinho e crocante por fora.", preco: "R$ 5,00", imagem: "https://images.unsplash.com/photo-1619874923866-7f3f7aa08142?w=400&h=400&fit=crop&crop=face" }
    ]
};

// Estado do carrossel
let currentCategory = 'quentes';
let currentIndex = 0;
let produtosAtuais = produtos[currentCategory];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    criarCarousel();
    atualizarInfoProduto();
    configurarEventos();
});

// Criar itens do carrossel
function criarCarousel() {
    const track = document.getElementById('carouselTrack');
    track.innerHTML = '';
    
    produtosAtuais.forEach((produto, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `<img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">`;
        track.appendChild(item);
    });
    
    atualizarCarousel();
}

// Atualizar posição do carrossel
function atualizarCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
}

// Atualizar informações do produto
function atualizarInfoProduto() {
    const produto = produtosAtuais[currentIndex];
    document.getElementById('productName').textContent = produto.nome;
    document.getElementById('productDescription').textContent = produto.descricao;
    document.getElementById('productPrice').textContent = produto.preco;
}

// Configurar eventos
function configurarEventos() {
    // Botões de categoria
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentCategory = this.dataset.category;
            produtosAtuais = produtos[currentCategory];
            currentIndex = 0;
            
            // Atualizar botões ativos
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            criarCarousel();
            atualizarInfoProduto();
        });
    });

    // Botões de navegação
    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + produtosAtuais.length) % produtosAtuais.length;
        atualizarCarousel();
        atualizarInfoProduto();
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % produtosAtuais.length;
        atualizarCarousel();
        atualizarInfoProduto();
    });

    // Navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}