var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener("backbutton", onBackKeyDown, false);
        getPosition();
        google.maps.event.addDomListener(window, 'load', initialize);
       // window.open(encodeURI('http://k-rudy.github.io/phonegap-twitter-timeline/?833719767106191360'), '_blank', 'location=no');

    }

};
 $(document).ready(function() {


 	var id=decodeURI(getUrlVars()["idworkordermobile"]);
	var work_order_id=decodeURI(getUrlVars()["work_order_id"]);
	var pengaduan=decodeURI(getUrlVars()["pengaduan"]);
	var kategori=decodeURI(getUrlVars()["kategori"]);
	var lat=decodeURI(getUrlVars()["lat"]);
	var lng=decodeURI(getUrlVars()["long"]);
	var image=decodeURI(getUrlVars()["image"]);
	var daterecieved=decodeURI(getUrlVars()["daterecieved"]);
	var dateend=decodeURI(getUrlVars()["dateend"]);
	var status=decodeURI(getUrlVars()["status"]);
	var userid=decodeURI(getUrlVars()["user_mobile_id"]);
	var city=decodeURI(getUrlVars()["city"]);
	

	if (kategori == 10) {
		var iconKat = '<img src="img/balap.png" width="32px" height="auto"><br>Balapan Liar';
	} else if (kategori == 11) {
		var iconKat = '<img src="img/kecelakaan.png" width="32px" height="auto"><br>Kecelakaan';
	} else if (kategori == 12) {
		var iconKat = '<img src="img/kemacetan.png" width="32px" height="auto"><br>Kemacetan';
	} else if (kategori == 13) {
		var iconKat = '<img src="img/rambu.png" width="32px" height="auto"><br>Rambu - Rambu';
	} else if (kategori == 14) {
		var iconKat = '<img src="img/calo.png" width="32px" height="auto"><br>Calo';
	} else if (kategori == 15) {
		var iconKat = '<img src="img/pungli.png" width="32px" height="auto"><br>Pungli';
	} else if (kategori == 16) {
		var iconKat = '<img src="img/suap.png" width="32px" height="auto"><br>Suap';
	} else if (kategori == 3) {
		var iconKat = '<img src="img/lain.png" width="32px" height="auto"><br>Lain - Lain';
	} 
	var daterecievedspace = daterecieved.split(" ");
	var dateendspace = dateend.split(" ");
	if ($.trim(image).length>0) {
		document.getElementById("imageHere").innerHTML = '<img src="img/content/'+image+'" width="100%" height="auto">';	
	} else
	{
		document.getElementById("imageHere").innerHTML = '';	
	}
    var citysplit = city.split(",");
    var getCity = citysplit[2];
    var getProvince = citysplit[3];
    var latlng = lat+','+lng;

    document.getElementById("pengaduan").append(pengaduan);
    document.getElementById("iconKat").innerHTML = iconKat;
    document.getElementById("daterecieved").innerHTML = daterecievedspace[0]+'<br>'+daterecievedspace[1];
    document.getElementById("dateend").innerHTML = 'Waktu Selesai <br>'+dateendspace[0]+'<br>'+dateendspace[1];
    document.getElementById("location").innerHTML = city;
    
    // Maps
    function initialize() {
  var myLatlng = new google.maps.LatLng(latlng);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">text</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Some text</b>, text' +

      '.</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'text'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

 
     
 });