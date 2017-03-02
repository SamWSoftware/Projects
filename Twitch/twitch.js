$(document).ready(function () {
    'use strict';
    var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404"],
        urlBase = 'https://wind-bow.gomix.me/twitch-api/streams/',
        i;

    for (i = 0; i < streamers.length; i += 1) {
        $.getJSON(urlBase + streamers[i], function (data) {
            console.log(data);
            if (data.stream) {
                console.log('adding to steaming list');
                $('.users').prepend('<div class="user online"><div class="name"><h2>' + data.stream.channel.display_name + '</h2></div> <div class="status"> <a href=' + data.stream.channel.url + ' target="_blank"><h3>Online</h3></a></div> <div class="game"> <h3>' + data.stream.channel.game + '</h3></div> <div class="description"><h4>' + data.stream.channel.status + '</h4></div></div>');
            } else {
                var name = data._links.self.split('/');

                $('.users').append('<div class="user offline"><div class="name"><h2>' + name[name.length-1] + '</h2></div> <div class="status"><h3>Offline</h3></div></div>' );
            }
        });
    }

    $('#streaming').click(function (){
        $('.offline').hide();
        $('#all').removeClass('selected');
        $('#streaming').addClass('selected');
    });

    $('#all').click(function () {
        $('.offline').show();
        $('#all').addClass('selected');
        $('#streaming').removeClass('selected');
    });
});


function streamerOutput(response) {
    'use strict';
    console.log(response);
}

function openLinkWindow(url) {
    'use strict';
    var win = window.open(url, '_blank');
    win.focus();
}
