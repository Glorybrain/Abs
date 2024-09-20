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