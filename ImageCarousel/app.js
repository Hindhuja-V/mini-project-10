const imgs = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

function runCarousel() {
 idx++;
 if(idx > img.length - 1)
 {
     idx = 0;
 }
 imgs.style.transform = `translateX(${-idx * 500}px)`;
 
}

setInterval(runCarousel, 2000);