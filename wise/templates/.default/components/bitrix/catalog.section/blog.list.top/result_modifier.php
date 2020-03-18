<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) { die(); } ?>
<?
foreach ($arResult['ITEMS'] AS $k=>$arItem) {
    $arResult['ITEMS'][$k]['PROPERTIES']['PublishLogoFile'] = CFile::GetFileArray($arItem['PROPERTIES']['PUBLISH_LOGO']['VALUE']);
}
?>