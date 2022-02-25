//hoisting moves all the declaration of variable to the top of block
//that are defined by var
//only declaration not the intialization
//this can create problem and can give unexpected output
try{
    temp = "output"
    let temp
}catch(error){
    console.log(error)
}

try{
    flag = "output"
    var flag
    console.log(flag)
}catch(error){
    console.log(error)
}

try{
    var x = 3;
    console.log(x)
}catch(error){
    console.log(error)
}

try{
    console.log(y)
    var y = 3;
}catch(error){
    console.log(error)
}

try {
    console.log(a)
}catch(error){
    console.log(error)
}

try{
    const a = 5;
    console.log(a);
    a = 6;
    console.log(a);
}catch(error){
    console.log(error)
}

//you can redclare only a var variable 
try{
    var a = 5;
    console.log(a);
    var a = 3;
    console.log(a);
}catch(error){
    console.log(error)
}