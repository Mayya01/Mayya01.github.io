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

$strSectionEdit = CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "SECTION_EDIT");
$strSectionDelete = CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "SECTION_DELETE");
$arSectionDeleteParams = array("CONFIRM" => GetMessage('CT_BCSL_ELEMENT_DELETE_CONFIRM'));
//print_r($arResult["SECTIONS"]);
?>
<?php if (0 < $arResult["SECTIONS_COUNT"]) { ?>
	<div class="c-typical-products__products">
	  	<div class="product-list">
			<ul class="product-list__cols <?=$arParams["CSS_WRAPPER_MODIFIER1"]?>">
				<?php foreach ($arResult["SECTIONS"] as $key => $arSection): ?>
				<li class="product-list__item">
					<div class="product-plate _w-300 _w-400 <?=$arParams["CSS_WRAPPER_MODIFIER2"]?>">
						<div class="product-plate__img-holder">
							<img src="<?=$arSection["PICTURE"]["SRC"]?>" alt="<?=$arSection["PICTURE"]["ALT"]?>" class="product-plate__img">
						</div>
						<div class="product-plate__content _price">
							<div class="product-plate__caption h3">
								<a href="<?=$arSection["SECTION_PAGE_URL"]?>" class="product-plate__link default-link"><?=$arSection["NAME"]?></a>
							</div>
							<div class="product-plate__text"><?=$arSection["DESCRIPTION"]?></div>
						</div>
						<div class="product-plate__ui-holder _price">
							<div class="product-plate__price">от <?=$arSection["UF_PRICE_LIST"]?> руб</div>
							<a href="<?=$arSection["SECTION_PAGE_URL"]?>" class="product-plate__btn button">Узнать больше</a>
						</div>
					</div>
				</li>
				<?php endforeach; ?>
			</ul>
		</div>
	</div>
<?php }//end if section count ?>