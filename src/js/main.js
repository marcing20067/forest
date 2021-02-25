const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');
const navListItems = document.querySelectorAll('.nav__list-item-link');
const body = document.body;
const emailForm = document.querySelector('.form__box-email');

const navFunction = () => {
    if (window.innerWidth < 1024) {
        hamburger.classList.toggle('is-active')
        navList.classList.toggle('nav__list--active')
        body.classList.toggle('block-scroll')
    }
}

emailForm.addEventListener('keyup', function () {
    this.value !== '' ? this.classList.add('form__box-email--valid') : this.classList.remove('form__box-email--valid');
})

navListItems.forEach(item => {
    item.addEventListener('click', navFunction)
})
hamburger.addEventListener('click', navFunction)