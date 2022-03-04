// https://www.sitepoint.com/automatic-type-conversion/
// https://www.programiz.com/javascript/type-conversion

// Six falsey values
// false, undefined, null, 0, "", NaN

// explicit & implicit 

// function temp(input){
//     if(typeof(input) !== typeof(undefined)){
//         console.log(input);
//     } else {
//         console.log("undefined output")
//     }
// }

// temp("");
// temp(0);
// temp(false);
// temp(NaN);
// temp(null);
// temp(undefined)
// temp()



let num1 = 32;
let num2 = 45;

console.log(typeof (+num1.toString(2)) + " , " + typeof (+num2.toString(2)));

let arr = {
    name: 'John Doe',
    age: 232,
    hobby: 'Book, Music'
};

console.log(Object.values(arr).join('\n'))
//if you want to assign value to a variable and set a value to fall back on
// var port;
//  var port = 3000;
 var port = 0;
var PORT = port || 4000;
console.log(PORT);

let temp1 = [
    {
        color: 'red',
        code: 11
    },
    {
        color: 'pink',
        code: 12
    },
    {
        color: 'yellow',
        code: 32
    },
    {
        color: 'blue',
        code: 45
    },
    {
        color: 'green',
        code: 78
    }
];

var btn1 = document.getElementById('btn-1');

btn1.addEventListener('click', (e) => {
    let input1 = document.getElementById('input-1');
    let value = input1.value.toLowerCase();
    let out = temp1.filter(item => (item.color === value));
    console.log(out[0] || 'color not found');
})

var btn2 = document.getElementById('btn-2');

btn2.addEventListener('click', () => {
    var ul = document.getElementsByTagName('ul')[0];
    var remove = document.getElementById('remove');
    if (remove) {
        ul.removeChild(remove);
    } else {
        console.log('element already removed')
    }
})

var btn3 = document.getElementById('btn-3');

btn3.addEventListener('click', () => {
    document.getSelection().removeAllRanges();

    var p = document.getElementById('remove') || document.getElementById('backup');

    var r = document.createRange();

    r.selectNodeContents(p);

    document.getSelection().addRange(r);

    console.log(document.getSelection().addRange(r))
});

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
var count=0;
var petCounts = pets.reduce(function(obj, pet){
    console.log(typeof(obj)); // object: getting printed only once?
    count++; // executing 7 times
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});
