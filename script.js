function setup() {
    initialize()
}

function draw() {
    background(0);
    D.show_disc();

    let phi = 2*Math.PI - frameCount / 120;
    let x1 = D.r * Math.cos(phi) + D.o_x;
    let y1 = D.r * Math.sin(phi) + D.o_y;

    let theta = Math.atan2(mouseY - D.o_y, mouseX - D.o_x);
    let x2 = D.r * Math.cos(theta) + D.o_x;
    let y2 = D.r * Math.sin(theta) + D.o_y;

    D.line(x1, y1, x2, y2);
}

function mouseClicked() {
    noLoop();
}

