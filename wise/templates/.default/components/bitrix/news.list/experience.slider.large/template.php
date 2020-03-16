<?
/**
 * @var array $arResult
 * @var array $arParams
 *
 */

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();?>

<? if(!empty($arResult["ITEMS"])): ?>
	<div class=" _white experience-slider  _equal-height">
		<div class="js-experience-slider-large">
			<? foreach ($arResult["ITEMS_CHUNKS"] as $arChunk): ?>
				<div class="experience-slider__slide">
					<? foreach ($arChunk as $arItem): ?>
						<div class="experience-slider__col">
							<div class="experience-slider__img-holder">
								<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?= $arItem["NAME"]?>"/>
							</div>
							<p class="experience-slider__text"><?=$arItem["PREVIEW_TEXT"]?></p>
						</div>
					<? endforeach; ?>
				</div>
			<? endforeach; ?>
		</div>
	</div>
<? endif; ?>
