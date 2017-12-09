// @ts-check @ignore $

$(document).ready(() => {
  let duration = 1500;

  const clock = $('.show-minutes').FlipClock(1500, {
    autoStart: false,
    countdown: true,
    clockFace: 'MinuteCounter',
    callbacks: {
      stop() {
        duration = 1500;
        clock.setTime(1500);
      }
    }
  });

  function increaseTimerLength() {
    const modifier = duration + 60;
    clock.setTime(modifier);
    duration += 60;
  }

  function decreaseTimerLength() {
    const modifier = duration - 60;
    if (modifier >= 0) {
      clock.setTime(modifier);
    } else {
      return;
    }
    duration -= 60;
  }


  $('.add-minutes').click(() => {
    increaseTimerLength();
  });

  $('.reduce-minutes').click(() => {
    decreaseTimerLength();
  });

  $('.start-button').click(() => {
    clock.start();
  });

  $('.reset-button').click(() => {
    clock.stop();
  });
});
