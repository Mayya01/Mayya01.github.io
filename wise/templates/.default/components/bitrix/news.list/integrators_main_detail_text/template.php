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

<div class="plate-slider plate-content__examples" style="border-bottom: none">
    <div class="plate-slider__slider">
		<? foreach ($arResult["ITEMS_CHUNKS"] as $arItemChunk): ?>
            <div class="plate-slider__slide">
				<? foreach ($arItemChunk as $arItem): ?>
                    <div class="plate-example__col">
                        <div class="plate-example__img-holder">
                            <img src="<?= $arItem["PREVIEW_PICTURE"]["SRC"] ?>" alt="" class="plate-example__img"/>
                        </div>
                        <div class="plate-example-text">
                            <?= !$arItem["DETAIL_TEXT_TYPE"] == "html"?'<p>':'' ?>
							<?= $arItem["DETAIL_TEXT"] ?>
							<?= !$arItem["DETAIL_TEXT_TYPE"] == "html"?'</p>':'' ?>
                        </div>
                    </div>
				<? endforeach; ?>
            </div>
		<? endforeach; ?>
    </div>
</div>
