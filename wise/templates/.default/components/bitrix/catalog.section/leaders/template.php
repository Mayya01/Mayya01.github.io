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
<section class="wa-leaders">
    <div class="layout-center-wrapper">
        <div class="content-col">
            <h2 class="wa-leaders__h2 modulue-h2"><?=$arParams['EXT_HEADER']?></h2>
            <ul class="wa-leaders__list clearfix">
                <? foreach ($arResult['ITEMS'] AS $arItem) { ?>
                    <li>
                        <img src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" alt="<?=$arItem['NAME']?>">

                        <div class="wa-leaders__leader-name"><?=$arItem['NAME']?></div>
                        <div class="wa-leaders__leader-position"><?=$arItem['PROPERTIES']['POSITION']['VALUE']?></div>
                    </li>
                <? } ?>
            </ul>
        </div>
    </div>
</section>
<?
}
?>

