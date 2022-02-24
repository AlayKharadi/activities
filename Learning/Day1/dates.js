//Date function
console.log(typeof(new Date()));
console.log("----------------------------------------")
console.log(new Date());
console.log(new Date().toDateString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toTimeString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toUTCString());
console.log(new Date().toISOString());
console.log("----------------------------------------")
console.log(new Date(-1000));
console.log(new Date(0));
console.log(new Date(1000));
console.log("----------------------------------------")
//Year, Month, Date, hours, minutes, seconds, milliseconds
console.log(new Date(2000, 11, 32));
console.log(new Date(1950, 10, 12));
console.log("----------------------------------------")
console.log(new Date('2000-12-12'));
console.log(new Date('31/12/2000'));
console.log(new Date('11/12/2000'));
console.log(new Date('Jan 22 2018'));
console.log(new Date('22 Jan 2018'));
console.log("----------------------------------------")
console.log(new Date().getTimezoneOffset());
console.log("----------------------------------------")
console.log(Date.parse('2000-12-12T23:32:23Z'));

console.log("----------------------------------------")
Date.prototype.myMonth = function(){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[this.getMonth()];
}
var a = new Date();
console.log(a.getMonth());
console.log(a.myMonth());

a = new Date('2022/2/5');
console.log(a.getMonth());
console.log(a.myMonth());

console.log("----------------------------------------")
a = new Date("2022-02-24");
console.log(a.toDateString());
console.log(a.toTimeString());
console.log(a.toUTCString());
console.log(a);
a.setDate(0);
console.log(a);
a.setFullYear(2022, 03, 12);
console.log(a);

console.log("----------------------------------------")
a = new Date();
console.log(a.toDateString());
console.log(a.toTimeString());
console.log(a.toUTCString());
console.log(a);
a.setUTCDate(0);
console.log(a);
a.setUTCFullYear(2022, 03, 12);
console.log(a);

a = new Date();
var b = new Date(a.valueOf());
console.log(a === b);
console.log((a <= b) && !(a < b));
console.log(a.valueOf() === b.valueOf());

//Format the values in certain way
