<?

/**
 * Устанавливаем флаг добавления приставки "от" "doShowPrefix"
 * Устанавливаем цены программ
 */

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use \Bitrix\Main\Loader;

if(Loader::includeModule('iblock')) {

	$arIDs = [];
	$arSectionKeyEqual = [];
	$arElementEquals = [];

	foreach ($arResult['SECTIONS'] as $key => $arSection) {

		$arResult['SECTIONS'][ $key ]['PRICES'] = [];

		if($arSection['ELEMENT_CNT'] > 1) {
			$arResult['SECTIONS'][$key]['doShowPrefix'] = true;
		} else {
			$arResult['SECTIONS'][$key]['doShowPrefix'] = false;
			$arIDs[] = $arSection['ID'];
		}
		$arSectionKeyEqual[$arSection['ID']] = $key;
	}

	$arElementIDs = [];
	$arOrder = [
		'SORT' => 'ASC'
	];
	$arElementsFilter = [
		'ACTIVE'=>'Y',
		'IBLOCK_ID'=>$arParams['IBLOCK_ID'],
	];
	$arSelectFields = [
		'ID',
		'ACTIVE',
		'IBLOCK_SECTION_ID'
	];
	$arVariantsFilter = [
		'ACTIVE'=>'Y',
		'IBLOCK_CODE'=>EnvironmentHelper::getParam('variantyPostavok1sIBlockCode')
	];
	$arGroupBy = [
		'PROPERTY_PRODUCT'
	];

	$arVariantsSelectField = [
		'ID',
		'ACTIVE',
		'NAME',
		'PROPERTY_PRODUCT',
		'PROPERTY_PRICE',
		'PROPERTY_DISCOUNT_PRICE',
	];

	$rsElements = CIBlockElement::GetList(
		$arOrder,
		$arElementsFilter,
		false,
		false,
		$arSelectFields
	);
	while ($arElement = $rsElements->GetNext()) {
		$arElementIDs[] = $arElement['ID'];
		$arElementEquals[$arElement['ID']] = $arElement['IBLOCK_SECTION_ID'];
	}

	$arVariantsFilter['PROPERTY_PRODUCT'] = $arElementIDs;
	$rsVariants = CIBlockElement::GetList(
		$arOrder,
		$arVariantsFilter,
		$arGroupBy,
		false
	);

	while ($arVariants = $rsVariants->GetNext()){
		if(
			$arVariants['CNT'] > 1
			&& in_array($arVariants['PROPERTY_PRODUCT_VALUE'], $arIDs)
			&& isset($arSectionKeyEqual[$arVariants['PROPERTY_PRODUCT_VALUE']])
		) {
			$arResult['SECTIONS'][$arSectionKeyEqual[$arElementEquals[$arVariants['PROPERTY_PRODUCT_VALUE']]]]['doShowPrefix'] = true;
		}

	}

	$rsVariants = CIBlockElement::GetList(
		$arOrder,
		$arVariantsFilter,
		false,
		false,
		$arVariantsSelectField
	);

	while ($arVariants = $rsVariants->GetNext()) {
		if(!isset($arSectionKeyEqual[$arElementEquals[$arVariants['PROPERTY_PRODUCT_VALUE']]])){
			continue;
		}
		$key = $arSectionKeyEqual[$arElementEquals[$arVariants['PROPERTY_PRODUCT_VALUE']]];

		$arResult['SECTIONS'][ $key ]['PRICES'][ $arVariants['ID'] ] = str_replace(' ', '',  $arVariants['PROPERTY_PRICE_VALUE']);
		if (!empty($arVariants['PROPERTY_DISCOUNT_PRICE_VALUE'])) {
			$arResult['SECTIONS'][ $key ]['NEW_PRICES'][ $arVariants['ID'] ] = str_replace(' ', '',  $arVariants['PROPERTY_DISCOUNT_PRICE_VALUE']);
		}
	}

	foreach ($arResult['SECTIONS'] as $key => $arSection) {
		if(empty($arSection['PRICES'])) {
			$arResult['SECTIONS'][ $key ]['PRICES'][0] = str_replace(' ', '',  $arResult['SECTIONS'][$key]['UF_PRICE_LIST']);
		}

		if (count($arResult['SECTIONS'][ $key ]['NEW_PRICES'])>0) {
			$min_val_key = array_keys($arResult['SECTIONS'][ $key ]['NEW_PRICES'], min($arResult['SECTIONS'][ $key ]['NEW_PRICES']))[0];
			$arResult['SECTIONS'][ $key ]['NEW_PRICE'] = min($arResult['SECTIONS'][ $key ]['NEW_PRICES']);
			$arResult['SECTIONS'][ $key ]['MIN_PRICE'] = $arResult['SECTIONS'][ $key ]['PRICES'][$min_val_key];
		} else {
			$arResult['SECTIONS'][ $key ]['MIN_PRICE'] = min($arResult['SECTIONS'][ $key ]['PRICES']);
		}
	}
}
