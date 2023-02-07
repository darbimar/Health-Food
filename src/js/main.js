import burger from './modules/burger';
import calc from './modules/calc';
import forms from './modules/forms';
import menu from './modules/menu';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import { openModal } from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 10000);
    burger();
    calc();
    forms('form', modalTimerId);
    menu();
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCount: '#total',
        currentCount: '#current'
    });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2023-06-11');

});





