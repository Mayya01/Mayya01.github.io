<?php 
foreach ($arResult as $key => &$arItem) {
	//print_r($arItem);
	if ($arItem["PARAMS"]["COLUMN"]=="left") {
		$arResult["LEFT"][] = $arItem;
	}
	if ($arItem["PARAMS"]["COLUMN"]=="right") {
		$arResult["RIGHT"][] = $arItem;
	}
}
?>