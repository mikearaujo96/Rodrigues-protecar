const barra = document.querySelector('.carregamento-section-produtos span');
const imgPrincipal = document.getElementById('minhaImagem-produto');
const galeria = document.querySelectorAll('.galeria-produto div');
const textos = document.querySelectorAll('.conteudo-section-produto .conteudo-texto div p');

const imagens = [
    'assets/imagens/produto-angulo1.png',
    'assets/imagens/produto-angulo2.png',
    'assets/imagens/produto-angulo3.png'
];


let indice = 0;


// Atualiza a galeria com a sequência correta
function atualizarGaleria(indicePrincipal) {
    // Remove destaque de todos
    for (let i = 0; i < galeria.length; i++) {
        galeria[i].classList.remove('galeria-destaque');
        galeria[i].style.transition = 'transform 0.2s linear'
    }
    galeria[indicePrincipal].classList.add("galeria-destaque")
}

// Atualiza o scale do texto correspondente
function atualizarTexto(indicePrincipal) {
    textos.forEach((t, i) => {
        t.style.fontSize = (i === indicePrincipal) ? 'var(--tam-4)' : 'var(--tam-1)';
        t.style.borderRight = (i === indicePrincipal) ? '3px solid #fff' : 'none';
    });
}

// Inicializa o primeiro texto com scale
atualizarTexto(indice);

barra.addEventListener('animationiteration', () => {
    // Aplica a classe de saída na imagem
    imgPrincipal.classList.add('sair');

    // Espera a transição de saída terminar
    setTimeout(() => {
        // Atualiza o índice da imagem principal
        indice = (indice + 1) % imagens.length;
        imgPrincipal.src = imagens[indice];

        // Remove sair e adiciona entrar
        imgPrincipal.classList.remove('sair');
        imgPrincipal.classList.add('entrar');

        // Atualiza a galeria
        atualizarGaleria(indice);

        // Atualiza o texto com scale
        atualizarTexto(indice);

        // Remove a classe entrar após a animação
        setTimeout(() => {
            imgPrincipal.classList.remove('entrar');
        }, 700);
    }, 700); // tempo da transição de saída
});
