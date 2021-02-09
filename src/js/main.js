const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const navListItems = document.querySelectorAll(".nav__list-item-link");
const body = document.body;

const navFunction = () => {
    if (window.innerWidth < 1024) {
        hamburger.classList.toggle("is-active")
        navList.classList.toggle("nav__list--active")
        body.classList.toggle("block-scroll")
    }
}

navListItems.forEach(item => {
    item.addEventListener("click", navFunction)
})
hamburger.addEventListener("click", navFunction)