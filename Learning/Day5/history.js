
//her in pushState you should use state as first argument and title(second), (third)url to push in our history stack

// setTimeout(() => {
//     window.history.pushState("", "Documents", "http://127.0.0.1:5500/Learning/Day4/");
// }, 6000);

// setTimeout(() => {
//     window.history.replaceState("", "Documents", "http://127.0.0.1:5500/Learning/Day4/");
// }, 6000);

//if you have multiple page on an application than you can even use

// window.history.go(-2);
// window.history.go(2);

// window.history.back();
// window.history.forward();

console.log("history");
console.log(window.history);
//length of the history object itself
console.log("window history length " + window.history.length);
console.log("state");

//gives us the histroy state of the app
console.log(window.history.state);

console.log("scroll restoration: ");

//this allows the browser to also restore the scroll of the page if true
console.log(window.history.scrollRestoration);