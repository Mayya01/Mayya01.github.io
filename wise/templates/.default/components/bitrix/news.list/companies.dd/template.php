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
<? if ($arResult['ITEMS']) : ?>
    <div class="companies-list-dd js-companies-list-dd">
        <div class="companies-list-dd__btn-wrap">
            <a class="companies-list-dd__btn" href="javascript:void(0);"><?= $arResult['NAME'] ?></a>
        </div>
        <div class="companies-list-dd__list-wrap">
            <div class="companies-list-dd__list">
                <? foreach ($arResult['ITEMS'] as $arItemsRow): ?>
                    <div class="companies-list-dd__row clearfix">
                        <? foreach ($arItemsRow as $arItem): ?>
                            <div class="companies-list-dd__company companies-list-dd-company">
                                <div class="companies-list-dd-company__icon-wrap">
                                    <div class="companies-list-dd-company__icon companies-list-dd-company__icon--<?= $arItem['PROPERTIES']['MENU_CLASS']['VALUE'] ?>"> </div>
                                </div>
                                <div class="companies-list-dd-company__link-wrap">
                                    <a class="companies-list-dd-company__link" target="_blank" href="<?= $arItem['PROPERTIES']['SITE_URL']['VALUE'] ?>"><?= $arItem['NAME'] ?></a>
                                </div>
                            </div>
                        <? endforeach ?>
                    </div>
                <? endforeach ?>
            </div>
        </div>
    </div>
<? endif ?>

