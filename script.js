// Smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// // Starting Rotation Animation
var timeline=gsap.timeline();

timeline.to("#page1",{
    y:"100vh",
    duration:0,
    scale:0.4
})
timeline.to("#page1",{
    y:"10vh",
    duration:1,
    delay:1
});
timeline.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.7
})