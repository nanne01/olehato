document.addEventListener('DOMContentLoaded', function(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ease:"none", duration: 2});
    
    //Animar la imagen del showcase usando el ID
    gsap.from('#showcaseImage', {
        scrollTrigger: {
            trigger: "#showcaseImage",
            toggleActions: "restart restart restart reset"
        },

        duration: 3,
        x: 300,
        opacity: 0
    });

    gsap.from('.showcase', {
        scrollTrigger: {
            trigger: ".showcase" ,
            start: "20px 80%" ,
            toggleActions: "restart restart restart reset"
        },

        duration: 3,
        y: 250,
        opacity: 0
    });

    gsap.from(".box", {
        scrollTrigger: {
            trigger: ".container",
            start: "20px 80%" ,
            toggleActions: "restart restart reverse reset"
        },

        y: 100,
        duration: 2,
        opacity: 0
    });

   

    gsap.from(".text", {
        scrollTrigger: {
            trigger: ".about-row-box",
            toggleActions: "restart restart reverse reset"
        },

        y: -150,
        duration: 4,
        opacity: 0
    });    

    let tl = gsap.timeline( {
        scrollTrigger: {
            trigger: "#about-img",
            start: "-300px center",
            end: "-200px 100px",
            scrub: 3, 
            markers: false
        }
    });
    
    tl.to("#about-img", {
        x: 400,
        rotation: 360,
        ease: "none",
        duration: 3
    })

    .to("#about-img", {
        backgroundColor: "none",
        duration: 1
    })

    .to("#about-img", {
        x: 0,
        duration: 3
    });

    gsap.from('#name', {
        scrollTrigger: {
            trigger: "#container" ,
            start: "2300px 250px" ,
            end: "2500px 0px",
            toggleActions: "restart restart restart reset",
        },

        duration: 1,
        y: -150,
        opacity: 0
    });

    gsap.from("#email", {
        scrollTrigger: {
            trigger: "#email", 
            toggleActions: "restart restart restart reset",
        },

        x: 1500, 
        opacity: 0,
        duration: 1
    });

    gsap.from("#message", {
        scrollTrigger: {
            trigger: "#message",
            start: "20px 80%" ,
            toggleActions: "restart restart reverse reset"
        },

        x: -1500,
        duration: 2,
        opacity: 0
    });

    gsap.from(".ctct", {
        scrollTrigger: {
            trigger: ".ctct",
        },

        x: 0,
        duration: 5,
        opacity: 0
    });    

    const tm = gsap.timeline();
    tm.from(".logo", {
        toggleActions: "restart restart restart restart",
        xPercent: 1000, 
        opacity: 0,
        duration: 1,
    })
    .from(".nav", {
        toggleActions: "restart restart restart restart",
        xPercent: -400, 
        opacity: 0, 
        duration: 1
    })
    
    scrollTrigger.created({
        toggleActions: "restart restart restart restart",
        animation: tm,
        trigger: ".container",
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    });

    // gsap.set(".work-row-box", {xPercent: -50, yPercent: -50});

    // let xTo = gsap.quickTo(".work-row-box", "x", {duration: 0.6, ease: "power3"}),
    // yTo = gsap.quickTo(".work-row-box", "y", {duration: 0.6, ease: "power3"});

    // window.addEventListener("mousemove", e => {
    // xTo(e.clientX);
    // yTo(e.clientY);

    // });

});
