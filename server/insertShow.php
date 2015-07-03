<?php

include 'DB_class.php';

$postData = file_get_contents("php://input");
$request = json_decode($postData);

if(!empty($postData)){

    if(empty($_POST["country"])){
        $country="Netherlands";
    }else{
        $county=$request->country;

    }

@$showName = $request->name;
@$img = $request->img;
@$showDate = $request->showDate;
@$startTime = $request->showTime;
    @$link = $request->link;
@$endTime = $request->showEnd;
@$street = $request->street;
    @$city = $request->city;





    $address= str_replace(" ","+",$street)."+".$city;
    $geoLat = getLatLong("Lat", $address, $country);
    $geoLong = getLatLong("Long", $address, $country);


    if($geoLat !="" && $geoLong !=""){

        $mysqli->query("INSERT INTO `shows`(`name`, `img`, `link`, `showDate`, `startTime`, `endTime`, `geoLat`, `geoLong`) VALUES ('$showName','$img','$link','$showDate','$startTime','$endTime','$geoLat','$geoLong')");

    }else{

        echo "can't collect good geo data";

    }

}else{


    var_dump($request);

}

function getLatLong($type, $address, $country){

    $url = "http://maps.google.com/maps/api/geocode/json?address=$address&sensor=false&region=$country";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_PROXYPORT, 3128);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    $response = curl_exec($ch);
    curl_close($ch);
    $response_a = json_decode($response);
    $lat = $response_a->results[0]->geometry->location->lat;
    $long = $response_a->results[0]->geometry->location->lng;

    if($type=="Lat"){

        return $lat;

    }else{

        return $long;

    }
}