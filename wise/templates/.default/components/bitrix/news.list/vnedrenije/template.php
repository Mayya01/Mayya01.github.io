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

<!-- Начало блока: Внедрение -->
<div class="c-prices__vnedrenye clear">
	<div class="content-center">
		<h2 class="vnedrenye__title h2">Заказать внедрение 1С</h2>
		<? foreach ( $arResult["ITEMS"] as $arItem ): ?>
		<div class="vnedrenye__item clear">
			<div class="r_col">
				<a class="vnedrenye__item__title" href="<?=$arItem['PROPERTIES']['TITLE_LINK']['VALUE']?>"><?=$arItem["NAME"]?></a>
				<div class="vnedrenye__item__text"><?=$arItem["PREVIEW_TEXT"]?></div>
			</div>
			<div class="l_col">
				<div class="vnedrenye__item__price"><?=$arItem['PROPERTIES']['price']['props']['UF_PRICE']?></div>
				<div class="vnedrenye__item__time"><?=$arItem['PROPERTIES']['SROK']['~VALUE']?></div>
				<a href="<?=$arItem['PROPERTIES']['price']['props']['UF_LINK']?>" onclick="setCallbackFormSource('')"  class="vnedrenye__item__order pupop"><?=$arItem['PROPERTIES']['NADPIS']['VALUE']?></a>
				<div class="vnedrenye__item__text">Оплата осуществляется после приемки Заказчиком результатов</div>
			</div>
		</div>
		<? endforeach; ?>
	</div>
</div>
<!-- Конец блока: Внедрение -->
