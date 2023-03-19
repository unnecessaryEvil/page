var header = document.querySelector(".sticky-header");
var headerHeight = header.offsetHeight;
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.classList.add("visible");
    header.classList.remove("docked");
  } else {
    if (currentScrollPos >= headerHeight) {
      header.classList.add("docked");
    } else {
      header.classList.remove("docked");
    }
    header.classList.remove("visible");
  }
  prevScrollpos = currentScrollPos;
};
