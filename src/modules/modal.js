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

    document.addEventListener('click', e => {
        const target = e.target;
        console.log(target);
        if (target.closest('#close') || target.closest('#modal-overlay')) {
            modalOverlay.style.display = 'none';
            modal.style.display = 'none';
        }
    });
};


export default toggleModal;
