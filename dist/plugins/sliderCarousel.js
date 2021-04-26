const sliderCarousel = () => {
    const main = document.querySelector('.services-elements'),
        wrap = document.querySelector('.services-carousel'),
        next = document.querySelector('.arrow-right'),
        prev = document.querySelector('.arrow-left'),
        slides = document.querySelector('.services-carousel').children,
        slidesToShow = 3,
        infinity = true,
        widthSlide = Math.floor(100 / slidesToShow);

    let position = 0;

    const addClass = () => {
        main.classList.add('fro-slider');
        wrap.classList.add('fro-slider__wrap');
        for (const item of slides) {
            item.classList.add('fro-slider__item');
        }
    };

    addClass();

    const addStyle = () => {
        const style = document.createElement('style');
        style.id = 'slidercarousel-style';
        // eslint-disable-next-line max-len
        style.textContent = '.fro-slider{overflow: hidden !important;} .fro-slider__wrap {display: flex !important;flex-wrap: nowrap !important;transition: transform 0.5s !important;will-change: transform !important;}.fro-slider__item {flex: 0 0 ' + widthSlide + '% !important;}';
        document.head.appendChild(style);
    };
    addStyle();



    const prevSlider = () => {
        if (infinity || position > 0) {
            --position;
            console.log(position);
            if (position < 0) {
                position = slides.length - slidesToShow;
            }
            wrap.style.transform = 'translateX(-' + position * widthSlide + '%)';
        }
    };

    const nextSlider = () => {
        if (infinity || position < slides.length - slidesToShow) {
            ++position;
            console.log(position);
            if (position > slides.length - slidesToShow) {
                position = 0;
            }
            wrap.style.transform = 'translateX(-' + position * widthSlide + '%)';
        }
    };

    const controlSlider = () => {
        prev.addEventListener('click', prevSlider());
        next.addEventListener('click', nextSlider());
    };

    controlSlider();
};

sliderCarousel();
