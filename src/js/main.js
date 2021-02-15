const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const navListItems = document.querySelectorAll(".nav__list-item-link");
const body = document.body;
const buttonBar = document.querySelectorAll(".footer__bar-button")

const navFunction = () => {
    if (window.innerWidth < 1024) {
        hamburger.classList.toggle("is-active")
        navList.classList.toggle("nav__list--active")
        body.classList.toggle("block-scroll")
    }
}

const footerBarFunction = (id, e) => {
    const box = document.querySelector(id);
    box.classList.toggle("footer__box--show")
    e.target.textContent === '+' ? e.target.textContent = '-' : e.target.textContent = '+';
}

document.querySelector("#footer-first-button").addEventListener("click", () => {
    footerBarFunction('#footer-first-box', event)
})

document.querySelector("#footer-twice-button").addEventListener("click", () => {
    footerBarFunction('#footer-twice-box', event)
})

document.querySelector("#footer-third-button").addEventListener("click", () => {
    footerBarFunction('#footer-third-box', event)
})

navListItems.forEach(item => {
    item.addEventListener("click", navFunction)
})
hamburger.addEventListener("click", navFunction)