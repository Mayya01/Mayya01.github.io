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
<?
if ($arResult['ITEMS']) {
?>

    <h2 class="wa-structure__h2 module-h2"><?=$arParams['EXT_HEADER']?></h2>
    <p class="lead"><?=$arParams['~EXT_TEXT']?></p>

    <ul class="wa-companies clearfix js-companies-section">
    <? foreach ($arResult['ITEMS'] AS $arItem) { ?>
        <li class="wa-companies__item">
            <a class="wa-companies__content" href="<?=$arItem['PROPERTIES']['SITE_URL']['VALUE']?>">
                <div class="wa-companies__link">
                    <span class="wa-companies__underlined-link"><?=$arItem['PROPERTIES']['TYPE_NAME']['VALUE']?></span>
                </div>

                <img class="wa-companies__img" src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" alt="<?=$arItem['NAME']?>">
            </a>
        </li>
    <? } ?>
    </ul>

<?
}
?>