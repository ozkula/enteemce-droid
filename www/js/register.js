$(document).ready(function()
{
    $("#register").click(function() {
        var nama = $("#nama").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var telepon = $("#telepon").val();
        var alamat = $("#alamat").val();
        var dataString = "nama=" + nama + "&email=" + email + "&password=" + password + "&telepon=" + telepon + "&alamat=" + alamat + "&register=";
        
        if ($.trim(nama).length>0 & $.trim(email).length>0 & $.trim(password).length>0 & $.trim(telepon).length>0 & $.trim(alamat).length>0) 
        {            
            $.ajax({
                type: "POST",
                url: "http://202.67.14.247/ntmc_mobile/register.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function() {
                    $("#register").val('Connecting...');
                },
                success: function(data) {
                    if (data == "success") {
                        alert("Thank you for Registering with us! you can login now");
                        window.location.href = "login.html";
                    } else if (data = "exist") {
                        alert("Hey! You alreay has account! you can login with us");
                        window.location.href = "login.html";
                    } else if (data = "failed") {
                        alert("Something Went wrong");
                    }
                }
            });
        }
        return false;
    });
});