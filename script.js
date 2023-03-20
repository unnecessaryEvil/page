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

window.onload = function() {

  // Get all links with class "header-link"
  var links = document.getElementsByClassName("header-link");

  // Loop through each link
  for (var i = 0; i < links.length; i++) {

    // Add a click event listener to the link
    links[i].addEventListener("click", function(event) {

      // Prevent the link from opening a new page
      event.preventDefault();

      // Get the target div's ID from the link's href attribute
      var targetID = this.getAttribute("href").substr(1);

      // Scroll to the target div using a smooth animation
      document.getElementById(targetID).scrollIntoView({
        behavior: "smooth"
      });
      if(!isMobile){
      setTimeout(function() {
        header.classList.remove("visible");
      }, 700);
    };
    });

  }

};