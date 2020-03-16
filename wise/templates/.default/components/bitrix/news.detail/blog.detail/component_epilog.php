<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
//$APPLICATION->AddChainItem(BlogHelper::getSectionName($arParams['SECTION']), $arParams['SECTION_URL']);
TagHelper::setPageTags(explode(', ',$arResult['TAGS'] ));

global $APPLICATION;
if($arResult['PRICE_LINK']){
	$APPLICATION->SetPageProperty("PRICE_LINK", $arResult['PRICE_LINK']);
}