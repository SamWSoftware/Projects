

function onePlayer() {
    choosePeice();
}

function twoPlayer(){
    choosePeice();
}

function choosePeice() {
    document.getElementById("question").innerHTML = "Do you want to be crosses or circles?";
    document.getElementById("btn1").innerHTML = "Crosses";
    document.getElementById("btn1").onclick = "startGame('x')"
    document.getElementById("btn2").innerHTML = "Circles";
    document.getElementById("btn2").onclick = "startGame('o')"
}

function startGame(peice) {
    parent = document.getElementById("screen");
    parent.innerHTML = "<div"
}