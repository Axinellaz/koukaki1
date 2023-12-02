// A n i m a t i o n : S e c t i o n s  v e r s  l e  h a u t 
console.log("hello, wordl!")

let observer = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach(entry => {
        entry.target.classList.add("scrolled-top");
        observer.unobserve(entry.target);
    });
}); 


observer.observe(document.querySelector('.story'));
observer.observe(document.querySelector('#studio'));
//observer.observe(document.querySelector('.banner img'));
observer.observe(document.querySelector('#characters'));

document.querySelectorAll('before')
        .forEach(e =>{
            observer.observe(e)
        });

// A n i m a t i o n  :  S e c t i o n s  v e r s  l e b a s 

let observerDown = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach(entry => {
        entry.target.classList.add("scrolled-down");
        observer.unobserve(entry.target);
    });
}); 

observerDown.observe(document.querySelector('#place'));
observerDown.observe(document.querySelector('.banner'));
document.querySelectorAll('p')
        .forEach(e =>{
            observerDown.observe(e)
        });

// S e c t i o n : H e a d e r   H e r o -- P a r a l l a x e 

var s = skrollr.init();

// S e c t i o n : L e s  P e r s o n n a g e s -- S l i d e r

var swiper = new Swiper(".mySwiper", {
      
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
       autoplay: {
            delay: 5000,
       },
      pagination: {
        el: ".swiper-pagination",
      },
    });
