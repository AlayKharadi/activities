let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let output = arr.reduce((acc, item) => {
    return acc + item;
}, 0);

console.log(output);

output = arr.filter(item => ((item % 2) === 0));

console.log(output);

output = arr.map(item => (2*item));

console.log(output);

arr = [
    {
        key: 1,
        value: 'red'
    }, {
        key: 2,
        value: 'yellow'
    }, {
        key: 3,
        value: 'blue'
    }, {
        key: 4,
        value: 'pink'
    }
];
output = arr.reduce((acc, item) => {
    return {
        ...acc,
        [item.key]: item.value
    };
}, {});

console.log(output);

output = arr.reduce((acc, item) => {
    return [
        ...acc,
        item.value
    ]
}, []);

console.log(output.sort())
