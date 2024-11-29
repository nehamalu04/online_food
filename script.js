document.addEventListener("DOMContentLoaded", function() {
    let searchform = document.querySelector('.search-form');
    let shoppingcart = document.querySelector('.shopping-cart');
    let loginform = document.querySelector('.login-form');
    let navbar = document.querySelector('.navbar');

    document.querySelector('#search-btn').onclick = () => {
        searchform.classList.toggle('active');
        shoppingcart.classList.remove('active');
        loginform.classList.remove('active');
        navbar.classList.remove('active');
    };

    document.querySelector('#cart-btn').onclick = () => {
        shoppingcart.classList.toggle('active');
        searchform.classList.remove('active');
        loginform.classList.remove('active');
        navbar.classList.remove('active');
    };

    document.querySelector('#login-btn').onclick = () => {
        loginform.classList.toggle('active');
        searchform.classList.remove('active');
        shoppingcart.classList.remove('active');
        navbar.classList.remove('active');
    };

    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
        searchform.classList.remove('active');
        shoppingcart.classList.remove('active');
        loginform.classList.remove('active');
    };

    window.onscroll = () => {
        searchform.classList.remove('active');
        shoppingcart.classList.remove('active');
        loginform.classList.remove('active');
        navbar.classList.remove('active');
    };
    
    document.addEventListener('DOMContentLoaded', function () {
      var swiper = new swiper(".products-slider",{
           loop:true,
           spaceBetween: 20,
           autoplay:{
             delay:7500,
             disableOnInteraction:false,
           },
           centeredSlides:true,
           breakpoints: {
             0: {
               slidesPerView: 1,
               },
             768: {
               slidesPerView: 2,
                },
             1020: {
               slidesPerView: 3,
                },
           },
         });
     
     });
});
    
    
    
    
    
   