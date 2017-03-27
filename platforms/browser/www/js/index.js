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
// To Take Photo 

    function clearCache() {
      navigator.camera.cleanup();
    }
    var retries = 0;
    function onCapturePhoto(fileURI) {
        var win = function (r) {
            clearCache();
            retries = 0;
            alert('Done!');
        }
     
        var fail = function (error) {
            if (retries == 0) {
                retries ++
                setTimeout(function() {
                    onCapturePhoto(fileURI)
                }, 1000)
            } else {
                retries = 0;
                clearCache();
                alert('Ups. Something wrong happens!');
            }
        }
     
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
        options.mimeType = "image/jpeg";
        options.params = {}; // if we need to send parameters to the server request
        var ft = new FileTransfer();
        ft.upload(fileURI, encodeURI("http://rozaq.in/ntmc_api/upload.php"), win, fail, options);
    }
    function takephoto()
    {

        navigator.camera.getPicture(onCapturePhoto, onFail, { quality: 100,
        destinationType: Camera.DestinationType.DATA_URL
        });

        function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
            document.getElementById("ImageName").innerHTML = imageData;
        }
        function onFail(message) {
            
        }
        
    }
    
// End Take Photo
// TO Get From Gallery
    function cameraGetPicture() {
            navigator.camera.getPicture(onSuccessGet, onFailGet, { quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM
        });

        function onSuccessGet(imageURL) {
            var image = document.getElementById('myImage');
            image.src = imageURL;
        }
        function onFailGet(message) {
            
        }
    }
// End Get from Gallery
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

