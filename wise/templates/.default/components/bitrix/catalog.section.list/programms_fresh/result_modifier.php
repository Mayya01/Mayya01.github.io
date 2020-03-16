<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

if(CModule::IncludeModule("iblock")){
    $uf_name = Array("UF_NAME_LIST", "UF_ARENDA_PRICE_LIST");

    $arrFilter = $arParams['FILTER_VALUE']['ID'];
    if(!is_array($arrFilter))
        $arrFilter = array();
    elseif (isset($arrFilter['FACET_OPTIONS']) && count($arrFilter) == 1)
        unset($arrFilter['FACET_OPTIONS']);
	
    $sections = $arResult['SECTIONS'];
	$arResult['SECTIONS'] = array();
	
	foreach ($arrFilter as $key) {
		foreach ($sections as $k => $section) {
			if( $key == $section['ID'] ) {
			
				$arResult['SECTIONS'][$k] = $section;
				
				$uf_arresult = CIBlockSection::GetList(Array('SORT' => 'ASC'), Array('IBLOCK_ID' => $arParams['IBLOCK_ID'], 'ID' => $section['ID']), false, $uf_name);
				if ($uf_value = $uf_arresult->GetNext()):
					foreach ($uf_name as $uf) {
						$arResult['SECTIONS'][$k][$uf] = $uf_value[$uf];
					}
				endif;
			}
		}
	}
}
