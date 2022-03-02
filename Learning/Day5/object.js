let obj = {
    firstname: "John",
    lastname: "Doe",
    getName: function () {
        return (this.firstname + " " + this.lastname);
    }
};

console.log(obj.getName());

let newObj = {};
Object.assign(newObj, {
    firstname: obj.firstname,
    lastname: obj.lastname
});

console.log(newObj);

let { ...temp } = obj;

console.log(temp.getName());

//Freeze a object
Object.freeze(newObj);

newObj.age = 20;

console.log("Age not being added after freeze: " + JSON.stringify(newObj));

let arr = [
    {
        id: 0,
        color: "Red"
    },
    {
        id: 1,
        color: "Pink"
    },
    {
        id: 2,
        color: "Yellow"
    },
    {
        id: 3,
        color: "Blue"
    }
];

//you can use to merge an array into object
let out = arr.reduce((acc, value) => {
    return Object.assign(acc, {
        [value.id]: value.color
    });
}, {});

console.log(out);

Object.defineProperty(obj, 'age', {
    value: 23,
    writable: true,
    configurable: true,
    enumerable: true
});

console.log(obj);

Object.defineProperty(obj, 'fullname', {
    get: function(){
        return this.firstname + " " + this.lastname;
    },
    set: function(name){
        [this.firstname, this.lastname] = name.split(" ");
    }
})

obj.fullname = "John Doe";

console.log(obj.fullname);
console.log(obj);
console.log(JSON.stringify(obj))


let triangle = {
    a: 23,
    b: 24,
    c: 59
};

//unlike freeze it does allow to update the existing values
Object.seal(triangle);
console.log(triangle);
triangle.c = 72;
console.log(triangle);

console.log(Object.getOwnPropertyNames(obj));
