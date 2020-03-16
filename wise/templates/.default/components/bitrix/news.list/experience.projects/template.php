<?
/**
 * @var array $arResult
 * @var array $arParams
 *
 */

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();?>
<div class="projects-slider <?=$arParams['BACKGROUND_COLOR']?> <?= $arParams['SLIDER_CLASS']?>">
	<? if(!empty($arResult["ITEMS"])): ?>
	<div class="js-projects-slider">
		<? foreach ($arResult["ITEMS"] as $arItem): ?>
			<div class="projects-slider__slide">
				<a href="<?= $arItem["DETAIL_PAGE_URL"] ?>" class="projects-slider__top-section <?= $arItem["PROPERTIES"]["PROJ_OF_YEAR"]["VALUE"] == 'Да' ? '_winner' : ''?>">
					<div class="projects-slider__col _bordered">
						<img src="<?= $arItem["PREVIEW_PICTURE"]["SRC"] ?>" alt="<?= $arItem["NAME"] ?>" />
					</div>
					<div class="projects-slider__col">
						<div class="projects-slider__title"><?= $arItem["NAME"] ?></div>
						<div class="projects-slider__text"><?=$arItem["PROPERTIES"]["subtitle"]["~VALUE"]["TEXT"]?></div>
					</div>
				</a>
				<div class="projects-slider__bottom-section">
					<div class="projects-slider__col">
						<? if (count($arItem['PROPERTIES']['cats3']['~VALUE'])): ?>
							<div class="projects-slider__text">Мы внедрили:</div>
							<div class="projects-slider__title"><?=$arItem["integrateProgram"]?></div>
						<? endif; ?>
					</div>
					<div class="projects-slider__col">
						<? if (
						isset($arItem['PROPERTIES']['SHORT_DESCRIPTION_FOR_BLOCK']['~VALUE'])
						&& !empty($arItem['PROPERTIES']['SHORT_DESCRIPTION_FOR_BLOCK']['~VALUE'])
						&& isset($arItem['PROPERTIES']['ARM_FOR_BLOCK']['~VALUE'])
						&& !empty($arItem['PROPERTIES']['ARM_FOR_BLOCK']['~VALUE'])
						): ?>
                            <div class="projects-slider__text"><?= $arItem["PROPERTIES"]["SHORT_DESCRIPTION_FOR_BLOCK"]["~VALUE"] ?></div>
                            <div class="projects-slider__num"><?= $arItem["PROPERTIES"]["ARM_FOR_BLOCK"]["~VALUE"] ?><span>АРМ</span></div>
                        <? endif; ?>
					</div>
				</div>
			</div>
		<? endforeach; ?>
	</div>
	<?endif?>
</div>
