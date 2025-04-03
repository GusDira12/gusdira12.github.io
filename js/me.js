// -= global things.. =-

var innerWrapTag, profileGusTag, profileSautTag = "";

window.onload = function() {
    innerWrapTag = document.getElementById("innerWrap"); 
    profileGusTag = document.getElementById("profile-gus");
    profileSautTag = document.getElementById("profile-saut");
}

// -= changes a thing or 2 from gus to saut =-

function changeGusToSaut() {
    profileGusTag.setAttribute("style", "visibility: hidden; max-height: 0;");
    profileSautTag.setAttribute("style", "");

    var titleTag = document.getElementsByTagName("title");
    titleTag.item(0).innerHTML = "who is this saut person?";
}