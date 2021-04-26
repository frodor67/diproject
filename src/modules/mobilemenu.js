const mobileMenu = () => {

    const menuMobile = document.querySelector('.mobile-menu');

    document.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.mob-menu-btn')) {
            menuMobile.classList.add('open');
        } else if (!target.closest('.mobile-menu')) {
            menuMobile.classList.remove('open');
        } else if (target.matches('li>a') || target.matches('.mobile-menu-close')) {
            menuMobile.classList.remove('open');
        }
    });

};

export default mobileMenu;
