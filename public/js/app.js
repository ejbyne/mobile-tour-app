var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function error(err) {
  alert('Error(' + err.code + '): ' + err.message);
};

function initialize(position) {

  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(latitude, longitude),
    scaleControl: true
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var infoWindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  var glass = 'img/glass.svg';
  var man = 'img/man.svg';

  var currentPositionMarker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude, longitude),
    map: map,
    icon: new google.maps.MarkerImage(man, null, null, null, new google.maps.Size(36, 36))
  });

  $.get( "/tweetinfo", function( data ) {
      var array = []
      console.log(data)
      data.forEach(function(tweet){
      // createMarker(tweet);
        array.push(new google.maps.LatLng(tweet[0],
                                    tweet[1]))
      });
      var pointArray = new google.maps.MVCArray(array);
      heatmap = new google.maps.visualization.HeatmapLayer({
        data: pointArray
      });
      heatmap.set('radius', 16);
      heatmap.set('opacity', 1);
      // heatmap.set('dissipating', true);
      heatmap.setMap(map);
    });

  // function createMarker(place) {
  //   var mposition = new google.maps.LatLng(place[0],
  //                                   place[1]);
  //   var marker = new google.maps.Marker({
  //     map: map,
  //     position: mposition
  //   });
  // };

  $.get('/mapinfo?latitude=' + latitude + '&longitude=' + longitude, function(data) {
    data.results.forEach(function(place) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(place.geometry.location.lat, place.geometry.location.lng),
        map: map,
        icon: new google.maps.MarkerImage(glass, null, null, null, new google.maps.Size(24,24))
      });

      google.maps.event.addListener(marker, 'click', function() {
        service.getDetails(place, function(result, status) {
          if (status != google.maps.places.PlacesServiceStatus.OK) {
            alert(status);
            return;
          }
         
          var name = result.name + '<br>';

          var address = result.vicinity + ' ' +
                        result.address_components[result.address_components.length-1].long_name + '<br>';

          var website = function() {
            if (result.website) {
              var text = '<a href="' + result.website + '">' + result.website + '</a>';
              return text;
            }
            else {
              return '';
            }
          };

          var openingHours = function() {
            if ( result.opening_hours) {
              var text = '<br>Opening Hours:<br>'
              result.opening_hours.weekday_text.forEach(function(day) {
                text += day + '<br>'
              });
              return text;
            }
            else {
              return '';
            }
          };

          var details = name +
                        address +
                        website() +
                        openingHours();
          infoWindow.setContent(details);
          infoWindow.open(map, marker);
        });
      });
    });
  });
}

navigator.geolocation.getCurrentPosition(initialize, error, options);
