const accordeon = () => {

    const acc = document.querySelector('.accordeon'),
        accElem = acc.querySelectorAll('.element'),
        context = acc.querySelectorAll('.element-content');
    let text;


    const accTitleAction = text => {
        if (text.style.maxHeight) {
            text.style.maxHeight = null;
        } else {
            text.style.maxHeight = text.scrollHeight + 'px';
        }
    };

    const accAction = () => {
        accElem.forEach(elem => {
            if (elem.classList.contains('active')) {
                elem.classList.remove('active');
                context.forEach(e => {
                    e.style.maxHeight = null;
                });
            }
        });
    };
    const toggleAcc = () => {
        accElem.forEach(item => {
            item.addEventListener('click', () => {
                text = item.querySelector('.title').nextElementSibling;
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                } else {
                    accAction(item);
                    item.classList.add('active');
                }
                accTitleAction(text);
            });
        });
    };

    toggleAcc();

};

export default accordeon;

