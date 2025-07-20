import gsap from "gsap";

const showTost = () => {
  gsap.to(".toast", {
    y: -220,
    opacity: 1,
    scale: 1.1,
    ease:'power3.out',
    onComplete:()=>{
        gsap.to('.toast',{
            delay:3,
            opacity:0,
            scale:.95,
            duration:.7,
            ease:'power1'
        })
    }
  });
};

showTost()