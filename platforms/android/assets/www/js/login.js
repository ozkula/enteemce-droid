$(document).ready(function()
{
$("#login").click(function() {
    var email = $("#email").val();
    var password = $("#password").val();
    var dataString = "email=" + email + "&password=" + password + "&login=";
    if ($.trim(email).length>0 & $.trim(password).length>0) {
        $.ajax({
            type: "POST",
            url: "http://202.67.14.247/ntmc_mobile/login.php",
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function() {
                $("#login").html('Try to Login...');
            },
            success: function(data) {
                var splitData = data.split(",");
                if (splitData[0] = "success") {
                    localStorage.setItem("login", "logged");
                    localStorage.setItem("id_user_mobile", splitData[1]);
                    localStorage.setItem("nama", splitData[2]);
                    localStorage.setItem("email", splitData[3]);
                    
                    window.location.href = "main.html";
                } else if (splitData[0] = "failed") {
                    alert("Login error");
                    $("#login").html('Login');
                }
            }
        });
    }
    return false;
});

});