
document.querySelector(".mobile-button").addEventListener("click", function(event)
{
    document.querySelector(".mobile-menu").classList.toggle("hide");
    document.querySelectorAll(".mobile-btn").forEach(function(item){
      item.classList.toggle('btn-hide');
    })
});

let menu = document.querySelector(".fixed-menu");
menu.addEventListener('click', function(event){
    let clickTarget = event.target;
    let activeBtn = document.querySelector('.active');
    if (clickTarget.classList.contains('nav-link') ){
        clickTarget.classList.add('active');
        activeBtn.classList.remove('active');
        
        let mobile = document.querySelector('.mobile-menu');
        if (!mobile.classList.contains('hide')){
            mobile.classList.add('hide');
        }
    }
    let body = document.querySelector("body");
    let mobileMenu = document.querySelector(".mobile-menu");
    if (!body.classList.contains("off-scroll") && !mobileMenu.classList.contains('hide')){
        body.classList.add("off-scroll");
    }
    else{
      body.classList.remove("off-scroll");
    }
});

let classLink = '.main-link';
window.onscroll = function() {
  let h = document.documentElement.clientHeight;
  if (window.scrollY >= h*4 ){
    classLink = '.comments-link';
  }
  else if (window.scrollY >= h*3){
    classLink = '.works-link';
  }
  else if (window.scrollY >= h*2 ){
    classLink = '.skills-link';
  }
  else if (window.scrollY >= h){
    classLink = '.about-link';
  }
  else{
    classLink = '.main-link';
  }
  let activeBtn = document.querySelector('.active');
  let newActiveBtn = document.querySelector(classLink);
  if (!newActiveBtn.classList.contains('active')){
    newActiveBtn.classList.add('active');
    activeBtn.classList.remove('active')
  }
};