$(document).ready(function() {
 	var id=decodeURI(getUrlVars()["idworkordermobile"]);
	var work_order_id=decodeURI(getUrlVars()["work_order_id"]);
	var pengaduan=decodeURI(getUrlVars()["pengaduan"]);
	var kategori=decodeURI(getUrlVars()["kategori"]);
	var lat=decodeURI(getUrlVars()["lat"]);
	var lang=decodeURI(getUrlVars()["long"]);
	var image=decodeURI(getUrlVars()["image"]);
	var daterecieved=decodeURI(getUrlVars()["daterecieved"]);
	var dateend=decodeURI(getUrlVars()["dateend"]);
	var status=decodeURI(getUrlVars()["status"]);
	var userid=decodeURI(getUrlVars()["userid"]);
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
	var drpermonth = daterecievedspace[0].split("-");
	var drday = drpermonth[2];
	var dryear = drpermonth[0];
	if(1==drpermonth[1])var drmonth="Januari";else if(2==drpermonth[1])var drmonth="Februari";else if(3==drpermonth[1])var drmonth="Maret";else if(4==drpermonth[1])var drmonth="April";else if(5==drpermonth[1])var drmonth="Mei";else if(6==drpermonth[1])var drmonth="Juni";else if(7==drpermonth[1])var drmonth="Juli";else if(8==drpermonth[1])var drmonth="Agustus";else if(9==drpermonth[1])var drmonth="September";else if(10==drpermonth[1])var drmonth="Oktober";else if(11==drpermonth[1])var drmonth="November";else if(12==drpermonth[1])var drmonth="Desember";

	var dateendspace = dateend.split(" ");
	var depermonth = dateendspace[0].split("-");
	var deday = depermonth[2];
	var deyear = depermonth[0];
	if(1==depermonth[1])var demonth="Januari";else if(2==depermonth[1])var demonth="Februari";else if(3==depermonth[1])var demonth="Maret";else if(4==depermonth[1])var demonth="April";else if(5==depermonth[1])var demonth="Mei";else if(6==depermonth[1])var demonth="Juni";else if(7==depermonth[1])var demonth="Juli";else if(8==depermonth[1])var demonth="Agustus";else if(9==depermonth[1])var demonth="September";else if(10==depermonth[1])var demonth="Oktober";else if(11==depermonth[1])var demonth="November";else if(12==depermonth[1])var demonth="Desember";else if(00==depermonth[1])var demonth="0000";


	if ($.trim(image).length>0) {
		document.getElementById("imageHere").innerHTML = '<img src="img/content/'+image+'" width="100%" height="auto">';	
	} else
	{
		document.getElementById("imageHere").innerHTML = '';	
	}
    var citysplit = city.split(",");
    var getCity = citysplit[2];
    var getProvince = citysplit[3];
    
    document.getElementById("pengaduan").append(pengaduan);
    document.getElementById("iconKat").innerHTML = iconKat;
    document.getElementById("daterecieved").innerHTML = drday+"-"+drmonth+"-"+dryear+ '<br>'+daterecievedspace[1];
    document.getElementById("dateend").innerHTML = 'Waktu Selesai <br>'+deday+"-"+demonth+"-"+deyear+ '<br>'+dateendspace[1];
    document.getElementById("user").innerHTML = 'Pelapor <br><i>'+userid+'</i>';
            
            // Map
            navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000 });
        function onSuccess(position) {
        
        //Google Maps
        var myLatlng = new google.maps.LatLng(lat,lang);
        var mapOptions = {zoom: 17,center: myLatlng}
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var marker = new google.maps.Marker({position: myLatlng,map: map});
        }
        function onError(error) {
        alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
        }
        google.maps.event.addDomListener(window, 'load', onSuccess);

        

            // 
 });

        
        