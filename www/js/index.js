var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener("backbutton", onBackKeyDown, false);
        getPosition();
        
       // window.open(encodeURI('http://k-rudy.github.io/phonegap-twitter-timeline/?833719767106191360'), '_blank', 'location=no');

    }

};

app.initialize();
// To Get Device Location
function getPosition() {

   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
    
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {
    
        var showInput = document.getElementById('locationSetInput');
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        showInput.value = position.coords.latitude  + ',' + position.coords.longitude;
        
   }

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}
// End Get Device Location
// Back Button PRess
function onBackKeyDown(e) {
      e.preventDefault();
        navigator.notification.confirm(
            'Are you sure you want to exit?!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Confirm exit',           // title
            ['Yes','No']     // buttonLabels
        );
        function onConfirm(buttonIndex) {
            if (buttonIndex == 1) {
                navigator.app.exitApp();
            }
        }

}

