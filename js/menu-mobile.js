let menuMobile = document.querySelector('.itens-menu-mobile')

function fecharMenu(){
    if(menuMobile.classList.contains('active')){
        menuMobile.classList.remove('active')
    }else{
        menuMobile.classList.add('active')
    }
}
function abrirMobile(){
    if(menuMobile.classList.contains('active')){
        menuMobile.classList.remove('active')
    }else{
        menuMobile.classList.add('active')
    }
}

