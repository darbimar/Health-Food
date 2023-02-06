function burger() {
    const burger = document.querySelector('.burger'),
    header = document.querySelector('header'),
    body = document.querySelector('body'),
    links = document.querySelectorAll('.header__link');    

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
        header.classList.toggle('header__mobile');
        body.classList.add('no-scroll');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('burger__active');
            header.classList.remove('header__mobile');
            body.classList.remove('no-scroll');
        });
    })
    
}

export default burger;