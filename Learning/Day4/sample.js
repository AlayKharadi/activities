let triangle = {
    a: 0,
    b: 0,
    c: 0,
    set: function (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

let newTriangle = {};

triangle.set(2, 3, 4);

console.log(triangle);

triangle.set.call(newTriangle, 5, 6, 7);

console.log(newTriangle);

triangle.set.apply(newTriangle, [9, 5, 6]);

console.log(newTriangle);

