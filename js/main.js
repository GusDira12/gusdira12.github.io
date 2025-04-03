// -= global things.. =-

var innerWrapTag = "";
var textMainTag = "";

window.onload = function() {
    innerWrapTag = document.getElementById("innerWrap"); 
    textMainTag = innerWrapTag.getElementsByClassName("text-tag").item(0); // only first child  
}

// -= click counter section =-

var clicks = 0;
const counter1 = "you've clicked my logo 1 time!"

function clickCounter() {
    clicks += 1;
    var counter = "you've clicked my logo " + clicks + " times!";

    // set title to update amount of clicks
    if (clicks == 1) textMainTag.innerHTML = counter1;
    else textMainTag.innerHTML = counter;
}