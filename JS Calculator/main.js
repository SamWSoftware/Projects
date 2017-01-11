var screenOut = " ";
var wasEq = false;

function enterDigit(x) {
    'use strict';
    // if x is operator
    if (screenOut.slice(-1) === "." && '+-*/'.indexOf(x) !== -1) {
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
    document.getElementById("output").innerHTML = screenOut;
}

function clearScreen() {
    'use strict';
    screenOut = " ";
    document.getElementById("output").innerHTML = "...";
    document.getElementById("equation").innerHTML = "...";
}

function getEquals() {
    'use strict';
    if (screenOut.slice(-1) === ".") {
        return;
    }
    var ans = eval(screenOut);
    if (ans.toString().length >= 10) {
        ans = ans.toFixed(3);
    }
    document.getElementById("equation").innerHTML = screenOut + "=";
    screenOut = ans.toString();
    document.getElementById("output").innerHTML = screenOut;
    wasEq = true;
}