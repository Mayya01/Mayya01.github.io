<?
/**
 * @var array $arResult
 * @var array $arParams
 *
 */

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();?>

<? if(!empty($arResult["ITEMS"])): ?>
<div class="_white experience-slider _small">
	<div class="js-experience-slider">
		<? foreach ($arResult["ITEMS"] as $arItem): ?>
		<div class="experience-slider__slide">
			<div class="experience-slider__img-holder">
				<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?= $arItem["NAME"] ?>" />
			</div>
			<div class="experience-slider__text">Сотрудничаем с <?= $arItem["PROPERTIES"]["PARTNER_START"]["VALUE"] ?></div>
		</div>
		<? endforeach; ?>
	</div>
</div>
<? endif; ?>
