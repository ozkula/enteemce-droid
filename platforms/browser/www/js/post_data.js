 $(document).ready(function()
 {
	 $("#insert").click(function(){                
		 var problem=$("#problem").val();
		 var category=$("input[type='radio'][name='category']:checked").val(); 
		 var location = $('#locationSetInput').val();
		 var user_mobile_id = localStorage.getItem("id_user_mobile");
		 var dataString="problem="+problem+"&category="+category+"&location="+location+"&user_mobile_id="+user_mobile_id+"&insert=";
		 // If Send Empty Row
	 	if ($("#problem").val() == '') {
	 		alert('Fill the Report');
	 	} 
	 	if ($('input[type=radio][name="category"]:checked').size() == 0) {
	 		alert('Chose the category');
	 	} 
	 	if ($('#locationSetInput').val() == 0) {
	 		alert('Apps Cant get Location');
	 	}
		 if($.trim(problem).length>0 & $.trim(category).length>0 & $.trim(location).length>0)
		 {
			$.ajax({
			 		type: "POST",
			 		url:"http://202.67.14.247/ntmc_mobile/insert.php",
			 		data: dataString,
			 		crossDomain: true,
			 		cache: false,
			 		beforeSend: function(){ 
			 			$("#insert").val('Connecting...');
			 			
			 		},
			 		success: function(data){
			 			if(data=="success")
			 			{
							window.location.href = "profile.html";
			 			}
			 			else if(data=="error")
			 			{
			 				alert("error");
			 			}
			 		}
		 	});
		 }
		 return false;
	 });
 });