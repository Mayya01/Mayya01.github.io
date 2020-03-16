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
<?php foreach ($arResult['ITEMS'] as $key => $arItem) { ?>
	<div class="product-plate _w-300 _w-400">
		<div class="product-plate__img-holder">
			<img src="<?=$arItem['PROPERTIES']['PICTURE_LIST']['VALUE']['SRC']?>" alt="<?=$arItem['PROPERTIES']['PICTURE_LIST']['VALUE']['ALT']?>" class="product-plate__img">
		</div>
		<div class="product-plate__content _price">
			<div class="product-plate__caption h3">
				<a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="product-plate__link default-link"><?=$arItem['PROPERTIES']['NAME_LIST']['VALUE']?></a>
			</div>
			<div class="product-plate__text"><?=$arItem['PROPERTIES']['DESCRIPTION_LIST']['VALUE']['TEXT'] ?></div>
		</div>
		<div class="product-plate__ui-holder _price">
			<div class="product-plate__prices-holder">
				<div class="product-plate__price">от <?=$arItem['PROPERTIES']['PRICE_LIST']['VALUE'] ?> руб</div>
			</div>
				<a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="product-plate__btn button">Узнать больше</a>
		</div>
	</div>
<?php } //end foreach ITEMS ?>
