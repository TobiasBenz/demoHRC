AFRAME.registerComponent('emitevents', {
    init: function () {
        // Do something when component first attached.
        var marker = this.el;

        marker.setAttribute('emitevents', 'true');
        marker.addEventListener('markerFound', function () {
            var markerId = marker.id;
            console.log('markerFound', markerId);

        });
        marker.addEventListener('markerLost', function () {
            var markerId = marker.id;
            console.log('markerLost', markerId);

        });
    }
});

AFRAME.registerComponent('registerevents', {
    init: function () {
        // Do something when component first attached.
        var marker = this.el;

        marker.setAttribute('emitevents', 'true');
        marker.addEventListener('markerFound', function () {
            var markerId = marker.id;
            console.log('markerFound', markerId);

        });
        marker.addEventListener('markerLost', function () {
            var markerId = marker.id;
            console.log('markerLost', markerId);

        });
    }
});