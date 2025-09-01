
const linkAgendamento = document.getElementById("agendamento-marcado");

linkAgendamento.addEventListener("click", (e) => {
    e.preventDefault(); // impede comportamento padrão do link

    // Pega os dados salvos no localStorage
    const dados = JSON.parse(localStorage.getItem("agendamento"));

    if (!dados) {
        alert("Nenhum dado de agendamento encontrado!");
        return;
    }

    // Monta a mensagem personalizada
    const mensagem = `Olá! Gostaria de agendar um horário com os seguintes dados:

🚗 Veículo: ${dados.TipoVeiculo} (${dados.AnoVeiculo})
📍 Endereço: ${dados.Rua}, ${dados.Bairro}, ${dados.Cidade} - ${dados.UF}, CEP: ${dados.Cep}`;

    // Codifica a mensagem para a URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Coloque aqui o número do seu WhatsApp (com DDI +55 e DDD)
    const numeroWhatsApp = "5511987812686";

    // Abre o WhatsApp com a mensagem
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`, "_blank");
});
