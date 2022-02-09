/*
The math behind the constructions:

https://www.ms.uky.edu/~droyster/courses/spring08/math6118/Classnotes/Chapter09.pdf
*/


function setup() {
    initialize();
}

function draw() {
    background(0);
    //D.show_disc();

    set_points1();
}

function set_points1() {
    let k = 0;
    let phi;
    let r = abs(sin(frameCount / 500)) * (R-1) + 10;
    for (let i = 0; i < N; i++) {
        phi = THETA * i + 0.0001 + (i+1)*frameCount / 2500;
        POINTS[i] = createVector(r * Math.cos(phi) + D.o_x, r * Math.sin(phi) + D.o_y);
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i != j) {
                if (j < Math.ceil(N / 2)) {
                    k = abs(j-i);
                } else {
                    k = abs(j-i) % (Math.ceil((N+1) / 2));
                }
                D.line(POINTS[i].x, POINTS[i].y, POINTS[j].x, POINTS[j].y, k);
            }
        }
    }
}

function set_points2() {
    let k = 0;
    let phi;
    let r;
    for (let i = 0; i < LAYERS; i++) {
        POINTS[i] = [];
        for (let j = 0; j < N; j++) {
            phi = THETA * j + 0.0001 + (i+1)*frameCount / 50;
            r = (R-1) / (i+1);
            POINTS[i][j] = createVector(r * Math.cos(phi) + D.o_x, r * Math.sin(phi) + D.o_y);
        }
    }

    for (let i = 0; i < LAYERS; i++) {
        for (let j = 1; j < N; j++) {
            D.line(POINTS[i][j-1].x, POINTS[i][j-1].y, POINTS[i][j].x, POINTS[i][j].y, i+1);
        }
        D.line(POINTS[i][N-1].x, POINTS[i][N-1].y, POINTS[i][0].x, POINTS[i][0].y, i+1);
    }
}

function mouseClicked() {
    noLoop();
}

