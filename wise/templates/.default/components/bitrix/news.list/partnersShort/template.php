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
<div class="items-carousel">
	<?if(count($arResult['ITEMS']) >= 4):?>
		<a href="#" class="items-carousel__prev"></a><a href="#" class="items-carousel__next"></a>
	<?endif;?>
	<div class="items-carousel__holder">
		<ul data-infinite="true" data-slides="4" data-slides-1024="3" class="items-carousel__slider">
			<?foreach($arResult["ITEMS"] as $arItem):?>
                <li class="items-carousel__slide">
                    <img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="" width="216" height="131" class="items-carousel__brand"/>
                </li>
			<?endforeach;?>
		</ul>
	</div>
</div>
