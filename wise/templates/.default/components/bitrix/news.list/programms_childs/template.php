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
/** @var CBitrixComponent $component */
$this->setFrameMode(true);


?>
<pre><?//print_r($arResult)
	?></pre>
<?if ($arResult['ITEMS']) {?>
	<?php if(!$arParams['NO_SHOW_H2']) echo '<div class="h3">Проект выполнен на базе программ</div>'; ?>
	<div class="c-typical-products__products">
		<div class="product-list">
			<ul class="product-list__cols">
				<?

				foreach ($arResult['ITEMS'] as &$arItem) {
					//TODO:добавить эти строки для news.list
					// $this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
					// $this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete,
					// 	$arSectionDeleteParams);

					?>
					<li class="product-list__item">
						<div class="product-plate _w-300 _w-400 <?= $arParams['CLASS'] ?>">

							<div class="product-plate__img-holder">
								<? if ($arItem['SRC_PIC']) { ?>
									<img src="<?= $arItem['SRC_PIC'] ?>"
										 alt="<?= $arItem['PICTURE']['ALT'] ?>" class="product-plate__img">
								<? } ?>
							</div>
							<div class="product-plate__content _price">
								<div class="product-plate__caption h3">
									<a href="<?= $arItem['DETAIL_PAGE_URL'] ?>"
									   class="product-plate__link default-link"><?= $arItem['SHORT_NAME'] ?></a>
								</div>
								<div class="product-plate__text"><?= $arItem['DESCRIPTION'] ?></div>
							</div>
							<div class="product-plate__ui-holder _price">
								<? if(!empty($arItem['NEW_PRICE'])): ?>
									<div class="product-plate__prices-holder">
										<del class="product-plate__old-price">
											<span><?= count($arItem['PRICES'])>1?"от":"" ?>&nbsp;<?= number_format($arItem['MIN_PRICE'], 0, ',', ' '); ?>&nbsp;руб</span>
										</del>
										<div class="product-plate__price">
											<?= count($arItem['PRICES'])>1?"от":"" ?>&nbsp;<?= number_format($arItem['NEW_PRICE'], 0, ',', ' '); ?>&nbsp;руб
											<span class="discounts-label">-<?= $arItem['NEW_PRICE']/($arItem['MIN_PRICE']/100) ?>%</span>
										</div>
									</div>
								<? else: ?>
									<div class="product-plate__prices-holder">
										<div class="product-plate__price">
											<?= count($arItem['PRICES'])>1?"от":"" ?>&nbsp;<?= $arItem['MIN_PRICE']?number_format($arItem['MIN_PRICE'], 0, ',', ' '):$arItem['UF_PRICE_LIST']; ?>&nbsp;руб.
										</div>
									</div>
								<? endif; ?>

								<a href="<?= $arItem['DETAIL_PAGE_URL'] ?>" class="product-plate__btn button">Узнать больше</a>
							</div>
						</div>
					</li>
				<? } ?>
			</ul>
		</div>
	</div>
	<?

}
?>
