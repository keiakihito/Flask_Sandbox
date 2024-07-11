document.addEventListener('DOMContentLoaded', function() {
    // Hide loader and show content
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');
    window.addEventListener('load', function() {
        loader.style.display = 'none';
        content.style.display = 'block';
    });

    // Move Right Animation on Click
    const animateMe = document.getElementById('animate-me');
    let isMovedRight = false;
    animateMe.addEventListener('click', function() {
        if (isMovedRight) {
            gsap.to(animateMe, {duration: 2, x: 0});
        } else {
            gsap.to(animateMe, {duration: 2, x: 100});
        }
        isMovedRight = !isMovedRight;
    });

    // Fade In Animation on Click
    const fadeIn = document.getElementById('fade-in');
    let isFadedIn = false;
    fadeIn.addEventListener('click', function() {
        if (isFadedIn) {
            gsap.to(fadeIn, {duration: 2, opacity: 0});
        } else {
            gsap.to(fadeIn, {duration: 2, opacity: 1});
        }
        isFadedIn = !isFadedIn;
    });

    // Scale Up Animation on Click
    const scaleUp = document.getElementById('scale-up');
    let isScaledUp = false;
    scaleUp.addEventListener('click', function() {
        if (isScaledUp) {
            gsap.to(scaleUp, {duration: 2, scale: 1});
        } else {
            gsap.to(scaleUp, {duration: 2, scale: 1.5});
        }
        isScaledUp = !isScaledUp;
    });

    // Rotate Animation on Click
    const rotate = document.getElementById('rotate');
    let isRotated = false;
    rotate.addEventListener('click', function() {
        if (isRotated) {
            gsap.to(rotate, {duration: 2, rotation: 0});
        } else {
            gsap.to(rotate, {duration: 2, rotation: 360});
        }
        isRotated = !isRotated;
    });

    // Circular Path Animation on Click
    const circularPath = document.getElementById('circular-path');
    let isAnimating = false;
    let tween;
    circularPath.addEventListener('click', function() {
        if (isAnimating) {
            tween.pause();
            gsap.to(circularPath, {duration: 0.5, x: 0, y: 0});
        } else {
            tween = gsap.to(circularPath, {duration: 20, x: 100, y: 100, repeat: -1, ease: "none"});
        }
        isAnimating = !isAnimating;
    });

    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // GSAP Basic Animations
    const box1 = document.getElementById('animate-me');
    gsap.to(box1, {duration: 2, x: 100});

    // GSAP Sequence Animation
    const box2 = document.getElementById('fade-in');
    gsap.timeline()
        .to(box2, {duration: 1, x: 100})
        .to(box2, {duration: 1, y: 100})
        .to(box2, {duration: 1, rotation: 360});

    // GSAP ScrollTrigger Animation
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#scale-up", {
        scrollTrigger: {
            trigger: "#scale-up",
            start: "top center",
            end: "top 100px",
            scrub: true,
        },
        x: 500,
    });
});
