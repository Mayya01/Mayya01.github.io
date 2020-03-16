<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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

$arResult["ITEMS_CHUNKS"] = array_chunk($arResult["ITEMS"], 2);
$lastKey = key( array_slice( $arResult["ITEMS_CHUNKS"], -1, 1, TRUE ));
if(count($arResult["ITEMS_CHUNKS"][$lastKey]) < 2) {
	$arResult["ITEMS_CHUNKS"][$lastKey][] = $arResult["ITEMS"][0];
}