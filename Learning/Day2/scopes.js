//javascritp have 3 different scope
//function scope
//global scope
//block scope
//let and const provide the block scope, meaning you can not use it outside its block
//var does not have block scope

//this is a global scope
var t = 2

function output(){
    //this can be said as function scope for this function
    var a = 0;
    console.log(a);
    console.log(t);

    if(a === 0){
        //this is block scope for this if section
        //Note if we use var it can be accessed outside of this block scope
        //let and const won't allow that
        let b = 4;
        console.log(b)
        console.log(t);
    }

    //this throws an error as it is outside the if section for let and const var will work
    console.log(b)
}
//this would throw error as it is outside the function
//console.log(a)

output()