
// Envio form
const btnVerificar = document.querySelector('#verificarDisponibilidade');
const resultadoOk = document.querySelector('.resultado-pesquisa.true');
const resultadoErro = document.querySelector('.resultado-pesquisa.false');
const btnImg = document.querySelector('.campo-botao>img');
let popupVerdadeiro = document.querySelector('.resultado-pesquisa.true');
let popupFalso = document.querySelector('.resultado-pesquisa.false');

btnVerificar.addEventListener('click', () => {

    const tipo = inputVeriTipoVeiculo.value.trim();
    const ano = inputVeriAnoVeiculo.value.trim();
    const cep = meuCep.value.trim();

    // Reset de placeholders
    [inputVeriTipoVeiculo, inputVeriAnoVeiculo, meuCep].forEach(el => el.placeholder = "");

    // Validação simples
    if (!tipo) {
        inputVeriTipoVeiculo.placeholder = "Campo vazio";
        btnImg.style.opacity = "0.5";
        return;
    }
    if (!ano) {
        inputVeriAnoVeiculo.placeholder = "Campo vazio";
        btnImg.style.opacity = "0.5";
        return;
    }
    if (!cep || cep.length < 9) {
        meuCep.placeholder = "CEP inválido";
        btnImg.style.opacity = "0.5";
        return;
    }

    // Feedback de carregamento
    btnImg.style.opacity = "0.5";

    // Consulta CEP na API
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => {
            if (!res.ok) throw new Error(`Erro na requisição: ${res.status}`);
            return res.json();
        })
        .then(data => {
            if (data.erro) {
                throw new Error("CEP não encontrado");
            }

            // Armazenando dados
            const enderecoArray = {
                Cep: data.cep,
                Rua: data.logradouro,
                Bairro: data.bairro,
                Cidade: data.localidade,
                UF: data.uf
            };
            localStorage.setItem('endereco', JSON.stringify(enderecoArray));

            // Mostrar resultado
            if (data.localidade === "São Paulo") {
                popupVerdadeiro.style.display = 'block'
                popupFalso.style.display = 'none'
            } else {
                popupVerdadeiro.style.display = 'none'
                popupFalso.style.display = 'block'
            }
        })
        .catch(err => {
            console.error("Falha ao consultar CEP:", err);
            popupVerdadeiro.style.display = 'none'
            popupFalso.style.display = 'block'
        })
        .finally(() => {
            btnImg.style.opacity = "1";
        });
});
