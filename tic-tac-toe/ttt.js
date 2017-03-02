
function choosePeice() {
    'use strict';
    var btns = document.getElementById("btns");
    document.getElementById("question").innerHTML = "Do you want to be crosses or circles?";
    btns.innerHTML = '<div class="col-xs-6">                <button onclick="startGame(\'X\')" class="btn btn-block">Crosses</button></div><div class="col-xs-6"><button onclick="startGame(\'O\')" class="btn btn-block">Naught</button></div>';
}
function onePlayer() {
    'use strict';
    choosePeice();
}

function twoPlayer() {
    'use strict';
    choosePeice();
}
function togglePlayer(char) {
    'use strict';
    var p1 = document.getElementById('player1Go'),
        p2 = document.getElementById('player2Go');
    if (p2.style.display === 'none') {
        p1.style.display = 'none';
        p2.style.display = 'block';
    } else {
        p2.style.display = 'none';
        p1.style.display = 'block';
    }
    return (char === 'X') ? '0' : 'X';
}


function startGame(char) {
    'use strict';
    document.getElementById("screen").style.display = 'none';
    document.getElementById("screen2").style.display = 'block';
    document.getElementById("player2Go").style.display = 'none';

    var board = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0
        },
        winning = [
        [0, 1, 2],
        [4, 5, 3],
        [7, 8, 8],
        [1, 4, 7],
        [2, 5, 8],
        [0, 3, 6],
        [0, 4, 8],
        [2, 4, 6]
        ],
        sqrs = document.getElementsByClassName("square"),
        i;

    function winner () {
        var j, rowtotal, won;
        for (j = 0; j < winning.length; j += 1) {
            rowtotal = winning[j].reduce((total, p) => {return total + board[p]}, 0);
            console.log(rowtotal);
            if (rowtotal === 3 || rowtotal === -3){
                console.log('winner');
                board = {0: '', 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0};
                won = winning[j];
                won.map(val => {sqrs[val].style.background = 'green'});
                setTimeout(function(){
                for (i = 0; i< sqrs.length; i += 1) {
                    sqrs[i].innerHTML = '';
                }
                won.map(val => {sqrs[val].style.background = 'white'});
                }, 1000);
            }
        }
    }

    sqrs[0].onclick = (function () {
        if (!board[0]) {
            sqrs[0].innerHTML = char;
            board[0] = (char === 'X') ? 1 : -1;
            char = togglePlayer(char);
            winner();
        }
    });
    sqrs[1].onclick = (function () {
        if (!board[1]) {
            sqrs[1].innerHTML = char;
            board[1] = (char === 'X') ? 1 : -1;
            char = togglePlayer(char);
            winner();
        }
    });
    sqrs[2].onclick = (function () {
        if (!board[2]) {
            sqrs[2].innerHTML = char;
            board[2] = (char === 'X') ? 1 : -1;
            char = togglePlayer(char);
            winner();
        }
    });
    sqrs[3].onclick = (function () {
        if (!board[3]) {
            sqrs[3].innerHTML = char;
            board[3] = (char === 'X') ? 1 : -1;
            char = togglePlayer(char);
            winner();
        }
    });
    sqrs[4].onclick = (function () {
        if (!board[4]) {
            sqrs[4].innerHTML = char;
            board[4] = (char === 'X') ? 1 : -1;
            char = togglePlayer(char);
            winner();
        }
    });
    sqrs[5].onclick = (function () {
        if (!board[5]) {
            sqrs[5].innerHTML = char;
            board[5] = (char === 'X') ? 1 : -1;
            char = togglePlayer(char);
            winner();
        }
    });
    sqrs[6].onclick = (function () {
        if (!board[6]) {
            sqrs[6].innerHTML = char;
            board[6] = (char === 'X') ? 1 : -1;
            char = togglePlayer(char);
            winner();
        }
    });
    sqrs[7].onclick = (function () {
        if (!board[7]) {
            sqrs[7].innerHTML = char;
            board[7] = (char === 'X') ? 1 : -1;
            char = togglePlayer(char);
            winner();
        }
    });
    sqrs[8].onclick = (function () {
        if (!board[8]) {
            sqrs[8].innerHTML = char;
            board[8] = (char === 'X') ? 1 : -1;
            char = togglePlayer(char);
            winner();
        }
    });



}
