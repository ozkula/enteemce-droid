 $(document).ready(function()
 {
 	$.ajax({
	 type: "GET",
	 url: "http://rozaq.in/ntmc_api/display.php",
	 crossDomain: true,
	 cache: false,
	 success: function(result){
		 var result=$.parseJSON(result);
		 $.each(result, function(i, field){
		 	 var id=field.idworkordermobile;
			 var work_order_id=field.work_order_id;
			 var pengaduan=field.pengaduan;
			 var kategori=field.sub_kategori_id;
			 var lat=field.lat;
			 var long=field.lng;
			 var imagee=field.image;
			 var daterecieved=field.daterecieved;
			 var userid=field.user_mobile_id;
		 $("#dataview").append("<div class='mdl-cell mdl-cell--2-col-phone'><div class='demo-card-event mdl-card mdl-shadow--2dp'><div class='mdl-card--expand mdl-card__title'><h6>" + pengaduan + "</h6></div><div class='mdl-card--border mdl-card__actions'><span class='mdl-chip mdl-chip--contact'><span class='mdl-chip__contact mdl-color--green mdl-color-text--white'>R</span><span class=mdl-chip__text>"+ daterecieved +"</span></span></div></div></div>");
		 });
	 }
	 });
 });