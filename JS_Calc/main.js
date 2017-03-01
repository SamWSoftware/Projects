var screenOut = " ";
var wasEq = false;

function enterDigit(x) {
    'use strict';
    // if x is operator
    if (x == '0' && screenOut.length == 1 && screenOut[0] == 0) {
        return
    }

    if (screenOut.slice(-1) === "." &&  ~'+-*/'.indexOf(x)   /* '+-/*'.indexOf(x) !== -1 */ ) {
        return;
    }

    if ('+-*/'.indexOf(x) !== -1) {
        // if last char is operator
        if ('+-*/'.indexOf(screenOut.slice(-1)) !== -1) {
            screenOut = screenOut.slice(0, -1) + x;

        // if last char is space, and x is *or/ do nothing
        } else if (screenOut.slice(-1) === " " &&
                   '*/'.indexOf(x) !== -1) {
        } else {
            screenOut += x;
        }
    // if x is number
    } else {
        if (wasEq) {
            screenOut = x;
        } else {
            screenOut += x;
        }
    }
    wasEq = false;
    document.getElementById("display").innerHTML = screenOut;
}

function decimal() {
    var operator = '+-*/'.split(''),
        last=0;
    for (var i = 0; i<operator.length; i++) {
        if ((m = screenOut.lastIndexOf(operator[i])) > last) {
            last = m;
        }
    }
    console.log(last);
    var lastNumber = screenOut.slice(last);
    console.log(lastNumber);

    if (!~lastNumber.indexOf('.') ) {
        screenOut += '.';
        document.getElementById("display").innerHTML = screenOut;
    }

}

function clearScreen() {
    'use strict';
    screenOut = "";
    document.getElementById("display").innerHTML = "0";
    document.getElementById("equation").innerHTML = "...";
}

function getEquals() {
    'use strict';
    if (screenOut.slice(-1) === ".") {
        return;
    }
    var ans = eval(screenOut);
    if (ans.toString().length >= 10) {
        ans = ans.toFixed(4);
    }
    document.getElementById("equation").innerHTML = screenOut + "=";
    screenOut = ans.toString();
    document.getElementById("display").innerHTML = screenOut;
    wasEq = true;
}
