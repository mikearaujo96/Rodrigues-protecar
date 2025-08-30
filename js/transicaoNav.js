let menuNav = document.querySelector('.menu-de-navegacao');
let logoRodrigues = document.querySelector('#logo-rodrigues');
let iconeGoogleMaps = document.querySelector('#icone-googlemaps');
let iconeInstagram = document.querySelector('#icone-instagram');
let itensMenu = document.querySelectorAll('.itens-nav>ul>li>a')



window.addEventListener('scroll', alterarNavBar)
window.addEventListener('load', alterarNavBar)

function alterarNavBar() {
    let scrollTela = window.scrollY

    if (scrollTela > 150) {
        menuNav.style.backgroundColor = '#fff';
        menuNav.style.boxShadow = '0px 0px 4px #00000034'
        logoRodrigues.src = 'assets/logos/logo-escura.svg'
        iconeGoogleMaps.src = 'assets/icones/icon-googlemaps-escuro.svg'
        iconeInstagram.src = 'assets/icones/icon-instagram-escuro.svg'
        itensMenu.forEach(i => {
            i.style.color = 'var(--color-5)'
            i.style.fontWeight = '500'
        })

    } else if (scrollTela < 150) {
        menuNav.style.backgroundColor = 'var(--color-fundo-nav)';
        menuNav.style.transition = 'all 0.5s';
        logoRodrigues.src = 'assets/logos/logo-clara.svg'
        iconeGoogleMaps.src = 'assets/icones/icon-googlemaps-claro.svg'
        iconeInstagram.src = 'assets/icones/icon-instagram-claro.svg'
        itensMenu.forEach(i => {
            i.style.color = 'var(--color-texto-claro)'
            i.style.fontWeight = '100'
        })

    }
}