
// Tipo de veiculo
let containerOpcoesTipoVeiculos = document.querySelector('.opcoes-tipo-veiculo');
let opcoesTipoVeiculos = document.querySelectorAll('.opcoes-tipo-veiculo>ul>li');
let inputVeriTipoVeiculo = document.querySelector('#input-veri-1');
let abrirTipoVeiculo = document.querySelector('#abrir-tipo-veiculos');
let countTipoveiculo = 0


opcoesTipoVeiculos.forEach(i => {
    i.addEventListener('click', () => {
        let nome = i.textContent
        inputVeriTipoVeiculo.placeholder = nome
        containerOpcoesTipoVeiculos.style.animationName = 'desaparecer'
        countTipoveiculo = 0

    })
})


abrirTipoVeiculo.addEventListener('click', (e) => {

    if (countTipoveiculo == 0) {
        containerOpcoesTipoVeiculos.style.animationName = 'aparecer'
        countTipoveiculo = 1
    } else if (countTipoveiculo == 1) {
        containerOpcoesTipoVeiculos.style.animationName = 'desaparecer'
        countTipoveiculo = 0
    }
})


// Ano de veiculo

let containerOpcoesAnoVeiculos = document.querySelector('.opcoes-ano-veiculo');
let inputVeriAnoVeiculo = document.querySelector('#input-veri-2');
let abrirAnoVeiculo = document.querySelector('#abrir-ano-veiculos');
let listaAnosVeiculos = document.querySelector('#lista-de-anos-veiculos');
let listaAno = []
let countAnoVeiculo = 0

abrirAnoVeiculo.addEventListener('click', (e) => {

    if (countAnoVeiculo == 0) {
        containerOpcoesAnoVeiculos.style.animationName = 'aparecer'
        countAnoVeiculo = 1
    } else if (countAnoVeiculo == 1) {
        containerOpcoesAnoVeiculos.style.animationName = 'desaparecer'
        countAnoVeiculo = 0
    }
})


for (let i = 2000; i <= 2025; i++) {
    listaAno.push(i)
}

listaAno.forEach((i) => {
    listaAnosVeiculos.innerHTML += `<li>${i}</li>`
})

let opcoesAnoVeiculos = document.querySelectorAll('.opcoes-ano-veiculo>ul>li');

opcoesAnoVeiculos.forEach(i => {
    i.addEventListener('click', () => {
        let ano = i.textContent
        inputVeriAnoVeiculo.placeholder = ano
        containerOpcoesAnoVeiculos.style.animationName = 'desaparecer'
        countAnoVeiculo = 0
    })
})


// cep


document.querySelectorAll('[data-mask="cep"]').forEach((el) => {
  el.addEventListener('input', () => el.value = formatCEP(el.value));
  el.addEventListener('blur', () => {
    const ok = /^\d{5}-\d{3}$/.test(el.value);
    el.setCustomValidity(ok || el.value === '' ? '' : 'CEP inválido');
  });
});

function formatCEP(v) {
  const d = v.replace(/\D/g, '').slice(0, 8);
  return d.length <= 5 ? d : d.slice(0, 5) + '-' + d.slice(5);
}
