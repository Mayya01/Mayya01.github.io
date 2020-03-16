<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

if (empty($arResult))
	return;

/*
$item = $arResult['ITEMS'][0];
$arResult['ITEMS'][] = $item;
$arResult['ITEMS'][] = $item;
$arResult['ITEMS'][] = $item;
$arResult['ITEMS'][] = $item;
$arResult['ITEMS'][] = $item;

/*
$item = $arResult['ITEMS'][0];
$i=0;
$item1['DISPLAY_ACTIVE_FROM'] = $item['DISPLAY_ACTIVE_FROM'].'-'.(++$i);
$arResult['ITEMS'][] = $item1;
$item2['DISPLAY_ACTIVE_FROM'] = $item['DISPLAY_ACTIVE_FROM'].'-'.(++$i);
$arResult['ITEMS'][] = $item2;
$item3['DISPLAY_ACTIVE_FROM'] = $item['DISPLAY_ACTIVE_FROM'].'-'.(++$i);
$arResult['ITEMS'][] = $item3;
$item4['DISPLAY_ACTIVE_FROM'] = $item['DISPLAY_ACTIVE_FROM'].'-'.(++$i);
$arResult['ITEMS'][] = $item4;
$item5['DISPLAY_ACTIVE_FROM'] = $item['DISPLAY_ACTIVE_FROM'].'-'.(++$i);
$arResult['ITEMS'][] = $item5;

/*
$totalItems = count($arResult['ITEMS']);
$splitOn = ceil($totalItems/2);

if (isset($arResult['ITEMS']) && !empty($arResult['ITEMS']))
{
	$arResult['ITEMS'] = array_chunk($arResult['ITEMS'], $splitOn, true);
}
else
{
	$arResult['ITEMS'] = array();
}
*/
