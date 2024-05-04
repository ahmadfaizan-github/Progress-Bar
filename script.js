const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress-bar");

let activeLevel = 1;

next.addEventListener('click', () => {
    activeLevel++;

    if(activeLevel > circles.length) {
        activeLevel = circles.length;
    }

    update();
});

prev.addEventListener('click', () => {
    activeLevel--;

    if(activeLevel < 1) {
        activeLevel = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index < activeLevel) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll(".active");

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%"; 


    if (activeLevel === 1) {
        prev.disabled = true;
    } else if (activeLevel === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

}