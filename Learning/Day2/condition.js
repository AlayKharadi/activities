function check(a, b){
    if(a === b) {
        console.log("value and type both matches")
    } else if (a == b) {
        console.log("values matches but types don't")
    } else if(typeof(a) === typeof(b)) {
        console.log("types matches but values don't")
    }else{
        console.log("neither matches")
    }
}

check('2', '2')
check(2, '2')
check('2', '3')
check(2, '3')
check(2, 3)
