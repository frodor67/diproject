/* eslint-disable strict */
'use strict';

const toggleModal = () => {
    const modal = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay'),
        modalBtn = document.querySelectorAll('.fancyboxModal');

    modalBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            modalOverlay.style.display = 'block';
            modal.style.display = 'block';
        });
    });

    modal.addEventListener('click', e => {
        const target = e.target;
        console.log(target);
        if (target.closest('#close')) {
            modalOverlay.style.display = 'none';
            modal.style.display = 'none';
        }
    });
};

toggleModal();

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

toScroll();

