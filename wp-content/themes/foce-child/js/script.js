// A n i m a t i o n : S e c t i o n s  v e r s  l e  h a u t 
console.log("hello, wordl!")

let observer = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach(entry => {
        entry.target.classList.add("scrolled-top");
        observer.unobserve(entry.target);
    });
}); 


//observer.observe(document.querySelector('.story'));
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
      
      loop: true,
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


// A  n i m a t i o n  :  T i t r e s 

// H2 Story - section
$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeinBottomStory').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','top':'3%'},2000);
            }
        });
    });



    $(window).scroll( function(){
        $('.fadeinBottomStory-2').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','top':'3%'},2500);
            }
        });
    });
});

// H2 Place - section 

    $(window).scroll( function(){
        $('.fadeinBottomStudio').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','top':'12%'},2600);
            }
        });
    });

   $(window).scroll( function(){
        $('.fadeinBottomStudio-2').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','top':'12%'},3000);
            }
        });
    });

// H3 Personnages 



     $(window).scroll( function(){
        $('.fadeinBottomCharacters').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','top':'10%'},1500);
            }
        });
    });

     $(window).scroll( function(){
        $('.fadeinBottomCharacters-2').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','top':'10%'},2000);
            }
        });
    });
    
// H3  -  Place Section 

$(window).scroll( function(){
        $('.fadeinBottomPlace').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','bottom':'43%'},2000);
            }
        });
    });

    $(window).scroll( function(){
        $('.fadeinBottomPlace-2').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','bottom':'43%'},2500);
            }
        });
    });
    
    