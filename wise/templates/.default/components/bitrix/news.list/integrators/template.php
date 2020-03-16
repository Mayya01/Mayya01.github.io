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
	<?if(count($arResult['ITEMS']) >= 3):?>
        <a href="#" class="items-carousel__prev"></a><a href="#" class="items-carousel__next"></a>
	<?endif;?>
    <div class="items-carousel__holder">
        <ul data-infinite="true" data-slides="2" data-slides-1024="2" class="items-carousel__slider trust__list clear">
			<? foreach ($arResult["ITEMS_CHUNKS"] as $arItemChunk): ?>
				<? foreach ($arItemChunk as $arItem): ?>
                    <div class="items-carousel__slide">
                        <li class="trust-item">
                            <img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" class="trust-item__logo">
                            <div class="trust-item__text textarea">
                                <?=$arItem["DETAIL_TEXT"]?>
                            </div>
                        </li>
                    </div>
				<? endforeach; ?>
			<? endforeach; ?>
        </ul>
    </div>
</div>
