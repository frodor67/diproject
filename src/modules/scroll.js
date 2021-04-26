const scroll = () => {

    const btnUp = document.querySelector('.up'),
        services = document.getElementById('services'),
        pageTop = document.querySelector('.main-wrapper'),
        servicesOffsetTop = services.offsetTop;

    document.addEventListener('scroll', () => {
        if (pageYOffset > servicesOffsetTop - 1) {
            btnUp.style.display = 'block';
        } else {
            btnUp.style.display = 'none';
        }
    });

    btnUp.addEventListener('click', () => {
        pageTop.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

};

export default scroll;

