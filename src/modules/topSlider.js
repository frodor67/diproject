const slider = () => {
    const slider = document.querySelector('.top-slider'),
        slide = slider.querySelectorAll('.item');

    let currentSlide = 0;


    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlider = () => {
        prevSlide(slide, currentSlide, 'top-slider__active');
        currentSlide++;
        if (currentSlide > 2) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'top-slider__active');
    };

    const startSlide = (time = 3000) => {
        setInterval(autoPlaySlider, time);
    };

    startSlide();
};

export default slider;

