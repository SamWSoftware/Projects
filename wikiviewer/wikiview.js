$(document).ready(function () {
    'use strict';
    $('#searchwiden').on('click', function () {
        $("#searchBox").show();
        $('.searchBtn').hide();
    });
    
    $('#doSearch').on('click', function () {
        var search4 = $(".searchTerm").val(),
            url = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=https%3A%2F%2Fen.wikipedia.org&srsearch=" + search4.split(" ").join("%20") + "&utf8=",
            win;

        if (search4.length === 0) {
            win = window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
            win.focus();
        }
         
        $('#searchBox').css('margin-top', '3vw');
        
        $.getJSON(url, function (data) {
            var res = data.query.search,
                i;
            for (i = 0; i < 10; i += 1) {
                $('.searchPage').append("<div class=\"result\"><h2>" + res[i].title + "</h2><p>" + res[i].snippet + "</p></div>");
            }
        });
    });
});

function createCORSRequest(method, url) {
    /* fn from https://www.html5rocks.com/en/tutorials/cors/ */
    'use strict';
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new xDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}