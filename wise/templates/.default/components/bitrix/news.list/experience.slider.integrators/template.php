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
<?if (!empty($arResult["ITEMS"])): ?>
<div class="js-experience-slider-gray-col">
	<? foreach ($arResult["ITEMS"] as $arItem): ?>
		<div class="experience-slider__slide">
			<div class="experience-slider__img-holder">
				<img src="<?= $arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?= $arItem["NAME"]?>" />
			</div>
			<p class="experience-slider__text"><?= $arItem["PREVIEW_TEXT"] ?></p>
			<p class="experience-slider__text"><?= $arItem["DETAIL_TEXT"] ?> </p>
		</div>
	<? endforeach; ?>
</div>
<? endif; ?>
