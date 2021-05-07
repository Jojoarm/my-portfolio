const navMenu = document.querySelector('.menu')
const menuBtn = document.querySelectorAll('.menu-btn')
const menuClose = document.querySelector('.menu-btn i')

// ===================== toggle menu/navbar script =============== //
menuBtn.forEach(button => {
    button.addEventListener('click', ()=> {
        navMenu.classList.toggle('active')
        menuClose.classList.toggle('active')
    })
})


// ============== typing text animation script ==================== //
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


/*------------------------Scroll Top------------------*/
//Get the button:
mybutton = document.querySelector(".scroll-up-btn");
// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";

  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

mybutton.addEventListener('click', topFunction)


// ================== Animations ===================/
var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
  
    scroll(loop);
  }


  var elementsToShow2 = document.querySelectorAll('.card-show');

  function loop2() {
      elementsToShow2.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('is-fade-in');
        } else {
          element.classList.remove('is-fade-in');
        }
      });
    
      scroll(loop2);
    }

loop()
loop2()


function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }