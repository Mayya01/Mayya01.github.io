<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

$arResult['Section'] = array();
$arResult['Company'] = array();
$arResult['Items'] = array();
$arResult['Service'] = array();

/** Получаем данные об остальных услугах раздела */
$arOrder = array('SORT' => 'ASC');
$arFilter = array(
    'ACTIVE'     => 'Y',
    'IBLOCK_ID'  => $arParams['IBLOCK_ID'],
    'SECTION_ID' => $arResult['IBLOCK_SECTION_ID'],
);
$arSelectFields = array('ID', 'NAME', 'DETAIL_PAGE_URL');
$rsElements = CIBlockElement::GetList($arOrder, $arFilter, false, false,
    $arSelectFields);
while ($arElement = $rsElements->GetNext()) {
    $arResult['Items'][] = $arElement;
}


/** Получаем данные раздела */
$arSort = array('SORT' => 'ASC');
$arSelect = array(
    'NAME',
    'SECTION_PAGE_URL',
    'UF_SERV_SHORT_NAME',
    'UF_SERV_SEC_TAG',
    'UF_SERV_COMPANY',
    'UF_SERV_PROVIDED_BY',
    'UF_FULL_SERVICE_TEXT',
    'UF_HEADER_TEXT',
    'UF_SUBHEADER_TEXT',
    'UF_APPEAL_BY',
);
$arFilter = array(
    'IBLOCK_ID' => $arParams['IBLOCK_ID'],
    'ID'        => $arResult['IBLOCK_SECTION_ID'],
);
$rsSections = CIBlockSection::GetList($arSort, $arFilter, false, $arSelect);
while ($arSection = $rsSections->GetNext()) {
    $arResult['Section'] = $arSection;
}


/** Получаем связанную компанию */
$arOrder = array('SORT' => 'ASC');
$arFilter = array(
    'ACTIVE'    => 'Y',
    'IBLOCK_ID' => EnvironmentHelper::getParam('allCompaniesIBlockId'),
    'ID'        => $arResult['PROPERTIES']['COMPANY']['VALUE'],
);
$arSelectFields = array(
    'ID',
    'ACTIVE',
    'NAME',
    'PREVIEW_PICTURE',
    'PROPERTY_SITE_URL',
    'PROPERTY_MENU_CLASS',
    'PROPERTY_TYPE_NAME',
    'PROPERTY_ADVANTAGES',
    'PROPERTY_PHONE',
    'PROPERTY_LEARN_MORE',
);
$rsElements = CIBlockElement::GetList($arOrder, $arFilter, false, false,
    $arSelectFields);
while ($arElement = $rsElements->GetNext()) {
    $arElement['PREVIEW_PICTURE'] = CFile::GetFileArray($arElement['PREVIEW_PICTURE']);
    $arResult['Company'] = $arElement;
}

/** Получаем теги */
$arOrder = array('SORT' => 'ASC');
$arFilter = array(
    'ACTIVE'    => 'Y',
    'IBLOCK_ID' => EnvironmentHelper::getParam('servicesTagsIBlockId'),
    'ID'        => $arResult['PROPERTIES']['TAGS']['VALUE'],
);
$arSelectFields = array('ID', 'ACTIVE', 'NAME');
$rsElements = CIBlockElement::GetList($arOrder, $arFilter, false, false,
    $arSelectFields);
while ($arElement = $rsElements->GetNext()) {
    $arResult['Tags'][] = $arElement;
}


/** Переопрееделяем блок От первого лица, если есть именно для этой услуги */
if (isset($arResult['PROPERTIES']['APPEAL_BY']['VALUE']) && !empty($arResult['PROPERTIES']['APPEAL_BY']['VALUE'])) {

    $arResult['Appeal'] = $arResult['PROPERTIES']['APPEAL_BY']['VALUE'];
} elseif ($arResult['Section']['UF_APPEAL_BY']) {

    $arResult['Appeal'] = $arResult['Section']['UF_APPEAL_BY'];
}


/** Переопрееделяем блок Узнать больше, если есть именно для этой услуги */
if (isset($arResult['PROPERTIES']['LEARN_OUT_MORE']['~VALUE']) && !empty($arResult['PROPERTIES']['LEARN_OUT_MORE']['~VALUE'])) {

    $arResult['Company']['~PROPERTY_LEARN_MORE_VALUE']['TEXT'] = $arResult['PROPERTIES']['LEARN_OUT_MORE']['~VALUE'];
}

/** Переопределяем ссылку на внешний сайт для услуги, если есть именно для этой услуги, иначе используем УРЛ указанный у компании */
if (isset($arResult['PROPERTIES']['LINK_TO_SERVICE']['~VALUE']) && !empty($arResult['PROPERTIES']['LINK_TO_SERVICE']['~VALUE']) && $arResult['PROPERTIES']['LINK_TO_SERVICE']['~VALUE'] != NULL) {

    $arResult['Service']['LINK_TO_SERVICE'] = $arResult['PROPERTIES']['LINK_TO_SERVICE']['~VALUE'];
} else {

    $arResult['Service']['LINK_TO_SERVICE'] = $arResult['Company']['PROPERTY_SITE_URL_VALUE'];
}
