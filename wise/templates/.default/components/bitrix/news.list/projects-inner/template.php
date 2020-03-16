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
$this->setFrameMode(true);
?>
<? if (count($arResult['ITEMS'])): ?>
<div class="js-projects-slider">
    <?foreach($arResult['ITEMS'] as $arItem):?>
        <!-- Начало блока: Слайд плиточного контента-->
        <li class="plate-slider__slide">
            <div class="plate-slide">
                <? if ($arItem['PROPERTIES']['PROJ_OF_YEAR']['VALUE']) : ?>
                    <div class="label-year-winner label-year-winner--slider"></div>
                <? endif; ?>
                <a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="plate-slide__top">
                    <div class="plate-slide__left-col">
                        <img alt="" class="plate-slide__img" src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>">
                    </div>
                    <div class="plate-slide__right-col">
                        <div class="plate-slide__caption">
                            <?=$arItem['NAME']?>
                        </div>
                        <div class="plate-slide__text"><?=$arItem['PROPERTIES']['subtitle']['~VALUE']['TEXT']?></div>
                    </div>
                </a>
                <div class="plate-slide__bottom">
                    <div class="plate-slide__left-col">
                        <? if (count($arItem['PROPERTIES']['cats3']['~VALUE'])) {?>
                        <div class="plate-slide__text">
                            Мы внедрили:
                        </div>
                        <div class="plate-slide__caption">
                            <?=$arItem['integrateProgram']?>
                        </div>
                        <? } ?>
                    </div>
    
                    <div class="plate-slide__right-col">
                        <? if (
                            isset($arItem['PROPERTIES']['SHORT_DESCRIPTION_FOR_BLOCK']['~VALUE'])
                            && !empty($arItem['PROPERTIES']['SHORT_DESCRIPTION_FOR_BLOCK']['~VALUE'])
                            && isset($arItem['PROPERTIES']['ARM_FOR_BLOCK']['~VALUE'])
                            && !empty($arItem['PROPERTIES']['ARM_FOR_BLOCK']['~VALUE'])
                        ) { ?>
                        <div class="plate-slide__text _promo">
                            <?=$arItem['PROPERTIES']['SHORT_DESCRIPTION_FOR_BLOCK']['~VALUE']?>
                        </div>
                        <div class="plate-slide__num">
                            <?=$arItem['PROPERTIES']['ARM_FOR_BLOCK']['~VALUE']?><span>АРМ</span>
                        </div>
                        <? } ?>
                    </div>
                </div>
            </div>
            <!-- Конец блока: Слайд плиточного контента-->
            </li>
        <? endforeach; ?>
</div>
<? endif; ?>
