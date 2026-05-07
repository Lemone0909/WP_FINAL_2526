//ID identifier, 0 or 1. Grab from list with on click for the image. 

lucky = ["resources/index_resources/Yuta.png", "resources/index_resources/Gojo_small.jpg", "resources/index_resources/yuji.jpg"]

unlucky = ["resources/index_resources/Ken_small.jpg", "resources/index_resources/face_gojo.jpg"]

sessionStorage.setItem("Money", 0)

total = document.getElementById("money");

total.textContent = sessionStorage.getItem("Money")



function genTicket(){
const boxes = document.getElementsByClassName("row")
for (let i=0; i<2; i++){
    let box = boxes[i]
    for (let i=0; i<4; i++){
        const row = document.createElement("div");
        row.style.backgroundColor("White")
       const choice = Math.random()
        if (choice > 0.5){
            choice = a;
        }
        else{
            choice = b;
        }
        row.id = choice
        const randomnum = Math.floor(Math.random() * 100);
        row.textContent = `$${randomnum}`
        row.onclick = function(){reveal(row)};
    }

}


}


function reveal(box){
if (box.id == a){
    const lrandomIndex = Math.floor(Math.random() * lucky.length);
    const limage = lucky[lrandomIndex];
    box.style.backgroundImage(limage);
    monupdate(box);
}

if (box.id == b){
    const urandomIndex = Math.floor(Math.random() * unlucky.length);
    const uimage = unlucky[urandomIndex];
    box.style.backgroundImage(uimage);
}

}

function monupdate(box){
const money = box.textContent;
const cleaned = Number(money.split($)[1]);
const curr = sessionStorage.getItem("Money");
curr += cleaned;
total.textContent = curr;
sessionStorage.setItem("Money", curr);
}

function restartclick(div){
location.reload(true);
}