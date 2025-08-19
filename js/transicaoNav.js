let menuNav = document.querySelector('.menu-de-navegacao');
let logoRodrigues = document.querySelector('#logo-rodrigues');
let iconeFacebook = document.querySelector('#icone-facebook');
let iconeInstagram = document.querySelector('#icone-instagram');
let itensMenu = document.querySelectorAll('.itens-nav>ul>li>a')



window.addEventListener('scroll', () => {
    let scrollTela = window.scrollY

    if (scrollTela > 500) {
        menuNav.style.backgroundColor = '#fff';
        logoRodrigues.src = 'assets/logos/logo-escura.svg'
        iconeFacebook.src = 'assets/icones/icon-facebook-escuro.svg'
        iconeInstagram.src = 'assets/icones/icon-instagram-escuro.svg'
        itensMenu.forEach(i => {
            i.style.color = 'var(--color-5)'
            i.style.fontWeight = '500'
        })

    } else if (scrollTela < 500) {
        menuNav.style.backgroundColor = 'var(--color-fundo-nav)';
        menuNav.style.transition = 'all 0.5s';
        logoRodrigues.src = 'assets/logos/logo-clara.svg'
        iconeFacebook.src = 'assets/icones/icon-facebook-claro.svg'
        iconeInstagram.src = 'assets/icones/icon-instagram-claro.svg'
        itensMenu.forEach(i => {
            i.style.color = 'var(--color-texto-claro)'
            i.style.fontWeight = '100'
        })














    }
})
