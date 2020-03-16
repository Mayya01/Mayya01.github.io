<?


// Получаем предыдущий и следующий элементы
$arOrder = array($arParams['ELEMENT_SORT_FIELD']  => $arParams['ELEMENT_SORT_ORDER'],
                 $arParams['ELEMENT_SORT_FIELD2'] => $arParams['ELEMENT_SORT_ORDER2'],
);
$arFilter = array('ACTIVE'     => 'Y',
                  'IBLOCK_ID'  => $arParams['IBLOCK_ID'],
                  'SECTION_ID' => $arResult['IBLOCK_SECTION_ID'],
);
$arSelectFields = array('ID', 'ACTIVE', 'NAME', 'DETAIL_PAGE_URL');
$rsElements = CIBlockElement::GetList($arOrder, $arFilter, false,
    array('nPageSize' => 2, 'nElementID' => $arResult['ID']), $arSelectFields);
while ($arElement = $rsElements->GetNext()) {
    $arResult['NeighborElements'][] = $arElement;
    if ($arElement['ID'] != $arResult['ID'] && ($iCurrentRank == 0 || $arElement['RANK'] < $iCurrentRank)) {
        $arResult['BeforeElements'][] = $arElement;
    } elseif ($arElement['ID'] == $arResult['ID']) {
        $iCurrentRank = $arElement['RANK'];
    } else {
        $arResult['AfterElements'][] = $arElement;
    }
}
