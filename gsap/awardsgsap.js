let cards = document.querySelector(".awardsdiv");
// let text1 = document.querySelector(".awardshead");
// let text2 = document.querySelector(".awardstopic");

// cards.forEach((e)=>{
     gsap.from(cards,{
          x:-500,
          y: 100,
          duration: 1,
          opacity: 0,
          stagger: 0.5,
          scrollTrigger:{
               trigger: cards,
               scroller:"body",
               start: "top 90%",
               end: "top 60%",
               scrub: 2,
          }
     }); 
// });


// gsap.from(text1,{
//      x:-500,
//      y: 200,
//      duration: 1,
//      opacity: 0,
//      stagger: 0.2,
//      scrollTrigger:{
//           trigger: text1,
//           scroller:"body",
//           start: "top 90%",
//           end: "top 80%",
//           scrub: 2,
//      }
// }); 


// gsap.from(text2,{
//      x:-500,
//      y: 200,
//      duration: 1,
//      opacity: 0,
//      stagger: 0.2,
//      scrollTrigger:{
//           trigger: text2,
//           scroller:"body",
//           start: "top 90%",
//           end: "top 80%",
//           scrub: 2,
//      }
// }); 