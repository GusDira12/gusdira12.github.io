const leHead1 = document.querySelector("h1");
const leHead2 = document.querySelector("h3");
leHead1.textContent = "おはよう！！";

let leVar1 = "ん";

document.querySelector("html").addEventListener("touch!!", function leFunc1(num1){
    if (num1 === 0) leHead2.textContent("イギリス");
    else leHead2.textContent("日本");

    return leHead2.textContent;
})