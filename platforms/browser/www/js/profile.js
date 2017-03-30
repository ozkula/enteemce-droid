 $(document).ready(function()
 {
 	$("#profile_name").append('<h2 class="mdl-card__title-text" id="profile_name">Hi, '+ localStorage.getItem("nama") +'</h2>');

 	$.ajax({
	 type: "GET",
	 url: "http://202.67.14.247/ntmc_mobile/display.php?profile="+localStorage.getItem("id_user_mobile"),
	 crossDomain: true,
	 cache: false,
	 beforeSend: function( xhr ) {
    	$("#dataview").append('<div id="progressprofile" class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>');
  	 },
	 success: function(result){
	 	$("#progressprofile").hide();
		 var result=$.parseJSON(result);
		 $.each(result, function(i, field){
		 	 var id=field.idworkordermobile;
			 var work_order_id=field.work_order_id;
			 var pengaduan=field.pengaduan;
			 var kategori=field.sub_kategori_id;
			 var lat=field.lat;
			 var long=field.lng;
			 var image=field.image;
			 var daterecieved=field.daterecieved;
			 var dateend=field.dateend;
			 var status=field.status;
			 var userid=field.nama;
			 var city=field.city;

			 if (kategori == 10) {
			 	var iconKat = '<img src="img/balap.png" width="32px" height="auto">';
			 } else if (kategori == 11) {
			 	var iconKat = '<img src="img/kecelakaan.png" width="32px" height="auto">';
			 } else if (kategori == 12) {
			 	var iconKat = '<img src="img/kemacetan.png" width="32px" height="auto">';
			 } else if (kategori == 13) {
			 	var iconKat = '<img src="img/rambu.png" width="32px" height="auto">';
			 } else if (kategori == 14) {
			 	var iconKat = '<img src="img/calo.png" width="32px" height="auto">';
			 } else if (kategori == 15) {
			 	var iconKat = '<img src="img/pungli.png" width="32px" height="auto">';
			 } else if (kategori == 16) {
			 	var iconKat = '<img src="img/suap.png" width="32px" height="auto">';
			 } else if (kategori == 3) {
			 	var iconKat = '<img src="img/lain.png" width="32px" height="auto">';
			 } 
			 if (status == 4) {
			 	$("#dataview").append("<div class='mdl-cell mdl-cell--2-col-phone'><a href='item_detail.html?id="+id+"&work_order_id="+work_order_id+"&pengaduan="+pengaduan+"&kategori="+kategori+"&lat="+lat+"&long="+long+"&image="+image+"&daterecieved="+daterecieved+"&dateend="+dateend+"&city="+city+"&userid="+userid+"'>  <div class='demo-card-event mdl-card mdl-shadow--2dp'> <div class='mdl-card__title mdl-card--expand'> <h6>" + pengaduan +" </h6> </div><div class='mdl-card__actions' style='background: white;'>" + iconKat + " <span class='mdl-chip'> <span class='mdl-chip__text'>Telah Direspon</span> </span> </div></div></a></div>");
			 } else{
			 	$("#dataview").append("<div class='mdl-cell mdl-cell--2-col-phone'><a href='item_detail.html?id="+id+"&work_order_id="+work_order_id+"&pengaduan="+pengaduan+"&kategori="+kategori+"&lat="+lat+"&long="+long+"&image="+image+"&daterecieved="+daterecieved+"&dateend="+dateend+"&city="+city+"&userid="+userid+"'>  <div class='demo-card-event mdl-card mdl-shadow--2dp'> <div class='mdl-card__title mdl-card--expand'> <h6>" + pengaduan +" </h6> </div><div class='mdl-card__actions' style='background: white;'>" + iconKat + " </div></div></a></div>");
			 }
			 	
			 if ($.trim(image).length>0) {
			 	$("#dataview").append("<div class='mdl-cell mdl-cell--2-col-phone'><a href='item_detail.html?id="+id+"&work_order_id="+work_order_id+"&pengaduan="+pengaduan+"&kategori="+kategori+"&latlong="+lat+","+long+"&image="+image+"&daterecieved="+daterecieved+"&dateend="+dateend+"'> <div class='demo-card-event mdl-card mdl-shadow--2dp'> <div class='mdl-card__title mdl-card--expand'> <img src='img/lain.png' width='100%' height='auto'> </div><div class='mdl-card__actions' style='background: white;'> " + iconKat + " <span class='mdl-chip'> <span class='mdl-chip__text'>Telah Direspon</span> </span> </div></div></a></div>");
			 }
		 
		 });
	 }
	 });
 });