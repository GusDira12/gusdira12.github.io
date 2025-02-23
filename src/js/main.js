var clicks = 0; // click counter

function buttonMasher() {
    clicks += 1;

    const imgTag = document.getElementById("logo").querySelector("img"); // image tag
    const counter = "you've clicked my logo " + clicks + " times!";

    // set title to update amount of clicks
    imgTag.setAttribute("title", counter)
}