<?php
 include "db.php";
 if(isset($_POST['insert']))
 {
 $problem=htmlspecialchars($_POST['problem']);
 $category=$_POST['category'];
 $location=explode(",", $_POST['location']);
 $lat = $location[0];
 $lng = $location[1];
 $image='';
 
 $q=mysqli_query($con,"INSERT INTO work_order_mobile (pengaduan,sub_kategori_id,lat,lng,image) VALUES ('$problem','$category','$lat','$lng','$image')");
 if($q)
  echo "success";
 else
  echo "error";
 }
 ?>
