<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}
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
?>
<?

if (!empty($arParams['CUSTOM_DISCOUNT'][$arResult['VARIABLES']['SECTION_CODE']])) {
    $arParams['DISCOUNT_DATE'] = $arParams['CUSTOM_DISCOUNT'][$arResult['VARIABLES']['SECTION_CODE']];

}
$APPLICATION->IncludeComponent('bitrix:catalog.section', '', [
    'IBLOCK_ID'           => $arParams['IBLOCK_ID'],
    'SECTION_CODE'        => $arResult['VARIABLES']['SECTION_CODE'],
    'PROPERTY_CODE'       => $arParams['DETAIL_PROPERTY_CODE'],
    'SECTION_USER_FIELDS' => $arParams['SECTION_USER_FIELDS'],
    'DISCOUNT_DATE'       => $arParams['DISCOUNT_DATE']
], $component)
?>
<section class="section">
    <div class="content-center">
        <? include __DIR__ . '/variants.php'; ?>
        <h2 class="h1">Возможно вас заинтересуют другие наши курсы:</h2>
        <?
        $APPLICATION->IncludeComponent('bitrix:catalog.section.list', '', [
            'IBLOCK_ID'           => $arParams['IBLOCK_ID'],
            'SECTION_USER_FIELDS' => $arParams['SECTION_USER_FIELDS'],
            'NEWS_COUNT'          => 3,
            'VAR_CODE'            => $arResult['VARIABLES']['SECTION_CODE']
        ], $component);
        ?>
    </div>
</section>
