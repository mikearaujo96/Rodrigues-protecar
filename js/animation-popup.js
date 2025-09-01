const btn1 = document.getElementById("btn1");
const popup1 = document.getElementById("popup1");

const btn2 = document.getElementById("btn2");
const popup2 = document.getElementById("popup2");

btn1.addEventListener("click", () => exibirPopup(popup1, btn1));
btn2.addEventListener("click", () => {
    exibirPopup(popup2, btn2)
    renderizarLista()
});

let popupAberto = null;
let currentHandler = null;

function exibirPopup(popupEl, botaoEl) {
    if (popupAberto === popupEl) {
        fecharPopup(popupEl);
        return;
    }

    if (popupAberto) {
        fecharPopup(popupAberto);
    }

    popupEl.style.display = "block";
    popupEl.style.animationName = "aparecer";
    popupAberto = popupEl;

    // cria handler com referência fixa
    currentHandler = function (event) {
        if (
            popupAberto &&
            !popupEl.contains(event.target) &&
            !botaoEl.contains(event.target)
        ) {
            fecharPopup(popupEl);
        }
    };

    // adiciona o listener depois do clique do botão terminar
    setTimeout(() => document.addEventListener("click", currentHandler), 0);
}

function fecharPopup(popupEl) {
    popupEl.style.animationName = "desaparecer";
    popupAberto = null;

    // remove o listener se existir
    if (currentHandler) {
        document.removeEventListener("click", currentHandler);
        currentHandler = null;
    }

    // opcional: esconder só depois da animação
    popupEl.addEventListener("animationend", function __hide() {
        if (popupEl.style.animationName === "desaparecer") {
            popupEl.style.display = "none";
        }
        popupEl.removeEventListener("animationend", __hide);
    });
}



// INPUT TIPO VEICULO

let opcoesTipoVeiculos = document.querySelectorAll('.opcoes-tipo-veiculo>ul>li');
let inputVeriTipoVeiculo = document.querySelector('#input-veri-1');


opcoesTipoVeiculos.forEach(item => {
    selecionarItemCarros(item)
})

function selecionarItemCarros(item) {
    item.addEventListener('click', () => {
        let nome = item.textContent
        atualizarInputComValorCarros(nome)
        // liberar botão de pesquisa
        document.querySelector('.campo-botao>img').style.opacity = "1"
    })
}
function atualizarInputComValorCarros(nomeVeiculo) {
    inputVeriTipoVeiculo.value = nomeVeiculo
    fecharPopup(popup1)
}


// INPUT ANO 

let listaAnosVeiculos = document.querySelector('#lista-de-anos-veiculos');
let inputVeriAnoVeiculo = document.querySelector('#input-veri-2');

function renderizarLista() {
    let listaAno = []

    for (let i = 2025; i >= 1940; i--) {
        listaAno.push(i)
    }
    listaAno.forEach((i) => {
        listaAnosVeiculos.innerHTML += `<li onclick="selecionarAnoCarros(this)">${i}</li>`
    })
}

function selecionarAnoCarros(ano) {
    inputVeriAnoVeiculo.value = ano.innerHTML
    // liberar botão de pesquisa
    document.querySelector('.campo-botao>img').style.opacity = "1"
    fecharPopup(popup2)
}

inputVeriAnoVeiculo.addEventListener('input', () => {
    if (inputVeriAnoVeiculo.value.length > 4) {
        inputVeriAnoVeiculo.value = inputVeriAnoVeiculo.value.slice(0, 4);
    }
});


// INPUT CEP 


let meuCep = document.querySelector('#meuCep')
document.querySelectorAll('[data-mask="cep"]').forEach((el) => {
    el.addEventListener('input', () => el.value = formatCEP(el.value));
    el.addEventListener('blur', () => {
        const ok = /^\d{5}-\d{3}$/.test(el.value);
        el.setCustomValidity(ok || el.value === '' ? '' : 'CEP inválido');
    });
})
function formatCEP(v) {
    const d = v.replace(/\D/g, '').slice(0, 8);
    return d.length <= 5 ? d : d.slice(0, 5) + '-' + d.slice(5);
}
meuCep.addEventListener('input', () => {
    if (meuCep.value.length == 9) {
        document.querySelector('.campo-botao>img').style.opacity = "1"
    }
})


