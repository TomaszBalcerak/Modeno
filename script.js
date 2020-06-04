//Scrollspy//
$('body').scrollspy({ target: '#navbar-example', offset:300 });

//Usunięcie defektu skaczącego widoku na mobile//
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {

    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//Changing hamburger icon
$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
    $('#navbar-example').removeClass('collapse');
  });
});

//zamykanie menu gdy kliknie sie gdziekolwiek//

const $menu = $('.first-button');
const ariaValue = document.querySelector(".first-button").getAttribute("aria-expanded");

$(document).mouseup(e => {
   if (!$menu.is(e.target) // if the target of the click isn't the container...
   && $menu.has(e.target).length === 0) // ... nor a descendant of the container
   {
    $(".first-button").addClass("collapsed");
    $(".first-button").attr("aria-expanded", "false");
    $("#navbar-example").removeClass("show");
    $(".animated-icon2").removeClass("open");
    $(".animated-icon2").removeClass("open");
    $(".animated-icon2").removeClass("open");
  }
 });

//Zamykanie również na ESC
$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
    $(".first-button").addClass("collapsed");
    $(".first-button").attr("aria-expanded", "false");
    $("#navbar-example").removeClass("show");
    $(".animated-icon2").removeClass("open");
    $(".animated-icon2").removeClass("open");
    $(".animated-icon2").removeClass("open");
  }
});
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    document.querySelector(".navbar").style.height = "16vh";
    document.querySelector(".logo").style.height = "9vh";
    document.querySelector("#navbar-example").style.top="16vh"
  } else {
    document.querySelector(".navbar").style.height = "22vh";
    document.querySelector(".logo").style.height = "11vh";
    document.querySelector("#navbar-example").style.top="22vh"
  }
}

//efekt zanikania zdjęcia//
  //zmienne globalne wykorzystywane we wszystkich projektach ponizej//
  const $doc = $(document);/*pozwala stosować jquery*/
  const $Home = $('#Home');
  const $main = $('main');

//zanikanie zdjęcia głównego//
$doc.on("scroll", function(){
  const scrollPos = $doc.scrollTop();//aktualna wartość scrolla//
  const sectionOffset = $main.offset().top;//ile od początku strony//
  const HomeHeight = $Home.outerHeight();//wysokość z borderem i paddingiem//

  $Home.css({
  'opacity' : 1 - scrollPos/HomeHeight,//działanie pozwalające utrzymywać wartość opacity jako zmienną wyliczaną z pozycji scrollTop-outerHeight-mega fajny efekt!!//
  'filter': 'grayscale(' +scrollPos/HomeHeight +')'//tez korzysta ze zmiennej wyliczającej pozycję. Dwójkę daliśmy by szybciej efekt szarości zachodzil//
  })
  //zmiana przejrzystości headera gdy zaczniemy scrollować//
})

//moreInfo button changeContext
const moreInfo = document.querySelector('.btn1');
moreInfo.addEventListener("click", function(){
  if (
  moreInfo.innerHTML.length >9
  ){moreInfo.innerHTML="Zwiń"}
    else {moreInfo.innerHTML="Więcej o nas"}
})

//moreInfo button changeContext
const moreInfo2 = document.querySelector('.btn2');
moreInfo2.addEventListener("click", function(){
  if (
  moreInfo2.innerHTML.length >5
  ){moreInfo2.innerHTML="Zwiń"}
    else {moreInfo2.innerHTML="Więcej"}
})

//ACCORDION\
$(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
          $(this).prev(".card-header").find(".fa").addClass("fa-caret-down").removeClass("fa-caret-up");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-caret-up").addClass("fa-caret-down");
        }).on('hide.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-caret-down").addClass("fa-caret-up");
        });
    });


//Czy element jest w widoku//

const section1 = document.querySelectorAll(".subtitle");
const section2 = document.querySelectorAll(".text");
const sectiontest = document.querySelectorAll(".test");
const section3 = document.querySelectorAll(".offerlist");
const section4 = document.querySelectorAll(".heading");

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < section1.length; i++) {
      if (isElementInViewport(section1[i])) {
        section1[i].classList.add("in-view");
      }
    }
  }

  function callbackFunc2() {
    for (var i = 0; i < section2.length; i++) {
      if (isElementInViewport(section2[i])) {
        section2[i].classList.add("text-in-view");
      }
    }
  }

   function callbackFunc3() {
    for (let i = 0; i < section3.length; i++) {
      if (isElementInViewport(section3[i])) {
        section3[i].classList.add("list-in-view");
      }
    }
  }

  function callbackFunc4() {
    for (let i = 0; i < section4.length; i++) {
      if (isElementInViewport(section4[i])) {
        section4[i].classList.add("head-in-view");
      }
    }
  }

  window.addEventListener("load", callbackFunc,);
  window.addEventListener("resize", callbackFunc,);
  window.addEventListener("scroll", callbackFunc,);

  window.addEventListener("load", callbackFunc2,);
  window.addEventListener("resize", callbackFunc2,);
  window.addEventListener("scroll", callbackFunc2,);

  window.addEventListener("load", callbackFunc3,);
  window.addEventListener("resize", callbackFunc3,);
  window.addEventListener("scroll", callbackFunc3,);

  window.addEventListener("load", callbackFunc4,);
  window.addEventListener("resize", callbackFunc4,);
  window.addEventListener("scroll", callbackFunc4,);

