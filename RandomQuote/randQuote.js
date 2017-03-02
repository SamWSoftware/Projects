$(document).ready(function () {
    "use strict";
    var randomQuote;
    function newQuote() {
        var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
        $.getJSON(url, function (data) {
            randomQuote = data.quoteText;
            $('#quotetext').html(data.quoteText);
            if (data.quoteAuthor !== "") {
                $('#authorname').html(data.quoteAuthor);
            } else {
                $('#authorname').html("Unknown");
            }
        });
    }

    newQuote();

    $('#tweet').on('click', function () {
        window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
    });

    $('#newQuote').on('click', function () {
        newQuote();
    });
});
