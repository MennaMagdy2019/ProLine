//Sticky navbar
window.onscroll = function(){myScroll()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;    
function myScroll (){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

//Active navigation on scroll
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY;
 
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
   
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight >= fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
//Toggle menu
function togglemenu() {
    document.getElementById("menu").classList.toggle('active');
}

var vis = document.getElementById("vis");
var miss = document.getElementById("miss");
var Vision = document.getElementById("Vision");
var Mission = document.getElementById("Mission");
var vis_miss = [vis , miss , Vision , Mission];
//Toggilevission
function toggilevission(){
  vis_miss.forEach( element =>{
    element.classList.remove("active");
  }
  /*  vis.classList.remove("active");
    miss.classList.remove("active");
    Vision.classList.remove('active');
    Mission.classList.remove('active');*/
  );
}
//Toggilemission
function toggilemission(){
  vis_miss.forEach( element =>{
    element.classList.add("active");
  }
  /* vis.classList.add("active");
    miss.classList.add("active");
    Vision.classList.add('active');
    Mission.classList.add('active');*/
  );
}

//Top btn
var topbtn = document.getElementById("topBtn");
topbtn.addEventListener("click", function(){
    window.scroll({top:0,left:0,behavior:'smooth'});
    
})
