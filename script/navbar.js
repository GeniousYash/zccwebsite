import navbar from "../componants/navbar.js";
const navbarcon = document.querySelector(".navbar1");
navbarcon.innerHTML = navbar();


let zcclogo = document.querySelector(".site-logo");
zcclogo.addEventListener("click",function(){
  window.location.href = "./index.html";
})



const tl = gsap.timeline({ paused: true });

    function openNav() {
      animateOpenNav();
      const navBtn = document.getElementById("menu-toggle-btn");
      navBtn.onclick = function (e) {
        navBtn.classList.toggle("active");
        tl.reversed(!tl.reversed());
      };
    };

    openNav();

    function animateOpenNav() {
      tl.to("#nav-container", 0.2, {
        autoAlpha: 1,
        delay: 0.1,
      });

      tl.to(
        ".site-logo",
        0.2,
        {
          color: "#fff",
        },
        "-=0.1"
      );

      tl.from(".flex > div", 0.4, {
        opacity: 0,
        y: 10,
        stagger: {
          amount: 0.04,
        },
      });

      tl.to(
        ".nav-link > a",
        0.8,
        {
          top: 0,
          ease: "power2.inOut",
          stagger: {
            amount: 0.1,
          },
        },
        "-=0.4"
      );

      tl.from(
        ".nav-footer",
        0.3,
        {
          opacity: 0,
        },
        "-=0.5"
      ).reverse();
    }
