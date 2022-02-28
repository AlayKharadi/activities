let arr = [1, 2, 5, 4, 9, 6, 8];
console.log(arr);

arr.push(5)
console.log(arr);

arr.pop();
console.log(arr);

arr.reverse();
console.log(arr);

console.log(arr.slice(1, 5))

console.log(arr.sort());

let arr2 = [2,3,4,5,6];

console.log(arr.concat(arr2));

arr.forEach(item => {
    console.log(item);
});

arr.push( ...arr2);

console.log(arr);

console.log( [..."5678"].map(item => parseInt(item) ));

console.log(Array.isArray([]))
console.log(Array.isArray({}))
console.log(Array.isArray(1))
console.log(Array.isArray([1,2,3,4,5]))