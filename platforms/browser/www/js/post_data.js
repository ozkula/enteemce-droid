 $(document).ready(function()
 {
	 $("#insert").click(function(){
		 var problem=$("#problem").val();
		 var category=$("input[type='radio'][name='category']:checked").val(); 
		 var location = $('#locationSetInput').val();
		 var dataString="problem="+problem+"&category="+category+"&location="+location+"&insert=";
		 
		 if($.trim(problem).length>0 & $.trim(category).length>0 & $.trim(location).length>0)
		 {
			$.ajax({
			 		type: "POST",
			 		url:"http://rozaq.in/ntmc_api/insert.php",
			 		data: dataString,
			 		crossDomain: true,
			 		cache: false,
			 		beforeSend: function(){ $("#insert").val('Connecting...');},
			 		success: function(data){
			 			if(data=="success")
			 			{
							window.location.href = "profile.html";
			 				$("#insert").val('submit');
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