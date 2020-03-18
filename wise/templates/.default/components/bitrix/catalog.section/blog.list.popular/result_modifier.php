<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
} ?>
<?
$arTranslitParams = array(
    'replace_space' => '-',
    'replace_other' => '-',
);

foreach ($arResult['ITEMS'] as $k => $aItem) {

    /** Получаем рубрики блога */
    $aSelect = array('NAME', 'LIST_PAGE_URL', 'SECTION_PAGE_URL');
    $arSort = array('SORT' => 'ASC');
    $arFilter = array(
        'IBLOCK_ID' => $arParams['IBLOCK_ID'],
        'ID'        => $aItem['IBLOCK_SECTION_ID'],
    );
    $rsSections = CIBlockSection::GetList($arSort, $arFilter, false, $aSelect);
    while ($arSection = $rsSections->GetNext()) {
        $sListPageUrl = $arSection['LIST_PAGE_URL'];
        $arResult['ITEMS'][$k]['Section'][] = $arSection;
    }

    /** Получаем теги "Аудитории" */
    if (isset($aItem['DISPLAY_PROPERTIES']['AUDITORY']) && !empty($aItem['DISPLAY_PROPERTIES']['AUDITORY'])) {

        foreach ($aItem['DISPLAY_PROPERTIES']['AUDITORY']['LINK_ELEMENT_VALUE'] AS $aLabel) {
            $aLabel['URL'] = EnvironmentHelper::getParam('blogBasePath') . 'label/' . CUtil::translit($aLabel['NAME'],
                    'ru',
                    $arTranslitParams) . '/';
            $arResult['ITEMS'][$k]['Label'][] = $aLabel;
        }

    }
}
?>