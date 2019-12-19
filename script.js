function initMap(){
	var directionsDisplay = new google.maps.DirectionsRenderer();
	var directionsService = new google.maps.DirectionsService();
	var map;
        map = new google.maps.Map(document.getElementById('map'),{
          center: {lat: -7.156576, lng: 112.655472},
          zoom: 12
        });
        

    var jalan = [
            new google.maps.LatLng(-6.893694, 112.063070),
            new google.maps.LatLng(-6.881265, 112.346356),
            new google.maps.LatLng(-7.159829, 112.656435),
            new google.maps.LatLng(-7.087578, 112.406164),
            new google.maps.LatLng(-6.893694, 112.063070),
            new google.maps.LatLng(-7.087578, 112.406164),
            new google.maps.LatLng(-7.152314, 112.408530),
            new google.maps.LatLng(-7.171895, 112.628980),
            new google.maps.LatLng(-7.159829, 112.656435),
            new google.maps.LatLng(-7.041669, 112.723334),
            new google.maps.LatLng(-7.229726, 112.742859),
            new google.maps.LatLng(-7.251990, 112.746830),
            new google.maps.LatLng(-7.606886, 112.237451),
            new google.maps.LatLng(-6.893694, 112.063070)
    ];
    
    var jarak = [
            ['40 km',-6.884790, 112.264205],
            ['62 km',-6.938035, 112.409487],
            ['10 km',-7.124345, 112.533455],
            ['50 km',-7.016862, 112.280943],
            ['5 km',-7.110262, 112.407246],
            ['10 km',-7.152739, 112.413068],
            ['5 km',-7.166203, 112.641884],
            ['40 km',-7.094918, 112.693228],
            ['36 km',-7.170285, 112.736641],
            ['5 km',-7.240827, 112.744874],
            ['92 km',-7.372591, 112.573952],
            ['90 km',-7.283632, 112.158344]
    ];

    var markers = [
    	['makam sunan bonang',-6.893694, 112.063070],
    	['makam sunan giri',-7.171895, 112.628980],
    	['makam maulana malik ibrahim',-7.159829, 112.656435],
    	['masjid sunan ampel',-7.229726, 112.742859],
    	['masjid muhammad cheng hoo',-7.251990, 112.746830],
    	['wisata sendang duwur',-6.881265, 112.346356],
    	['makam mbah alun',-7.087578, 112.406164],
    	['makam mbah kholil',-7.041669, 112.723334],
    	['makam gusdur',-7.606886, 112.237451],
    	['masjid namira',-7.152314, 112.408530]
    	];
    var infowindow = new google.maps.InfoWindow(), jalan,bentukjalan,marker, i; // kita buat beberapa variabel untuk keperluan looping.
 
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
    var bentukjalan = new google.maps.Polyline({
    path: jalan,
    geodesic: true,
    strokeColor: 'F21111',
    strokeOpacity: 1.0,
    strokeWeight: 5
  });
        bentukjalan.setMap(map);

    for (i = 0; i < jarak.length; i++) {
      pos = new google.maps.LatLng(jarak[i][1], jarak[i][2]);
      var jlnwin = new google.maps.InfoWindow({
      content: jarak[i][0],
      position: pos,
      map: map
  });
      
}

    }
    
    	['makam mbah alun',-7.087578, 112.406164],
    	['makam mbah kholil',-7.041669, 112.723334],
    	['makam gusdur',-7.606886, 112.237451],
    	['masjid namira',-7.152314, 112.408530]
    	];
    var infowindow = new google.maps.InfoWindow(), jalan,bentukjalan,marker, i; // kita buat beberapa variabel untuk keperluan looping.
 
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
    var bentukjalan = new google.maps.Polyline({
    path: jalan,
    geodesic: true,
    strokeColor: 'F21111',
    strokeOpacity: 1.0,
    strokeWeight: 5
  });
        bentukjalan.setMap(map);

    for (i = 0; i < jarak.length; i++) {
      pos = new google.maps.LatLng(jarak[i][1], jarak[i][2]);
      var jlnwin = new google.maps.InfoWindow({
      content: jarak[i][0],
      position: pos,
      map: map
  });
      
}

    }
    
