const header = document.querySelector(".sticky-header");
const logoHeader = document.querySelector(".logo");
const linksHeader = document.querySelector(".links");
const linksPlaceholder = document.querySelector(".links-placeholder");
const linksHeaderTop = linksHeader.offsetTop;
let prevScrollpos = window.pageYOffset;
const isMobile = window.matchMedia("(max-width: 767px)").matches;

if (!isMobile) {
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
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
  const links = document.getElementsByClassName("header-link");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      event.preventDefault();
      const targetID = this.getAttribute("href").substr(1);
      document.getElementById(targetID).scrollIntoView({
        behavior: "smooth"
      });
      if (!isMobile) {
        setTimeout(function() {
          header.classList.remove("visible");
        }, 700);
      }
    });
  }
};
