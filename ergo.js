// global legHeight variable
legHeight = 160;
window.onload = function () {
    canvas = document.getElementById("canv");
    ctx = canvas.getContext("2d");
    draw();

    // increment button
    increment = document.getElementById("increment");

    // decrement button
    decrement = document.getElementById("decrement");

    // setting text of a button
    // needs better design
    setButtonText();
}

// draw function that clears canvas and loads everything
// probably can be done more efficiently if you save the drawing
// image loading is cost effective
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    loadImage();
}

function setButtonText() {
    increment.textContent = "increment height";
    decrement.textContent = "decrement height";
}

// loading moto image
function loadImage() {
    moto = new Image();
    moto.src = "moto.png";
    moto.onload = function () {
        ctx.drawImage(moto, 0, 0);
        drawLeg();
    }
}

// drawing of the leg over the motorcycle
// research how to save the object of the drawing so you can clear it
// instead of refreshing everything on button press
function drawLeg() {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50 + legHeight / 6, legHeight / 2);
    ctx.lineTo(legHeight / 3, legHeight / 2 + 10);
    ctx.stroke();
}

// button click listener function
function incrementHeight() {
    this.legHeight += 10;
    draw();
}

// button click listener function
function decrementHeight() {
    this.legHeight -= 10;
    draw();
}
