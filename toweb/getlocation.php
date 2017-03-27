<?php 
$latitude = "-8.6725072";
$longitude = "115.1542218";
$geolocation = $latitude.','.$longitude;
$request = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='.$geolocation.'&sensor=false'; 
$file_contents = file_get_contents($request);
$json_decode = json_decode($file_contents);
if(isset($json_decode->results[0])) {
    $response = array();
    foreach($json_decode->results[0]->address_components as $addressComponet) {
        if(in_array('political', $addressComponet->types)) {
                $response[] = $addressComponet->long_name; 
        }
    }
    echo json_encode($response,true);
    
  }
?>
