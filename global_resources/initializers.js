function initialize() {
    initialize_canvas();
    initialize_disc();
}

function initialize_canvas() {
    W = window.innerWidth;
    H = window.innerHeight;
    createCanvas(W, H);
    background(0);
}

function initialize_disc() {
    R = Math.min(W, H)*(1/2 - 0.05);
    D = new Disc(W/2, H/2, R);
}