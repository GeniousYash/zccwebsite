// About.html
gsap.from(".abdiv2",{
     y: 100,
     duration: 1,
     opacity: 0,
     stagger: 0.5,
     scrollTrigger:{
          trigger: ".abdiv2",
          scroller:"body",
          start: "top 90%",
          end: "top 70%",
          scrub: 2,
     }
});
gsap.from(".webdevimg",{
     y: 100,
     duration: 1,
     opacity: 0,
     stagger: 0.5,
     scrollTrigger:{
          trigger: ".webdevimg",
          scroller:"body",
          start: "top 90%",
          end: "top 70%",
          scrub: 2,
     }
});

document.querySelectorAll("#abfeaturesup").forEach((e) => {
     gsap.from(e,{
          y: 100,
          duration: 1,
          opacity: 0,
          stagger: 0.2,
          scrollTrigger:{
               trigger: e,
               scroller:"body",
               start: "top 90%",
               end: "top 80%",
               scrub: 2,
          }
     });     
});

document.querySelectorAll("#abfeaturesdown").forEach((e) => {
     gsap.from(e,{
          y: 100,
          duration: 1,
          opacity: 0,
          stagger: 0.5,
          scrollTrigger:{
               trigger: e,
               scroller:"body",
               start: "top 90%",
               end: "top 80%",
               scrub: 2,
          }
     });     
});


gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});