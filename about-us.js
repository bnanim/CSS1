const burgerEl = document.querySelector('.burger');
const offScreenMenuEl = document.querySelector('.off-screen-menu');
burgerEl.addEventListener('click', function () {
    offScreenMenuEl.classList.toggle('active');
    burgerEl.classList.toggle('active');
})
const hiddenEl = document.querySelector('.hidden');
const vmButtonEl = document.querySelector('.view-more');
const vlButtonEl = document.querySelector('.view-less');

vmButtonEl.addEventListener('click', function () {
    vmButtonEl.classList.toggle('active');
    hiddenEl.classList.toggle('active');
    vlButtonEl.classList.toggle('active');
})
vlButtonEl.addEventListener('click', function () {
    vmButtonEl.classList.toggle('active');
    hiddenEl.classList.toggle('active');
    vlButtonEl.classList.toggle('active');
})