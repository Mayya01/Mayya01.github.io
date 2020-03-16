<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
CModule::IncludeModule("iblock");

$blogDetail = new BlogDetail($arResult);
$arResult = $blogDetail
	->formatDate()
	->getVideoPicture()
    ->getElement();

$isTags = false;
foreach($arResult['arTags'] as $arTag){
    if($arTag) $isTags = true;
}
$arResult["IS_TAGS"] = $isTags;
if($arResult['PROPERTIES']['PRICE_LINK']['VALUE']){
	$APPLICATION->SetPageProperty("PRICE_LINK", $arResult['PROPERTIES']['PRICE_LINK']['VALUE']);
}

$arResult['showCounter'] = $arResult['SHOW_COUNTER'] + 10500;



if($arResult['TAGS']){
	$arResult['arTags'] = explode(",",$arResult['TAGS']);
}






