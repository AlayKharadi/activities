console.log(localStorage);

localStorage.setItem("user", "john");

console.log("localStorage" + localStorage);

console.log("Length: " + localStorage.length)

console.log("User" + localStorage.getItem("user"));

localStorage.clear();

console.log(localStorage);

localStorage.setItem("colors", JSON.stringify(["red", "yellow", "pink", "green"]))

console.log(localStorage)

console.log("Colors: " + JSON.parse(localStorage.getItem("colors")))

localStorage.user = "John";

console.log(localStorage)
