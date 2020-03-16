<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

if(CModule::IncludeModule("iblock")){
    $uf_name = Array("UF_PRICE_LIST", "UF_NAME_LIST");

    $arrFilter = $arParams['FILTER_VALUE'];
    if(!is_array($arrFilter))
        $arrFilter = array();
    elseif (isset($arrFilter['FACET_OPTIONS']) && count($arrFilter) == 1)
        unset($arrFilter['FACET_OPTIONS']);

    $arResultEx = $arResult;
    $arSortedSections = array();
    foreach ($arResultEx['SECTIONS'] as $key => $arSection) {
        if (!in_array($arSection['ID'], $arrFilter['ID'])) {
            unset($arResult['SECTIONS'][$key]);
            continue;
        }
        if($arParams['ID'] && !in_array($arSection['ID'],$arParams['ID'])){
            unset($arResult['SECTIONS'][$key]); // TODO: переписать на компонент с фильтром
        }else{
            $uf_arresult = CIBlockSection::GetList(Array("SORT" => "ASC"), Array("IBLOCK_ID" => $arParams['IBLOCK_ID'], "ID" => $arSection['ID']), false, $uf_name);
            if ($uf_value = $uf_arresult->GetNext()):
                foreach ($uf_name as $uf) {
                    $arResult['SECTIONS'][$key][$uf] = $uf_value[$uf];
                }
            endif;
        }
	
		/**
		 *  Получаем цены вариантов поставок
		 */
		$arOrder = array('SORT' => 'ASC');
		$arFilter = array('ACTIVE'=>'Y','IBLOCK_ID'=>$arParams['IBLOCK_ID'], 'SECTION_ID'=>$arSection['ID']);
		$arSelectFields = array('ID', 'ACTIVE');
		$rsElements = CIBlockElement::GetList($arOrder, $arFilter, FALSE, FALSE, $arSelectFields);
		while ($arElement = $rsElements->GetNext()) {
		
			$arOrderEx        = array('SORT' => 'ASC');
			$arFilterEx       = array(
				'ACTIVE'           => 'Y',
				'IBLOCK_CODE'      => EnvironmentHelper::getParam('variantyPostavok1sIBlockCode'),
				'PROPERTY_PRODUCT' => $arElement['ID'],
			);
			$arSelectFieldsEx = array('ID', 'ACTIVE', 'NAME', 'PROPERTY_PRICE', 'PROPERTY_DISCOUNT_PRICE');
			$rsElementsEx     = CIBlockElement::GetList($arOrderEx, $arFilterEx, false, false, $arSelectFieldsEx);
		
			if ($rsElementsEx->SelectedRowsCount()>0) {
				while ($el = $rsElementsEx->GetNext()) {
					$arResult['SECTIONS'][ $key ]['PRICES'][ $el['ID'] ] = str_replace(' ', '',  $el['PROPERTY_PRICE_VALUE']);
					if (!empty($el['PROPERTY_DISCOUNT_PRICE_VALUE'])) {
						$arResult['SECTIONS'][ $key ]['NEW_PRICES'][ $el['ID'] ] = str_replace(' ', '',  $el['PROPERTY_DISCOUNT_PRICE_VALUE']);
					}
				}
			}else{
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
		$sortingKey = array_search($arResult['SECTIONS'][ $key ]['ID'], $arrFilter['ID']);
		$arSortedSections[$sortingKey] = $arResult['SECTIONS'][ $key ];
    }
	
	ksort($arSortedSections);
	$arResult['SECTIONS'] = $arSortedSections;
    
}
?>