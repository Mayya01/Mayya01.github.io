<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$minLentgh = 350;

foreach ($arResult['ITEMS'] as &$arItems) {
	$fullText = strip_tags($arItems['DETAIL_TEXT']);
	$croppedText = TruncateText($fullText, $minLentgh);
	$arItems['cropedDetailText'] = $croppedText;
}