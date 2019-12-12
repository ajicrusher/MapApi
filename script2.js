function initMap(){
	var map;
        map = new google.maps.Map(document.getElementById('map'),{
          center: {lat: -7.156576, lng: 112.655472},
          zoom: 12
        });
// Functi untuk decoding level encoding polyline 
function decodeLevels(encodedLevelsString) {
  var decodedLevels = [];
  for (var i = 0; i < encodedLevelsString.length; ++i) {
    var level = encodedLevelsString.charCodeAt(i) - 63;
    decodedLevels.push(level);
  }
 
  return decodedLevels;
}
    var markers = [
    	['makam sunan bonang',-6.893694, 112.063070],
    	['masjid agung tuban',-6.894553, 112.063745],
    	['makam sunan giri',-7.171895, 112.628980],
    	['makam maulana malik ibrahim',-7.159829, 112.656435],
    	['masjid sunan ampel',-7.229726, 112.742859],
    	['masjid muhammad cheng hoo',-7.251990, 112.746830],
    	['wisata sendang duwur',-6.881265, 112.346356],
    	['makam mbah alun',-7.087578, 112.406164],
    	['makam mbah kholil',-7.041669, 112.723334],
    	['makam gusdur',-7.606886, 112.237451],
    	['masjid namira',-7.152314, 112.408530],
    	];

      var jarak = ['90'];
    var infowindow = new google.maps.InfoWindow(), marker, i; // kita buat beberapa variabel untuk keperluan looping.
 
    for (i = 0; i < markers.length; i++) {  // loop sebanyak size dari array
    pos = new google.maps.LatLng(markers[i][1], markers[i][2]); 
    marker = new google.maps.Marker({
        position: pos,
        map: map
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(markers[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
    }
    var bounds = new google.maps.LatLngBounds(); // diluar looping
		bounds.extend(pos); // di dalam looping
		map.fitBounds(bounds); // setelah looping

    var str="plai@ei~jTjDeCldu@wkmBmjAsjDoaVaaLjvc@ayBbjCyWbidArnbBohjCz`a@ulAqiv@nww@kev@";
    var array = google.maps.geometry.encoding.decodePath(str);
    var levels = decodeLevels("BBBBBBBBBBB");

    /* buat parameter dari polyline seperti warna dan ketebalan garis */
    var Poly = new google.maps.Polyline({
      path: array,
      levels: levels,
      strokeColor: 'F21111',
      strokeOpacity: 1.0,
      strokeWeight: 5
    });
  /* gambarkan polyline di peta */
    Poly.setMap(map);

      google.maps.event.addListener(Poly, 'click', function() {jarak.open(map); });

}
