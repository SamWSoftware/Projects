$(document).ready(function () {
    'use strict';
    var lat, lon, temp,
        un = 0,
        sym = [' &#8451', ' &#8457'];
    
    function getWeather(lati, long) {
        var appid = "&APPID=0e499daa3df5cba5e647b7f0f0f8a5c8",
            unit = "&units=metric",
            url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lati + "&lon=" + long + appid + unit;
        $.getJSON(url, function (data) {
            var weather = data.weather[0].main,
                city = data.name;
            temp = data.main.temp.toFixed(0);
            temp = [temp, (temp * 1.8 + 32)];
            document.getElementById("location").innerHTML = city;
            document.getElementById("temperature").innerHTML = temp[0];
            document.getElementById("weather").innerHTML = weather;
            document.getElementById('picture').src = "http://climbingstrengthtraining.com/wp-content/uploads/2017/01/" + data.weather[0].icon + '.png';
        });
    }
    
    function success(pos) {
        var coords = pos.coords;
        getWeather(coords.latitude, coords.longitude);
    }
    
    $('.link').click(function () {
        un += 1;
        document.getElementById("temperature").innerHTML = temp[un % 2];
        document.getElementById("sym").innerHTML = sym[un % 2];
    });
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
    
});