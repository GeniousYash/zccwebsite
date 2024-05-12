var circle = document.querySelector("#circle");

var t1 = document.querySelector(".t1")
var t2 = document.querySelector(".t2")
var t3 = document.querySelector(".t3")
var t4 = document.querySelector(".t4")
var t5 = document.querySelector(".t5")
var t6 = document.querySelector(".t6")


var img1 = document.querySelector(".banfoot1");
var img2 = document.querySelector(".banfoot2");
var img3 = document.querySelector(".banfoot3");
var img4 = document.querySelector(".banfoot4");




t1.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 4,
     })

     
     gsap.to(".t1",{
          mixBlendMode:"difference",
          color: "#000",
          duration: 0.3,
     })


})

t1.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
     })

     gsap.to(".t1",{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })

     t1.style.color = "#fff";

})



t2.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 4,
     })

     
     gsap.to(t2,{
          mixBlendMode:"difference",
          color: "#000",
          duration: 0.3,
     })


})

t2.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
          
     })

     gsap.to(t2,{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })

     t2.style.color = "#fff";
})



t3.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 4,
     })

     
     gsap.to(t3,{
          mixBlendMode:"difference",
          color: "#000",
          duration: 0.3,
     })


})

t3.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
          
     })

     gsap.to(t3,{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })
     t3.style.color = "#fff";
})




t4.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 4,
     })

     
     gsap.to(t4,{
          mixBlendMode:"difference",
          color: "#000",
          duration: 0.3,
     })


})

t4.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
          
     })

     gsap.to(t4,{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })
     t4.style.color = "#fff";
})




t5.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 4,
     })

     
     gsap.to(t5,{
          mixBlendMode:"difference",
          color: "#000",
          duration: 0.3,
     })


})

t5.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
          
     })

     gsap.to(t5,{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })
     t5.style.color = "#fff";
})




t6.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 4,
     })

     
     gsap.to(t6,{
          mixBlendMode:"difference",
          color: "#000",
          duration: 0.3,
     })


})

t6.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
          
     })

     gsap.to(t6,{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })
     t6.style.color = "#fff";
})






img1.addEventListener("mousemove",function(){
     gsap.to(circle,{
          scale: 4,
     })
})

img1.addEventListener("mouseleave",function(){
     gsap.to(circle,{
          scale: 1,
     })
})





img2.addEventListener("mousemove",function(){
     gsap.to(circle,{
          scale: 4,
     })
})

img2.addEventListener("mouseleave",function(){
     gsap.to(circle,{
          scale: 1,
     })
})





img3.addEventListener("mousemove",function(){
     gsap.to(circle,{
          scale: 4,
     })
})

img3.addEventListener("mouseleave",function(){
     gsap.to(circle,{
          scale: 1,
     })
})





img4.addEventListener("mousemove",function(){
     gsap.to(circle,{
          scale: 4,
     })
})

img4.addEventListener("mouseleave",function(){
     gsap.to(circle,{
          scale: 1,
     })
})


