// -= global things.. =-

var innerWrapTag = "";
var textMainTag = "";

window.onload = function() {
    innerWrapTag = document.getElementById("innerWrap"); 
    textMainTag = innerWrapTag.getElementsByClassName("text-tag"); // only first child  
}

// -= changes a thing or 2 from gus to saut =-

function changeGusToSaut() {
    textMainTag.item(0).hidden = true;
    textMainTag.item(1).hidden = false;

    var photoTag = innerWrapTag.getElementsByTagName("img").item(0);
    photoTag.src = "./img/scooters/saut.png";
    photoTag.title = "I'm no longer being used";
}