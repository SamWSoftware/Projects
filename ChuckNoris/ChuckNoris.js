$(document).ready(function () {
    "use strict";
    var randomQuote;
    function newQuote() {
        var url = 'https://api.icndb.com/jokes/random?';
        $.getJSON(url, function (data) {
            randomQuote = data.value.joke;
            $('#quotetext').html(data.value.joke);

        });
    }
    
    newQuote();
    
    $('#tweetthis').on('click', function () {
        window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
    });
    
    $('#newQuote').on('click', function () {
        newQuote();
    });
    
});
