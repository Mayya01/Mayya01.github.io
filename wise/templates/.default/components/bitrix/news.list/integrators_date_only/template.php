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

<div class="items-carousel">
	<?if(count($arResult['ITEMS']) >= 3):?>
        <a href="#" class="items-carousel__prev"></a><a href="#" class="items-carousel__next"></a>
	<?endif;?>
    <div class="items-carousel__holder">
        <div data-infinite="true" data-slides="2" data-slides-1024="2" class="items-carousel__slider">
            <? foreach ($arResult["ITEMS_CHUNKS"] as $arItemChunk): ?>
                    <? foreach ($arItemChunk as $arItem): ?>
                        <div class="items-carousel__slide integrators-date-only">
                            <div class="plate-example__img-holder integrators-date-only__img">
                                <img src="<?= $arItem["PREVIEW_PICTURE"]["SRC"] ?>" alt="" class="plate-example__img"/>
                            </div>
                            <div class="plate-example-text integrators-date-only__text">
                                Сотрудничаем<br>с <?= $arItem["ACTIVE_FROM_YEAR"] ?> года.
                            </div>
                        </div>
                    <? endforeach; ?>
            <? endforeach; ?>
        </div>
    </div>
</div>
