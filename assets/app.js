$( document ).ready(function() {

$('.add-minutes').click(function() {
    increaseTimerLength();
});

$('.reduce-minutes').click(function() {
    decreaseTimerLength();
});

$('.start-button').click(function() {
    clock.start();
});

$('.reset-button').click(function() {
    clock.stop();
});

var duration = 1500;

var clock = $('.show-minutes').FlipClock(1500, {
    autoStart: false,
    countdown: true,
    clockFace: 'MinuteCounter',
    callbacks: {
        stop: function() {
            duration = 1500;
            clock.setTime(1500);
        }
    }
});

function increaseTimerLength() {
    var modifier = duration + 60;
     clock.setTime(modifier);
    duration += 60;
}

function decreaseTimerLength() {
    var modifier = duration - 60;
     if (modifier >= 0) {
        clock.setTime(modifier);
     } else {
        return;
     }
    duration -= 60;
}
});
