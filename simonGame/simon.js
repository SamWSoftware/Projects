var strict = false,
    clickDisabled = false,
    audio = document.getElementsByTagName('audio');


function highlight(colour) {
    'use strict';
    var pad = document.getElementsByClassName(colour),
        style = window.getComputedStyle(pad[0]),
        col = style.getPropertyValue('border'),
        nums = col.match(/\d+/g),
        i,
        val = colour.match(/\d+/)[0];
    console.log(audio);
    nums.shift();
    audio[val-1].play();

    for (i = 0; i < 3; i += 1) {
        nums[i] = Number(nums[i]) + 50;
    }
    pad[0].style.border = "10vmin solid rgb(" + nums.join(',') + ')';

    setTimeout(function () {
        pad[0].style.border = "10vmin solid " + col.slice(11);
    }, 400);
}
function run(sequence) {
    'use strict';
    var i = 0,
        show;
    sequence.push('c' + Math.ceil(Math.random() * 4));
    document.getElementById('screen').innerHTML =  String(sequence.length);
    show  = setInterval(function () {
        if (i < sequence.length) {
            highlight(sequence[i]);
            i += 1;
        } else {
            clearInterval(show);
        }
    }, 600);
    testPlayer(sequence);
}
function wrong() {
    'use strict';
    var pad = document.getElementsByClassName('face'),
        style = window.getComputedStyle(pad[0]),
        col = style.getPropertyValue('background');

    pad[0].style.background = "rgb(255, 0, 0)" + col.slice(19);
    setTimeout(function () {
        pad[0].style.background = col;
    }, 400);
    if (strict) {
        run([]);
    }
}

function press(colour) {
    'use strict';
    if (!clickDisabled) {
        highlight(colour);
        clickDisabled = true;
        setTimeout(function () {clickDisabled = false; }, 400);
    }

}
function won() {
    'use strict';
    document.getElementById('screen').innerHTML = 'Won';
}

function isCorrect(c, j, seq) {
    'use strict';
    if (c !== seq[j]) { // if not the correct button
        console.log(c, seq[j], j);
        wrong();
        if (strict) {
            run([]);
        } else {
            var i = 0;
            setInterval(function () {
                if (i < seq.length) {
                    highlight(seq[i]);
                    i += 1;
                }
            }, 600);
            return 0;
        }
    } else if (j === seq.length - 1) {
        if (j === 20) {
            won();
        } else {
            run(seq);
        }
    }
    j += 1;
    return j;
}
function testPlayer(seq) {
    'use strict';
    var c1 = document.getElementsByClassName('c1'),
        c2 = document.getElementsByClassName('c2'),
        c3 = document.getElementsByClassName('c3'),
        c4 = document.getElementsByClassName('c4'),
        i = 0;
    c1[0].onclick = function () {
        if (!clickDisabled) {
            highlight('c1');
            i = isCorrect('c1', i, seq);
            clickDisabled = true;
            setTimeout(function () {clickDisabled = false; }, 400);
        }
    };
    c2[0].onclick = function () {
        if (!clickDisabled) {
            highlight('c2');
            i = isCorrect('c2', i, seq);
            clickDisabled = true;
            setTimeout(function () {clickDisabled = false; }, 400);
        }
    };
    c3[0].onclick = function () {
        if (!clickDisabled) {
            highlight('c3');
            i = isCorrect('c3', i, seq);
            clickDisabled = true;
            setTimeout(function () {clickDisabled = false; }, 400);
        }
    };
    c4[0].onclick = function () {
        if (!clickDisabled) {
            highlight('c4');
            i = isCorrect('c4', i, seq);
            clickDisabled = true;
            setTimeout(function () {clickDisabled = false; }, 400);
        }
    };
}
function strictToggle() {
    'use strict';
    strict = strict ? false : true;
    document.getElementsByClassName('strict')[0].style.background = strict ? 'red' : 'none';
}
