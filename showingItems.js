var backEndContent = document.getElementById("backendDiv");
var frontEndContent = document.getElementById("fronendDiv");

function showBackEnd(){
    backEndContent.style.visibility = "visible";
    frontEndContent.style.visibility = "hidden"
}
function showFrontEnd(){
    backEndContent.style.visibility = "hidden";
    frontEndContent.style.visibility = "visible"
}