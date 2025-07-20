gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 5,
  y: 50,
  yoyo: true,
  onComplite: () => {
    gsap.to(".card", {
      y: -50,
      repeat: -1,
      duration: 0.5,
      yoyo: true,
    });
  },
});
