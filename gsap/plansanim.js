

// plans.html

gsap.from(".pldiv2",{
     y: 100,
     duration: 1,
     opacity: 0,
     stagger: 0.5,
     scrollTrigger:{
          trigger: ".pldiv2",
          scroller:"body",
          start: "top 90%",
          end: "top 70%",
          scrub: 2,
     }
});


document.querySelectorAll("#plfeaturesup").forEach((e) => {
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

document.querySelectorAll("#plfeaturesdown").forEach((e) => {
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
