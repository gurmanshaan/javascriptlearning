//var userName = prompt("What is your name?");
// var output = alert(userName);

var bttn = document.querySelector('#btn');
var txt = document.querySelector('#txtid');
var op = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

bttn.addEventListener("click", function click() {
    //op.innerText = txt.value;
    inputText = txt.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            op.innerText = translatedText; // output
        })
        .catch(errorHandler)
})

