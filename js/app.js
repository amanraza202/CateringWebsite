$(document).ready(function () {
   $('.food-slider').slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: ".prev-btn",
      nextArrow: ".next-btn",
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
            }
         }
      ]

   });

   $('.nav-trigger').click(function () {
      $('.site-content-wrapper').toggleClass('scaled');
   })
});
function loader() {
   document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
   setInterval(loader, 3000);
}

window.onload = fadeOut;
