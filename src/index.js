/* eslint-disable strict */
'use strict';


import toggleModal from './modules/modal';
import toScroll from './modules/toScroll';
import topSlider from './modules/topSlider';
import accordeon from './modules/accordeon';
import scroll from './modules/scroll';
import handler from './modules/handler';
import sendForm from './modules/sendform';
//import sliderCarousel from './modules/sliderCarousel';

//Модальное окно
toggleModal();
//Плавный скролл из меню
toScroll();
//Первый слайдер
topSlider();
//аккордеон
accordeon();
//Плавный скролл
scroll();
//События
handler();

sendForm();
