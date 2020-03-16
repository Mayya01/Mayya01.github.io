<?php
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
header('Content-Type: application/json');
$res = array();
$res["STATUS"] = false;
$res["MESSAGE"] = "Произошла ошибка при удалении файла";

$temp = $_SESSION["TEST_DRIVE_FILES"];

foreach($temp as $kkey => $file){
    if($file["ID"] == $_REQUEST["FILE_ID"]){
        unset($temp[$kkey]);
        $res["STATUS"] = true;
    }
}

$_SESSION["TEST_DRIVE_FILES"] = array();
foreach($temp as $file){
    $_SESSION["TEST_DRIVE_FILES"][] = $file;
}

echo json_encode($res);