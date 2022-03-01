let main = document.getElementById('main');

let temp = document.createElement('div');

let time = 1000;

setTimeout(() => {
    temp.innerHTML = "canshare: " + JSON.stringify(navigator.canShare);
    main.appendChild(temp);
}, time);

time = time * 5;

setTimeout(() => {
    temp.innerHTML = "cookieEnabled: " + JSON.stringify(navigator.cookieEnabled);
    main.appendChild(temp);
}, time);

time = time * 5;

setTimeout(() => {
    temp.innerHTML =  "geolocation: " + JSON.stringify(navigator.geolocation);
    main.appendChild(temp);
}, time);

time = time * 5;

setTimeout(() => {
    temp.innerHTML = "clipboard: " + JSON.stringify(navigator.clipboard);
    main.appendChild(temp);
}, time);

time = time * 5;

setTimeout(() => {
    temp.innerHTML = "connection: " + JSON.stringify(navigator.connection.type);
    main.appendChild(temp);
}, time);
