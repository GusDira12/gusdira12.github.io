// -= global things.. =-

var titleTag, innerWrapTag, profileGusTag, profileSautTag = "";

window.onload = function() {
    titleTag = document.getElementsByTagName("title");
    innerWrapTag = document.getElementById("innerWrap"); 
    profileGusTag = document.getElementById("profile-gus");
    profileSautTag = document.getElementById("profile-saut");
}

// -= changes a thing or 2 from gus to saut =-

const titleGus = "who is this gus person?";
const titleSaut = "who is this saut person?";

const hiddenStyle = "visibility: hidden; max-height: 0;";

function changeGusToSaut() {
    if (!profileGusTag.getAttribute("style")) {
        profileGusTag.setAttribute("style", hiddenStyle);
        profileSautTag.setAttribute("style", "");

        document.getElementById("scooter").setAttribute("style", "");

        titleTag.item(0).innerHTML = titleSaut;
    } else {
        profileSautTag.setAttribute("style", hiddenStyle);
        profileGusTag.setAttribute("style", "");

        document.getElementById("scooter").setAttribute("style", hiddenStyle);

        titleTag.item(0).innerHTML = titleGus;
    }
}