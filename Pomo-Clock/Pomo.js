var sessionLen = 25,
    restLen = 5,
    sesShort = "",
    restShort = "",
    paused = 0,
    timeInterval = 0;

function addSession() {
    "use strict";
    sessionLen += 1;
    document.getElementById("sessionLength").innerHTML = sessionLen + ":00";
    document.getElementById("sessionShort").innerHTML = "";
}

function minusSession() {
    "use strict";
    if (sessionLen > 5) {
        sessionLen -= 1;
        sesShort = "";
    } else {
        sesShort = "You have to work for at least 5 minutes!";
    }
    document.getElementById("sessionLength").innerHTML = sessionLen + ":00";
    document.getElementById("sessionShort").innerHTML = sesShort;
}

function addRest() {
    "use strict";
    restLen  += 1;
    document.getElementById("restLength").innerHTML = restLen + ":00";
    document.getElementById("restShort").innerHTML = "";
}

function minusRest() {
    "use strict";
    if (restLen > 2) {
        restLen -= 1;
        restShort = "";
    } else {
        restShort = "You have to rest for at least 2 minutes!";
    }
    document.getElementById("restLength").innerHTML = restLen + ":00";
    document.getElementById("restShort").innerHTML = restShort;
}

function timeRemaining(endTime) {
    "use strict";
    var remaining = (endTime - new Date()) / 1000,
        remainformatted = (Math.floor(remaining.toFixed() / 60.0))
            + ":" + ("0" + (remaining.toFixed(0) % 60)).slice(-2);
    return remainformatted;
}

function startTimer() {
    "use strict";
    document.getElementById("title").innerHTML = "Session";
    var endTime = new Date() - 0 + 60 * sessionLen * 1000;
    clearInterval(timeInterval);
    timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        var t = timeRemaining(endTime);
        document.getElementById("timeleft").innerHTML = t;
        if (t === "0:00" &&
                document.getElementById("title").innerHTML === "Session") {
            document.getElementById("title").innerHTML = "Rest";
            endTime = new Date() - 0 + 60 * restLen * 1000;
        }
    }
    updateClock();
}

function stopTimer() {
    "use strict";
    clearInterval(timeInterval);
}