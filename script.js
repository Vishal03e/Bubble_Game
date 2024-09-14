var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble() {
    var clutter = "";

    for(var i=1;i<=102;i++){
        var no = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${no}</div>`;
    }
    document.querySelector("#p-bottom").innerHTML = clutter;
}

function hit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function setTimer() {
    var timeInt = setInterval(function() {
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(timeInt);
            document.querySelector("#p-bottom").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#p-bottom").addEventListener("click", function(dets) {
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn) {
        increaseScore();
        makeBubble();
        hit();
    }
})

makeBubble();
hit();
setTimer();
