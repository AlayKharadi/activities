let map = new Map([
    [new Date().getMilliseconds(), { color: "Red" }],
    [new Date().getMilliseconds(), { color: "Pink" }],
    [new Date().getMilliseconds(), { color: "Blue" }],
    [new Date().getMilliseconds(), { color: "Yellow" }]
]);

console.log(map);

map = new Map([
    [1, 2],
    [3, 4],
    [5, 6],
    [9, 20]
])
;
console.log(map);

console.log(map.size);

console.log(map.get(1));

console.log(map.get(2));

map.set(2, 10);

console.log(map.get(2));

console.log("Key:value")

for ([key, value] of map) {
    console.log(key + ": " + value)
}

console.log("keys")

for (key of map.keys()) {
    console.log("key: " + key)
}

console.log("values")

for (value of map.values()) {
    console.log("value: " + value)
}

console.log("using foreach");

map.forEach((value, key, map) => {
    console.log(key + ": " + value)
})

map.clear();

console.log("size: " + map.size);

