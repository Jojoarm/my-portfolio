const navMenu = document.querySelector('.menu')
const menuBtn = document.querySelector('#menu-btn')
const menuClose = document.querySelector('.menu-btn i')

// toggle menu/navbar script
menuBtn.addEventListener('click', ()=> {
    navMenu.classList.toggle('active')
    menuClose.classList.toggle('active')
})


// typing text animation script
var typed = new Typed(".typing", {
    strings: ["A Front End Web Developer", "An Aspiring Full Stack Developer", "An Engineer", "A Designer", "A Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["A Front End Web Developer", "An Aspiring Full Stack Developer", "An Engineer", "A Designer", "A Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// owl carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    center: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 1,
            nav: false
        },
        1000:{
            items: 1,
            nav: false
       }
    }
});