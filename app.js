var btnTranslate=document.querySelector("#btn-translate");
var input=document.querySelector("#text-input");
var outputDiv=document.querySelector("#output");


function clickeventhandler()
{ 
outputDiv.innerText="asasasa "+ input.value;
};

btnTranslate.addEventListener("click",clickeventhandler)