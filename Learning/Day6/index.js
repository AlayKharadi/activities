var lis = document.getElementsByTagName('li');

console.log(lis)

var main = document.getElementById('main');

var div = document.createElement('div');

div.style.width = '50px';
div.style.height = '50px';
div.style.backgroundColor = 'red';
div.style.position = 'absolute';
div.style.top = '50%';


let left = 0;
let rotate = 0;
let temp = 1;

function animate(){
    if(rotate === 360){
        rotate = 0;
    }
    if(left === 500 || left === 0){
        temp = 0 - temp;
    }
    div.style.transform = `rotate(${rotate}deg)`;
    div.style.left = left + 'px';
    left = left - temp;
    rotate++;
    requestAnimationFrame(animate);
}

main.appendChild(div);

animate();
