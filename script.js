/*
The math behind the constructions:

https://www.ms.uky.edu/~droyster/courses/spring08/math6118/Classnotes/Chapter09.pdf
*/
function setup() {
    initialize();
}

function draw() {
    background(0);
    D.show_disc();

    set_points();
}

function set_points() {
    let k = 0;
    let phi;
    for (let i = 0; i < N; i++) {
        phi = THETA * i + 0.0001 + (i+1)*frameCount / 2500;
        let r = map(i, 0, N-1, 1, D.r-1);
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

function mouseClicked() {
    noLoop();
}

