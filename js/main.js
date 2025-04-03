// -= global things.. =-

var innerWrapTag = "";
var textMainTag = "";

window.onload = function() {
    innerWrapTag = document.getElementById("innerWrap"); 
    textMainTag = innerWrapTag.getElementsByClassName("text-tag").item(0); // only first child  
};

// -= click counter section =-

// checking storage for clicks. if none, create!!!
window.onpageshow = function() {
    if (typeof(Storage) !== undefined) {
        if (localStorage.getItem("clicks") == null) {
            localStorage.setItem("clicks", Number(0)); // number function to make sure it's... numbers
        }
    }
};

function clickCounter() {
    var clicksThisSession = Number(localStorage.getItem("clicks"));

    clicksThisSession += 1;
    localStorage.setItem("clicks", clicksThisSession);
    
    var counter = "you've clicked my logo " + clicksThisSession + " times!";
    const counter1 = "you've clicked my logo 1 time!";

    // set title to update the amount of clicks
    switch (clicksThisSession) {
        case 1:
            textMainTag.innerHTML = counter1;
            break;
        case 69:
            textMainTag.innerHTML = counter + " (nice)";
            break;
        case 100:
            textMainTag.innerHTML = counter + " you may want to take a break, it's been 100 clicks.";
            break;
        case 1000:
            textMainTag.innerHTML = counter + " wait, what do you mean 1000 times? you okay?";
            break;
        case 10000:
            textMainTag.innerHTML = counter + " I give up. I'll keep counting...";
            break;
        default:
            textMainTag.innerHTML = counter;
    }
}