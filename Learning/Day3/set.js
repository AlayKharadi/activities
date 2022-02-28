let arr = [1,2,3,4,5,6,6,7,8,9,10];

let set = new Set(arr); //can't add duplicate stuff like array
//can be a set of any type of data
console.log(set);
set.add(11).add(12).add(13);
console.log(set);
console.log(Array.from(set));
set.delete(12);
console.log(set);
console.log(set.has(13));
console.log("set-size: "+set.size);

for (item of set) {
    console.log(item);
}

set.forEach((value, value2, set) => {
    console.log(value+" "+value2);
}, this);

set.clear();
console.log(set);