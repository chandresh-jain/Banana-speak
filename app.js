var btnTranslate=document.querySelector("#btn-translate");
var input=document.querySelector("#text-input");
var outputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text)
{
    return serverURL + "?" + "text=" + text
}


function clickeventhandler()
{ 
    var inputText= input.value;
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        translatedText=json.contents.translated;
        outputDiv.innerText = translatedText;})


    };
    


btnTranslate.addEventListener("click",clickeventhandler)



