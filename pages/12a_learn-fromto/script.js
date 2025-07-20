import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
  gsap.fromTo(
    bar,
    {
      scaleY: 0.4,
    },
    {
      scaleY: 2.6,
      duration: 0.6,
      delay: index * 0.1,
      ease: "sine.out",
      repeat: -1,
      yoyo: true,
    }
  );
});
