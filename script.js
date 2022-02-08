let N = 32;
let theta = 2*Math.PI / N;
let points = [];

function setup() {
    initialize()
}

function draw() {
    background(0);
    D.show_disc();

    let k = 0;
    let phi;
    for (let i = 0; i < N; i++) {
        phi = theta * i + 0.0001 + (i+1)*frameCount / 1000;
        points[i] = createVector(D.r * Math.cos(phi) + D.o_x, D.r * Math.sin(phi) + D.o_y);
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i != j) {
                if (j < Math.ceil(N / 2)) {
                    k = abs(j-i);
                } else {
                    k = abs(j-i) % (Math.ceil((N+1) / 2));
                }
                D.line(points[i].x, points[i].y, points[j].x, points[j].y, k);
            }
        }
    }
}

function mouseClicked() {
    noLoop();
}

