<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
CModule::IncludeModule("iblock");
$arResult['CUSTOM_AJAX_MODE'] = $this->__component->arParams['CUSTOM_AJAX_MODE'] = isset($arParams['CUSTOM_AJAX_MODE']) ? $arParams['CUSTOM_AJAX_MODE'] : 'Y';
$arResult['PARAMS_HASH'] = md5($arParams . $this->GetName());
$this->__component->arResult['PARAMS_HASH'] = $arResult['PARAMS_HASH'];
$this->__component->SetResultCacheKeys(array('PARAMS_HASH'));
$arResult['AJAX'] = (isset($_REQUEST['AJAX']) && isset($_REQUEST['KEY']) && $_REQUEST['KEY'] == $arResult['PARAMS_HASH']) ? true : false;

$pageSize = $arParams["NEWS_COUNT"];
$nextPageCount = $arResult['NAV_RESULT']->NavPageNomer + 1;

$arSelect = Array("ID", "NAME", "DATE_ACTIVE_FROM");
$arFilter = Array("IBLOCK_ID"=>IntVal($arParams["IBLOCK_ID"]), "ACTIVE_DATE"=>$arParams["CHECK_DATES"], "ACTIVE"=>"Y");
$res = CIBlockElement::GetList(Array(), $arFilter, false, Array("nPageSize"=>$pageSize,"iNumPage" => $nextPageCount), $arSelect);
$arResult["NEXT_PAGE_SIZE"] = 0;
global $APPLICATION;
while($ob = $res->GetNext())
{
    $arResult["NEXT_PAGE_SIZE"]++;
}