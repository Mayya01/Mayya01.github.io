<?php
foreach ($arResult["ITEMS"] as &$ITEM){
	$ITEM["IS_IT_HAS_TAGS"] = false;
	if(!empty($ITEM["TAGS"])){
		$ITEM["IS_IT_HAS_TAGS"] = true;
		$ITEM["TAGS"] = explode(",", $ITEM["TAGS"]);
	}
}


$arBlogElements = new BlogList($arResult['ITEMS']);
$arResult['FIRST_ITEM'] = $arResult['ITEMS'][0];


$arResult['ITEMS'] = $arBlogElements->formatTags()->formatDate()->resizePhotoCustom(296,166)->getYouTubeVideoId()->getElements();

$arResult['CURRENT_YEAR'] = BlogHelper::getYear($arResult['ITEMS'][0]['displayYear']);
$arResult['CURRENT_MONTH'] = BlogHelper::getMonth($arResult['ITEMS'][0]['monthNum']);

$arResult['TIMESTAMPS'] = BlogHelper::getArTimeStamps(array(
	'IBLOCK_ID'          => $arParams['IBLOCK_ID'],
	'ACTIVE'             => 'Y',
	'<=DATE_ACTIVE_FROM' => array(false, ConvertTimeStamp(false, "FULL"))
),
	$arResult['CURRENT_YEAR'],
	$arResult['CURRENT_MONTH']
);

$arResult['TIMESTAMPS'] = BlogHelper::formatArTimeStamps($arResult['TIMESTAMPS']);

$arBlogElements->distributeElementsByTimeStamps($arResult['TIMESTAMPS']);

