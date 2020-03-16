<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();


//Ограничиваем количество элементов
if($arParams['SECTIONS_COUNT'] && $arParams['SECTIONS_COUNT'] > 0){
	$i = 0;
	foreach ($arResult['SECTIONS'] as $key => $arSection)
	{
		if(++$i > $arParams['SECTIONS_COUNT'])
		{
			unset($arResult['SECTIONS'][$key]);
		}
	}
}
//Получаем поле "Цена от"
if(CModule::IncludeModule("iblock")) {
	
	foreach ($arResult['SECTIONS'] as $key => $arSection) {
		
		$arOrder = array('SORT' => 'ASC');
		$arFilter = array('ACTIVE'=>'Y','IBLOCK_ID'=>$arParams['IBLOCK_ID'], 'SECTION_ID'=>$arSection['ID']);
		$arSelectFields = array('ID','IBLOCK_ID', 'ACTIVE', 'NAME','PROPERTY_PRICE');
		$rsElements = CIBlockElement::GetList($arOrder, $arFilter, FALSE, FALSE, $arSelectFields);
		$prices = array();
		while ($arElement = $rsElements->GetNext()) {
			
			$prices[] = $arElement['PROPERTY_PRICE_VALUE'];
		}
		$minPrice = min($prices);
		if($minPrice > 0) {
			$arResult['SECTIONS'][ $key ]['MIN_PRICE_FORMATED'] = number_format($minPrice, 0, '', ' ');
		}
		
		
	}
}

//Рандомная сортировка результатов
if($arParams['RAND_SORT_ITEMS'] == 'Y'){
	
	function shuffle_assoc($list) {
		if (!is_array($list)) return $list;
		
		$keys = array_keys($list);
		shuffle($keys);
		$random = array();
		foreach ($keys as $key) {
			$random[$key] = $list[$key];
		}
		return $random;
	}
	
	$arResult['SECTIONS'] = shuffle_assoc($arResult['SECTIONS']);
}









