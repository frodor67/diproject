const handler = () => {

    const myForm = document.getElementById('myForm'),
        formBtn = document.getElementById('myBtn'),
        elementsForm = [];

    const disabledBtn = () => {
        formBtn.setAttribute('disabled', 'disabled');
    };
    disabledBtn();
    document.addEventListener('input', e => {
        const target = e.target;
        e = e.preventDefault;
        if (target.matches('input[name="fio"]')) {
            target.value = target.value.replace(/[^а-яА-Яё\s]/ig, '');
        }

        if (target.matches('input[name="tel"]')) {
            // eslint-disable-next-line no-useless-escape
            target.value = target.value.replace(/[^\d\+]/g, '');
        }
    });

    for (const elem of myForm.elements) {
        elementsForm.push(elem);
    }

    elementsForm.forEach(elem => {
        elem.addEventListener('blur', e => {
            const target = e.target;
            if (target.matches('input[name="fio"]')) {
                if (target.value.length < 2 || target.value === '') {
                    target.value = '';
                    //target.style.border = 'solid red';
                    formBtn.setAttribute('disabled', 'disabled');
                } else {
                    target.style.border = '';
                    formBtn.removeAttribute('disabled');
                }
            }

            if (target.matches('input[name="tel"]')) {
                if (target.value.length < 7 || target.value === '' || target.value.length > 12) {
                    target.value = '';
                    //target.style.border = 'solid red';
                    formBtn.setAttribute('disabled', 'disabled');
                } else {
                    target.style.border = '';
                    formBtn.removeAttribute('disabled');
                }

            }

            if (target.closest('#close') || target.closest('#modal-overlay')) {
                elem.style.border = '';
            }
        });
    });
};

// handler();

export default handler;
