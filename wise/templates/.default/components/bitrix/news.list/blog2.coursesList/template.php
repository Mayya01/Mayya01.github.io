<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
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
/** @var CBitrixComponent $component */ ?>

<? if (count($arResult["ITEMS"])): ?>
	
	<h2>Обучение 1С</h2>
<!--	<div class="product-cards-slider">-->
		<div class="product-cards product-cards--three-columns product-cards--transformed-on-mobile js-product-card-slider">
	
	
	<? foreach ($arResult["ITEMS"] as $key => $arItem): ?>
		<?
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		?>
			<div class="product-card">
				<div class="product-card__top-section">
					<img src="<?= $arItem['DISPLAY_PICTURE'] ?>" alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>" width="299" height="125">
				</div>
				<div class="product-card__wrapper">
					<div class="product-card__middle-section">
						<h3 class="product-card__title">
							<a href="<?= $arItem['DETAIL_PAGE_URL'] ?>" class="default-link"><?= $arItem['NAME'] ?></a>
						</h3>
						<p class="product-card__text"><?= $arItem['PREVIEW_TEXT'] ?></p>
					</div>
					<div class="product-card__bottom-section">
						<div class="product-card__price">от 3 300 руб.</div>
						<a href="#" class="button pupop">Узнать больше</a>
					</div>
				</div>
			</div>
	<? endforeach; ?>
		
		</div>
<!--	</div>-->
	<div class="blog__link-right">
		<a href="https://wiseadvice-it.ru/o-kompanii/blog/video/" class="default-link _no-border-bottom _arrowed-right">Посмотреть все курсы по 1С</a>
	</div>
<? endif; ?>

