<?php
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


$iCurrentRank = 0;
$arResult['BeforeElements'] = array();
$arResult['AfterElements'] = array();
$arResult['Company'] = array();

// Получаем предыдущий и следующий элементы
$arOrder = array($arParams['ELEMENT_SORT_FIELD'] => $arParams['ELEMENT_SORT_ORDER'], $arParams['ELEMENT_SORT_FIELD2'] => $arParams['ELEMENT_SORT_ORDER2']);
$arFilter = array('ACTIVE'=>'Y', 'IBLOCK_ID'=>$arParams['IBLOCK_ID'], 'SECTION_ID'=>$arResult['IBLOCK_SECTION_ID']);
$arSelectFields = array('ID', 'ACTIVE', 'NAME', 'DETAIL_PAGE_URL');
$rsElements = CIBlockElement::GetList($arOrder, $arFilter, FALSE, array('nPageSize'=>2, 'nElementID' =>$arResult['ID']), $arSelectFields);
while ($arElement = $rsElements->GetNext()) {
    $arResult['NeighborElements'][] = $arElement;
    if ($arElement['ID'] != $arResult['ID'] && ($iCurrentRank == 0 || $arElement['RANK']<$iCurrentRank) ) {
        $arResult['BeforeElements'][] = $arElement;
    } elseif ($arElement['ID'] == $arResult['ID']) {
        $iCurrentRank = $arElement['RANK'];
    } else {
        $arResult['AfterElements'][] = $arElement;
    }
}


// Получаем связанную компанию
if ($arResult['PROPERTIES']['COMPANY_LINK']['VALUE']) {

    $arOrder = array('SORT' => 'ASC');
    $arFilter = array(
        'ACTIVE'    => 'Y',
        'IBLOCK_ID' => EnvironmentHelper::getParam('allCompaniesIBlockId'),
        'ID'        => $arResult['PROPERTIES']['COMPANY_LINK']['VALUE']
    );
    $arSelectFields = array(
        'ID',
        'ACTIVE',
        'NAME',
        'PREVIEW_PICTURE',
        'PREVIEW_TEXT',
        'PROPERTY_SITE_URL',
        'PROPERTY_MENU_CLASS',
        'PROPERTY_TYPE_NAME',
        'PROPERTY_ADVANTAGES',
        'PROPERTY_PHONE',
        'PROPERTY_LEARN_MORE'
    );
    $rsElements = CIBlockElement::GetList($arOrder, $arFilter, false, false,
        $arSelectFields);
    while ($arElement = $rsElements->GetNext()) {
        $arElement['PREVIEW_PICTURE'] = CFile::GetFileArray($arElement['PREVIEW_PICTURE']);
        $arResult['Company'] = $arElement;

    }
}

