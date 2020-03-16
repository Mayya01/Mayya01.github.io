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


if((count($arResult["ITEMS"]))%2 !== 0)
{ $arItemChunksCopy = $arResult["ITEMS"];
	$arResult["ITEMS"][] = array_shift($arItemChunksCopy);
}
$arResult["ITEMS_CHUNKS"] = array_chunk($arResult["ITEMS"], 2);
