// Javascript of responsive navigation menu
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
});

// Javascript for video slider navigation
const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.vid-slide');
const texts = document.querySelectorAll('.text');

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    texts.forEach((text) => {
        text.classList.remove('active');
    });

    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
    texts[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
    });
});