const menuBurger = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#navigation')
const imgMenuBurger = document.querySelector('.container__nav-imgs')
//const colorNavbar = document.querySelector('.container-menu')
menuBurger.addEventListener('click', function(){

    menuBurger.classList.toggle('active');
    navigation.classList.toggle('active');
    imgMenuBurger.classList.toggle('active');


});

       /* if(navigation == navigation.classList.contains('.active') ){
        $(colorNavbar).css('background-color', '#FFF5E9');
        }*/
