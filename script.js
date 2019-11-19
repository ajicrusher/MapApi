function initMap(){
	var directionsDisplay = new google.maps.DirectionsRenderer();
	var directionsService = new google.maps.DirectionsService();
	var map;
        map = new google.maps.Map(document.getElementById('map'),{
          center: {lat: -7.156576, lng: 112.655472},
          zoom: 12
        });
        directionsDisplay.setMap(map);
        var rute = function(){
        	clcrute(directionsService,directionsDisplay);
        document.getElementById('start').addEventListener('change', rute);
        document.getElementById('finish').addEventListener('change', rute);
      

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

}
function clcrute(directionsService,directionsDisplay){
	var start ='-7.229726, 112.742859';
	var end = '-7.606886, 112.237451';
	var request = {
		origin:start,
		destination:end,
		travelMode: google.maps.travelMode.DRIVING
	};
	directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
    });
}
