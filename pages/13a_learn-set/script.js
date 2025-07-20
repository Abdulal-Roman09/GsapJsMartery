import gsap from "gsap";

gsap.set(".gsap-box", {
  opacity: 0,
  y: 100,
  scale: 0.5,
});
gsap.to(".gsap-box", {
  delay: 0.5,
  opacity: 1,
  scale: 1,
  y: 0,
  duration: 5,
  ease: "expo.out",
});
