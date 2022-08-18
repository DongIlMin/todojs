const images  = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.id = "bgr";
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

setTimeout(function() {
    const bg = document.querySelector(".background");
    bg.remove();
},6000);