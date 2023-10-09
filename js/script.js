gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".wrapper"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".wrapper" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".wrapper", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


// gsap

let clutter = '';
document.querySelector(".para_ani").textContent.split(' ').forEach((det) => {
    clutter += `<span> ${det} </span>`;
    document.querySelector(".para_ani").innerHTML = clutter;
})

gsap.to(".para_ani span", {
    scrollTrigger: {
        trigger: ".para_ani span",
        scroller: ".wrapper",
        start: "top 98%",
        end: "bottom top",
        scrub: .5,
    },
    opacity: 1,
    stagger: .2,
});


// page 3 
function canvas() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
    ./assets/page3/bridges00004.png
    ./assets/page3/bridges00007.png
    ./assets/page3/bridges00010.png
    ./assets/page3/bridges00013.png
    ./assets/page3/bridges00016.png
    ./assets/page3/bridges00019.png
    ./assets/page3/bridges00022.png
    ./assets/page3/bridges00025.png
    ./assets/page3/bridges00028.png
    ./assets/page3/bridges00031.png
    ./assets/page3/bridges00034.png
    ./assets/page3/bridges00037.png
    ./assets/page3/bridges00040.png
    ./assets/page3/bridges00043.png
    ./assets/page3/bridges00046.png
    ./assets/page3/bridges00049.png
    ./assets/page3/bridges00052.png
    ./assets/page3/bridges00055.png
    ./assets/page3/bridges00058.png
    ./assets/page3/bridges00061.png
    ./assets/page3/bridges00064.png
    ./assets/page3/bridges00067.png
    ./assets/page3/bridges00070.png
    ./assets/page3/bridges00073.png
    ./assets/page3/bridges00076.png
    ./assets/page3/bridges00079.png
    ./assets/page3/bridges00082.png
    ./assets/page3/bridges00085.png
    ./assets/page3/bridges00088.png
    ./assets/page3/bridges00091.png
    ./assets/page3/bridges00094.png
    ./assets/page3/bridges00097.png
    ./assets/page3/bridges00100.png
    ./assets/page3/bridges00103.png
    ./assets/page3/bridges00106.png
    ./assets/page3/bridges00109.png
    ./assets/page3/bridges00112.png
    ./assets/page3/bridges00115.png
    ./assets/page3/bridges00118.png
    ./assets/page3/bridges00121.png
    ./assets/page3/bridges00124.png
    ./assets/page3/bridges00127.png
    ./assets/page3/bridges00130.png
    ./assets/page3/bridges00133.png
    ./assets/page3/bridges00136.png
    ./assets/page3/bridges00139.png
    ./assets/page3/bridges00142.png
    ./assets/page3/bridges00145.png
    ./assets/page3/bridges00148.png
    ./assets/page3/bridges00151.png
    ./assets/page3/bridges00154.png
    ./assets/page3/bridges00157.png
    ./assets/page3/bridges00160.png
    ./assets/page3/bridges00163.png
    ./assets/page3/frames00007.png
    ./assets/page3/frames00010.png
    ./assets/page3/frames00013.png
    ./assets/page3/frames00016.png
    ./assets/page3/frames00019.png
    ./assets/page3/frames00022.png
    ./assets/page3/frames00025.png
    ./assets/page3/frames00028.png
    ./assets/page3/frames00031.png
    ./assets/page3/frames00034.png
    ./assets/page3/frames00037.png
    ./assets/page3/frames00040.png
    ./assets/page3/frames00043.png
    ./assets/page3/frames00046.png
    ./assets/page3/frames00049.png
    ./assets/page3/frames00052.png
    ./assets/page3/frames00055.png
    ./assets/page3/frames00058.png
    ./assets/page3/frames00061.png
    ./assets/page3/frames00064.png
    ./assets/page3/frames00067.png
    ./assets/page3/frames00070.png
    ./assets/page3/frames00073.png
    ./assets/page3/frames00076.png
    ./assets/page3/frames00079.png
    ./assets/page3/frames00082.png
    ./assets/page3/frames00085.png
    ./assets/page3/frames00088.png
    ./assets/page3/frames00091.png
    ./assets/page3/frames00094.png
    ./assets/page3/frames00097.png
    ./assets/page3/frames00100.png
    ./assets/page3/frames00103.png
    ./assets/page3/frames00106.png
    ./assets/page3/frames00109.png
    ./assets/page3/frames00112.png
    ./assets/page3/frames00115.png
    ./assets/page3/frames00118.png
    ./assets/page3/frames00121.png
    ./assets/page3/frames00124.png
    ./assets/page3/frames00127.png
    ./assets/page3/frames00130.png
    ./assets/page3/frames00133.png
    ./assets/page3/frames00136.png
    ./assets/page3/frames00139.png
    ./assets/page3/frames00142.png
    ./assets/page3/frames00145.png
    ./assets/page3/frames00148.png
    ./assets/page3/frames00151.png
    ./assets/page3/frames00154.png
    ./assets/page3/frames00157.png
    ./assets/page3/frames00160.png
    ./assets/page3/frames00163.png
    ./assets/page3/frames00166.png
    ./assets/page3/frames00169.png
    ./assets/page3/frames00172.png
    ./assets/page3/frames00175.png
    ./assets/page3/frames00178.png
    ./assets/page3/frames00181.png
    ./assets/page3/frames00184.png
    ./assets/page3/frames00187.png
    ./assets/page3/frames00190.png
    ./assets/page3/frames00193.png
    ./assets/page3/frames00196.png
    ./assets/page3/frames00199.png
    ./assets/page3/frames00202.png    
    

 `;
        return data.split("\n")[index];
    }

    const frameCount = 67;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "Power0.easeNone",
        scrollTrigger: {
            scrub: 0.15,
            trigger: `.page3`,
            //   set start end according to preference
            start: `top top`,
            end: `200% 90%`,
            scroller: `.wrapper`,
        },
        onUpdate: render,
        stagger: 1,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({
        ease: "Power0.easeNone",
        trigger: ".page3",
        pin: true,
        markers: true,
        scroller: `.wrapper`,
        start: `top top`,
        end: `200%  90%`,
    });
}

canvas();