const body = document.body;
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');
const navListItems = document.querySelectorAll('.nav__list-item-link');
const nav = document.querySelector('nav');
const navFocusableChilds = [hamburger, ...navListItems];
const navFirstFocusableChild = navFocusableChilds[0];
const navLastFocusableChild = navFocusableChilds[navFocusableChilds.length - 1];

const myLocation = window.location.href.split('/').reverse()[0];
let isTrappedTabulation = false;

const handleNav = () => {
  if (window.innerWidth < 1024) {
    hamburger.classList.toggle('is-active');
    navList.classList.toggle('nav__list--active');
    body.classList.toggle('block-scroll');
    isTrappedTabulation = !isTrappedTabulation;
    updateNavLinksTabIndex();
  }
};

const updateNavLinksTabIndex = () => {
  navListItems.forEach((link) => {
    link.tabIndex = isTrappedTabulation || window.innerWidth >= 1024 ? 0 : -1;
  });
};

const updateFormStatus = (e) => {
  const form = e.target;
  form.classList.toggle('form__box-email--valid', form.value !== '');
};

const trapTabulation = (e) => {
  if (!isTrappedTabulation || e.key !== 'Tab' || window.innerWidth >= 1024) {
    return;
  }

  if (e.shiftKey && document.activeElement === navFirstFocusableChild) {
    navLastFocusableChild.focus();
    e.preventDefault();
  }

  if (!e.shiftKey && document.activeElement === navLastFocusableChild) {
    navFirstFocusableChild.focus();
    e.preventDefault();
  }
};

if (myLocation === 'contact.html') {
  const emailForm = document.querySelector('.form__box-email');
  emailForm.addEventListener('change', updateFormStatus);
}

navListItems.forEach((item) => {
  item.addEventListener('click', handleNav);
});
hamburger.addEventListener('click', handleNav);
window.addEventListener('resize', updateNavLinksTabIndex, {
  passive: true,
});
nav.addEventListener('keydown', trapTabulation);
