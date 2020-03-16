<?php
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
header('Content-Type: application/json');
$res = array();
$res["STATUS"] = false;
$res["MESSAGE"] = "Произошла ошибка при загрузке файла";

if ($_FILES["NEED_UPDATE_FILE_TOUPLOAD"]) {
    if (!isset($_SESSION["NEED_UPDATE_FILES"])) {
        $_SESSION["NEED_UPDATE_FILES"] = array();
    }

    $idsArray = array();
    if(count($_SESSION["NEED_UPDATE_FILES"]) + count($_FILES["NEED_UPDATE_FILE_TOUPLOAD"]["name"]) > 4){
        $res["MESSAGE"] = "Можно загрузить не более 4 файлов";
    }else{
        foreach ($_FILES["NEED_UPDATE_FILE_TOUPLOAD"]["name"] as $kkey => $fileName) {
            $fileToSave = array();
            $fileToSave["name"] = $_FILES["NEED_UPDATE_FILE_TOUPLOAD"]["name"][$kkey];
            $fileToSave["type"] = $_FILES["NEED_UPDATE_FILE_TOUPLOAD"]["type"][$kkey];
            $fileToSave["tmp_name"] = $_FILES["NEED_UPDATE_FILE_TOUPLOAD"]["tmp_name"][$kkey];
            $fileToSave["error"] = $_FILES["NEED_UPDATE_FILE_TOUPLOAD"]["error"][$kkey];
            $fileToSave["size"] = $_FILES["NEED_UPDATE_FILE_TOUPLOAD"]["size"][$kkey];
            $fileToSave["MODULE_ID"] = "form";

            $fid = CFile::SaveFile($fileToSave, "form");

            if ($fid) {
                $res["STATUS"] = true;

                $curFile = array(
                    "ID" => $fid,
                    "NAME" => $fileToSave["name"],
                    "SIZE" => CommonHelper::formatSizeUnits($fileToSave["size"]),
                    "FILE_STR" => $fileToSave["name"] . " (" . CommonHelper::formatSizeUnits($fileToSave["size"]) . ")"
                );
                $idsArray[] = $curFile;
                $_SESSION["NEED_UPDATE_FILES"][] = $curFile;
            } else {
                $res["MESSAGE"] = "Не удалось сохранить файл";
            }
        }
        $res["FILE_ID"] = $_SESSION["NEED_UPDATE_FILES"];
    }
}

echo json_encode($res);