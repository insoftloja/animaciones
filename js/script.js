let button = document.querySelector("button");
let t1 = gsap.timeline({paused: true, reversed: true});
let watch= false;

button.addEventListener("click", (e) =>{
    if (!watch){
        t1.play();
        watch:true;

    }else{
        t1.reverse();
        watch=false;
    }
});
t1.to("button svg",{
    ease: "power1.out",
    rotate: 45,
});
t1.to("button svg",{
    ease: "power1.out",
    xPercent: -150,
});
t1.to(
    ".send",
    {
        x:-80,
        opacity:0,
        duration: 1.5,
        ease: "power1.inOut"
    },
    0.2
);
t1.to("button svg",{
    ease: "elastic.in(2, 0.3)",
    x:100,
    duration: 1.5,
});
t1.from(".done",{
    yPercent: -100,
    opacity: 0,
    duration:1.2,
    ease: "bounce.out"
});