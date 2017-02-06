$(document).ready(function(){
    function updateClock(){
        var d = new Date(),
            hours = d.getHours() * 360 / 12,
            mins = d.getMinutes() * 360/ 60,
            secs = d.getSeconds() * 360 / 60;
        $(".hour").css("transform", "rotate("+ hours + "deg)");
        $('.minute').css('transform', 'rotate(' + mins + 'deg)');
        $('.sec').css('transform', 'rotate(' + secs + 'deg)');
        
    };
    updateClock();
    setInterval(updateClock, 1000);
    
});

