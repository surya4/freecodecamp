$(document).ready(function(){
getWeatherUpdate();
});

function getWeatherUpdate() {
  if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var url = 'https://query.yahooapis.com/v1/public/yql?q=select location.city,wind.speed, location.region,astronomy.sunrise,astronomy.sunset, atmosphere.humidity, item.link, item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="('+lat+', '+lon+')")&format=json';
  $.getJSON(url,function(data){
    //  var weatherData = JSON.parse(data.content);
          var city = data.query.results.channel.location.city;
          var temp = data.query.results.channel.item.condition.temp;
          var temp_c = ((temp - 32) * 5) / 9;
          var cond = data.query.results.channel.item.condition.text;
          var new_cond = removeCloudText(cond);
          backgroundChange(new_cond);
          var wind_speed = data.query.results.channel.wind.speed;
          var humidity = data.query.results.channel.atmosphere.humidity;
          var sun_rise = timeConvert(data.query.results.channel.astronomy.sunrise);
          var sun_set = timeConvert(data.query.results.channel.astronomy.sunset);
          // var back_img =

            // console.log(JSON.stringify(data));
              $(".city_name").html("<h3>Hello, "+city+"</h3></br>");
              $(".city_temp").html("<p><b>Current temp </b>: "+temp_c.toFixed(0)+"&#8451</p>");
              $(".city_humidity").html("<p><b>Humidity </b>: "+humidity+"%</p>");
              $(".city_weat").html("<p><b> Weather </b>: "+cond+"</p>");
              $(".wind").html("<p><b>Wind speed </b>: "+wind_speed+" mph</p>");
              $(".city_sunrise").html("<p><b>Sunrise time </b>: "+sun_rise+"</p>");
              $(".city_sunset").html("<p><b>Sunset time </b>: "+sun_set+"</p>");
            console.log();
    });
});
}}

function timeConvert(t) {
  var a = t.split(':');
  var b = a[1].split(' ');

    if (a[0] < 10) {
      a[0] = "0"+a[0];
    }
    if (b[0] < 10) {
      b[0] = ":0"+b[0];
    }
    if (b[0] > 10) {
      b[0] = ":"+b[0];
    }
    var time = a[0]+b[0]+" "+b[1];
    return time;
}

function removeCloudText(x) {
var p =   /\s/g.test(x);
if (p === true) {
  return x.split(' ').join('+');
} else {
  return x;
}}

function backgroundChange(img){
  var flicker_key = "190baab55a2096ba97bb2bf6d913f340";
  var flicker_url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+flicker_key;
  var tags = "&tags=" + img.toLowerCase();
  var jsonFormat = "&format=json&nojsoncallback=1";
  var f_url = flicker_url+tags + jsonFormat;

$.get(f_url,function(data){
  console.log(data.photos.photo.length);
  var num = Math.floor(Math.random() * (data.photos.photo.length));
  var photo = data.photos.photo[num];
  var photoUrl = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
  var img_url = "<img src=" + photoUrl + "/>";
  console.log(img_url);
  $('.container').css('background-image', 'url('+photoUrl+')');
  $('.container').css('background-size', '100%');
});


}
