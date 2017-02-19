

function onePlayer() {
    'use strict';
    choosePeice();
}

function twoPlayer() {
    'use strict';
    choosePeice();
}

function choosePeice() {
    'use strict';
    var btns = document.getElementById("btns");
    console.log(btns);
    document.getElementById("question").innerHTML = "Do you want to be crosses or circles?";
    btns.innerHTML = '<div class="col-xs-6">                <button onclick="startGame(\'X\')" class="btn btn-block">Crosses</button></div><div class="col-xs-6"><button onclick="startGame(\'O\')" class="btn btn-block">Naught</button></div>';
}

function togglePlayer() {
    'use strict';
    var p1 = document.getElementById('player1Go'),
        p2 = document.getElementById('player2Go');

}

function startGame(char) {
    'use strict';
    document.getElementById("screen").style.display = 'none';
    document.getElementById("screen2").style.display = 'block';
    document.getElementById("player2Go").style.display = 'none';
    
    var board = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
    },
        winning = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ],
    /* Gameplay */
        sqrs = document.getElementsByClassName('square');
    document.getElementsByClassName('content').innerHTML = "";
    
    

}