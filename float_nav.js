window.onscroll = function() {myFunction()};
var navbar = document.querySelector(".navigation");
var element = document.querySelector(".lcont");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky && window.innerWidth >= 860) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
 }