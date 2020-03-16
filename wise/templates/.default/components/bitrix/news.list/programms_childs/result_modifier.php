<?php

foreach($arResult["ITEMS"] as $key => &$arItem) {


	//Уберем из ссылки на детальную лишний префикс (для ЗУП)
	$arItem['VERSION'] = str_replace("ZUP-", "", $arItem['CODE']);
	$arResult["ITEMS"][$key]['DETAIL_PAGE_URL'] = str_replace($arItem['CODE'], $arItem['VERSION'], $arItem['DETAIL_PAGE_URL']);
	if($arItem['PROPERTIES']["SHORT_DESC"]["VALUE"]){
		$arResult["ITEMS"][$key]['DESCRIPTION'] = $arItem['PROPERTIES']["SHORT_DESC"]["VALUE"]["TEXT"];
	}

	if($arItem['PROPERTIES']["SHORT_NAME"]["VALUE"]){
		$arResult["ITEMS"][$key]['SHORT_NAME'] = $arItem['PROPERTIES']["SHORT_NAME"]["VALUE"];
	}


	//$arItem['PROPERTIES']["IMAGE_FOR_PREVIEW"]["VALUE"]);

	if ($arItem['PROPERTIES']["IMAGE_FOR_PREVIEW"]["VALUE"]) {
		$aFile = CFile::GetById($arItem['PROPERTIES']["IMAGE_FOR_PREVIEW"]["VALUE"])->Fetch();

		$aFile['SRC'] = CFile::GetPath($aFile['ID']);
		$aFile['ALT'] = $aFile['DESCRIPTION'];

		//echo "<pre>"; print_r($aFile); echo "</pre>";

	//	$arResult["ITEMS"][$key]['PICTURE'] = $arFile;
		$arResult["ITEMS"][$key]['SRC_PIC'] = $aFile['SRC'];


	}


	/**
	 *  Получаем цены вариантов поставок
	 */
		$arOrderEx        = array('SORT' => 'ASC');
		$arFilterEx       = array(
			'ACTIVE'           => 'Y',
			'IBLOCK_CODE'      => EnvironmentHelper::getParam('variantyPostavok1sIBlockCode'),
			'PROPERTY_PRODUCT' => $arItem['ID'],
		);
		$arSelectFieldsEx = array('ID', 'ACTIVE', 'NAME', 'PROPERTY_PRICE', 'PROPERTY_DISCOUNT_PRICE');
		$rsElementsEx     = CIBlockElement::GetList($arOrderEx, $arFilterEx, false, false, $arSelectFieldsEx);

		if ($rsElementsEx->SelectedRowsCount()>0) {
			while ($el = $rsElementsEx->GetNext()) {
				$arResult['ITEMS'][ $key ]['PRICES'][ $el['ID'] ] = str_replace(' ', '',  $el['PROPERTY_PRICE_VALUE']);
				if (!empty($el['PROPERTY_DISCOUNT_PRICE_VALUE'])) {
					$arResult['ITEMS'][ $key ]['NEW_PRICES'][ $el['ID'] ] = str_replace(' ', '',  $el['PROPERTY_DISCOUNT_PRICE_VALUE']);
				}
			}
		}else{
			$arResult['ITEMS'][ $key ]['PRICES'][0] = str_replace(' ', '',  $arResult['ITEMS'][$key]['UF_PRICE_LIST']);
		}

		if (count($arResult['ITEMS'][ $key ]['NEW_PRICES'])>0) {
			$min_val_key = array_keys($arResult['ITEMS'][ $key ]['NEW_PRICES'], min($arResult['ITEMS'][ $key ]['NEW_PRICES']))[0];
			$arResult['ITEMS'][ $key ]['NEW_PRICE'] = min($arResult['ITEMS'][ $key ]['NEW_PRICES']);
			$arResult['ITEMS'][ $key ]['MIN_PRICE'] = $arResult['ITEMS'][ $key ]['PRICES'][$min_val_key];
		} else {
			$arResult['ITEMS'][ $key ]['MIN_PRICE'] = min($arResult['ITEMS'][ $key ]['PRICES']);
		}




}
