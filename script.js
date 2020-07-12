//Scrollspy//
$('body').scrollspy({ target: '#navbar-example', offset:300 });

//Usunięcie defektu skaczącego widoku na mobile//
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
    if ($('.animated-icon2').hasClass("open")){
      $('.animated-icon2 span').css("background-color","#084772");
      $('.animated-icon2 span').css("transition","background-color 1.5s, transform 0.5s")
    }
      else if((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)&(!$('.animated-icon2').hasClass("open"))){
        $('.animated-icon2 span').css("background-color","#084772")
      }
      else if((document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)&(!$('.animated-icon2').hasClass("open"))){
        $('.animated-icon2 span').css("background-color","white")
      }
      
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
function naviAnimation() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)&(window.matchMedia("(max-width:1199px)").matches)){
    document.querySelector(".navbar").style.height = "18vh";
    //document.querySelector("#navbar-example").style.top="16vh";
    document.querySelector(".navbar").style.backgroundColor="white";
    document.querySelector(".header").style.boxShadow="0px 0px 0px black";
    let che = document.querySelectorAll(".animated-icon2 span");
    [...che].forEach((chee)=>{chee.style.backgroundColor="#084772"});
    let itemy =document.querySelectorAll(".navbar-nav .nav-item .nav-link");
    [...itemy].forEach((item)=>{item.style.color="rgba(0,0,0,0.8)"});
    document.querySelector(".logo").style.left="5vw";
    document.querySelector(".logo").style.transform="translate(0,-50%)";
    document.querySelector(".logo").style.transition="all 0.3s";
  } else if ((document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)&(window.matchMedia("(max-width:1199px)").matches)) {
    document.querySelector(".navbar").style.height = "21vh";
    //document.querySelector("#navbar-example").style.top="20vh";
    document.querySelector(".navbar").style.backgroundColor="transparent";
    document.querySelector(".header").style.boxShadow="0px 0px 0px black";
    let che = document.querySelectorAll(".animated-icon2 span");
    [...che].forEach((chee)=>{chee.style.backgroundColor="white"});
    let itemy =document.querySelectorAll(".navbar-nav .nav-item .nav-link");
    [...itemy].forEach((item)=>{item.style.color="rgba(0,0,0,0.8)"});
    document.querySelector(".logo").style.left="50vw";
    document.querySelector(".logo").style.transform="translate(-50%,-50%)";
    document.querySelector(".logo").style.transition="all 0.3s";
  }
  else if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)&(window.matchMedia("(min-width:1200px)").matches)) {
    document.querySelector(".navbar").style.height = "100vh";
    document.querySelector(".navbar").style.backgroundColor="white";
    document.querySelector(".header").style.boxShadow="0px 0px 2px black";
    document.querySelector("#navbar-example.collapse").style.alignItems="center";
    let itemy =document.querySelectorAll(".navbar-nav .nav-item .nav-link");
    [...itemy].forEach((item)=>{item.style.color="rgba(0,0,0)"});
    document.querySelector(".logo").style.left="3vw";
    document.querySelector(".logo").style.transform="translate(0,-50%)";
    document.querySelector(".logo").style.transition="all 0.3s";
  }
  else if ((document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)&(window.matchMedia("(min-width:1200px)").matches)) {
    document.querySelector(".navbar").style.height = "20vh";
    //document.querySelector("#navbar-example").style.top="20vh";
    document.querySelector(".navbar").style.backgroundColor="transparent";
    document.querySelector(".header").style.boxShadow="0px 0px 0px black";
    document.querySelector("#navbar-example.collapse").style.alignItems="flex-start";
    let itemy =document.querySelectorAll(".navbar-nav .nav-item .nav-link");
    [...itemy].forEach((item)=>{item.style.color="rgba(256,256,256,0.8)"});
    document.querySelector(".logo").style.left="50vw";
    document.querySelector(".logo").style.transform="translate(-50%,-50%)";
    document.querySelector(".logo").style.transition="all 0.3s";
  }
}

  window.addEventListener("load", naviAnimation,);
  window.addEventListener("resize", naviAnimation,);
  window.addEventListener("scroll", naviAnimation,);
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
  'filter': 'grayscale(' +scrollPos/HomeHeight +')'//tez korzysta ze zmiennej wyliczającej pozycję. Dwójkę daliśmy by szybciej efekt szarości zachodzil//
  })
  //zmiana przejrzystości headera gdy zaczniemy scrollować//
})

//moreInfo button mechanism changeContext and scroll
const moreInfo = document.querySelector('.btn1');
moreInfo.addEventListener("click", function(){
  if (
  moreInfo.innerHTML.length >9
  ){moreInfo.innerHTML="Zwiń";
    setTimeout(function(){
    const checky= $('.btn1').offset().top;
    const checkyMargin = checky-150;
    window.scrollTo(0,checkyMargin);
}, 300);  
}
  else {moreInfo.innerHTML="Więcej o nas"}
})

const moreInfo2 = document.querySelector('.btn2');
moreInfo2.addEventListener("click", function(){
  if (
  moreInfo2.innerHTML.length >5
  ){moreInfo2.innerHTML="Zwiń";
    setTimeout(function(){
    const checky2= $('.btn2').offset().top;
    const checkyMargin2 = checky2 -150;
    window.scrollTo(0,checkyMargin2);
}, 300);  
}
    else {moreInfo2.innerHTML="Więcej o nas"}
})

//ACCORDION\
$(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
          $(this).prev(".card-header").find(".fa").addClass("fa-caret-up").removeClass("fa-caret-down");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-caret-down").addClass("fa-caret-up");
        }).on('hide.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-caret-up").addClass("fa-caret-down");
        });
    });


//Czy element jest w widoku//

const section1 = document.querySelectorAll(".subtitle");
const section2 = document.querySelectorAll(".text");
const sectiontest = document.querySelectorAll(".test");
const section3 = document.querySelectorAll(".offerlist");
const section4 = document.querySelectorAll(".heading");
const section5 = document.querySelectorAll(".icon img");

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

  function callbackFunc5() {
    for (var i = 0; i < section5.length; i++) {
      if (isElementInViewport(section5[i])) {
        section5[i].classList.add("appear");
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

  window.addEventListener("load", callbackFunc5,);
  window.addEventListener("resize", callbackFunc5,);
  window.addEventListener("scroll", callbackFunc5,);

