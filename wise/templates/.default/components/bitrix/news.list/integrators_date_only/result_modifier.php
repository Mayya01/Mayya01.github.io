<?php

foreach ($arResult["ITEMS"] as &$arItem) {
	$arItem["ACTIVE_FROM_YEAR"] = CDatabase::FormatDate( $arItem["ACTIVE_FROM"], "DD.MM.YYYY HH:MI:SS", "YYYY");
}

$arResult["ITEMS_CHUNKS"] = array_chunk($arResult["ITEMS"], 2);
