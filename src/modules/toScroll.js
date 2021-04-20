const toScroll = () => {

    const anchors = document.querySelectorAll('.scroll-to');

    for (const anchor of anchors) {
        anchor.addEventListener('click', e => {
            e.preventDefault();

            const sectionID = anchor.getAttribute('href');

            document.querySelector(sectionID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
};


export default toScroll;
