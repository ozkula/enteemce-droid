<?php
 include "db.php";
 if(isset($_POST['login']))
 {
 $email=htmlspecialchars($_POST['email']);
 $password=htmlspecialchars($_POST['password']);
 $loginchek = mysqli_num_rows(mysqli_query($con,"SELECT * FROM user_mobile WHERE email = '$email' AND password = '$password'"));
 if ($loginchek != 0) {
 	echo "success";
 }
 else {
 	echo "failed";
 }
} 
 
 ?>
