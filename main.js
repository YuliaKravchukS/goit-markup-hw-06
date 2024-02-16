'use script'

const burgerMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.mob-menu');
const btnCloseMenu = document.querySelector('.mob-menu-close');
const btnModalOpen = document.querySelector('.hero-btn');
const modal = document.querySelector('.backdrop');
const btnModalClose = document.querySelector('.hero-btn-close');

console.log(burgerMenu, menu, btnCloseMenu );

burgerMenu.addEventListener('click', ()=> menu.classList.add('is-open'))
btnCloseMenu.addEventListener('click', ()=> menu.classList.remove('is-open'))
btnModalOpen.addEventListener('click', ()=> modal.classList.add('is-open'))
btnModalClose.addEventListener('click', ()=> modal.classList.remove('is-open'))

