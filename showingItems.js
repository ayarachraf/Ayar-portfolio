var backEndContent = document.getElementById("backendDiv");
var frontEndContent = document.getElementById("fronendDiv");
var officeContent = document.getElementById("officeDiv")

function showBackEnd(){
    backEndContent.style.visibility = "visible";
    frontEndContent.style.visibility = "hidden";
    officeContent.style.visibility = "hidden";
}
function showFrontEnd(){
    backEndContent.style.visibility = "hidden";
    frontEndContent.style.visibility = "visible";
    officeContent.style.visibility = "hidden";
}
function showOffice(){
    backEndContent.style.visibility = "hidden";
    frontEndContent.style.visibility = "hidden";
    officeContent.style.visibility = "visible";

}

var link = document.getElementsByClassName("blougeA");
var blougeCard = document.getElementsByClassName("blougeCard");

for (var i = 0; i < blougeCard.length; i++) {

    blougeCard[i].addEventListener("mouseover", function() {
    link[i].style.visibility = "visible";
  });
}
