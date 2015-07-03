<?php

include 'DB_class.php';



$result = $mysqli->query("SELECT * FROM shows");

$shows = [];
$show = "";

while($rows=$result->fetch_assoc()){


    $show=array("id"=>$rows["id"], "name"=>$rows["name"], "img"=>$rows["img"], "link"=>$rows["link"], "showDate"=>$rows["showDate"],
                "startTime"=>$rows["startTime"], "endTime"=>$rows["endTime"], "geoLat"=>$rows["geoLat"], "geoLong"=>$rows["geoLong"]);

    array_push($shows, $show);

}


echo json_encode($shows);