/*=============== Add Box Shadow to Header ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('navbar')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*============== REVIEW SWIPER ===============*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
});

//Countdown
let valueDisplays = document.querySelectorAll('.num');
let interval = 10000;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function(){
        startValue += 1;
        valueDisplays.textContent = startValue;

        if(startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: true
})

sr.reveal('.about-box, .category-box', {interval: 70, delay: 600, origin: 'bottom'})
sr.reveal('.about-icon, .feature-box, .product-card, .card, .footer-div', {interval: 90})
sr.reveal('.swiper-wrapper', {interval: 70, delay: 600})
sr.reveal('.about-image, .testimonial-title, .faq-contentt, .blog-title', {origin: 'left'})
sr.reveal('.about-title, .testimonial-box, .faq-content', {origin: 'right'})
sr.reveal('.about-text', {origin: 'right', delay: 500})