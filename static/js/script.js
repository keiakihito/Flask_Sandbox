document.addEventListener('DOMContentLoaded', function() {
    // Move Right Animation on Click
    const animateMe = document.getElementById('animate-me');
    let isMovedRight = false;
    animateMe.addEventListener('click', function() {
        animateMe.style.transition = 'transform 2s';
        if (isMovedRight) {
            animateMe.style.transform = 'translateX(0)';
        } else {
            animateMe.style.transform = 'translateX(100px)';
        }
        isMovedRight = !isMovedRight;
    });

    // Fade In Animation on Click
    const fadeIn = document.getElementById('fade-in');
    let isFadedIn = false;
    fadeIn.addEventListener('click', function() {
        fadeIn.style.transition = 'opacity 2s';
        if (isFadedIn) {
            fadeIn.style.opacity = '0';
        } else {
            fadeIn.style.opacity = '1';
        }
        isFadedIn = !isFadedIn;
    });

    // Scale Up Animation on Click
    const scaleUp = document.getElementById('scale-up');
    let isScaledUp = false;
    scaleUp.addEventListener('click', function() {
        scaleUp.style.transition = 'transform 2s';
        if (isScaledUp) {
            scaleUp.style.transform = 'scale(1)';
        } else {
            scaleUp.style.transform = 'scale(1.5)';
        }
        isScaledUp = !isScaledUp;
    });

    // Rotate Animation on Click
    const rotate = document.getElementById('rotate');
    let isRotated = false;
    rotate.addEventListener('click', function() {
        rotate.style.transition = 'transform 2s';
        if (isRotated) {
            rotate.style.transform = 'rotate(0deg)';
        } else {
            rotate.style.transform = 'rotate(360deg)';
        }
        isRotated = !isRotated;
    });

    // Circular Path Animation on Click
    const circularPath = document.getElementById('circular-path');
    let angle = 0;
    let isAnimating = false;
    let interval;
    circularPath.addEventListener('click', function() {
        if (isAnimating) {
            clearInterval(interval);
            circularPath.style.transform = 'translate(-50%, -50%)';
        } else {
            interval = setInterval(() => {
                angle += 0.05;
                const x = 100 * Math.cos(angle);
                const y = 100 * Math.sin(angle);
                circularPath.style.transform = `translate(${x}px, ${y}px)`;
            }, 20);
        }
        isAnimating = !isAnimating;
    });
});
