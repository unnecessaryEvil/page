var header = document.querySelector(".sticky-header");
var logoHeader = document.querySelector(".logo");
var linksHeader = document.querySelector(".links");
var linksPlaceholder = document.querySelector(".links-placeholder");
var linksHeaderTop = linksHeader.offsetTop;
var prevScrollpos = window.pageYOffset;
var isMobile = window.matchMedia("(max-width: 767px)").matches;

if (!isMobile) {
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.classList.add("visible");
      logoHeader.classList.remove("docked");
      linksHeader.classList.remove("fixed");
      linksPlaceholder.style.height = "0";
    } else {
      if (currentScrollPos >= linksHeaderTop) {
        logoHeader.classList.add("docked");
        linksHeader.classList.add("fixed");
        linksPlaceholder.style.height = linksHeader.offsetHeight + "px";
      } else {
        logoHeader.classList.remove("docked");
        linksHeader.classList.remove("fixed");
        linksPlaceholder.style.height = "0";
      }
      header.classList.remove("visible");
    }
    prevScrollpos = currentScrollPos;
  };
}