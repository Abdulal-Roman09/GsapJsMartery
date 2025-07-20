import gsap from "gsap";


const repeat = document.querySelector(".repeat");

gsap.from(".card", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  delay: 0.2,
  ease: "power4.inOut",
  stagger: 0.2,
});
// gsap.from('.card-2',{
//     y:50,
//     opacity:0,
//     duration:.6,
//     delay:.5,
// })

// gsap.from('.card-3',{
//     y:50,
//     opacity:0,
//     duration:.6,
//     delay:.8,
// })

repeat.addEventListener("click", () => {
  animation.restart();
});
