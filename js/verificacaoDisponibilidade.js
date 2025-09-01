// FECHAR POPUP CONSULTA DISPONIBILIDADE

let popupVerdadeiro2 = document.querySelector('.resultado-pesquisa.true');
let popupFalso2 = document.querySelector('.resultado-pesquisa.false');

function fecharPopupAgendaTrue() {
    if (popupVerdadeiro2) {
        popupVerdadeiro2.style.display = 'none';
    }
}

function fecharPopupAgendaFalse() {
    if (popupFalso2) {
        popupFalso2.style.display = 'none';
    }
}
