var btnTranslate=document.querySelector("#btn-translate");
var input=document.querySelector("#text-input");



function clickeventhandler()
{ 
console.log("clicked");
console.log("input", input.value)
};

btnTranslate.addEventListener("click",clickeventhandler)