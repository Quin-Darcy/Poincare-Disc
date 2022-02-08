class Disc {
    constructor(center_x, center_y, radius) {
        this.o_x = center_x;
        this.o_y = center_y;
        this.r = radius;
    }
    line(x1, y1, x2, y2, k) {
        let d1 = Math.ceil(dist(this.o_x, this.o_y, x1, y1));
        let d2 = Math.ceil(dist(this.o_x, this.o_y, x2, y2));

        if (d1 >= this.r && d2 >= this.r) {
            this.case1(x1, y1, x2, y2, k);
        }
        if (d1 < this.r && d2 >= this.r) {
            this.case2(x1, y1, x2, y2);
        }
        if (d1 >= this.r && d2 < this.r) {
            this.case2(x1, y1, x2, y2);
        }
        if (d1 < this.r && d2 < this.r) {
            this.case3(x1, y1, x2, y2);
        }

    }
    case1(x1, y1, x2, y2, k) {
        colorMode(HSB, Math.ceil((N+1) / 2), 1, 1);
        stroke(k, 1, 1);
        strokeWeight(0.25);
        let L1 = new Line(this.o_x, this.o_y, x1, y1);
        let L2 = new Line(this.o_x, this.o_y, x2, y2);

        let L1_tan_points = L1.get_tangent_points();
        let L2_tan_points = L2.get_tangent_points();

        let L1_tan = new Line(L1_tan_points[0], L1_tan_points[1], L1_tan_points[2], L1_tan_points[3]);
        let L2_tan = new Line(L2_tan_points[0], L2_tan_points[1], L2_tan_points[2], L2_tan_points[3]);

        let inter = L2_tan.get_intersection(L1_tan);
        let a = inter[0];
        let b = inter[1];
        let r = dist(a, b, x1, y1);

        //L1.show_line();
        //L2.show_line();

        let theta_range = this.get_theta_range(x1, y1, x2, y2, a, b);

        arc(a, b, 2*r, 2*r, theta_range[0], theta_range[1]);
    }
    case2(x1, y1, x2, y2) {
        console.log(dist(this.o_x, this.o_y, x1, y1), dist(this.o_x, this.o_y, x2, y2), this.r);
    }
    get_theta_range(x1, y1, x2, y2, a, b) {
        let theta1 = Math.atan2(y1-b, x1-a);
        let theta2 = Math.atan2(y2-b, x2-a);

        theta1 = (theta1+2*Math.PI) % (2*Math.PI);
        theta2 = (theta2+2*Math.PI) % (2*Math.PI);

        if (theta1 <= theta2) {
            if (theta2-theta1 <= Math.PI) {
                return [theta1, theta2];
            } else {
                return [theta2, theta1];
            }
        } else {
            if (theta1-theta2 <= Math.PI) {
                return [theta2, theta1];
            } else {
                return [theta1, theta2];
            }
        }
    }
    show_disc() {
        noFill();
        //stroke(255);
        ellipse(this.o_x, this.o_y, 2*this.r);
    }
}
