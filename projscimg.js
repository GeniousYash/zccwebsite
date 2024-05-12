document.addEventListener("DOMContentLoaded", function () {
     const togglePoint = window.innerHeight * 5;
     const wrapper = document.querySelector(".wrapper");
   
     function checkScroll() {
       if (window.scrollY >= togglePoint) {
         wrapper.classList.add("dark-theme");
       } else {
         wrapper.classList.remove("dark-theme");
       }
     }
   
     window.addEventListener("scroll", checkScroll);
   });
   