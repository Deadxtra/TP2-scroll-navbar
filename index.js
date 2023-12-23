//*****************************CORRECTION *****************************//

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-60px";
  }

  lastScroll = window.scrollY;
});

// let prevScrollPos = window.scrollY;

// window.onscroll = function () {
//   const currentScrollPos = window.scrollY;

//   if (prevScrollPos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-60px"; // La hauteur de votre barre de navigation
//   }

//   prevScrollPos = currentScrollPos;
// };
