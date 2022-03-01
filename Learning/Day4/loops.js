let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for (item of arr) {
    console.log(item);   
}

arr.forEach(element => {
    console.log(element);
});

arr = {
    1: "red",
    2: "yellow",
    3: "pink",
    4: "blue"
};

for (key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        console.log(element);
    }
}
