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

<div class="content__prices">
	<h2 class="prices__title">Стоимость обновления 1C</h2>
	<?foreach($arResult["ITEMS"] as $arItem):?>
	<div class="prices__item clear _mobile-change">
		<div class="first"><?=$arItem['NAME']?></div>
		<div class="t"></div>
		<div class="price">
            <span><?=$arItem["PROPERTIES"]["price"]['props']['UF_PRICE']?></span>
            <span class="b-compare-table__name">
                <span class="iconic-list__question">?</span>
                <span class="b-compare-table__tooltip">
                    <span><?=$arItem['PREVIEW_TEXT']?></span>
                </span>
            </span>
            <a href="<?=$arParams["OPEN_NEED_UPDATE_POPUP"]?'#need_update_form':$arItem["PROPERTIES"]["price"]['props']['UF_LINK']?>" class="pupop">Заказать</a>
        </div>
	</div>
	<?endforeach;?>
</div>
