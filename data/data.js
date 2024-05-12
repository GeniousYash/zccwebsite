const awards = [
  {
    "img":"../awardsimg/img1.png",
  },
  {
    "img":"../awardsimg/img10.png",
  },
  {
    "img":"../awardsimg/img2.png",
  },
  {
    "img":"../awardsimg/img3.png",
  },
  {
    "img":"../awardsimg/img4.png",
  },
  {
    "img":"../awardsimg/img5.png",
  },
  {
    "img":"../awardsimg/img6.png",
  },
  {
    "img":"../awardsimg/img7.png",
  },
  {
    "img":"../awardsimg/img8.png",
  },
  {
    "img":"../awardsimg/img9.png",
  },
  {
    "img":"../awardsimg/img11.png",
  },
  {
    "img":"../awardsimg/img12.png",
  },
]

awards.forEach((i)=>{
  const card = document.createElement("div");
  card.setAttribute("id","awardscard")

  const awimg = document.createElement("img");
  awimg.setAttribute("id","awimg")
  awimg.src = i.img;


  card.append(awimg);

  document.querySelector(".awardsimgdiv").append(card);
})