<?php
 include "db.php";
 if(isset($_POST['register']))
 {
 $nama=htmlspecialchars($_POST['nama']);
 $email=htmlspecialchars($_POST['email']);
 $password=htmlspecialchars($_POST['password']);
 $telepon=htmlspecialchars($_POST['telepon']);
 $alamat=htmlspecialchars($_POST['alamat']);
 $checkuser = mysqli_num_rows(mysqli_query($con,"SELECT * FROM user_mobile WHERE email = '$email'"));
 if ($checkuser != 0) {
     echo "exist";
 } else {
    $q=mysqli_query($con,"INSERT INTO user_mobile (nama,email,password,telepon,alamat) VALUES ('$nama','$email','$password','$telepon','$alamat')");
     if($q)
      echo "success";
     else
      echo "failed";
     }   
 }
 
 ?>
