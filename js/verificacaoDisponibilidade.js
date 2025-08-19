// INPUT: Tipo de veiculo
let containerOpcoesTipoVeiculos = document.querySelector('.opcoes-tipo-veiculo');
let opcoesTipoVeiculos = document.querySelectorAll('.opcoes-tipo-veiculo>ul>li');
let inputVeriTipoVeiculo = document.querySelector('#input-veri-1');
let popupCarros = false

document.querySelector('#abrir-tipo-veiculos').addEventListener('click', exibirPopupCarros)

function exibirPopupCarros() {
    if (popupCarros == false) {
        containerOpcoesTipoVeiculos.style.animationName = 'aparecer'
        popupCarros = true
    } else {
        containerOpcoesTipoVeiculos.style.animationName = 'desaparecer'
        popupCarros = false
    }
}

opcoesTipoVeiculos.forEach(i => {
    selecionarItemCarros(i)
})

function selecionarItemCarros(item) {
    item.addEventListener('click', () => {
        let nome = item.textContent
        atualizarInputComValorCarros(nome)
    })
}

function atualizarInputComValorCarros(nome) {
    inputVeriTipoVeiculo.value = nome
    ocultarPopupCarros()
}

let ocultarPopupCarros = () => {
    containerOpcoesTipoVeiculos.style.animationName = 'desaparecer'
    popupCarros = false
}




// INPUT: Ano do veiculo

let containerOpcoesAnoVeiculos = document.querySelector('.opcoes-ano-veiculo');
let inputVeriAnoVeiculo = document.querySelector('#input-veri-2');
let listaAnosVeiculos = document.querySelector('#lista-de-anos-veiculos');

let popupAnoCarros = false

document.querySelector('#abrir-ano-veiculos').addEventListener('click', exibirPopupAnoCarros)

function exibirPopupAnoCarros() {
    if (popupAnoCarros == false) {
        containerOpcoesAnoVeiculos.style.animationName = 'aparecer'
        popupAnoCarros = true
        renderizarLista()
    } else {
        containerOpcoesAnoVeiculos.style.animationName = 'desaparecer'
        popupAnoCarros = false
    }
}

function renderizarLista() {
    let listaAno = []

    for (let i = 2000; i <= 2025; i++) {
        listaAno.push(i)
    }
    listaAno.forEach((i) => {
        listaAnosVeiculos.innerHTML += `<li onclick="selecionarAnoCarros(this)">${i}</li>`
    })
}

function selecionarAnoCarros(ano) {
    inputVeriAnoVeiculo.value = ano.innerHTML
    ocultarPopupAnoCarros()
}

let ocultarPopupAnoCarros = () => {
    containerOpcoesAnoVeiculos.style.animationName = 'desaparecer'
    popupAnoCarros = false
}

// INPUT: CEP

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



// Envio form
document.querySelector('#verificarDisponibilidade').addEventListener('click', () => {
    let tipo = inputVeriTipoVeiculo.value
    let ano = inputVeriAnoVeiculo.value
    let cep = meuCep.value

    if (tipo == "") {
        console.log('campo tipo vazio')
    } else if (ano == "") {
        console.log('campo ano vazio')
    } else if (cep == "" || cep.length < 9) {
        console.log('campo cep vazio ou incorreto')
    } else {
        console.log(`Tudo certo. Seu veiculo é: ${tipo}, o ano é ${ano}, e seu cep é ${cep}`)

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Erro na requisição: ${res.status}`);
                }
                return res.json();
            })
            .then(data => console.log(data))
            .catch(err => console.error("Falha ao consultar CEP:", err));
    }
})