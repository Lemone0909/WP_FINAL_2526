//ID identifier, 0 or 1. Grab from list with on click for the image. 

lucky = ["resources/index_resources/Yuta.png", "resources/index_resources/Gojo_small.jpg", "resources/index_resources/yuji.jpg"]

unlucky = ["resources/index_resources/Ken_small.jpg", "resources/index_resources/face_gojo.jpg"]





function genTicket(){
const boxes = document.getElementsByClassName("row")
for (let i=0; i<2; i++){
    let box = boxes[i]
    for (let i=0; i<4; i++){
        const row = document.createElement("div");
        row.className = "cells"
       const choice = Math.random()
       let letter = ""
        if (choice > 0.8){
            letter = "a";
        }
        else{
            letter = "b";
        }
        row.id = letter
        row.style.backgroundColor = "White"
        row.onclick = function(){reveal(row)};
        box.appendChild(row)
    }

}


}


function reveal(box){
if (box.textContent == ""){
    box.style.backgroundColor = "null"
    const randomnum = Math.floor(Math.random() * 100);
    box.textContent = `$${randomnum}`
if (box.id == "a"){
    const lrandomIndex = Math.floor(Math.random() * lucky.length);
    const limage = lucky[lrandomIndex];
    box.style.backgroundImage = `url(${limage})`;
    monupdate(box);
}

if (box.id == "b"){
    const urandomIndex = Math.floor(Math.random() * unlucky.length);
    const uimage = unlucky[urandomIndex];
    box.style.backgroundImage = `url(${uimage})`;
}
}
}
function monupdate(box){
const money = box.textContent;
const cleaned = Number(money.split("$")[1]);
const total = document.getElementById("money");
let curr = Number(total.textContent.split("$")[1]);
curr += cleaned;
total.textContent = `$${curr}`;
}

function restartclick(div){
location.reload(true);
}