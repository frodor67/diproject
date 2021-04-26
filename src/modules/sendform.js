const sendForm = () => {

    const errorMsg = 'Что-то пошло не так...',
        loadMsg = 'Загрузка...',
        successMsg = 'Спасибо! мы скоро с вами свяжемся!';

    const form = document.querySelector('form[name="form-callback"]'),
        inputs = document.querySelectorAll('input'),
        statusMsg = document.createElement('div');

    statusMsg.textContent = 'Тут будет сообщение';
    statusMsg.style.cssText = 'color: #000000;';

    const postData = body => fetch('server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    const closeModal = () => {
        const modal = document.querySelector('.modal-callback'),
            modalOverlay = document.querySelector('.modal-overlay');
        modalOverlay.style = 'display: none';
        modal.style = 'display: none';
    };

    const addSuccessMsg = request => {
        if (request.status !== 200) {
            throw new Error('status network not 200');
        }
        statusMsg.textContent = successMsg;
        setTimeout(() => {
            statusMsg.textContent = '';
            closeModal();
        }, 3000);
        clearInputs();
    };

    const addErrMsg = () => {
        statusMsg.textContent = errorMsg;
        setTimeout(() => {
            statusMsg.textContent = '';
        }, 3000);
        console.error(errorMsg);
        clearInputs();
    };


    form.addEventListener('submit', event => {
        event.preventDefault();
        form.appendChild(statusMsg);
        statusMsg.textContent = loadMsg;
        const formData = new FormData(form);
        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then(addSuccessMsg)
            .catch(addErrMsg);
    });
};

export default sendForm;
