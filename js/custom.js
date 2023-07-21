/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    preloader.style.transition = 'opacity 3s ease-in-out'; // set the transition property
    preloader.style.opacity = '0'; // gradually update the opacity to 0
    setTimeout(function() {
        preloader.style.display = 'none'; // hide the preloader after the transition completes
    }, 500); // wait for 0.5 seconds before hiding the preloader
});

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/

// $(document).ready(function() {
// document.addEventListener("DOMContentLoaded", function() {
//navbar向下滾動的時候會出現陰影，向上時則消失
let lastPos = 0
const nav = document.querySelector('.navbar');
// 1. 消失
document.addEventListener('scroll', function() {
    let currentPos = window.scrollY;

    //   往下滑
    if (currentPos > lastPos) {
        //往下滑navbar消失
        nav.style.top = "-60px";
        nav.classList.remove('navbar-shadow');
    } else {
        //往上滑navbar出現，並加陰影
        nav.style.top = "0px";
        nav.classList.add('navbar-shadow');

    }
    lastPos = currentPos;
});

// 2. 換顏色

//在navbar封面時，navbar為透明，其餘為白色

const section1 = document.querySelector('.navbar-trans');
const listexample = document.querySelector('#list-example');

const changeColor = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.classList.add('bg-transparent');
            nav.classList.remove('navbar-shadow');
            listexample.style.display = "none";
        } else {
            nav.classList.remove('bg-transparent');
            if (IsPC()) {
                listexample.style.display = "block";
            } else {
                listexample.style.display = "none";
            }
        }
    })

}

//做一個新的觀察
let observer = new IntersectionObserver(changeColor);
//觀察對象section1
observer.observe(section1);




//手機高度修整
const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', documentHeight)
documentHeight()


//from https://github.com/capeta0507/JS_PC_MOBILE
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    // Agents 字串陣列來判斷是否為手機裝置
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        let findIndex = userAgentInfo.indexOf(Agents[v]);
        // console.log(v, Agents[v], findIndex);
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
}



// });





/*-------------------------------------------------------------------------------
  Navigation - Hide mobile menu after clicking on a link
-------------------------------------------------------------------------------*/

// $('.navbar-collapse a').click(function() {
//     $(".navbar-collapse").collapse('hide');
// });


// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });


/*-------------------------------------------------------------------------------
  jQuery Parallax
-------------------------------------------------------------------------------*/

// function initParallax() {
//     $('#home').parallax("100%", 0.1);
//     $('#project1').parallax("100%", 0.3);
//     $('#service').parallax("100%", 0.2);
//     $('#experience').parallax("100%", 0.3);
//     $('#education').parallax("100%", 0.1);
//     $('#quotes').parallax("100%", 0.3);
//     $('#contact').parallax("100%", 0.1);
//     $('footer').parallax("100%", 0.2);

// }
// initParallax();



/*-------------------------------------------------------------------------------
  smoothScroll js
-------------------------------------------------------------------------------*/

// $(function() {
//     $('.custom-navbar a, #home a').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top - 49
//         }, 1000);
//         event.preventDefault();
//     });
// });



/*-------------------------------------------------------------------------------
  wow js - Animation js
-------------------------------------------------------------------------------*/

// new WOW({
//     mobile: false
// }).init();


// });