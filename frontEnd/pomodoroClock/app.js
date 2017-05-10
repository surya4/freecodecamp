$(document).ready(function(){
  var session = 25,
      breaks = 5,
      clock_min = session,
      clock_sec = 0,
      timeleft,
      sessionOn = false,
      timeleft = session*60;
      // var interval;

$(".break-time").html(breaks);
$(".session-time").html(session);
$(".clock").html(session);
// $(".time h2").hide();

$('.time').one('click', function () {
  sessionTimer();
    $(".time p").hide();
    // $(".time h2").show();
  sessionOn = true;
});

function sessionTimer() {
var intervalCount = setInterval(function () {
  if (timeleft > 0) {
    if (clock_min !== 0 && clock_sec ===0) {
      clock_sec = 59;
      clock_min = clock_min -1;;
      updateClock();
    } else {
      clock_sec = clock_sec -1;
      updateClock();
      console.log(clock_min+":"+clock_sec);
    }
  } else {
    $(".time h2").html("Break");
    clock_min = breaks;
    timeleft = breaks*60;
  }
},1000);
};



function updateClock() {
  var min = clock_min;
  var sec = clock_sec;
  if(min < 10)
      min = "0" + min;
    if(sec < 10)
      sec = "0" + sec;
  $('.clock').html(min+":"+sec);
};

$('.break-minus').click(function () {
  if (sessionOn === false && breaks > 0) {
    breaks = breaks - 1;
    $(".break-time").html(breaks);
  }
});
$('.break-plus').click(function () {
  if (sessionOn === false) {
    breaks = breaks + 1;
    $(".break-time").html(breaks);
  }
});
$('.session-minus').click(function () {
  if (sessionOn === false && session > 1) {
    session = session - 1;
    clock_min = session;
    $(".session-time").html(session);
    $('.clock').html(session);
  }
});
$('.session-plus').click(function () {
  if (sessionOn === false) {
    session = session + 1;
    clock_min = session;
    $(".session-time").html(session);
    $('.clock').html(session);
  }
});

});
