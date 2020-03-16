<?

use \Bitrix\Main\Context;

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
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

<section class="section">
    <div class="content-center">
        <h1 class="h1 _before-subtitle">Центр обучения 1С</h1>
        <p class="section__subtitle"><?= \Bitrix\Main\Config\Option::get('wa.pricesettings', 'subheader') ?></p>
        <?
        $APPLICATION->IncludeComponent('wiseadvice:courses.filter', '', [
            'IBLOCK_ID'       => $arParams['IBLOCK_ID'],
            'SECTIONS_FILTER' => $arParams['SECTIONS_FILTER'],
            'ELEMENTS_FILTER' => $arParams['ELEMENTS_FILTER']
        ], $component);
        ?>
        <?
        $request = Context::getCurrent()->getRequest();
        if ($request->isAjaxRequest()) {
            $section_filter = $request->getPost($arParams['SECTIONS_FILTER']);
            $element_filter = $request->getPost($arParams['ELEMENTS_FILTER']);
        }
        $APPLICATION->IncludeComponent('bitrix:catalog.section.list', '', [
            'IBLOCK_ID'           => $arParams['IBLOCK_ID'],
            'SECTION_USER_FIELDS' => $arParams['SECTION_USER_FIELDS'],
            'SECTIONS_FILTER'     => $section_filter,
            'ELEMENTS_FILTER'     => $element_filter
        ], $component);
        ?>
    </div>
</section>

<?
$APPLICATION->IncludeComponent('wiseadvice:courses.get.discount.form', '', [
    'IBLOCK_ID'      => EnvironmentHelper::getParam('coursesIBlockID'),
    'ORDER_PAGE'     => '/obuchenie-1s/oplata-kursa',
    'DISCOUNT_DATE'  => $arParams['DISCOUNT_DATE'],
    'DISCOUNT_VALUE' => $arParams['DISCOUNT_VALUE']
], $component);
?>
<section class="section _pb43">
    <div class="content-center">
        <? include __DIR__ . '/variants.php'; ?>
    </div>
</section>