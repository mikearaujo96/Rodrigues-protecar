
const formulario = document.querySelector('.formulario-contato');

// Função para formatar telefone
function formatarTelefone(value) {
    // Remove tudo que não é número
    let numeros = value.replace(/\D/g, '');

    // Limita a 11 dígitos
    numeros = numeros.substring(0, 11);

    // Formata (XX) XXXXX-XXXX
    if (numeros.length > 6) {
        return `(${numeros.substring(0, 2)}) ${numeros.substring(2, 7)}-${numeros.substring(7)}`;
    } else if (numeros.length > 2) {
        return `(${numeros.substring(0, 2)}) ${numeros.substring(2)}`;
    } else {
        return numeros ? `(${numeros}` : '';
    }
}

// Formata o telefone enquanto o usuário digita
const telefoneInput = document.getElementById('input-telefone-formulario');
telefoneInput.addEventListener('input', () => {
    telefoneInput.value = formatarTelefone(telefoneInput.value);
});

formulario.addEventListener('submit', function (event) {
    const nomeInput = document.getElementById('input-nome-formulario');
    const emailInput = document.getElementById('input-email-formulario');
    const mensagemInput = document.getElementById('input-mensagem-formulario');

    let valid = true;

    // Função auxiliar para verificar vazio
    function checarCampo(input, mensagem) {
        if (!input.value.trim()) {
            input.value = '';
            input.placeholder = mensagem;
            valid = false;
        }
    }

    // Verifica campos
    checarCampo(nomeInput, "Por favor, insira seu nome");
    checarCampo(telefoneInput, "Por favor, insira seu telefone");
    checarCampo(emailInput, "Por favor, insira seu email");
    checarCampo(mensagemInput, "Por favor, insira sua mensagem");

    if (!valid) {
        event.preventDefault(); // impede envio
        return;
    }

    // Formatação antes do envio
    // Nome: primeira letra maiúscula
    nomeInput.value = nomeInput.value
        .toLowerCase()
        .split(' ')
        .map(p => p.charAt(0).toUpperCase() + p.slice(1))
        .join(' ');

    // Telefone: já formatado no input
    // Email: minúsculo
    emailInput.value = emailInput.value.toLowerCase();

    // Mensagem: remove espaços extras
    mensagemInput.value = mensagemInput.value.replace(/\s+/g, ' ');
});

