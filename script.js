document.getElementById('placeSelect').addEventListener('change', function() {
    const selectedPlace = this.value;
    if (selectedPlace) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': selectedPlace }, function(results, status) {
            if (status === 'OK') {
                const location = results[0].geometry.location;
                const panorama = new google.maps.StreetViewPanorama(
                    document.getElementById('tour-container'), {
                        position: location,
                        pov: {
                            heading: 34,
                            pitch: 10
                        },
                        zoom: 1
                    });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    } else {
        document.getElementById('tour-container').innerHTML = '';
    }
});
