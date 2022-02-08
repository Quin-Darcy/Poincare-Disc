let N = 125;
let theta = 2*Math.PI / N;
let points = [];

function setup() {
    initialize()
}

function draw() {
    background(0);
    D.show_disc();

    let phi;
    for (let i = 0; i < N; i++) {
        phi = Math.PI - map(mouseX, 0, W, 0, 6000) / (60 * (i+1)) - theta * i;
        points[i] = createVector(D.r * Math.cos(phi) + D.o_x, D.r * Math.sin(phi) + D.o_y);
    }

    for (let i = 1; i < N; i++) {
        D.line(points[0].x, points[0].y, points[i].x, points[i].y);
    }


    //D.line(x1, y1, x2, y2);
}

function mouseClicked() {
    noLoop();
}

