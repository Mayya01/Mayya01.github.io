<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}
$arResult['Company'] = array();
$arResult['Service'] = array();

// Получаем связанную компанию
$arOrder = array('SORT' => 'ASC');
$arFilter = array(
    'ACTIVE' => 'Y',
    'IBLOCK_ID' => EnvironmentHelper::getParam('allCompaniesIBlockId'),
    'ID' => $arResult['UF_SERV_COMPANY']
);
$arSelectFields = array('ID', 'ACTIVE', 'NAME','PREVIEW_PICTURE', 'PREVIEW_TEXT',

                        'PROPERTY_SITE_URL',
                        'PROPERTY_MENU_CLASS',
                        'PROPERTY_TYPE_NAME',
                        'PROPERTY_ADVANTAGES',
                        'PROPERTY_PHONE',
                        'PROPERTY_LEARN_MORE'
);
$rsElements = CIBlockElement::GetList($arOrder, $arFilter, FALSE, FALSE, $arSelectFields);
while ($arElement = $rsElements->GetNext()) {
    $arElement['PREVIEW_PICTURE'] = CFile::GetFileArray($arElement['PREVIEW_PICTURE']);
    $arResult['Company'] = $arElement;
}


/** Переопределяем ссылку на внешний сайт для услуги, если есть именно для этой услуги, иначе используем УРЛ указанный у компании */
if (isset($arResult['PROPERTIES']['LINK_TO_SERVICE']['~VALUE']) && !empty($arResult['PROPERTIES']['LINK_TO_SERVICE']['~VALUE']) && $arResult['PROPERTIES']['LINK_TO_SERVICE']['~VALUE'] != NULL) {

    $arResult['Service']['LINK_TO_SERVICE'] = $arResult['PROPERTIES']['LINK_TO_SERVICE']['~VALUE'];
} else {

    $arResult['Service']['LINK_TO_SERVICE'] = $arResult['Company']['PROPERTY_SITE_URL_VALUE'];
}

