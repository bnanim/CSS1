const burgerEl = document.querySelector('.burger');
const offScreenMenuEl = document.querySelector('.off-screen-menu');
burgerEl.addEventListener('click', function () {
    offScreenMenuEl.classList.toggle('active');
    burgerEl.classList.toggle('active');
}) 