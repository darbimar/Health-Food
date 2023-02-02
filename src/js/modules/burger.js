function burger() {
    const burger = document.querySelector('.burger'),
    header = document.querySelector('header'),
    body = document.querySelector('body');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
        header.classList.toggle('header__mobile');
        body.classList.toggle('no-scroll');
    });
}

export default burger;