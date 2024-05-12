var circle = document.querySelector("#circle");
var frame = document.querySelector(".frame");
var main = document.querySelector("#main");
var text1 = document.querySelector(".hov1");
var text2 = document.querySelector(".hov2");
var text3 = document.querySelector(".hov3");
var text4 = document.querySelector(".hov4");
var footerig = document.querySelector(".flIg");
var footerwp = document.querySelector(".flwp");
var footercall = document.querySelector(".frcall");




const lerp = (x, y, a) => x * (1 - a) + y * a;




window.addEventListener("mousemove",function(dets){
     gsap.to(circle,{
          x: dets.clientX,
          y: dets.clientY,
          duration: .2,
          ease: Expo,
     })
});




// Taaki .frame (div) bhi move kare in the direction of cursor


main.addEventListener("mousemove",function(dets){
     var dims = main.getBoundingClientRect();
     console.log(dims);

     var xstart = dims.x;
     var xend = dims.x + dims.width;
     
     var ystart = dims.y;
     var yend = dims.y + dims.height;

     var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX)
     var zerooney = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY)


     gsap.to("#main .frame",{
          x: lerp(-40, 40, zeroone),
          y: lerp(-40, 40, zerooney),
          duration: .5,
     })
})

main.addEventListener("mouseleave",function(dets){
     gsap.to("#main .frame",{
          x: 0,
          y: 0,
          duration: .3,
     })
})





// Taaki .frame > span move kare jab cursor parent div (#main) m exist kar raha ho


main.addEventListener("mousemove",function(dets){


     var dims = main.getBoundingClientRect();
     console.log(dims);

     var xstart = dims.x;
     var xend = dims.x + dims.width;
     
     var ystart = dims.y;
     var yend = dims.y + dims.height;

     var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX)
     var zerooney = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY)


     

     // gsap.to(circle,{
     //      scale: 7,
     // })

     // gsap.to(".frame span",{
     //      color:"#dc5800",
     //      duration: 0.3,
     // })

     gsap.to(".frame span",{
          x: lerp(-50, 50, zeroone),
          y: lerp(-50, 50, zerooney),
          duration: .3,
     })
})

main.addEventListener("mouseleave",function(dets){
     // gsap.to(circle,{
     //      scale: 1,
     // })

     // gsap.to(".frame span",{
     //      color:"#000",
     //      duration: 0.3,
     // })

     gsap.to(".frame span",{
          x: 0,
          y: 0,
          duration: .3,
     })
})







// Taaki Cursor tabhi size increase kare jab wo .frame (div) k andar aaye ,,naaki #main (div) k ....!!!

frame.addEventListener("mousemove",function(dets){
     

     gsap.to(circle,{
          scale: 10,
     })

     gsap.to(".frame>span",{
          mixBlendMode: "difference",
          color: "#000",
          duration: 0.3,
     })
     gsap.to(".frame",{
          borderColor: "#000",
          duration: 0.3,
     })
})

frame.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
     })

     gsap.to(".frame>span",{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })
     gsap.to(".frame",{
          borderColor:"#fff",
          duration: 0.3,
     })

})







text1.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 10,
     })

     
     gsap.to(".text",{
          mixBlendMode:"difference",
          color: "#fff",
          duration: 0.3,
     })


})

text1.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
     })

     gsap.to(".text",{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })

     text1.style.color = "#fff";

})



text2.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 10,
     })

     
     gsap.to(".text",{
          mixBlendMode:"difference",
          color: "#fff",
          duration: 0.3,
     })


})

text2.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
     })

     gsap.to(".text",{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })

     text2.style.color = "#fff";

})




text3.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 10,
     })

     
     gsap.to(".text",{
          mixBlendMode:"difference",
          color: "#fff",
          duration: 0.3,
     })


})

text3.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
     })

     gsap.to(".text",{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })

     text3.style.color = "#fff";

})




text4.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 10,
     })

     
     gsap.to(".text",{
          mixBlendMode:"difference",
          color: "#fff",
          duration: 0.3,
     })


})

text4.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
     })

     gsap.to(".text",{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })

     text4.style.color = "#fff";

})



footerig.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 4,
     })

     
     gsap.to(".text",{
          mixBlendMode:"difference",
          color: "#fff",
          duration: 0.3,
     })


})

footerig.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
     })

     gsap.to(".text",{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })

     footerig.style.color = "#fff";

})

footerwp.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 4,
     })

     
     gsap.to(".text",{
          mixBlendMode:"difference",
          color: "#fff",
          duration: 0.3,
     })


})

footerwp.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
     })

     gsap.to(".text",{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })

     footerwp.style.color = "#fff";

})

footercall.addEventListener("mousemove",function(dets){

     
     
     gsap.to(circle,{
          scale: 4,
     })

     
     gsap.to(".text",{
          mixBlendMode:"difference",
          // color: "#fff",
          duration: 0.3,
     })


})

footercall.addEventListener("mouseleave",function(dets){
     gsap.to(circle,{
          scale: 1,
     })

     gsap.to(".text",{
          mixBlendMode: "none",
          // color:"#fff",
          duration: 0.3,
     })

     // footercall.style.color = "#fff";

})


//  For Project.html page

var btndiv = document.querySelectorAll('#btndivproj');


function contpagebtn(){
     window.location.href = `./project.html`;
}

function magbtns(){
     window.location.href = `./contact.html`;
}


function iglink(){
     window.location.href = `https://www.instagram.com/zcc_webb/`;
}


function whatsapplink(){
     let chat = "Hello Sir, I need some information regarding Website Development"
     window.location.href = `https://wa.me/918003316534?text=${chat}`;
}


function callus(){
     window.location.href = `tel:+918003316534`;
}