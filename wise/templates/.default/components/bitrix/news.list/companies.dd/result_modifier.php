<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

if (empty($arResult))
	return;

if (isset($arResult['ITEMS']) && !empty($arResult['ITEMS']))
{
	$arResult['ITEMS'] = array_chunk($arResult['ITEMS'], 3, true);
}
else
{
	$arResult['ITEMS'] = array();
}
