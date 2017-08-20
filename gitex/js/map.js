function initMap() {
    var map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 6,
        center: {
            lat: 40,
            lng: -73
        }
    });

    var image = './images/marker.png';
    var beachMarker = new google.maps.Marker({
        position: {
            lat: 40.895,
            lng: -73.881
        },
        map: map,
        icon: image
    });
}