a = 3
b = 4
//don't use eval as its not safe
function temp() {
    var a = 2
    var b = 5
    // Direct call, uses local scope
    console.log(eval('a + b'));

    // Indirect call using the comma operator uses global scope
    console.log((0, eval)('a * b'));
    // Indirect call using a variable uses global scope as well
    var geval = eval;
    console.log(geval('a / b')); // Uses global scope, throws because x is undefined
}

temp();