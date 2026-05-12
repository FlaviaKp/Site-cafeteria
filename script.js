// Dados dos produtos
const produtos = {
    quentes: [
        { nome: "Cappuccino", descricao: "Espresso com leite vaporizado e espuma cremosa, polvilhado com canela (270ml).", preco: "R$ 12,00", imagem: "imagens/cardapio/bebidas quentes/cap_italiano.jpg" }

        ,{nome: "Big Latte", descricao: "Uma dose dupla de café espresso (Orfeu) e leite vaporizado cremosinho. 500ml de café com leite para você se esbaldar!.", preco: "R$ 23,90", imagem: "imagens/cardapio/bebidas quentes/big_latte.jpg" }

        ,{nome: "Cappuccino Especial", descricao: "Sua composição leva calda de chocolate gourmet meio amargo, uma mistura deliciosa do nosso cappuccino especial, leite vaporizado, uma pitadinha de canela em pó e chantilly em um potinho enviado separadamente (opcional) (270ml).", preco: "R$ 19,90", imagem: "imagens/cardapio/bebidas quentes/cap_especial.jpg" }

        ,{nome: "Chocolate Quente Europeu", descricao: "Esse chocolate quente é muito consumido no friozinho europeu. Sua composição leva um blend especial de chocolate em pó, leite vaporizado bem cremoso e chantilly em um potinho enviado separadamente (opcional) (270ml).", preco: "R$ 24,00", imagem: "imagens/cardapio/bebidas quentes/chocolate_quente.jpg" }
    ],
    geladas: [
        { nome: "Iced Latte", descricao: "Um shot de café espresso, leite e gelo (baunilha opcional). Simples e delicioso! (400ml)", preco: "R$ 17,90", imagem: "imagens/cardapio/bebidas geladas/iced_latte.jpg" },

        ,{ nome: "Smoothies", descricao: "Beeem gelado e saboroso, nosso smoothhie é perfeito para aqueles dias em que Curitiba entra no modo verão (500ml).", preco: "R$ 24,90", imagem: "imagens/cardapio/bebidas geladas/smoothies.jpg" }

        ,{ nome: "Cappuccino Gelado", descricao: "Delicioso blend do nosso cappuccino especial, calda de chocolate meio amargo, leite, cubos de gelo, chantilly e canela em pó... Essa bebida tem o incrível poder de melhorar o seu dia!", preco: "R$ 24,90", imagem: "imagens/cardapio/bebidas geladas/cap_gelado.jpg" }

        ,{ nome: "Frappês", descricao: "Bebida cremosinhha, bem gelada e deliciosa! perfeita para uma pausa no meio do dia. Ele leva café expresso (opcional), leite, chantilly e o ingrediente do sabor escolhido (500ml).", preco: "R$ 24,90", imagem: "imagens/cardapio/bebidas geladas/frappes.jpg" }
    ],
    bolo_pote: [
        { nome: "Bolo de Pote de Cenoura com Brigadeiro", descricao: "A combinação perfeita de um bolo de cenoura fofinho com brigadeiro cremoso dentro de um potinho! (200ml).", preco: "R$ 19,90", imagem: "imagens/cardapio/bolo no pote/cenoura.jpg" }

        ,{ nome: "Bolo de Pote de Brigadeiro Dois Amores", descricao: "Saboreie a felicidade em cada camada com o nosso Bolo de Pote de Dois Amores. É uma explosão de brigadeiros preto e branco em cada colherada. (220ml)", preco: "R$ 22,00", imagem: "imagens/cardapio/bolo no pote/dois_amores.jpg" }

        ,{ nome: "Bolo de Pote de Brigadeiro e Caramelo Salgado", descricao: "Feito com camadas de bolo de chocolate super macio, brigadeiro cremoso artesanal e um toque surpreendente de caramelo salgado (220ml).", preco: "R$ 19,90", imagem: "imagens/cardapio/bolo no pote/caramelo.jpg" }
    ],
    bombom_pote: [
        { nome: "Bombom de Pote: Dois Amores com Uva", descricao: "Brigadeiro preto 50% cacau com brigadeiro branco bem cremosinho e uas verdes sem semente! (120ml)", preco: "R$ 17,99", imagem: "imagens/cardapio/bombom no pote/dois_amores.jpg" }

        ,{ nome: "Bombom de Pote: Mousse de Maracujá com Creme de Alpino", descricao: "A combinação perfeita do azedinhho do maracujá com o sabor marcante do chocolate Alpino! (120ml).", preco: "R$ 17,99", imagem: "imagens/cardapio/bombom no pote/musse_maracuja.jpg" }
    ],
    brownies: [
        { nome: "Brownie Tradicional", descricao: "Brownie super chocolatudo com casquinha crocante e interior úmido.", preco: "R$ 10,00", imagem: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop" }
        
        ,{ nome: "Brownie com Sorvete", descricao: "Nosso brownie quente servido com uma bola de sorvete de baunilha.", preco: "R$ 18,00", imagem: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&h=400&fit=crop" }
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