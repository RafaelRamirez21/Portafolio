const open=document.querySelector('.hamburger');
const closeX=document.querySelectorAll('.close__x');
const close=document.querySelector('.close__x');
const nav=document.querySelectorAll('.nav__menu');
const hiddeButton=document.querySelectorAll('.bx-menu');
console.log(hiddeButton)
open.addEventListener("click", () => {
    nav.forEach(nav_el=>nav_el.classList.add('nav__visible'))
    hiddeButton.forEach(av_el=>av_el.classList.remove('bx-menu'))
    closeX.forEach(av_el=>av_el.classList.add('open__x'))
});
close.addEventListener("click", () => {
    nav.forEach(nav_el=>nav_el.classList.remove('nav__visible'))
    hiddeButton.forEach(av_el=>av_el.classList.add('bx-menu'))
    closeX.forEach(av_el=>av_el.classList.remove('open__x'))
});