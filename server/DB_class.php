<?php


$mysqli = new mysqli('localhost', 'root', 'root', 'peneCorrida');

if ($mysqli->connect_errno) {
    printf("DB connect failed: %s\n", $mysqli->connect_error);
    exit;
}
