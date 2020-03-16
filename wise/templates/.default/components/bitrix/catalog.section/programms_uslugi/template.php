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
// print_r("<pre>");
// print_r($arResult['ITEMS']);
// print_r("</pre>");
?>
<?php
	if (false === $arResult['PICTURE'])
	    $arResult['PICTURE'] = array(
	        'SRC' => $arCurView['EMPTY_IMG'],
	        'ALT' => (
	            '' != $arResult["IPROPERTY_VALUES"]["SECTION_PICTURE_FILE_ALT"]
	            ? $arResult["IPROPERTY_VALUES"]["SECTION_PICTURE_FILE_ALT"]
	            : $arResult["UF_NAME_LIST"]
	        ),
	        'TITLE' => (
	            '' != $arResult["IPROPERTY_VALUES"]["SECTION_PICTURE_FILE_TITLE"]
	            ? $arResult["IPROPERTY_VALUES"]["SECTION_PICTURE_FILE_TITLE"]
	            : $arResult["UF_NAME_LIST"]
	        )
	    );
?>
<div class="c-typical-products__products">
	<div class="product-list">
		<ul class="product-list__cols _with-content">
			<li class="product-list__item">
				<div class="product-plate _w-300 _w-400 _white">
					<div class="product-plate__img-holder">
						<img src="<?=$arResult["PICTURE"]["SRC"]?>" alt="<?=$arResult["PICTURE"]["ALT"]?>" class="product-plate__img">
					</div>
					<div class="product-plate__content _price">
						<div class="product-plate__caption h3">
						<a href="<?=$arResult['SECTION_PAGE_URL']?>" class="product-plate__link default-link"><?=$arResult["UF_NAME_LIST"]?></a>
						</div>
						<div class="product-plate__text"><?=$arResult["DESCRIPTION"]?></div>
					</div>
					<div class="product-plate__ui-holder _price">
						<div class="product-plate__price">от <?=$arResult["UF_PRICE_LIST"]?> руб</div>
						<a href="<?=$arResult["SECTION_PAGE_URL"]?>" class="product-plate__btn button">Узнать больше</a>
					</div>
				</div>
			</li>
		</ul>
		<div class="product-list__content content-area">
			<ul>
			<?php foreach ($arResult['ITEMS'] as $key => $arItem) { ?>
				<li>
					<strong><?=$arItem['NAME']?></strong>
					<?=$arItem["PROPERTIES"]['DESCRIPTION_LIST']['VALUE']?>
				</li>
			<?php }//end foreach ITEMS ?>
			</ul>
		<p><?=$arResult['UF_DESCRIPTION_AFTER']?></p>
		</div>
	</div>
</div>
