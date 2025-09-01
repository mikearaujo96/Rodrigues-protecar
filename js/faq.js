// Seleciona todas as perguntas internas
const perguntas = document.querySelectorAll('.perguntas-respostas-1 > .perguntas > .pergunta');

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        // Pega o ícone dentro da pergunta
        const icone = pergunta.querySelector('.icon-pergunta');

        // Pega a div resposta correspondente (irmã da pergunta dentro do mesmo pai)
        const resposta = pergunta.parentElement.querySelector('.resposta');

        // Alterna a exibição da resposta
        if (resposta.style.display === 'block') {
            resposta.style.display = 'none';
            icone.classList.remove('active'); // exemplo: remove classe que indica "aberto"
        } else {
            resposta.style.display = 'block';
            icone.classList.add('active'); // exemplo: adiciona classe que indica "aberto"
            icone.style.transition = 'ease-in-out 0.2s'
        }
    });
});
