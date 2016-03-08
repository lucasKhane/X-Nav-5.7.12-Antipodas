$(document).ready(function() {
  function getLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    alert("Your Latitude : " + latitude + " Your Longitude: " + longitude);
    var mapProp1 = {
    center:new google.maps.LatLng(latitude, longitude),
    zoom:15,
    };
    var map1 =new google.maps.Map(document.getElementById("map1"),mapProp1);
    var mapProp2 = {
    center:new google.maps.LatLng((latitude*-1), (180-longitude)),
    zoom:15,
    };
    var map1 =new google.maps.Map(document.getElementById("map2"),mapProp2);
  }

  function initMap(){
    navigator.geolocation.getCurrentPosition(getLocation);
  }

  if (!Modernizr.geolocation) {
    alert("No hay geolocalizacion");
    alert("Usamos polyfill");
  } else{
    initMap();
  }

});
