<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

if(CModule::IncludeModule("iblock")){
    $uf_name = Array("UF_NAME_LIST", "UF_ARENDA_PRICE_LIST");

    $arrFilter = $arParams['FILTER_VALUE'];
    if(!is_array($arrFilter))
        $arrFilter = array();
    elseif (isset($arrFilter['FACET_OPTIONS']) && count($arrFilter) == 1)
        unset($arrFilter['FACET_OPTIONS']);

    $arResultEx = $arResult;
    foreach ($arResultEx['SECTIONS'] as $key => $arSection) {
        if (!in_array($arSection['ID'], $arrFilter['ID'])) {
            unset($arResult['SECTIONS'][$key]);
            continue;
        }
        if($arParams['ID'] && !in_array($arSection['ID'],$arParams['ID'])){
            unset($arResult['SECTIONS'][$key]); // TODO: переписать на компонент с фильтром
        }else{
            $uf_arresult = CIBlockSection::GetList(Array('SORT' => 'ASC'), Array('IBLOCK_ID' => $arParams['IBLOCK_ID'], 'ID' => $arSection['ID']), false, $uf_name);
            if ($uf_value = $uf_arresult->GetNext()):
                foreach ($uf_name as $uf) {
                    $arResult['SECTIONS'][$key][$uf] = $uf_value[$uf];
                }
            endif;
        }
    }
}
?>