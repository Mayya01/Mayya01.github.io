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
$this->setFrameMode(true);
?>
<? if ($arResult['ITEMS']) { ?>
    <div class="service-list-dynamic-filter__options clearfix">
        <div class="service-list-dynamic-filter__select-slick js-service-list-filter-ddslick" id="service-list-filter-ddslick"></div>
        <button class="service-list-dynamic-filter__btn service-list-dynamic-filter__btn--active js-filter-tag" data-group="all"><span class="service-list-dynamic-filter__btn-label">Все услуги</span></button>
        <? foreach ($arResult['ITEMS'] AS $aItem) {?>
            <button class="service-list-dynamic-filter__btn js-filter-tag" data-group="tagid<?=$aItem['ID']?>"><span class="service-list-dynamic-filter__btn-label"><?=$aItem['NAME']?></span></button>
        <? } ?>
    </div>

<? } ?>