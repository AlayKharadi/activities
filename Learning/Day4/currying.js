function area(a, b) {
    return a * b;
}

function area2(a) {
    return function (b) {
        return a * b;
    }
}

let area3 = a => b => a * b;

console.log(area(4,5));

console.log(area2(4)(5));

console.log(area3(4)(5));


//Not currying

function multiplication(){
    let ans = 1;
    for(let i = 0; i < arguments.length; i++){
        ans = ans*arguments[i];
    }
    return ans;
}

console.log(multiplication(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

