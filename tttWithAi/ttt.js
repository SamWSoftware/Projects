

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
    document.getElementById("question").innerHTML = "Do you want to be crosses or circles?";
    btns.innerHTML = '<div class="col-xs-6"><button onclick="startGame(\'X\')" class="btn btn-block">Crosses</button></div><div class="col-xs-6"><button onclick="startGame(\'O\')" class="btn btn-block">Naught</button></div>';
}

function togglePlayer(char) {
    'use strict';
    var p1 = document.getElementById('player1Go'),
        p2 = document.getElementById('player2Go');
    char = (char === 'X') ? 'O' : 'X';
    return char;

}

function changescreens() {
    document.getElementById("screen").style.display = 'none';
    document.getElementById("screen2").style.display = 'block';
    document.getElementById("player2Go").style.display = 'none';
}

function startGame(char) {
    'use strict';
    var board = ['','','','','','','','',''],
        sqrs = document.getElementsByClassName('square'),
        [s0, s1, s2, s3, s4, s5, s6, s7, s8] = sqrs,
        human = char,
        ai = (char === 'X') ? 'O' : 'X',
        winning = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
    console.log(s0);
    changescreens();
    for (var i = 0; i < sqrs.length; i++){
        sqrs[i].innerHTML = board[i];
    }

    function freeSpaces(board) {
        return board.filter(s => s != 'O' && s != 'X');
    }

    function win(board, player){
        var i;
        for (i = 0; i < winning.length; i += 1) {

            if (winning[i].filter(point => board[point] === player).length === 3){
                console.log('winner');
                return true;
            } else {
                return false;
            }
        }
    }

    function minimax(newBoard, player) {
        var spaces = freeSpaces(newBoard),
        moves = [];

        if (win(newBoard, human)){
            return -10;
        } else if (win(newBoard, ai)){
            return 10;
        } else if (freeSpaces.length === 0){
            return 0;
        }
        for (var i = 0; i < spaces.length; i += 1) {
            var move = {};
            move.index = newBoard[freeSpaces[i]];
            newBoard[freeSpaces[i]] = player;
            if (player == ai) {
                move.score = minimax(newBoard, human);
            } else {
                move.score = minimax(newBoard, ai);
            }
            newBoard[freeSpaces[i]] = move.index;
            moves.push(move);
        }
        var bestmove;
        if (player == ai){
            var bestScore = -10000;
            for (var i = 0; i < moves.length; i += 1){
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestmove = i;
                }
            }
        } else {
            var bestScore = 10000;
            for (var i = 0; i < moves.length; i += 1){
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestmove = i;
                }
            }
        }
        console.log(moves[bestmove]);
        return moves[bestmove];
    }
    s0.addEventListener('click', function () {
        if (!s0.innerHTML){
            s0.innerHTML = char;
            board[0] = char;
            if (win(board, char)) {
                char = togglePlayer(char);
                startGame(char);
            } else {
                char = togglePlayer(char);
            }
        }
    })
    s1.addEventListener('click', function () {
        if (!s1.innerHTML){
            s1.innerHTML = char;
            board[1] = char;
            if (win(board, char)) {
                char = togglePlayer(char);
                startGame(char);
            } else {
                char = togglePlayer(char);
            }
        }
    })
    s2.addEventListener('click', function () {
        if (!s2.innerHTML){
            s2.innerHTML = char;
            board[2] = char;
            if (win(board, char)) {
                char = togglePlayer(char);
                startGame(char);
            } else {
                char = togglePlayer(char);
            }
        }
    })
    s3.addEventListener('click', function () {
        if (!s3.innerHTML){
            s3.innerHTML = char;
            board[3] = char;
            if (win(board, char)) {
                char = togglePlayer(char);
                startGame(char);
            } else {
                char = togglePlayer(char);
            }
        }
    })
    s4.addEventListener('click', function () {
        if (!s4.innerHTML){
            s4.innerHTML = char;
            board[4] = char;
            if (win(board, char)) {
                char = togglePlayer(char);
                startGame(char);
            } else {
                char = togglePlayer(char);
            }
        }
    })
    s5.addEventListener('click', function () {
        if (!s5.innerHTML){
            s5.innerHTML = char;
            board[5] = char;
            if (win(board, char)) {
                char = togglePlayer(char);
                startGame(char);
            } else {
                char = togglePlayer(char);
            }
        }
    })
    s6.addEventListener('click', function () {
        if (!s6.innerHTML){
            s6.innerHTML = char;
            board[6] = char;
            if (win(board, char)) {
                char = togglePlayer(char);
                startGame(char);
            } else {
                char = togglePlayer(char);
            }
        }
    })
    s7.addEventListener('click', function () {
        if (!s7.innerHTML){
            s7.innerHTML = char;
            board[7] = char;
            if (win(board, char)) {
                char = togglePlayer(char);
                startGame(char);
            } else {
                char = togglePlayer(char);
            }
        }
    })
    s8.addEventListener('click', function () {
        if (!s8.innerHTML){
            s8.innerHTML = char;
            board[8] = char;
            if (win(board, char)) {
                char = togglePlayer(char);
                startGame(char);
            } else {
                char = togglePlayer(char);
            }
        }
    })




}
