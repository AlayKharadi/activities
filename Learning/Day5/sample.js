//for json

//covert a 
let obj = JSON.stringify({
    firstname: "John",
    lastname: "Doe"
});

console.log(obj)

console.log(JSON.parse(obj))

obj = '[{"0": "Red", "1": "Yellow", "2": "Green"}, {"user": "John Doe"}]';

console.log(JSON.parse(obj))

console.log(JSON.stringify({}))

console.log(JSON.stringify([
    'John Doe',
    12,
    false
]))

console.log(JSON.stringify([
    'John Doe',
    12,
    false
], (key, value) => {
    if(typeof(value) === "boolean"){
        return;
    }
    return value;
}));

console.log(JSON.stringify([
    {
        name:'John Doe'
    },
    12,
    false
], null, '\t'));

console.log(JSON.stringify('John Doe'))

console.log(JSON.stringify(true))

console.log(JSON.stringify(new Date()))


try{
    let book = {
        title: "colors",
        colors: []
    };
    book.colors.push({
        value: 'red',
        container: 'book2'
    });
    book.colors.push({
        value: 'pink',
        container: book
    });
    
    console.log(JSON.stringify(book))
}catch(e){
    console.log(e);
}