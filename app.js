//var userName = prompt("What is your name?");
// var output = alert(userName);

var bttn = document.querySelector('#btn');
var txt = document.querySelector('#txtid');
var op = document.querySelector('#output');

bttn.addEventListener("click", function click() {
    op.innerText = txt.value;
})

