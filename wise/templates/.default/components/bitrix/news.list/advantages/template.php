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

<div class="twoCols-list clear">
	<?foreach($arResult["ITEMS"] as $arItem):?>
	<div class="twoCols-list__item">
		<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" class="twoCols-list-item__icon">
		<div class="twoCols-list-item__title"><?=$arItem['NAME']?></div>
		<div class="twoCols-list-item__text content-area"><?=$arItem["PREVIEW_TEXT"]?></div>
	</div>
	<?endforeach;?>
</div>




