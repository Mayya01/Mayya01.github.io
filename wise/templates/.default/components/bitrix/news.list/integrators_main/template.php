<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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

<div class="js-experience-slider-large">
    <? foreach ($arResult["ITEMS"] as $arItem): ?>
        <div class="experience-slider__slide">
            <div class="experience-slider__col">
                <div class="experience-slider__img-holder">
                    <img src="<?= $arItem["PREVIEW_PICTURE"]["SRC"] ?>" alt="<?=$arItem["NAME"]?>" />
                </div>
            </div>
            <div class="experience-slider__col">
                <div class="experience-slider__text">
                    <?= !$arItem["DETAIL_TEXT_TYPE"] == "html"?'<p>':'' ?>
                    <?= $arItem["PREVIEW_TEXT"] ?>
                    <?= !$arItem["DETAIL_TEXT_TYPE"] == "html"?'</p>':'' ?>
                </div>
            </div>
        </div>
    <? endforeach; ?>
</div>

