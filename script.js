const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.from(".navlink", {
  stagger: 0.2,
  y: 20,
  ease: "power3",
  opacity: 0.1,
  duration: 3,
});

Shery.textAnimate(".main-head h1", {
  style: 2,
  y: 10,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anima", {
  y: 50,
  opacity: 0.2,
  duration: 2,
  ease: "expo",
  stagger: 0.2,
});

Shery.imageEffect(".eff img", {
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: 0.7, range: [-1, 1] },
    zindex: { value: "1", range: [-9999999, 9999999] },
    aspect: { value: 0.6883012011708892 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.21, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  style: 1,
});

Shery.imageEffect(".gooey", {
  style: 5,
  gooey: true,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: 0.75, range: [-1, 1] },
    zindex: { value: "9", range: [-9999999, 9999999] },
    aspect: { value: 1.6471791559000861 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.24, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 1.45, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 32 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.01, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

let btn = document.querySelector(".text h1");
let vid = document.querySelector(".page5>video");

btn.addEventListener("mouseover", function(){
  gsap.to(vid,{
    opacity : 1,
    duration : 2,
  })
})
btn.addEventListener("mouseleave", function(){
  gsap.to(vid,{
    opacity : 0,
    duration : 2,
  })
})

