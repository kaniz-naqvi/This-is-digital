gsap.from(".image1", {
  delay: 0.5,
  opacity: 0,
  duration: 1,
  y: 60,
});
gsap.from(".image2", {
  delay: 0.5,
  opacity: 0,
  duration: 1,
  x: 60,
});
gsap.from(".image3", {
  delay: 0.5,
  opacity: 0,
  duration: 1,
  y: -60,
});
gsap.from("main .front-div", {
  delay: 0.5,
  opacity: 0,
  duration: 1,
});

gsap.from(".black .heading,.black .after-dot, .black p, .black .btn", {
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".black .heading",
    scroll: "body",
    start: "top 60%",
  },
});
