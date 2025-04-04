// -= global things.. =-

var innerWrapTag, textMainTag, imageTag, textMainOriginal = "";

window.onload = function() {
    innerWrapTag = document.getElementById("innerWrap"); 
    textMainTag = innerWrapTag.getElementsByClassName("text-tag").item(0); // only first child  
    imageTag = document.getElementById("logo-gd").getElementsByTagName("img").item(0);

    textMainOriginal = textMainTag.innerHTML;
};

// -= click counter section =-

var storageAccess = true;
var optOut = "";
var timer = 0;

// checking local storage for click counter. if none, create!!!
window.onpageshow = function() {
    if (typeof(Storage) !== undefined) {
        if (localStorage.getItem("clicks") == null) {
            localStorage.setItem("clicks", Number(0)); // number function to make sure it's... numbers
        }
    } else this.storageAccess = false;
};

// checks the click counter first, then if clicked in 5 seconds, starts counting
// switches from clickStarter to clickCounter, meaning if pressed again the click counter starts counting like normal
function clickStarter() {
    var currCount = Number(localStorage.getItem("clicks"));

    clickPopUp(currCount);

    imageTag.setAttribute("onclick", "clickCounter()");
    textMainTag.innerHTML += "<br>ready to count your clicks?"

    switchToStarter(currCount);
}

// counts clicks when clicked. returns something when storage's not a thing
function clickCounter() {
    if (!storageAccess) {
        alert("man... no local storage available :( I wanted to save your click counter then show it");
        
        imageTag.setAttribute("onclick", "clickStarter()");
        textMainTag.innerHTML = textMainOriginal;
        
        return;
    }

    var clicksThisSession = Number(localStorage.getItem("clicks"));

    clicksThisSession += 1;
    localStorage.setItem("clicks", clicksThisSession);

    clickPopUp(clicksThisSession);

    switchToStarter(clicksThisSession);
}

// set main text to update the amount of clicks
function clickPopUp(clicksThisSession) {
    var counter = "you've clicked my logo " + clicksThisSession + " times!";
    const counter1 = "you've clicked my logo 1 time!";

    switch (clicksThisSession) {
        case 1:
            textMainTag.innerHTML = counter1 + optOut;
            break;
        case 69:
            textMainTag.innerHTML = counter + " (nice)" + optOut;
            break;
        case 100:
            textMainTag.innerHTML = counter + " you may want to take a break, it's been 100 clicks." + optOut;
            break;
        case 1000:
            textMainTag.innerHTML = counter + " wait, what do you mean 1000 times? you okay?" + optOut;
            break;
        case 10000:
            textMainTag.innerHTML = counter + " I give up. I'll keep counting..." + optOut;
            break;
        default:
            textMainTag.innerHTML = counter + optOut;
    }
}

// switches to clickStarter. takes current amount of clicks
function switchToStarter(currCount) {
    var counterPopUp = setInterval(function() {
        timer += 1;

        // manually resetting timer to make it more consistent in timing
        if (currCount !== Number(localStorage.getItem("clicks"))) {
            clearInterval(counterPopUp);
            
            timer = 0;

            return;
        }

        if (timer == 5) {
            imageTag.setAttribute("onclick", "clickStarter()");
            textMainTag.innerHTML = textMainOriginal;

            clearInterval(counterPopUp);
        }

        console.log(timer);
    }, 1000);

    timer = 0;
}