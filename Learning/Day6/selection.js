var btn1 = document.getElementById('btn-1');

btn1.addEventListener('click', () => {
    console.log(document.getSelection().toString())
});

var btn2 = document.getElementById('btn-2');

btn2.addEventListener('click', () => {
    document.getSelection().removeAllRanges();
})

var btn3 = document.getElementById('btn-3');

btn3.addEventListener('click', () => {
    var p = document.getElementById('content');

    var r = document.createRange();

    r.selectNodeContents(p);

    document.getSelection().removeAllRanges();

    document.getSelection().addRange(r);
});

