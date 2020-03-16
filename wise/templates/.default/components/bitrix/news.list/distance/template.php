<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
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
<!-- Начало блока: Дистанционное обслуживание-->
<style>
    .c-prices__distance-block._white {
        background-color: #fff;
    }
</style>
<div class="c-prices__distance-block <?= $arParams["CSS_WRAPPER_MODIFIER"] ?>">
    <div class="content-center clear">
        <div class="distance-block__title h1">
            Мы используем новейшие технологии дистанционного обслуживания 1С
        </div>
        <?
        $first = '';
        $i = 0;
        ?>
        <div class="c-remote-maintenance__columns clearme">

            <? foreach ($arResult["ITEMS"] as $arItem): ?>
                <? if ($i == 0) {
                    $first = '_left';
                } else {
                    $first = '_right';
                } ?>
                <div class="c-remote-maintenance-col <?=$first?>">
                    <div class="c-remote-maintenance-col__title"><?= $arItem["NAME"] ?></div>
                    <?= $arItem["PREVIEW_TEXT"] ?>
                </div>
                <? $i++; ?>
            <? endforeach; ?>

        </div>
    </div>
</div>
<!-- Конец блока: Дистанционное обслуживание-->
