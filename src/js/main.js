var clicks = 0; // click counter
const counter1 = "you've clicked my logo 1 time!"

function buttonMasher() {
    clicks += 1;

    const textTag = document.getElementById("innerWrap").getElementsByClassName("text-tag").item(0); // text tag
    const counter = "you've clicked my logo " + clicks + " times!";

    // set title to update amount of clicks
    if (clicks == 1) textTag.innerHTML = counter1;
    else textTag.innerHTML = counter;
}