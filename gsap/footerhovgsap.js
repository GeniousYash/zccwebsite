var circle = document.querySelector("#circle");
var footerZe = document.querySelector(".zenith");
var footerCo = document.querySelector(".code");
var footerCr = document.querySelector(".creations");



footerZe.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 10,
     })

     
     gsap.to(".zenith",{
          mixBlendMode:"difference",
          color: "#fff",
          duration: 0.3,
     })


})

footerZe.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
     })

     gsap.to(".zenith",{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })

     footerZe.style.color = "#fff";

})



footerCo.addEventListener("mousemove",function(){ 
     gsap.to(circle,{
          scale: 5,
     })
     gsap.to(".code",{
          mixBlendMode:"difference",
          duration: 0.3,
     })
})
footerCo.addEventListener("mouseleave",function(){
     gsap.to(circle,{
          scale: 1,
     })
     gsap.to(".code",{
          mixBlendMode: "none",
          duration: 0.3,
     })
})



footerCr.addEventListener("mousemove",function(){
     gsap.to(circle,{
          scale: 10,
     })
     gsap.to(".creations",{
          mixBlendMode:"difference",
          duration: 0.3,
     })
})
footerCr.addEventListener("mouseleave",function(){
     gsap.to(circle,{
          scale: 1,
     })
     gsap.to(".creations",{
          mixBlendMode: "none",
          duration: 0.3,
     })
});