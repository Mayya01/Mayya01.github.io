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
<ul class="wa-gallery clearfix">
    <? foreach ($arResult['ITEMS'] AS $aItem) {?>
    <li>
        <a class="wa-gallery__img-link js-fancybox-gallery" rel="team-gallery" href="<?=$aItem['PREVIEW_PICTURE']['SRC']?>">
            <img src="<?=$aItem['PREVIEW_PICTURE']['SRC']?>" alt="<?=$aItem['NAME']?>">

            <div class="wa-gallery__img-mask">
                <div class="wa-gallery__plus-icon"></div>
            </div>
        </a>
    </li>
<? } ?>

</ul>
<? } ?>