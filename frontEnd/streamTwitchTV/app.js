$(document).ready(function(){

  var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var userURL = "https://wind-bow.glitch.me/twitch-api/users/";
  var streamURL = "https://wind-bow.glitch.me/twitch-api/streams/";


  // for (var i in streamers) {
  $.each(streamers, function(i) {
    var url = streamURL+streamers[i];
    $.getJSON(url,function(data){
      console.log(url);
      if (data.stream === undefined) {
        var logo = none.jpg,
        name = "Account Removed";
        var html = '<div class="row row-streams offline" style="background-color:#b8cca6;"><div class="col-md-2"><img class="images" src='+logo+' alt="Logo"></div><div class="col-md-5">'+name+'</div></div>';
        $(".streams").append(html);
      } else if (data.stream === null) {
        var offurl = userURL+streamers[i];
        $.getJSON(offurl,function(info){
          var logo = info.logo,
          status = "Offline",
          name = info.display_name;
          if (logo === null) {
            logo = "ironman.jpg";
          }
          console.log(logo);
          var html = '<div class="row row-streams offline" style="background-color:#b8cca6;"><div class="col-md-2"><img class="images" src='+logo+' alt="Logo"></div><div class="col-md-5"><a href=https://www.twitch.tv/'+name+'>'+name+'</a></div><div class="col-md-5">'+status+'<div></div>';
          $(".streams").append(html);
        });
      } else {
        var logo = data.stream.channel.logo,
        status = "Online",
        name = data.stream.channel.display_name;
        if (logo === null) {
          logo = "ironman.jpg";
        }
        console.log(logo);
        var html = '<div class="row row-streams online" style="background-color:#4a5e82;"><div class="col-md-2"><img class="images" src='+logo+' alt="Logo"></div><div class="col-md-5"><a href=https://www.twitch.tv/'+name+'>'+name+'</a></div><div class="col-md-5">'+status+'<div></div>';
        $(".streams").append(html);
       }
    });
  });

  $('.all').click(function () {
    $('.row-streams').show();
  });

  $('.on').click(function () {
    $('.online').show();
    $('.offline').hide();
  });

  $('.off').click(function () {
    $('.offline').show();
    $('.online').hide();
  });

});
