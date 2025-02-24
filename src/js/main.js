var clicks = 0; // click counter
const counter1 = "you've clicked my logo 1 time!"

function buttonMasher() {
    clicks += 1;

    const imgTag = document.getElementById("logo").querySelector("img"); // image tag
    const counter = "you've clicked my logo " + clicks + " times!";

    // set title to update amount of clicks
    if (clicks == 1) imgTag.setAttribute("title", counter1);
    else imgTag.setAttribute("title", counter);
}