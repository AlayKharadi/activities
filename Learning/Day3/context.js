let obj = {
    firstName: 'John',
    lastName: 'Doe',
    Name: function(){
        return (this.firstName +" "+ this.lastName);
    }
};

console.log(obj.Name())

class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }
}

var Dog = new Animal("Dog", "Woof");

console.log(Dog);