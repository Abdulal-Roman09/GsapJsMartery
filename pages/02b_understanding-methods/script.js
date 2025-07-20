import gsap from "gsap";

const boxTween = gsap.to(".box", {
  opacity: 1,
  rotate: 360,
  //   repeat: -1,
  scale: 1.25,
  duration: 2,
  //   borderRadius: "50%",
  paused: true, // start paused for manual control 
});

const controls = {
  play: document.querySelector(".play"),
  pause: document.querySelector(".pause"),
  resume: document.querySelector(".resume"),
  restart: document.querySelector(".restart"),
  reverse: document.querySelector(".reverse"),
  kill: document.querySelector(".kill"),
  yoyo: document.querySelector(".yoyo"),
};

controls.play.addEventListener("click", () => boxTween.play());
// play full think now work only kill
controls.pause.addEventListener("click", () => boxTween.pause());
// pause can only stop
controls.restart.addEventListener("click", () => boxTween.restart());
// reset full think but not work on kill
controls.reverse.addEventListener("click", () => boxTween.reverse());
// reverce the full process
controls.resume.addEventListener("click", () => boxTween.resume());
// only work on when pause button working
controls.kill.addEventListener("click", () => boxTween.kill());
// destory full animaion . then work after full herd reset the webpage
controls.yoyo.addEventListener("click", () =>boxTween.yoyo(true).repeat(1).restart()
);

// এটা GSAP-কে বলে, এনিমেশনটা যখন শেষ হবে তখন উল্টো দিকে ফিরবে — অর্থাৎ অ্যানিমেশনটা সামনে-ভালো পর পর আবার পেছনে-ভালো রিভার্স মোডে যাবে।
// এইটা একটা পিং-পং বা বাউন্সিং এফেক্ট তৈরি করে।

// .repeat(1)
// এটা নির্দেশ দেয় অ্যানিমেশনটা মোট ১ বার রিপিট করবে অর্থাৎ:

// প্রথমে অ্যানিমেশনটা চলবে ফরোয়ার্ড (সাধারণ দিক)

// তারপর yoyo(true) এর কারণে একবার পিছনে যাবে
// এরপর বন্ধ হয়ে যাবে।

// .restart()
// অ্যানিমেশনকে শুরু থেকেই (time = 0) আবার চালু করে দেয়।
// অর্থাৎ যতক্ষণ অ্যানিমেশন থেমে আছে বা শেষ হয়েছে, ক্লিক করলে নতুন করে শুরু হবে।
