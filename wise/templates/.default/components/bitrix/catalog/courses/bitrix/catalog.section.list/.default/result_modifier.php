<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

if (is_array($arParams['SECTIONS_FILTER']) && !in_array('Все', $arParams['SECTIONS_FILTER'])) {
    foreach ($arResult['SECTIONS'] as $key => $arSection) {
        if (!in_array($arSection['UF_COURSE_THEME'], $arParams['SECTIONS_FILTER'])) {
            unset($arResult['SECTIONS'][$key]);
        }

    }
}
if (is_array($arParams['ELEMENTS_FILTER']) && !in_array('Все', $arParams['ELEMENTS_FILTER'])) {
    foreach ($arResult['SECTIONS'] as $key => $arSection) {
        $rsElements = CIBlockElement::GetList([], [
            'IBLOCK_ID'           => $arParams['IBLOCK_ID'],
            'SECTION_ID'          => $arSection['ID'],
            'PROPERTY_TYPE_VALUE' => $arParams['ELEMENTS_FILTER'],
            'ACTIVE'              => 'Y'
        ]);
        if ($rsElements->SelectedRowsCount() == 0) {
            unset($arResult['SECTIONS'][$key]);
        }
    }
}

if ($arParams['NEWS_COUNT'] > 0) {
    foreach ($arResult['SECTIONS'] as $key => $arSection) {
        if ($arSection['CODE'] == $arParams['VAR_CODE']) {
            unset($arResult['SECTIONS'][$key]);
        }
    }
    $arResult['SECTIONS'] = array_slice($arResult['SECTIONS'], 0, 3);
}
