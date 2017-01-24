$(document).ready(function () {
    'use strict';
    $('#searchwiden').on('click', function () {
        $("#searchBox").show();
        $('.searchBtn').hide();
    });
    
    $('#doSearch').on('click', function () {
        var search4 = $(".searchTerm").val(),
            url = "https://en.wikipedia.org/w/api.php?action=query&list=search&indexpageids=&format=json&srsearch=" + search4.split(' ').join('%20') + "&utf8=&callback=?",
            win;

        if (search4.length === 0) {
            win = window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
            win.focus();
        }
         
        $('#searchBox').css('margin-top', '3vw');
        
        $('.result').remove();
        
        $.getJSON(url, function (data) {
            var res = data.query.search,
                i;
            console.log(res);
            for (i = 0; i < res.length; i += 1) {
                
                $('.searchPage').append('<a href="https://en.wikipedia.org/wiki/' + res[i].title.split(' ').join('_') + '"><div class="result"><h2>' + res[i].title + '</h2><p>' + res[i].snippet + '</p></div></a>');
            }
        });
    });
});
